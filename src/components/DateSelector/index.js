import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { styles } from './style';

const useStyles = makeStyles(styles);

export const DateSelector = ({
  name,
  label,
  defaultValue,
  onFocus,
  helperText,
  customColor,
  error,
  disabled,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const classes = useStyles({ customColor });

  useEffect(() => {
    if (defaultValue && !error) {
      setSelectedDate(defaultValue);
    }
  }, []);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        name={name}
        value={selectedDate}
        onChange={setSelectedDate}
        onAccept={onFocus}
        error={error}
        disabled={disabled}
        label={label}
        variant="dialog"
        format="MM/dd/yyyy"
        helperText={helperText}
        className={classes.root}
        InputProps={{
          disableUnderline: true,
          placeholder: 'MM/DD/YYYY',
          onFocus,
          classes: { input: classes.input },
        }}
        InputLabelProps={{
          disableAnimation: true,
          classes: { root: classes.label },
        }}
        InputAdornmentProps={{
          classes: { root: classes.adornment },
        }}
        DialogProps={{
          classes: { dialog: classes.dialog },
        }}
        FormHelperTextProps={{
          classes: { root: error ? classes.errorMessage : classes.hidden },
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

DateSelector.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  onFocus: PropTypes.func,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  customColor: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

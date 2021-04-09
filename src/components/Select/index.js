import React from 'react';
import PropTypes from 'prop-types';
import _isNil from 'lodash/isNil';
import ChevronDown from 'react-feather/dist/icons/chevron-down';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { componentStyles, inputStyles } from './style';

const useStyles = makeStyles(componentStyles);
const StyledInput = withStyles(inputStyles)(InputBase);

export const Select = ({
  options,
  name,
  label,
  defaultValue,
  onFocus,
  helperText,
  customColor,
  error,
  disabled,
}) => {
  const classes = useStyles({ customColor });
  const [value, setValue] = React.useState(
    _isNil(defaultValue) ? '' : defaultValue,
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl className={classes.root} error={error}>
      <InputLabel htmlFor="data_response_country" className={classes.label}>
        {label}
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleChange}
        IconComponent={ChevronDown}
        disabled={disabled}
        input={
          <StyledInput
            name={name}
            id="data_response_country"
            onFocus={onFocus}
          />
        }
        classes={{ icon: classes.icon, disabled: classes.disabled }}
      >
        {options.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </NativeSelect>
      {error && (
        <FormHelperText className={classes.errorMessage}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  name: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onFocus: PropTypes.func,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  customColor: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

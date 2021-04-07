import React from 'react';
import PropTypes from 'prop-types';
import MUITextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from './style';

export const useStyles = makeStyles(styles);

export const TextField = ({
  name,
  defaultValue,
  label,
  error,
  helperText,
  onFocus,
  disabled,
}) => {
  const classes = useStyles();

  return (
    <>
      <MUITextField
        name={name}
        defaultValue={defaultValue}
        label={label}
        error={error}
        disabled={disabled}
        variant="filled"
        helperText={helperText}
        onFocus={onFocus}
        className={classes.root}
        InputProps={{
          disableUnderline: true,
          classes: { input: classes.input },
        }}
        InputLabelProps={{
          disableAnimation: true,
          classes: { root: classes.label },
          shrink: error,
        }}
        FormHelperTextProps={{
          classes: { root: classes.errorMessage },
        }}
      />
    </>
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  onFocus: PropTypes.func,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

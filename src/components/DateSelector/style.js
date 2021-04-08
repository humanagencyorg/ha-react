const primaryColor = '#0078f5';
export const styles = {
  root: {
    width: '100%',

    '& .MuiInput-formControl': {
      marginTop: 0,
      backgroundColor: 'transparent',
    },

    '& .MuiFilledInput-root': {
      position: 'relative',
      backgroundColor: 'transparent',
    },

    '& .MuiFormLabel-root.Mui-focused': {
      transform: 'translate(16px, -12px)',
      fontSize: '12px',
      color: '#727278',
    },

    '& .MuiFormLabel-root.MuiFormLabel-filled': {
      transform: 'translate(16px, -12px)',
      fontSize: '12px',
    },

    '& .MuiFormLabel-root.Mui-error': {
      color: '#ff432e',
    },

    '& .MuiInputBase-root.Mui-error .MuiInputBase-input': {
      border: '1.5px solid #ff432e',
    },

    '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
      transform: 'translate(16px, -12px)',
      fontSize: '12px',
    },

    '& .MuiFormHelperText-root.Mui-error': {
      color: '#fff',
    },
  },
  input: {
    background: '#fff',
    padding: '20px 16px 6px',
    borderRadius: '8px',
    border: '1.5px solid',
    borderColor: '#fff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',

    '&:hover': {
      borderColor: '#fff',
    },

    '&:disabled': {
      '&:hover': {
        border: '1.5px solid',
        borderColor: '#fff',
      },
    },

    '&:focus': {
      background: '#fff',
      borderColor: primaryColor,
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    },
  },
  adornment: {
    position: 'absolute',
    right: '12px',

    '& .MuiIconButton-root': {
      padding: '6px',

      '&:hover': {
        color: '#fff',
        backgroundColor: primaryColor,
      },
    },

    '&.Mui-error .MuiFilledInput-input': {
      border: '1.5px solid #ff432e',
    },
  },
  dialog: {
    '& .MuiPickersCalendarHeader-iconButton': {
      width: 'auto',
    },
    '& .MuiPickersToolbar-toolbar': {
      backgroundColor: primaryColor,
    },
    '& .MuiPickersDay-daySelected': {
      backgroundColor: primaryColor,
    },
    '& .MuiPickersToolbarButton-toolbarBtn': {
      width: 'auto',
    },
    '& .MuiButtonBase-root:not(.MuiPickersDay-daySelected)': {
      '&:hover': {
        color: primaryColor,
      },
    },
    '& + .MuiDialogActions-root .MuiButton-textPrimary': {
      width: 'auto',
      color: primaryColor,
      '&:hover': {
        color: primaryColor,
      },
    },
  },
  label: {
    width: 'calc(100% - 64px)',
    fontSize: '1rem',
    lineHeight: 1.3,
    fontWeight: 500,
    color: '#727278',
    margin: '16px 0 8px',
    transform: 'translate(16px, -1px)',
    zIndex: 1,
    pointerEvents: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    transition: 'transform 0.2s, font-size 0.2s',

    '&.Mui-error': {
      transform: 'translate(16px, -12px)',
      fontSize: '12px',
    },
  },
  errorMessage: {
    position: 'absolute',
    top: '-10px',
    right: '6px',
    padding: '2px 8px',
    backgroundColor: '#ff432e',
    borderRadius: '6px',
    zIndex: 1,
  },
  hidden: {
    display: 'none',
  },
};

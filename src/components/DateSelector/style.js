const setCustomColor = ({ customColor }) =>
  customColor ? customColor : '#0078f5';

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
    borderColor: '#f2f2f2',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',

    '&:hover': {
      borderColor: '#f2f2f2',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: '#e6e6e6',
      '&:hover': {
        border: '1.5px solid',
        borderColor: '#f2f2f2',
      },
    },

    '&:focus': {
      background: '#fff',
      borderColor: setCustomColor,
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
        backgroundColor: setCustomColor,
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
      display: 'flex',
      height: '96px',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: setCustomColor,
    },
    '& .MuiPickersDay-daySelected': {
      backgroundColor: setCustomColor,
    },
    '& .MuiPickersToolbarButton-toolbarBtn': {
      width: 'auto',
    },
    '& .MuiButtonBase-root:not(.MuiPickersDay-daySelected)': {
      '&:hover': {
        color: setCustomColor,
      },
    },
    '& + .MuiDialogActions-root .MuiButton-textPrimary': {
      width: 'auto',
      color: setCustomColor,
      '&:hover': {
        color: setCustomColor,
      },
    },
    '& .MuiPickersToolbarText-toolbarTxt': {
      fontSize: '26px',
      lineHeight: '1.235',
      position: 'relative',
      color: '#fff',
    },
    '& h6.MuiPickersToolbarText-toolbarTxt::after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: '-24px',
      backgroundImage:
        'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"%3E%3Cpolyline points="6 9 12 15 18 9"%3E%3C/polyline%3E%3C/svg%3E\')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '20px',
      height: '20px',
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

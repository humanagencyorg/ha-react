export const componentStyles = {
  root: {
    marginBottom: '8px',

    '& .MuiInput-formControl': {
      marginTop: 0,
      backgroundColor: 'transparent',
    },

    '& .MuiFilledInput-root': {
      position: 'relative',
      backgroundColor: 'transparent',
    },

    '& .MuiFormLabel-root.Mui-focused': {
      color: '#727278',
    },

    '& .MuiFormLabel-root.Mui-error': {
      color: '#ff432e',
    },

    '& .MuiInputBase-root.Mui-error .MuiInputBase-input': {
      border: '1.5px solid #ff432e',
    },

    '& .MuiFormHelperText-root.Mui-error': {
      color: '#fff',
    },
    '& .MuiNativeSelect-select.MuiNativeSelect-select': {
      paddingRight: '44px',
    },
  },
  label: {
    width: 'calc(100% - 60px)',
    fontSize: '12px',
    lineHeight: 1.3,
    fontWeight: 500,
    color: '#727278',
    margin: '16px 0 8px',
    transform: 'translate(16px, -12px)',
    zIndex: 1,
    pointerEvents: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    transition: 'transform 0.2s, font-size 0.2s',
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
  icon: {
    marginRight: '16px',
  },
  disabled: {
    '&.MuiNativeSelect-select.Mui-disabled': {
      cursor: 'not-allowed',
      backgroundColor: '#e6e6e6',
    },
  },
};

export const inputStyles = {
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

    '&:focus': {
      background: '#fff',
      borderColor: '#0078f5',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
      borderRadius: '8px',
    },
  },
};

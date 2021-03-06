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
      borderColor: ({ customColor }) => (customColor ? customColor : '#0078f5'),
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    },
  },
  label: {
    fontSize: '1rem',
    lineHeight: 1.3,
    fontWeight: 500,
    margin: '16px 0 8px',
    color: '#727278',
    transform: 'translate(16px, -1px)',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: 'calc(100% - 32px)',
    transition: 'transform 0.2s, font-size 0.2s',
  },
  errorMessage: {
    position: 'absolute',
    top: '-10px',
    right: '-8px',
    padding: '2px 8px',
    backgroundColor: '#ff432e',
    borderRadius: '6px',
    zIndex: 1,
  },
  hidden: {
    display: 'none',
  },
};

import { styled } from '@mui/material/styles';
import { FormControl, InputBase, FormHelperText } from '@mui/material';

const AuthenticationInput = styled(InputBase)(({ theme }) => ({
  background: 'transparent',
  border: 'none',
  borderRadius: '0',
  fontWeight: 500,
  fontSize: '18px',
  '& input': {
    height: '50px',
    color: '#fff',
    background: 'transparent',
    '&:focus': {
      caretColor: `${theme.palette.red}`,
    },
    '&::placeholder': {
      opacity: '1',
    },
    '&:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 30px ${theme.palette.dark.main} inset`,
      WebkitTextFillColor: '#fff',
      caretColor: `${theme.palette.red.main}`,
      transition: 'background-color 5000s ease-in-out 0s',
    },
  },
}));
const ErrorFormHelperText = styled(FormHelperText)(({ theme }) => ({
  '&.Mui-error': {
    color: `${theme.palette.peach.main}`,
  },
}));

const FormInput = (props) => {
  const { formProps, inputName, inputType, placeholder } = props;
  const { values, errors, touched, handleChange, handleBlur } = formProps;

  return (
    <FormControl variant="standard" sx={{ width: '100%' }}>
      <AuthenticationInput
        type={inputType || 'name'}
        name={inputName}
        value={values[inputName]}
        placeholder={placeholder || inputName}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete={`current-${inputName}`}
      />
      {touched[inputName] && errors[inputName] && (
        <ErrorFormHelperText error>{errors[inputName]}</ErrorFormHelperText>
      )}
    </FormControl>
  );
};

export default FormInput;

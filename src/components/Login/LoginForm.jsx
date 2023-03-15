import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { loginSchema } from '../../schemas/auth.request';
import { Formik } from 'formik';
// import { AppContext } from '../../context/ContextProvider';
import FormInput from './FormInput';
// import { useLoginMutation } from '../../store/api/authApi';

const FormContainer = styled(Box)({
  width: '100vw',
  maxWidth: '500px',
  padding: '0 20px',
  margin: '0 auto',
});
const FormBody = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.peach.main}`,
  borderRadius: '5px',
  backgroundColor: `${theme.palette.dark.main}`,
  padding: '0 15px',
  '& .MuiFormControl-root:first-of-type': {
    borderBottom: `1px solid ${theme.palette.peach.main}`,
  },
}));
const FormFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '20px 0 0',
  button: {
    width: '100%',
    height: '50px',
    textTransform: 'none',
    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: 600,
    color: '#fff',

    '&:hover': {
      backgroundColor: `${theme.palette.red.main}`,
      color: '#fff',
    },
  },
}));
const LinkContainer = styled(Box)({
  display: 'flex',
  margin: '20px 0',
});
const LinkButton = styled('a')({
  // textDecoration: 'none',
  color: '#fff',
});

const validateSchema = (values) => {
  const errors = {};
  const valid = loginSchema.validate(values, { abortEarly: false });
  if (valid.error) {
    valid.error.details.forEach((err) => {
      errors[err.path] = err.message;
    });
  }
  return errors;
};

const LoginForm = () => {
  // const { islogin, setIsLogin } = useContext(AppContext);

  // const [
  //   login,
  //   {
  //     data: loginData,
  //     isSuccess: isLoginSuccess,
  //     isError: isLoginError,
  //     error: loginError,
  //   },
  // ] = useLoginMutation();

  const submitForm = async (values) => {
    alert(JSON.stringify(values, null, 2));
    console.log('submit', values);

    // await login(values);
    // setIsLogin(true);
  };

  // const handleLogin = () => {
  //   setIsLogin(true);
  // };

  return (
    <FormContainer>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={validateSchema}
        onSubmit={submitForm}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(formProps) => (
          <form onSubmit={formProps.handleSubmit}>
            <FormBody>
              <FormInput formProps={formProps} inputName="email" />
              <FormInput formProps={formProps} inputName="password" />
            </FormBody>

            <FormFooter>
              <Button type="submit">Login</Button>
            </FormFooter>
          </form>
        )}
      </Formik>
      <LinkContainer>
        <LinkButton href="/register" title="register">
          Create an account
        </LinkButton>
        {/* <LinkButton href="/forget" title="forget password">Forget Password</LinkButton> */}
      </LinkContainer>
    </FormContainer>
  );
};

export default LoginForm;

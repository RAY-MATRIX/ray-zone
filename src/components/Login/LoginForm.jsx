import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, FormControl, InputBase, FormHelperText } from '@mui/material';

import { Formik } from 'formik';

const FormContainer = styled(Box)({
  maxWidth: '600px',
  padding: '0 15px',
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
const AuthenticationInput = styled(InputBase)(() => ({
  background: 'transparent',
  border: 'none',
  borderRadius: '0',
  fontWeight: 500,
  fontSize: '18px',
  '& input': {
    height: '50px',
    padding: '',
    color: '#fff',
    background: 'transparent',

    '&::placeholder': {
      opacity: '1',
    },
    '&::-webkit-autofill': {
      background: 'transparent',
    },
  },
}));

const ErrorFormHelperText = styled(FormHelperText)(() => ({
  fontFamily: 'Raleway',
}));

const FormButtonContainer = styled(Box)(({ theme }) => ({
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
      backgroundColor: '#EE6983',
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

// const validateSchema = (values) => {
//   const errors = {};
//   const valid = loginSchema.validate(values, { abortEarly: false });
//   if (valid.error) {
//     valid.error.details.forEach((err) => {
//       errors[err.path.join('')] = err.message;
//     });
//   }
//   return errors;
// };

function LoginForm() {
  const submitForm = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        // validate={validateSchema}
        onSubmit={(values) => submitForm(values)}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
          <form onSubmit={handleSubmit}>
            <FormBody>
              <FormControl variant="standard" sx={{ width: '100%' }}>
                <AuthenticationInput
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                />
                {touched.email && errors.email && (
                  <ErrorFormHelperText error>{errors.email}</ErrorFormHelperText>
                )}
              </FormControl>

              <FormControl variant="standard" sx={{ width: '100%' }}>
                <AuthenticationInput
                  id="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="password"
                />
                {touched.password && errors.password && (
                  <ErrorFormHelperText error>{errors.password}</ErrorFormHelperText>
                )}
              </FormControl>
            </FormBody>

            <FormButtonContainer>
              <Button type="submit">Login</Button>
            </FormButtonContainer>
          </form>
        )}
      </Formik>
      <LinkContainer>
        <LinkButton href="/register">Create an account</LinkButton>
        {/* <LinkButton href="/forget">Forget Password</LinkButton> */}
      </LinkContainer>
    </FormContainer>
  );
}

export default LoginForm;

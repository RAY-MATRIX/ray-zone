import { useState } from 'react';
import CardPreview from './CardPreview';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import FormInput from '../../../components/Login/FormInput';
import { styled } from '@mui/system';
import { Box, Button } from '@mui/material';
import { cardSchema } from '../../../schemas/card.request';

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

const validateSchema = (values) => {
  const errors = {};
  const valid = cardSchema.validate(values, { abortEarly: false });
  if (valid.error) {
    valid.error.details.forEach((err) => {
      errors[err.path] = err.message;
    });
  }
  return errors;
};

const CardWorkshop = () => {
  const [card, setCard] = useState({ title: '', content: '' });
  const dispatch = useDispatch();

  const initialValues = {
    title: card.title || '',
    content: card.content || '',
  };

  const handleInputChange = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  const submitForm = async (value) => {
    try {
      console.log(value);
      // const result = await login(value);
      // if (result && !result.error) {
      //   dispatch(setUser(result.data));
      //   handleLogin();
      // }
    } catch (error) {
      console.error(error);
    }
  };

  console.log('new card', card);
  return (
    <>
      <CardPreview card={card} />

      <Formik
        initialValues
        validate={validateSchema}
        onSubmit={submitForm}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(formProps) => (
          <form onSubmit={formProps.handleSubmit}>
            <FormBody>
              <FormInput formProps={formProps} inputName="title" />
              <FormInput formProps={formProps} inputName="content" />
            </FormBody>

            <FormFooter>
              <Button type="submit">submit</Button>
            </FormFooter>
          </form>
        )}
      </Formik>
    </>
  );
};

export default CardWorkshop;

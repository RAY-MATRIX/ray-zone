import { Formik } from 'formik';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import FormInput from '../../../components/Login/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { gameNameUpdate } from '../../../store/game/gameSlice';

const FormBody = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.peach.main}`,
  borderRadius: '5px',
  backgroundColor: `${theme.palette.dark.main}`,
  padding: '0 15px',
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

const NameForm = ({ updateStage }) => {
  const dispatch = useDispatch();
  const gameName = useSelector((state) => state.game.title);

  const submitForm = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      console.log(values.name);
      dispatch(gameNameUpdate(values.name));
      updateStage(1);
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={{
        name: gameName,
      }}
      // validate={validateSchema}
      onSubmit={submitForm}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {(formProps) => (
        <form onSubmit={formProps.handleSubmit}>
          <FormBody>
            <FormInput
              formProps={formProps}
              inputName="name"
              placeholder="Name your game"
            />
          </FormBody>

          <FormFooter>
            <Button type="submit">submit</Button>
          </FormFooter>
        </form>
      )}
    </Formik>
  );
};
export default NameForm;

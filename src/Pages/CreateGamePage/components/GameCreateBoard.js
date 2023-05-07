import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
// import { gameUpdate } from '../../../store/game/gameSlice';
import { useFormik } from 'formik';
// import { gameNameSchema } from '../../../schemas/game.request';
import { TextField } from '@mui/material';
import { gameUpdate } from '../../../store/game/gameSlice';
import CardRarityQuantity from './CardRarityQuantity';

const SaveButton = styled(Button)({
  color: '#fff',
  marginTop: '20px',
  '&:hover': {
    border: '1px solid',
  },
});
const CardListContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  padding: '40px 0',
  flexWrap: 'wrap',
});

const CardContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '25%',
  padding: '10px',
  '&>div:first-of-type': {
    border: '1px solid',
    height: '35vw',
    maxHeight: '330px',
    padding: '10px',
  },
});

const DrawContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  margin: '20px 0',
});

const GameCreateBoard = ({ updateStage }) => {
  const dispatch = useDispatch();
  const { gameCardsSelected, draws } = useSelector((state) => state.game);

  const initialValues = gameCardsSelected.reduce(
    (acc, card) => {
      acc[card.id] = { rarity: card.rarity * 100, quantity: card.quantity };
      return acc;
    },
    { drawNumber: draws || 1 }
  );

  const validate = (values) => {
    const errors = {};

    Object.entries(values).forEach(([cardId, { rarity, quantity }]) => {
      if (rarity < 0) {
        errors[cardId] = { ...errors[cardId], rarity: 'Value cannot be less than 0' };
      } else if (rarity > 100) {
        errors[cardId] = {
          ...errors[cardId],
          rarity: 'Value cannot be greater than 100',
        };
      }
      if (quantity < 1) {
        errors[cardId] = { ...errors[cardId], quantity: 'Value cannot be less than 1' };
      }
    });
    const totalQuantity = gameCardsSelected.reduce(
      (acc, card) => acc + values[card.id]?.quantity || 0,
      0
    );
    if (values.drawNumber > totalQuantity) {
      errors.drawNumber = 'Draw number cannot be greater than total quantity';
    } else if (values.drawNumber <= 0) {
      errors.drawNumber = 'Draw number cannot be empty';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      const cardsSelected = gameCardsSelected.map((item) => ({
        ...item,
        rarity: values[item.id].rarity / 100,
        quantity: values[item.id].quantity,
      }));

      dispatch(gameUpdate({ cardsSelected, draws: values.drawNumber }));
      updateStage();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <CardListContainer>
          {gameCardsSelected.map((card) => (
            <CardContainer key={card.id}>
              <div>
                <h4>{card.title}</h4>
                <p>{card.content}</p>
              </div>
              <CardRarityQuantity formik={formik} cardId={card.id} />
            </CardContainer>
          ))}
        </CardListContainer>
        <DrawContainer>
          <TextField
            name="drawNumber"
            type="number"
            label="Draw Numbe"
            value={formik.values.drawNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.drawNumber && Boolean(formik.errors.drawNumber)}
            helperText={formik.touched.drawNumber && formik.errors.drawNumber}
          />
        </DrawContainer>

        <SaveButton type="submit">Save</SaveButton>
      </form>
    </>
  );
};
export default GameCreateBoard;

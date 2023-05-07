import { Slider, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const QuantityContainer = styled(TextField)({
  width: '100%',
});

const CardRarityQuantity = ({ formik, cardId }) => {
  // console.log('fftouch', formik.touched);
  // console.log('ffvalue', formik.values);
  return (
    <div>
      <Slider
        name={`${cardId}.rarity`}
        value={formik.values[cardId].rarity}
        onChange={(event, value) => formik.setFieldValue(`${cardId}.rarity`, value)}
        min={1}
        max={100}
        step={1}
        aria-label="input-slider"
      />

      <QuantityContainer
        name={`${cardId}.quantity`}
        label="Quantity"
        type="number"
        value={formik.values[cardId].quantity}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched[cardId]?.quantity && Boolean(formik.errors[cardId]?.quantity)
        }
        helperText={formik.touched[cardId]?.quantity && formik.errors[cardId]?.quantity}
      />
    </div>
  );
};
export default CardRarityQuantity;

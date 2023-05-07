import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

const CardContainer = styled(Box)({
  width: '25%',
  height: '35vw',
  maxHeight: '330px',
  padding: '10px',
});

const CardContentContainer = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5px',
  rowGap: '5px',
  position: 'relative',
  backgroundColor: `${theme.palette.success.main}`,
  boxShadow: '#816c96 0px 0 10px',
  '&.card--selected': {
    boxShadow: '#fff 0px 0 15px',
    padding: '0',
    backgroundColor: '#fff0',
  },
}));

const CardImageContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '80%',
  border: `1px solid ${theme.palette.peach.main}`,
  borderRadius: '5px',
  '.card--selected &': {
    height: '100%',
  },
}));

const CardContent = styled('div')({
  '.card--selected &': {
    position: 'absolute',
    top: '0',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(5px)',
  },
});

const TopContent = styled('div')(({ theme }) => ({
  '.card--selected &': {
    border: `1px solid ${theme.palette.peach.main}`,
    flex: '1 auto',
  },
}));

const CardList = ({ card, handleCardClick, selectedCards }) => {
  const handleClick = (event) => {
    handleCardClick(card);
  };
  const isSelected = selectedCards.some((item) => item.id === card.id);
  const flipClass = isSelected ? 'card--selected' : '';

  return (
    <>
      <CardContainer>
        <CardContentContainer className={`card ${flipClass}`} onClick={handleClick}>
          <CardImageContainer>
            <img src="" alt={card.title} />
          </CardImageContainer>

          <CardContent>
            <TopContent>
              <h6>{card.title}</h6>
              <p>{card.content}</p>
            </TopContent>
          </CardContent>
        </CardContentContainer>
      </CardContainer>
    </>
  );
};
export default CardList;

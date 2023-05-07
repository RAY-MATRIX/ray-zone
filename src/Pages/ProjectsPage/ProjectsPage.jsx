import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

const ProjectsContainer = styled(Box)({});
const ProjectsTitle = styled('h1')(({ theme }) => ({
  marginBottom: '20px',
  color: `${theme.palette.white}`,
}));
const ProjectList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  'li a': {
    fontSize: '1.375rem',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    columnGap: '30px',
    textDecoration: 'none',
    '&:hover,&:active': {
      textDecoration: 'underline',
      color: `${theme.palette.success.main}`,
    },
  },
}));
const ProjectsPage = () => {
  const projects = [
    { name: 'Big man Trailer', url: 'https://bigmantrailer.com.au/' },
    { name: 'Capstone Caravans', url: 'https://capstonecaravans.com.au/' },
    { name: 'RVBarn', url: 'https://rvbarn.com.au/' },
    { name: 'Blygo', url: 'https://blygo.com.au/' },
    { name: 'Mying Toolbox', url: 'https://myingtoolbox.com.au/' },
    { name: 'Clenergy', url: 'https://www.clenergy.com/' },
    { name: 'Brand Trigram', url: 'https://brandtrigram.com/' },
    {
      name: 'Energy Cloud Australia',
      url: 'https://energycloudaustralia.com.au/',
    },
    { name: 'ZHONG HONG Company', url: 'https://www.zh-et.cn/en/' },
    { name: 'BANG XIN Company', url: 'https://www.bxsemi.com/en/' },

    { name: 'Mose Industry', url: 'https://moseindustry.com.au/' },

    { name: 'Maptco Fasteners', url: 'https://maptco.com.au/shop/' },

    { name: 'Ahli Shop', url: 'https://ahlishop.com/' },
  ];
  return (
    <ProjectsContainer>
      <ProjectsTitle>My Projects</ProjectsTitle>
      <ProjectList>
        {projects.map((p, key) => (
          <li key={key}>
            <a href={p.url} title={p.name} target="_blank" rel="noreferrer">
              <span>{p.name}</span>
              <span>Go</span>
            </a>
          </li>
        ))}
      </ProjectList>
    </ProjectsContainer>
  );
};
export default ProjectsPage;

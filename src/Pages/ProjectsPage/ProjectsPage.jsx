import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import ProjectList from './components/ProjectList';

const ProjectsContainer = styled(Box)({
  width: '100%',
  padding: '0 20px',
  maxWidth: '600px',
});
const ProjectsTitle = styled('h1')(({ theme }) => ({
  marginBottom: '20px',
  color: `${theme.palette.white.main}`,
}));
const ProjectSubTitle = styled('h2')(({ theme }) => ({
  marginBottom: '10px',
  color: `${theme.palette.white.main}`,
}));

const ProjectsPage = () => {
  const websites = [
    { name: 'Clenergy', url: 'https://www.clenergy.com/' },
    { name: 'ZHONG HONG Company', url: 'https://www.zh-et.cn/en/' },
    { name: 'BANG XIN Company', url: 'https://www.bxsemi.com/en/' },
    { name: 'Brand Trigram', url: 'https://brandtrigram.com/' },
    { name: 'Big man Trailer', url: 'https://bigmantrailer.com.au/' },
    { name: 'Capstone Caravans', url: 'https://capstonecaravans.com.au/' },
    { name: 'RVBarn', url: 'https://rvbarn.com.au/' },
    { name: 'Mying Toolbox', url: 'https://myingtoolbox.com.au/' },
    { name: 'Maptco Fasteners', url: 'https://maptco.com.au/shop/' },
    { name: 'Ahli Shop', url: 'https://ahlishop.com/' },
  ];

  const projects = [
    {
      name: 'CoffeeTopia',
      url: 'https://www.coffeetopia.com.au/',
    },
  ];
  return (
    <ProjectsContainer>
      <ProjectsTitle>Portfolio</ProjectsTitle>
      <ProjectSubTitle>Websites</ProjectSubTitle>
      <ProjectList projects={websites} />
      <ProjectSubTitle>React Apps</ProjectSubTitle>
      <ProjectList projects={projects} />
    </ProjectsContainer>
  );
};
export default ProjectsPage;

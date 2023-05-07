import { styled } from '@mui/material/styles';

const ProjectListContainer = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '20px',
  'li a': {
    fontSize: '1.375rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: '30px',
    textDecoration: 'none',
    '&:hover,&:active': {
      textDecoration: 'underline',
      color: `${theme.palette.white.main}`,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.125rem',
    },
  },
}));

const ProjectList = ({ projects }) => {
  return (
    <ProjectListContainer>
      {projects.map((project, key) => (
        <li key={key}>
          <a
            href={project.url}
            title={project.name}
            target="_blank"
            rel="noreferrer"
          >
            <span>{project.name}</span>
            <span>Go</span>
          </a>
        </li>
      ))}
    </ProjectListContainer>
  );
};

export default ProjectList;

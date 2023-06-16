import ProjectPageLayout from '../../layouts/ProjectPageLayout';

const ProjectPost = () => {
  const meta = {
    page: 'Single Project',
    desc: 'A single project page.',
    type: 'article',
    date: '2021-01-01',
  };

  return (
    <ProjectPageLayout meta={meta}>
      <h1>Single Project</h1>
    </ProjectPageLayout>
  );
};

export default ProjectPost;

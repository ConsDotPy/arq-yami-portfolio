import MainLayout from '../../layouts/MainLayout';
import ProjectGallery from '../../components/home/ProjectGallery';

const ProjectGalleryPage = () => {
  const meta = {
    page: 'Projects',
    desc: 'A collection of projects I have worked on.',
  };

  return (
    <MainLayout meta={meta}>
      <ProjectGallery />
    </MainLayout>
  );
};

export default ProjectGalleryPage;

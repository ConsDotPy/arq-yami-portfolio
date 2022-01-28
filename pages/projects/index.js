import MainLayout from "../../layouts/MainLayout";
import ProjectGallery from "../../components/home/ProjectGallery";

const ProjectGalleryPage = () => {
  const meta = {
    page: "Projects",
    desc: "TSK",
  };

  return (
    <MainLayout meta={meta}>
      <h1>Under Construction</h1>
      <ProjectGallery />
    </MainLayout>
  );
};

export default ProjectGalleryPage;

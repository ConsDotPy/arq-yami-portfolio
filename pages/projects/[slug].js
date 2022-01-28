import ProjectPageLayout from "../../layouts/ProjectPageLayout";

const ProjectPost = () => {
  const meta = {
    page: "TSK",
    desc: "TSK",
    type: "article",
    date: "TSK",
  };

  return (
    <ProjectPageLayout meta={meta}>
      <h1>Single Project TSK</h1>
    </ProjectPageLayout>
  );
};

export default ProjectPost;

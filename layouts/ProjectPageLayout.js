import ProjectPost from "../components/articles/ProjectPost";
import PageContainer from "../components/Structural/PageContainer";

const ProjectPageLayout = ({ children, meta }) => {
  const { page, desc, img, type = "article", date } = meta;

  return (
    <PageContainer page={page} desc={desc} img={img} type={type} date={date}>
      <main className="relative max-w-7xl mx-auto px-6 my-12 lg:my-24">
        <ProjectPost>{children}</ProjectPost>
      </main>
    </PageContainer>
  );
};

export default ProjectPageLayout;

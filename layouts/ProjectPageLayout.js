import PageContainer from "../components/Structural/PageContainer";

const ProjectPageLayout = ({ children, meta }) => {
  const { page, desc, img, type, date } = meta;

  return (
    <PageContainer page={page} desc={desc} img={img} type={type} date={date}>
      <main className="max-w-7xl mx-auto px-6">
        <article>{children}</article>
        <aside>TSK</aside>
      </main>
    </PageContainer>
  );
};

export default ProjectPageLayout;

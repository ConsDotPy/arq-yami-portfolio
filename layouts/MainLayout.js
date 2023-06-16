import Footer from '../components/Structural/Footer';
import Header from '../components/Structural/Header';
import PageContainer from '../components/Structural/PageContainer';

const MainLayout = ({ children, meta }) => {
  const { page, desc, img, type } = meta;

  return (
    <PageContainer page={page} desc={desc} img={img} type={type}>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </PageContainer>
  );
};

export default MainLayout;

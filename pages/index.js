import MainLayout from "../layouts/MainLayout";

export default function Home() {
  const meta = {
    page: "Home",
    desc: "TSK",
  };

  return (
    <MainLayout meta={meta}>
      <h1>Max Pozen Portfolio</h1>
    </MainLayout>
  );
}

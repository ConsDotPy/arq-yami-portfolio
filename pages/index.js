import BestWorkBar from '../components/home/BestWorkBar';
import ContactForm from '../components/home/ContactForm';
import Hero from '../components/home/Hero';
import ProjectGallery from '../components/home/ProjectGallery';
import ShortBio from '../components/home/ShortBio';
import Timeline from '../components/home/Timeline';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  const meta = {
    page: 'Home',
    desc: 'A collection of projects I have worked on. I am currently working on a new project that I am very excited about!',
  };

  return (
    <MainLayout meta={meta}>
      <Hero />
      <ProjectGallery />
      <ShortBio />
      <Timeline />
      <BestWorkBar />
      <ContactForm />
    </MainLayout>
  );
}

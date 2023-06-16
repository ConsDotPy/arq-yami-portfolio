import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../Structural/SectionHeading';

const ProjectGallery = () => {
  return (
    <article className="max-w-7xl mx-auto mt-16 md:mt-20 lg:mt-28">
      {/* Heading */}
      <SectionHeading
        preText="Project Portfolio"
        title="How I See the World"
        description="I love to travel and explore new places. Here are some of my favorite photos from my adventures. I hope you enjoy them!"
      />

      {/* Gallery Grid */}
      <section className="relative mt-8 grid grid-cols-4 gap-5 p-5">
        <Link href="/projects/tsk">
          <a className="galleryImageContainer col-span-2 row-span-2 md:col-auto">
            <Image
              src="/static/images/temp/1.jpg"
              alt="TSK"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
              priority
            />
          </a>
        </Link>
        <Link href="/projects/tsk">
          <a className="galleryImageContainer col-span-2 md:col-auto">
            <Image
              src="/static/images/temp/2.jpg"
              alt="TSK"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
              priority
            />
          </a>
        </Link>
        <Link href="/projects/tsk">
          <a className="galleryImageContainer row-span-2 col-span-2">
            <Image
              src="/static/images/temp/3.jpg"
              alt="TSK"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
              priority
            />
          </a>
        </Link>
        <Link href="/projects/tsk">
          <a className="galleryImageContainer col-span-2 md:col-auto">
            <Image
              src="/static/images/temp/4.jpg"
              alt="TSK"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
          </a>
        </Link>
        <Link href="/projects/tsk">
          <a className="galleryImageContainer col-span-4 md:col-span-3">
            <Image
              src="/static/images/temp/5.jpg"
              alt="TSK"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
          </a>
        </Link>
        <Link href="/projects/tsk">
          <a className="galleryImageContainer col-span-2 md:col-span-1">
            <Image
              src="/static/images/temp/6.jpg"
              alt="TSK"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
          </a>
        </Link>
        <Link href="/projects/tsk">
          <a className="galleryImageContainer col-span-2 md:col-span-1">
            <Image
              src="/static/images/temp/7.jpg"
              alt="TSK"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
          </a>
        </Link>
        <Link href="/projects/tsk">
          <a className="galleryImageContainer col-span-3 md:col-span-2 lg:col-span-3">
            <Image
              src="/static/images/temp/8.jpg"
              alt="TSK"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
          </a>
        </Link>
        <Link href="/projects/tsk">
          <a className="galleryImageContainer col-span-1">
            <Image
              src="/static/images/temp/9.jpg"
              alt="TSK"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
          </a>
        </Link>
      </section>
    </article>
  );
};

export default ProjectGallery;

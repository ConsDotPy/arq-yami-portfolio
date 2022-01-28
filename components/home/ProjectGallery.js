import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../Structural/SectionHeading";

const ProjectGallery = () => {
  return (
    <article className="max-w-7xl mx-auto mt-28">
      {/* Heading */}
      <SectionHeading
        preText="Project Portfolio"
        title="How I See the World"
        description="Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
		    arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
		    feugiat egestas ac."
      />

      {/* Gallery Grid */}
      <section className="relative mt-8 grid grid-cols-4 gap-5 p-5">
        <Link href="/projects/tsk">
          <a className="shadow-lg rounded-lg relative aspect-w-10 aspect-h-7 row-span-2 focus-within:ring-2 focus-within:ring-offset-4 focus-within:ring-offset-gray-100 focus-within:ring-blue-500">
            <Image
              src="/static/images/temp/1.jpg"
              alt="TSK"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
          </a>
        </Link>
        <Link href="/projects/tsk">
          <a className="shadow-lg relative aspect-w-10 aspect-h-7">
            <Image
              src="/static/images/temp/2.jpg"
              alt="TSK"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
          </a>
        </Link>
        <Link href="/projects/tsk">
          <a className="shadow-lg relative aspect-w-10 aspect-h-7 row-span-2 col-span-2">
            <Image
              src="/static/images/temp/3.jpg"
              alt="TSK"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
          </a>
        </Link>
        <Link href="/projects/tsk">
          <a className="shadow-lg relative aspect-w-10 aspect-h-7">
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
          <a className="shadow-lg relative aspect-w-10 aspect-h-7 col-span-3">
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
          <a className="shadow-lg relative aspect-w-10 aspect-h-7 col-span-1">
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
          <a className="shadow-lg relative aspect-w-10 aspect-h-7 col-span-1">
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
          <a className="shadow-lg relative aspect-w-10 aspect-h-7 col-span-2">
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
          <a className="shadow-lg relative aspect-w-10 aspect-h-7 col-span-1">
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

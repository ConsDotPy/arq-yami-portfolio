import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gray-900">
      {/* Decorative image and overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden w-full h-full"
      >
        <Image
          src="/static/images/backgrounds/architect_blueprint.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 opacity-60"
      />

      <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
        <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
          Good Honest Architecture
        </h1>
        <p className="mt-4 text-xl text-white">
          Hey, I&apos;m Max. Glad you could stop by my website . . . Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Veritatis, iste. Lorem
          ipsum dolor sit, amet consectetur adipisicing.
        </p>
        <Link href="/projects">
          <a className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100">
            See My Best Work
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

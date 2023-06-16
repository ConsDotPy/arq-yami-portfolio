import Image from 'next/image';
import Link from 'next/link';

const BestWorkBar = () => {
  return (
    <section className="relative mt-16 md:mt-20 lg:mt-28">
      <div
        className="hidden absolute top-0 inset-x-0 h-1/2 lg:block"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto bg-blue-800 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div
              className="absolute inset-x-0 h-1/2 lg:hidden"
              aria-hidden="true"
            />
            <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="relative shadow-2xl aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <Image
                  src="/static/images/temp/1.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>

          <div className="relative bg-blue-800 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
            <div
              className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-blue-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
              <svg
                className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-blue-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
            </div>
            <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
              <h2
                className="text-3xl font-extrabold text-white"
                id="join-heading"
              >
                My most recent work
              </h2>
              <p className="text-lg text-white">
                I am currently working on a new project that I am very excited
                about! If you are interested in learning more about it, please
                click the button below.
              </p>
              <Link href="/projects/tsk">
                <a className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-700 hover:bg-gray-50 sm:inline-block sm:w-auto">
                  See What I Am Working On Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestWorkBar;

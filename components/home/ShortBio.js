import Image from 'next/image';

const metrics = [
  {
    id: 1,
    stat: 'Location',
    emphasis: 'Chicago, Illinois',
    rest: 'USA',
  },
  {
    id: 2,
    stat: 'Hobbies',
    emphasis: 'Traveling',
    rest: ', Photography, & Music',
  },
  {
    id: 3,
    stat: 'Philosophy',
    emphasis: 'Eco-friendly design',
    rest: ' & Sustainability are key to the future',
  },
  {
    id: 4,
    stat: 'Skills',
    emphasis: 'Architectural Design,',
    rest: 'BIM, Visualization, & More',
  },
];

const ShortBio = () => {
  return (
    <div className="relative bg-gray-900 mt-16 md:mt-20 lg:mt-28">
      <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <div className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0">
              <Image
                src="/static/images/Max_Profile.png"
                alt="Max Pozen professional portrait"
                layout="fill"
                objectPosition="center"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold text-blue-300 tracking-wide uppercase">
            About Me
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            A brief introduction into who I am
          </p>
          <p className="mt-5 text-lg text-gray-300">
            Architectural Designer with a passion for sustainability and the
            environment. I am a recent graduate of the University of Illinois at
            Urbana-Champaign with a Master of Architecture degree. I am
            currently working at Gensler in Chicago, Illinois.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">
                  {item.stat}
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    {item.emphasis}
                  </span>{' '}
                  {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortBio;

import Link from 'next/link';
import { nanoid } from 'nanoid';
import SectionHeading from '../Structural/SectionHeading';

const timelineItems = [
  {
    title: 'Architecture Graduate Student',
    location: 'UIUC | Champaign, IL',
    startDate: 'January 2016',
    endDate: 'January 2020',
    description:
      'We thrive because of our best-in-class stack and proactive game changer culture. So we can hit the ground running, we will be intelligently incentivizing every stakeholder in our space.',
    href: 'https://illinois.edu/',
  },
  {
    title: 'Architectural Internship',
    location: 'StudioGC | Chicago, IL',
    startDate: 'June 2020',
    endDate: 'September 2020',
    description:
      'Reliably leveraging conservatively mission critical architectures is crucial to our innovative low hanging fruit. Going forward, our long-term prince2 practitioner will deliver value to drivers.',
    href: 'https://www.studiogc.com/about/_careers/',
  },
  {
    title: 'Masters Student',
    location: 'WashU | St. Louis, MO',
    startDate: 'July 2020',
    endDate: 'December, 2022',
    description:
      'Wholesale team players are becoming unparalleled deliverable experts. We thrive because of our seamless capability and best-of-breed paradigm shift culture.',
    href: 'https://wustl.edu/',
  },
  {
    title: 'Architecture Internship',
    location: 'Kiku Obata & Company',
    startDate: 'May 2021',
    endDate: 'March 2022',
    description:
      'Reliably leveraging conservatively mission critical architectures is crucial to our innovative low hanging fruit. Going forward, our long-term prince2 practitioner will deliver value to drivers.',
    href: 'https://kikuobata.com/',
  },
];

const Timeline = () => {
  return (
    <article className="max-w-7xl mx-auto mt-16 md:mt-20 lg:mt-28">
      {/* Heading */}
      <SectionHeading
        preText="Education & Experience"
        title="Project Timeline"
        description="Here is a timeline of my education and experience in the field of architecture. I have been fortunate to have worked with some amazing people and companies."
      />

      {/* Timeline */}
      <section className="relative mt-8">
        {/* Bar & Bullets */}
        <div className="absolute left-6 lg:left-1/2 bg-gray-300 opacity-60 w-[1px] h-full"></div>

        {/* Timeline Items */}
        <section className="flex flex-col flex-wrap lg:py-8">
          {timelineItems.map((item, idx) => (
            <div
              key={nanoid()}
              className="relative flex justify-between py-8 lg:py-6"
            >
              {idx % 2 === 0 ? (
                <>
                  <article className="order-2 lg:order-1 w-full lg:w-1/2 lg:text-right px-6 lg:pr-12">
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {item.title}
                    </h3>
                    <h4 className="sm:text-lg font-light text-gray-700">
                      {item.location}
                    </h4>
                    <div className="text-sm sm:text-base rounded-lg bg-blue-100 inline-block px-3 py-1 my-2 font-medium">
                      {item.startDate} - {item.endDate}
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mt-2 mb-4">
                      {item.description}
                    </p>
                    {item.href.charAt(0) === 'h' ? (
                      <a
                        className="text-xs sm:text-sm text-gray-800 italic px-3 py-2 bg-gray-50 rounded-md transition-colors hover:bg-gray-800 hover:text-white"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Learn more about the program
                      </a>
                    ) : (
                      <Link href={item.href}>
                        <a className="text-sm text-gray-800 italic px-3 py-2 bg-gray-50 rounded-md transition-colors hover:bg-gray-800 hover:text-white">
                          View detailed project notes
                        </a>
                      </Link>
                    )}
                  </article>
                  <span className="ml-4 lg:order-2 lg:ml-0 p-1 h-1 w-1 border-4 rounded-full border-blue-500 bg-white" />
                  <div className="hidden lg:block lg:order-3 lg:w-1/2" />
                </>
              ) : (
                <>
                  <div className="hidden lg:block lg:order-1 lg:w-1/2" />
                  <span className="ml-4 lg:order-2 lg:ml-0 p-1 h-1 w-1 border-4 rounded-full border-blue-500 bg-white" />
                  <article className="order-2 lg:order-3 w-full lg:w-1/2 px-6 lg:pl-12">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <h4 className="text-lg font-light text-gray-700">
                      {item.location}
                    </h4>
                    <div className="rounded-lg bg-blue-100 inline-block px-3 py-1 my-2 font-medium">
                      {item.startDate} - {item.endDate}
                    </div>
                    <p className="text-gray-600 mt-2 mb-4">
                      {item.description}
                    </p>
                    {item.href.charAt(0) === 'h' ? (
                      <a
                        className="text-sm text-gray-800 italic px-3 py-2 bg-gray-50 rounded-md transition-colors hover:bg-gray-800 hover:text-white"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Learn more about the program
                      </a>
                    ) : (
                      <Link href={item.href}>
                        <a className="text-sm text-gray-800 italic px-3 py-2 bg-gray-50 rounded-md transition-colors hover:bg-gray-800 hover:text-white">
                          View detailed project notes
                        </a>
                      </Link>
                    )}
                  </article>
                </>
              )}
            </div>
          ))}
        </section>
      </section>
    </article>
  );
};

export default Timeline;

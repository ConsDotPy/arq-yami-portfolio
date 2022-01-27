import Link from "next/link";
import { nanoid } from "nanoid";

const timelineItems = [
  {
    title: "Graduate Student",
    location: "UIUC | Champaign, IL",
    startDate: "January 2016",
    endDate: "January 2020",
    description:
      "We thrive because of our best-in-class stack and proactive game changer culture. So we can hit the ground running, we will be intelligently incentivizing every stakeholder in our space.",
    href: "https://illinois.edu/",
  },
  {
    title: "Masters Student",
    location: "WashU | St. Louis, MO",
    startDate: "July 2020",
    endDate: "December, 2022",
    description:
      "Wholesale team players are becoming unparalleled deliverable experts. We thrive because of our seamless capability and best-of-breed paradigm shift culture.",
    href: "https://wustl.edu/",
  },
  {
    title: "TSK Internship",
    location: "Unknown",
    startDate: "January 2018",
    endDate: "July 2021",
    description:
      "Reliably leveraging conservatively mission critical architectures is crucial to our innovative low hanging fruit. Going forward, our long-term prince2 practitioner will deliver value to drivers.",
    href: "https://google.com",
  },
];

const Timeline = () => {
  return (
    <article className="max-w-7xl mx-auto ">
      {/* Heading */}
      <section className="max-w-prose mx-auto text-center">
        <h2>
          <span className="block text-base text-blue-600 font-semibold tracking-wide uppercase sm:text-lg">
            Education & Experience
          </span>
          <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Project Timeline
          </span>
        </h2>
        <p className="mt-6 text-lg font-medium text-gray-400 leading-8">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
          arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
          feugiat egestas ac.
        </p>
      </section>

      {/* Timeline */}
      <section className="relative mt-8">
        {/* Bar & Bullets */}
        <div className="absolute left-1/2 bg-gray-300 opacity-60 w-[1px] h-full"></div>

        {/* Timeline Items */}
        <section className="flex flex-col flex-wrap py-8">
          {timelineItems.map((item, idx) => (
            <div key={nanoid()} className="relative flex justify-between py-6">
              {idx % 2 === 0 ? (
                <>
                  <article className="w-1/2 text-right pr-12">
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
                    {item.href.charAt(0) === "h" ? (
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
                  <span className="p-1 h-1 w-1 border-4 rounded-full border-blue-500 bg-white" />
                  <div className="w-1/2" />
                </>
              ) : (
                <>
                  <div className="w-1/2" />
                  <span className="p-1 h-1 w-1 border-4 rounded-full border-blue-500 bg-white" />
                  <article className="w-1/2 pl-12">
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
                    {item.href.charAt(0) === "h" ? (
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

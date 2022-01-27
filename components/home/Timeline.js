import { nanoid } from "nanoid";

const timelineItems = [
  {
    title: "Graduate Student",
    location: "UIUC | Champaign, IL",
    startDate: new Date(),
    endDate: new Date(),
    description:
      "We thrive because of our best-in-class stack and proactive game changer culture. So we can hit the ground running, we will be intelligently incentivizing every stakeholder in our space.",
    href: "https://illinois.edu/",
  },
  {
    title: "Masters Student",
    location: "WashU | St. Louis, MO",
    startDate: new Date(),
    endDate: new Date(),
    description:
      "Wholesale team players are becoming unparalleled deliverable experts. We thrive because of our seamless capability and best-of-breed paradigm shift culture.",
    href: "https://wustl.edu/",
  },
  {
    title: "TSK Internship",
    location: "Unknown",
    startDate: new Date(),
    endDate: new Date(),
    description:
      "Reliably leveraging conservatively mission critical architectures is crucial to our innovative low hanging fruit. Going forward, our long-term prince2 practitioner will deliver value to drivers.",
    href: "https://google.com",
  },
];

const Timeline = () => {
  return (
    <article>
      {/* Heading */}
      <section className="max-w-prose mx-auto text-center">
        <h2 className="">
          <span className="block text-base text-indigo-600 font-semibold tracking-wide uppercase sm:text-lg">
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
      <section className="">
        {/* Bar & Bullets */}

        {/* Timeline Items */}
        <section className="flex flex-wrap">
          {timelineItems.map((item) => (
            <div key={nanoid()}>{item.title}</div>
          ))}
        </section>
      </section>
    </article>
  );
};

export default Timeline;

import SectionHeading from "../Structural/SectionHeading";

const ProjectGallery = () => {
  return (
    <article className="max-w-7xl mx-auto mt-28">
      {/* Heading */}
      <SectionHeading
        preText="Education & Experience"
        title="Project Timeline"
        description="Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
		    arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
		    feugiat egestas ac."
      />

      {/* Timeline */}
      <section className="relative mt-8 grid grid-cols-4 gap-4 p-5">
        <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-2">
          1
        </div>
        <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
          2
        </div>
        <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-2">
          3
        </div>
        <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
          4
        </div>
        <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-3">
          5
        </div>
      </section>
    </article>
  );
};

export default ProjectGallery;

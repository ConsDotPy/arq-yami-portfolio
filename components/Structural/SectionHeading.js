const SectionHeading = ({ preText, title, description }) => {
  return (
    <section className="max-w-prose px-6 mx-auto text-center">
      <h2>
        <span className="block text-base text-blue-600 font-semibold tracking-wide uppercase sm:text-lg">
          {preText}
        </span>
        <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {title}
        </span>
      </h2>
      <p className="mt-6 text-lg font-medium text-gray-400 leading-8">
        {description}
      </p>
    </section>
  );
};

export default SectionHeading;

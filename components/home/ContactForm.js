import SectionHeading from "../Structural/SectionHeading";

const ContactForm = () => {
  return (
    <article className="max-w-5xl mx-auto">
      {/* Heading */}
      <SectionHeading
        preText="Contact Me"
        title="Want to Get in Touch?"
        description="Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
          arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
          feugiat egestas ac."
      />

      {/* Form */}
      <form className="flex justify-around flex-wrap space-y-8 mt-6">
        {/* Name */}
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <div className="mt-1 border-b border-gray-200 focus-within:border-blue-600 w-5/12">
          <input
            type="text"
            name="name"
            id="name"
            className="shadow-md py-5 px-6 border-0 border-b-2 w-full border-transparent bg-gray-50 focus:border-blue-600 focus:ring-0 sm:text-base font-medium focus:shadow-lg"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Company */}
        <label htmlFor="company" className="sr-only">
          Company
        </label>

        <div className="mt-1 border-b border-gray-200 focus-within:border-blue-600 w-5/12">
          <input
            type="text"
            name="company"
            id="company"
            className="shadow-md py-5 px-6 border-0 border-b-2 w-full border-transparent bg-gray-50 focus:border-blue-600 focus:ring-0 sm:text-base font-medium focus:shadow-lg"
            placeholder="Enter your company (optional)"
          />
        </div>

        {/* Email */}
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <div className="mt-1 border-b border-gray-200 focus-within:border-blue-600 w-5/12">
          <input
            type="email"
            name="email"
            id="email"
            className="shadow-md py-5 px-6 border-0 border-b-2 w-full border-transparent bg-gray-50 focus:border-blue-600 focus:ring-0 sm:text-base font-medium focus:shadow-lg"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone */}
        <label htmlFor="phone" className="sr-only">
          Phone
        </label>

        <div className="mt-1 border-b border-gray-200 focus-within:border-blue-600 w-5/12">
          <input
            type="tel"
            name="phone"
            id="phone"
            className="shadow-md py-5 px-6 border-0 border-b-2 w-full border-transparent bg-gray-50 focus:border-blue-600 focus:ring-0 sm:text-base font-medium focus:shadow-lg"
            placeholder="Enter your phone (optional)"
          />
        </div>

        {/* Message */}
        <label htmlFor="message" className="sr-only">
          Message
        </label>

        <div className="mt-1 border-b border-gray-200 focus-within:border-blue-600 w-full">
          <textarea
            name="message"
            id="message"
            cols="15"
            rows="7"
            className="shadow-md py-5 px-6 border-0 w-full border-transparent bg-gray-50 focus:border-blue-600 focus:ring-0 sm:text-base font-medium focus:shadow-lg"
            placeholder="Enter your message"
          ></textarea>
        </div>
      </form>
    </article>
  );
};

export default ContactForm;
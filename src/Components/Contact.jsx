const Contact = ({ contactRef }) => {
  const inputFields = [
    { type: "text", name: "FirstName", placeholder: "First Name" },
    { type: "text", name: "LastName", placeholder: "Last Name" },
    { type: "email", name: "Email", placeholder: "Email" },
    { type: "number", name: "PhoneNumber", placeholder: "Phone Number" },
  ];

  return (
    <div
      ref={contactRef}
      className="min-h-[calc(100svh-80px)] flex-col w-full flex items-center justify-center pt-16 mb-32 px-4 lg:px-14 gap-8"
    >
      <h1 className="lg:text-5xl text-3xl text-center font-bold">Contact Me</h1>
      <h3 className="text-lg font-semibold text-center">
        If you're looking for a skilled developer to enhance your project, feel
        free to reach out. Let's connect!
      </h3>
      <form className="lg:w-[50%] w-full 2xl:max-w-[700px] grid place-items-center grid-cols-1 lg:grid-cols-2 gap-7">
        {inputFields.map((field, index) => (
          <div key={index} className="w-full">
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="border-2 px-3 py-3 rounded-lg text-lg font-medium text-black placeholder-black border-btnColor outline-none w-full bg-transparent"
            />
          </div>
        ))}
        <textarea
          rows={5}
          type="text"
          name="Message"
          placeholder="Message"
          className="border-2 px-3 py-3 rounded-lg text-lg font-medium text-black placeholder-black border-btnColor outline-none w-full bg-transparent col-span-1 lg:col-span-2"
        />
        <button
          type="submit"
          className="bg-btnColor hover:bg-white hover:text-btnColor hover:border-[1px] hover:border-btnColor transition-all duration[500ms] ease-linear text-white text-lg font-medium px-4 py-3 rounded-xl col-span-1 lg:col-span-2 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

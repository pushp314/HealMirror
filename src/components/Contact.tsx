import table from "../assests/hand.svg";
const Contact = () => {
  return (
    <div id="#contact">
      <section className="py-16 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side - Illustration */}
            <div className="md:w-1/2 bg-amber-50 rounded-md p-6">
              <div className="flex justify-center">
                <img
                  src="https://res.cloudinary.com/dgzv4skru/image/upload/v1746559274/contact_nwoxsg.svg"
                  alt="Contact illustration"
                  className="max-w-full h-auto"
                />
              </div>
            </div>

            {/* Right side - Form */}
            <div className="md:w-2/5">
              {" "}
              {/* Adjusted width here */}
              <h2 className="text-2xl font-bold text-right mb-6">
                We'd love to hear
                <br />
                from you
              </h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                    placeholder="Name*"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                    placeholder="Email*"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="regarding"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                    placeholder="Regarding*"
                  />
                </div>

                <div>
                  <textarea
                    id="body"
                    rows={3}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                    placeholder="Body of Subject*"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded font-medium hover:bg-gray-800 transition-colors duration-300"
                >
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="m-16 py-16">
        <img src={table} alt="Office space" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Contact;

import table from "../assests/hand.svg";

const Contact = () => {
  return (
    <div id="contact" className="w-full overflow-x-hidden">
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side - Illustration */}
            <div className="w-full md:w-1/2 bg-amber-50 rounded-md p-4 sm:p-6">
              <div className="flex justify-center">
                <img
                  src="https://res.cloudinary.com/dgzv4skru/image/upload/v1746559274/contact_nwoxsg.svg"
                  alt="Contact illustration"
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full md:w-2/5">
              <h2 className="text-xl sm:text-2xl font-bold text-right mb-4 sm:mb-6">
                We'd love to hear
                <br />
                from you
              </h2>
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:border-transparent text-sm sm:text-base"
                    placeholder="Name*"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:border-transparent text-sm sm:text-base"
                    placeholder="Email*"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="regarding"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:border-transparent text-sm sm:text-base"
                    placeholder="Regarding*"
                  />
                </div>

                <div>
                  <textarea
                    id="body"
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:border-transparent text-sm sm:text-base"
                    placeholder="Body of Subject*"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded font-medium hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
                >
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 py-8 sm:py-12 md:py-16">
        <img src={table} alt="Office space" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Contact
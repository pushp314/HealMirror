import Header from "../Header";
import Footer from "../Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl">
            <div className="p-6 sm:p-8 md:p-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Healmirror App - Terms and Conditions
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mb-8">
                Healmirror Resilience Private Limited<br />
                Effective Date: May 6, 2025
              </p>

              <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700">
                <p className="mb-8">
                  These Terms and Conditions ("Terms") govern your use of the Healmirror App (the "App"), operated by Healmirror Resilience Private Limited ("we," "us," "our"). By accessing or using our App, you agree to be bound by these Terms. Please read them carefully.
                </p>

                <section className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    1. Service Fees and No Brokerage for Professionals
                  </h2>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                    <p className="text-gray-700">
                      The Healmirror App offers free registration and platform access to licensed doctors and mental health professionals. However, clients utilizing the platform to consult with mental health professionals will be subject to standard consultation fees as displayed within the App.
                    </p>
                  </div>
                </section>

                {/* Additional sections follow the same pattern... */}

                <section className="mt-12 p-6 bg-yellow-50 rounded-xl">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Important Notice</h2>
                  <p className="text-gray-700">
                    By continuing to use the Healmirror App after the Effective Date, you acknowledge that you have read, understood, and agree to be bound by these updated Terms and Conditions.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
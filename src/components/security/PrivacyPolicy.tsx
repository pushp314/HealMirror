import Footer from "../Footer";
import Header from "../Header";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl">
            <div className="p-6 sm:p-8 md:p-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">Healmirror App - Privacy Policy</h1>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                Healmirror Resilience Private Limited<br />
                Effective Date: May 6, 2025
              </p>

              <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700">
                <p className="mb-6">This Privacy Policy outlines how Healmirror Resilience Private Limited ("we," "us," "our") collects, uses, discloses, and safeguards the personal information of individuals who use the Healmirror App, including both clients seeking mental wellness support ("Clients" or "Patients") and licensed mental health professionals offering their services ("Partners" or "Mental Health Professionals"). By using our App, you consent to the practices described in this Privacy Policy.</p>

                <section className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                  <p className="mb-4">We collect different types of information from Clients and Partners to provide and improve our services.</p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1.1 Information Collected from Clients:</h3>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Account Information: Name, email, phone number, date of birth, and gender.</li>
                    <li>Profile Information: Optional details such as location, therapy preferences, etc.</li>
                    <li>Appointment Information: Appointment date, time, and consulted Partner.</li>
                    <li>Payment Information: Payment details processed securely (not stored directly).</li>
                    <li>Communications: Chat records within the App.</li>
                    <li>Usage Data: Pages visited, features used, session duration.</li>
                    <li>Technical Information: IP, device type, OS, browser type.</li>
                    <li>Advertising Interaction Data: Clicks and views on in-app ads.</li>
                  </ul>

                  {/* Rest of the content follows the same pattern... */}
                </section>

                {/* Contact section at the bottom */}
                <section className="mt-12 p-6 bg-yellow-50 rounded-xl">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-700">
                    Healmirror Resilience Private Limited<br />
                    Address: Shop 13 / Block 18, Dakshin Gangotri, Supela,<br />
                    Bhilai, District Durg, Chhattisgarh, India, Pin 490023<br />
                    Email: Support@healmirror.com | Help@healmirror.com
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

export default PrivacyPolicy;
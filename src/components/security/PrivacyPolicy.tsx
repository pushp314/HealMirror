import Footer from "../Footer";
import Header from "../Header";

const PrivacyPolicy = () => {
  return (
    <section>
      <Header/>
    <div className="p-4 max-w-5xl mx-auto">
      <div className="bg-white shadow-lg rounded-2xl">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">Healmirror App - Privacy Policy</h1>
          <p className="mb-4">Healmirror Resilience Private Limited<br />Effective Date: May 6, 2025</p>
          <p className="mb-4">This Privacy Policy outlines how Healmirror Resilience Private Limited ("we," "us," "our") collects, uses, discloses, and safeguards the personal information of individuals who use the Healmirror App, including both clients seeking mental wellness support ("Clients" or "Patients") and licensed mental health professionals offering their services ("Partners" or "Mental Health Professionals"). By using our App, you consent to the practices described in this Privacy Policy.</p>
          <h2 className="text-xl font-semibold mt-4 mb-2">1. Information We Collect</h2>
          <p>We collect different types of information from Clients and Partners to provide and improve our services.</p>
          <h3 className="font-semibold mt-3">1.1 Information Collected from Clients:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>Account Information: Name, email, phone number, date of birth, and gender.</li>
            <li>Profile Information: Optional details such as location, therapy preferences, etc.</li>
            <li>Appointment Information: Appointment date, time, and consulted Partner.</li>
            <li>Payment Information: Payment details processed securely (not stored directly).</li>
            <li>Communications: Chat records within the App.</li>
            <li>Usage Data: Pages visited, features used, session duration.</li>
            <li>Technical Information: IP, device type, OS, browser type.</li>
            <li>Advertising Interaction Data: Clicks and views on in-app ads.</li>
          </ul>
          <h3 className="font-semibold mt-3">1.2 Information Collected from Partners:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>Account Information: Name, license info, email, phone, DOB, qualifications.</li>
            <li>Profile Information: Specialization, experience, approaches, fees, availability.</li>
            <li>Appointment Information: Appointment records with Clients.</li>
            <li>Payment Information: Bank or payment details for receiving fees.</li>
            <li>Communications: Chat records with Clients.</li>
            <li>Usage Data: Availability settings, response times, interactions.</li>
            <li>Technical Information: IP, device type, OS, browser type.</li>
          </ul>
          <h3 className="font-semibold mt-3">1.3 Shared Information:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>With Client consent: Partners access Client profile and appointment info.</li>
            <li>With Partner consent: Clients access Partner profile and availability.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-4 mb-2">2. How We Use Your Information</h2>
          <h3 className="font-semibold mt-3">2.1 For Clients:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>Create/manage accounts, connect with Partners, schedule appointments.</li>
            <li>Process payments, support responses, personalize experience.</li>
            <li>Notifications, app improvement, analytics (anonymized).</li>
            <li>Ensure security and serve relevant ads.</li>
          </ul>
          <h3 className="font-semibold mt-3">2.2 For Partners:</h3>
          <ul className="list-disc list-inside mb-2">
            <li>Create/manage profile, connect with Clients, manage availability.</li>
            <li>Communication, payments, support, notifications.</li>
            <li>App improvement, analytics (anonymized), credential verification.</li>
            <li>Ensure security.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-4 mb-2">3. How We Share Your Information</h2>
          <ul className="list-disc list-inside mb-2">
            <li>With chosen Partners or Clients for appointments and communication.</li>
            <li>With service providers under strict confidentiality.</li>
            <li>For legal compliance or during business transfers.</li>
            <li>Share anonymized data for analytics/ads without identifying you.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-4 mb-2">4. Data Security</h2>
          <ul className="list-disc list-inside mb-2">
            <li>Encryption (SSL/TLS), firewalls, access control, regular reviews.</li>
            <li>No method is 100% secure; we take reasonable precautions.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-4 mb-2">5. Data Retention</h2>
          <p>We retain information as needed to deliver services, comply with law, resolve disputes, and enforce agreements.</p>
          <h2 className="text-xl font-semibold mt-4 mb-2">6. Your Rights</h2>
          <ul className="list-disc list-inside mb-2">
            <li>Access, correction, deletion, objection, portability, withdrawal of consent.</li>
            <li>Contact us to exercise these rights; identity verification may be needed.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-4 mb-2">7. Children's Privacy</h2>
          <p>Not intended for users under 18. Contact us to delete a minor's data if collected unknowingly.</p>
          <h2 className="text-xl font-semibold mt-4 mb-2">8. Changes to this Privacy Policy</h2>
          <p>Policy may be updated. Material changes will be notified. Continued use implies acceptance.</p>
          <h2 className="text-xl font-semibold mt-4 mb-2">9. Contact Us</h2>
          <p>Healmirror Resilience Private Limited<br />Address: [Shop 13 / Block 18], Dakshin Gangotri, Supela, Bhilai, District Durg, Chhattisgarh, India, Pin 490023<br />Email: Support@healmirror.com | Help@healmirror.com</p>
          <p className="mt-4">By using the Healmirror App, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your personal information as described herein.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </section>
  );
};

export default PrivacyPolicy;

import ContactForm from "@/components/contact/contactForm";
import RotatingText from "@/components/base/RotatingText";

const ContactPage = () => {
  return (
    <div className="flex h-auto flex-col-2 md:flex-row space-x-40 mt-20 p-10 px-48">

      <div className="w-full md:w-1/2 py-10">
        <h2 className="text-6xl font-bold text-black mb-4">Hello, I'm Evelyn!</h2>
        <div className="flex items-center gap-x-4 mb-4">
          <h2 className="text-4xl font-bold text-black">Contact</h2>

          <RotatingText
            texts={['Evelyn', 'Logic', 'Innovation', 'Future', 'Solutions', 'Creativity']}
            mainClassName="inline-flex w-min px-4 bg-gray-900 text-white font-bold text-4xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 2 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2100}
          />
        </div>

        <p className="text-lg text-gray-800 mb-6">
          If you have any questions or collaboration inquiries, please fill out the form, and we will get back to you as soon as possible.
        </p>
        <p className="text-md text-gray-600">
          You can also reach me at <a href="https://www.linkedin.com/in/evelyn-yin-03850222b/" className="text-blue-600"> Linkedin</a>
        </p>
      </div>

      <div className="w-full md:w-1/3 mt-5">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;

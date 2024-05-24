import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", name: "Email", text: "vigneshpanneer7@gmail.com", action: "mailto:vigneshpanneer7@gmail.com" },
    { logo: "logo-whatsapp", name: "Call", text: "+91-9786795296", action: "tel:+919786795296" },
    { logo: "logo-linkedin", name: "Linkedin", text: "Linkedin", action: "https://in.linkedin.com/in/vigneshkumar-p-51baa6153" },
    {
      logo: "location",
      name: 'Address',
      text: "Tamil Nadu, India",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
    <div className="text-center mt-8">
      <h3 className="text-4xl font-semibold">
        Contact <span className="text-cyan-600">Me</span>
      </h3>
      <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

      <div className="mt-16 max-w-5xl mx-auto flex flex-wrap justify-center">
        {contact_info.map((contact, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col items-center shadow-lg mb-8" style={{ width: "250px", height: "200px", marginRight: "20px" }}>
            <div className="w-12 h-12 flex items-center justify-center text-white bg-cyan-600 rounded-full mb-2">
              <ion-icon name={contact.logo}></ion-icon>
            </div>
            <a href={contact.action} className="text-sm text-gray-300" target="_blank" rel="noopener noreferrer">
              <p className="text-lg font-semibold mb-1">{contact.name}</p>
              {contact.action ? (
                <p className="text-sm text-gray-300">{contact.text}</p>
              ) : (
                <p className="text-sm text-gray-300">{contact.text}</p>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Contact;

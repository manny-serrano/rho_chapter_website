import { useState } from "react";
import { contactFormFields, contactContent, contactSocialLinks } from "../constants";

const Contact = () => {
  const initialFormData = contactFormFields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission for now
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData(initialFormData);
    }, 1000);
  };

  const renderField = (field) => {
    const commonProps = {
      id: field.id,
      name: field.name,
      value: formData[field.name],
      onChange: handleChange,
      placeholder: field.placeholder,
      required: field.required
    };

    if (field.type === 'textarea') {
      return <textarea {...commonProps} rows={field.rows} />;
    }

    return <input type={field.type} {...commonProps} />;
  };

  const iconMap = {
    instagram: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.5 8.5H16V5h-1.5c-2.5 0-4.5 2-4.5 4.5V12H8v3.5h2v5h3.5v-5H16V12h-2.5V9.5a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    network: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="6" cy="6" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="6" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 7.5 11 15M16.5 7.5 13 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  };

  return (
    <section id="contact">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h1>{contactContent.title}</h1>
          <h2>{contactContent.subtitle}</h2>
          <div className="contact-social-links" aria-label="Social media links">
            {contactSocialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <span className="social-icon">
                  {iconMap[link.icon]}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {contactFormFields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              {renderField(field)}
            </div>
          ))}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative z-10 bg-primary text-white py-2 px-6 rounded-full font-bold text-lg cursor-pointer hover:bg-secondary hover:text-black transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? contactContent.button.sending : contactContent.button.default}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="status-message success">
              <p>{contactContent.messages.success}</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error">
              <p>{contactContent.messages.error}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;


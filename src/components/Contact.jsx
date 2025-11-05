import { useState } from "react";
import { contactFormFields, contactContent } from "../constants";

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

  return (
    <section id="contact">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h1>{contactContent.title}</h1>
          <h2>{contactContent.subtitle}</h2>
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


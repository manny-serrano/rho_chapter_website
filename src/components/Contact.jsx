import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { contactFormFields, contactContent, contactSocialLinks } from "../constants";

const defaultFormValues = contactFormFields.reduce((acc, field) => {
  acc[field.name] = "";
  return acc;
}, {});

const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const fieldValidations = {
  name: {
    required: {
      value: true,
      message: "Please enter your name",
    },
    maxLength: {
      value: 60,
      message: "Please use 60 characters or less",
    },
  },
  email: {
    required: {
      value: true,
      message: "Please enter an email address",
    },
    pattern: {
      value: EMAIL_PATTERN,
      message: "Please enter a valid email address",
    },
  },
  message: {
    required: {
      value: true,
      message: "Please enter a message",
    },
    maxLength: {
      value: 750,
      message: "Please keep messages under 750 characters",
    },
  },
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: defaultFormValues });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (!submitStatus) {
      return undefined;
    }

    const timeoutId = setTimeout(() => setSubmitStatus(null), 10000);

    return () => clearTimeout(timeoutId);
  }, [submitStatus]);

  const onSubmit = async (data) => {
    const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK;

    if (!webhookUrl) {
      console.error("Missing Google Sheets webhook URL. Please set VITE_CONTACT_WEBHOOK in your environment.");
      setSubmitStatus("error");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitStatus(null);

      const formPayload = new FormData();
      Object.entries(data).forEach(([key, value]) => formPayload.append(key, value));

      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        body: formPayload,
      });

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Failed to send contact form", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field) => {
    const error = errors[field.name];
    const validationRules = fieldValidations[field.name] || (field.required ? { required: "This field is required" } : undefined);
    const commonProps = {
      id: field.id,
      placeholder: field.placeholder,
      "aria-invalid": error ? "true" : "false",
      "aria-describedby": error ? `${field.id}-error` : undefined,
      ...register(field.name, validationRules),
    };

    const inputNode =
      field.type === "textarea" ? (
        <textarea {...commonProps} rows={field.rows} />
      ) : (
        <input type={field.type} {...commonProps} />
      );

    return (
      <>
        {inputNode}
        {error && (
          <span id={`${field.id}-error`} className="errorMessage">
            {error.message}
          </span>
        )}
      </>
    );
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

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
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


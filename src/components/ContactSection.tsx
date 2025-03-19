import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Mail, Github, Linkedin, Calendar, Send } from "lucide-react";
import { FaResearchgate, FaFacebook, FaOrcid } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = `
  ${formData.message}
  
  Regards,
  ${formData.name}
    `;

    const mailtoLink = `mailto:tahmidenam12@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-secondary/30 py-20">
      <div className="section-container">
        <SectionHeading
          title="Contact & Collaboration"
          subtitle="Interested in collaborating on research or have a question about my work? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new research opportunities,
              collaborations, or technical challenges in the field of AI and
              machine learning.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:tahmidenam12@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-2 -ml-2"
              >
                <Mail className="h-8 w-8" />
                <span>tahmidenam12@gmail.com</span>
              </a>

              <div className="flex flex-wrap justify-start gap-4 mt-6 overflow-hidden">
                <a
                  href="https://github.com/TahmidEnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background rounded-full p-3 text-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-8 w-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tahmid-enam-shrestha-854168247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background rounded-full p-3 text-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=uH-WFO4AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background rounded-full p-3 text-foreground hover:text-primary transition-colors"
                  aria-label="Google Scholar"
                >
                  <FaGoogleScholar className="h-8 w-8" />
                </a>
                <a
                  href="https://www.researchgate.net/profile/Tahmid-Shrestha/research"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background rounded-full p-3 text-foreground hover:text-primary transition-colors"
                  aria-label="ResearchGate"
                >
                  <FaResearchgate className="h-8 w-8" />
                </a>
                <a
                  href="https://www.facebook.com/tahmid.enamshrestha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background rounded-full p-3 text-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-8 w-8" />
                </a>
                <a
                  href="https://orcid.org/my-orcid?orcid=0009-0007-0075-5699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background rounded-full p-3 text-foreground hover:text-primary transition-colors"
                  aria-label="ORCiD"
                >
                  <FaOrcid className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-border animate-fade-up">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium transition-all hover:shadow-md hover:shadow-primary/20 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

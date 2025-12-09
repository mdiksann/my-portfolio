import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section id="contact" ref={sectionRef} className={`min-h-screen flex items-center justify-center py-20 px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-5xl font-bold mb-6 text-white">Let's talk</h3>
        <p className="text-2xl text-gray-400 mb-12">on something great together</p>

        {/* Send Message Button */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mdiksann@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 mb-12"
        >
          <Mail className="w-6 h-6" />
          Send me a message
        </a>

        {/* Social Links */}
        <div className="flex gap-4 justify-center">
          <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-blue-500 rounded hover:bg-blue-600 transition flex items-center justify-center" aria-label="GitHub">
            <Github className="w-7 h-7 text-white" />
          </a>
          <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-blue-500 rounded hover:bg-blue-600 transition flex items-center justify-center" aria-label="LinkedIn">
            <Linkedin className="w-7 h-7 text-white" />
          </a>
          <a href={data.social.instagram} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-blue-500 rounded hover:bg-blue-600 transition flex items-center justify-center" aria-label="Instagram">
            <Instagram className="w-7 h-7 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const Contact = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  const socials = [
    { href: data.social.github, label: "GitHub", Icon: Github },
    { href: data.social.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: data.social.instagram, label: "Instagram", Icon: Instagram },
  ];

  return (
    <section id="contact" ref={sectionRef} className={`min-h-screen flex items-center justify-center py-20 px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="w-full max-w-2xl">
        {/* Terminal window */}
        <div className="rounded-xl border border-tn-border bg-tn-surface/80 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden text-center">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-tn-elevated border-b border-tn-border">
            <span className="w-3 h-3 rounded-full bg-tn-boolean/80"></span>
            <span className="w-3 h-3 rounded-full bg-tn-number/80"></span>
            <span className="w-3 h-3 rounded-full bg-tn-string/80"></span>
            <span className="ml-3 font-mono text-xs sm:text-sm text-tn-muted">~/contact</span>
          </div>

          <div className="p-6 sm:p-10">
            {/* prompt */}
            <p className="font-mono text-sm sm:text-base text-tn-muted mb-6 text-left">
              <span className="text-tn-string">$</span> <span className="text-tn-text">./say-hello.sh</span>
              <span className="text-tn-accent animate-blink ml-1">▋</span>
            </p>

            <h3 className="text-4xl sm:text-5xl font-bold mb-3 text-tn-text">Let's talk</h3>
            <p className="text-lg sm:text-2xl text-tn-muted mb-10">on something great together</p>

            {/* CTA */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mdiksann@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-tn-accent hover:bg-tn-violet text-tn-bg text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 mb-10 font-mono"
            >
              <Mail className="w-5 h-5" />
              Send me a message
            </a>

            {/* Social links */}
            <div className="flex gap-3 sm:gap-4 justify-center">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-tn-elevated border border-tn-border rounded-lg hover:border-tn-accent hover:text-tn-accent text-tn-muted transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

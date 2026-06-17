import React from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const ContactPanel = ({ data }) => {
  const socials = [
    { href: data.social.github, label: "GitHub", Icon: Github },
    { href: data.social.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: data.social.instagram, label: "Instagram", Icon: Instagram },
  ];

  return (
    <div className="p-6 sm:p-10 md:p-12 font-mono max-w-2xl mx-auto animate-fade-in">
      {/* doc comment */}
      <div className="text-tn-muted/80 text-sm space-y-0.5 mb-8">
        <p>/**</p>
        <p>{" * Let's build something together."}</p>
        <p>{" */"}</p>
      </div>

      <p className="text-sm sm:text-base text-tn-muted mb-6">
        <span className="text-tn-string">$</span> <span className="text-tn-text">./say-hello.sh</span>
        <span className="text-tn-accent animate-blink ml-1">▋</span>
      </p>

      <h3 className="text-4xl sm:text-5xl font-bold mb-3 text-tn-text">Let's talk</h3>
      <p className="text-lg sm:text-2xl text-tn-muted mb-10">on something great together</p>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=mdiksann@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-7 py-3.5 bg-tn-accent hover:bg-tn-violet text-tn-bg text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
      >
        <Mail className="w-5 h-5" />
        Send me a message
      </a>

      {/* social links */}
      <div className="flex gap-3 sm:gap-4 mt-10">
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
  );
};

export default ContactPanel;

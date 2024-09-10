import React from "react";
import { SectionHeader } from "../section-header";
import { ContactForm } from "./contact-form";

export const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact">

        <SectionHeader title="Get In Touch" />
        
        <ContactForm />
      </section>
    </div>
  );
};

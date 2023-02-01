import React from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";
import ContactForm from '../components/contactform'

const Contact: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="space-y-4 m-3 pt-4 pb-4">
        <h1 className="text-5xl font-bold">Contact Me 💬</h1>
        <p className="opacity-90">
            Need to get in touch with me? Email me at{" "}
            <span className="font-semibold"><a className="hover:scale-105" href="mailto:hi@itsalexander.dev">hi@itsalexander.dev</a></span>
            {" "}
            or, feel free to fill out the form below, or reach out to me on my socials! They can also be found below.
        </p>
        
      </div>

      <div className="mt-8">
        <ContactForm />  
      </div>
    </motion.div>
  );
};

export default Contact;

import React from "react";
import { NextPage } from "next";
import { motion } from "framer-motion";

const Contact: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="space-y-4 m-3 pt-4 pb-4 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold">Contact Me 💬</h1>
        <p className="opacity-90">
          Need to get in touch with me? Email me at{" "}
          <span className="font-semibold">
            <a className="hover:scale-105" href="mailto:hi@itsalexander.dev">
              hi@itsalexander.dev
            </a>
          </span>{" "}
          by clicking the button below! Or reach out to me on my socials, they can be found on the home page!
        </p>
        <div className="mt-8">
          <motion.a
            className="border-[#39313f] bg-[#231a29] border border-b-4 cursor-pointer p-3 py-4 rounded-lg hover:scale-105 transition-all flex flex-row max-w-3xl mx-auto"
            whileTap={{ scale: 0.98 }}
            href="mailto:hi@itsalexander.dev"
            target="_blank"
          >
            <p className="mx-auto font-bold">Send Email</p>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

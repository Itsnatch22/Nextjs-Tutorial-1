"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    // GSAP animation for the footer sections
    gsap.fromTo(
      ".footer-section",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <motion.div
      className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Community Section */}
          <motion.div
            className="footer-section min-w-[200px] h-auto flex flex-col items-center justify-start"
            whileHover={{ scale: 1.05 }}
          >
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            className="footer-section min-w-[200px] h-auto flex flex-col items-center justify-start"
            whileHover={{ scale: 1.05 }}
          >
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </p>
          </motion.div>

          {/* About Section */}
          <motion.div
            className="footer-section min-w-[200px] h-auto flex flex-col items-center justify-start"
            whileHover={{ scale: 1.05 }}
          >
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">kamaumark996@gmail.com</span>
            </p>
          </motion.div>
        </div>

        {/* Footer Text */}
        <motion.div
          className="mb-[20px] text-[15px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          &copy; Itsnatch. All rights reserved
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

import logo from "@assets/logos/logo.svg";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiCloseLargeLine, RiMenu3Fill } from "react-icons/ri";

const linkItems = [
  { id: 1, link: "Create Resume", path: "#createResume" },
  { id: 2, link: "Skillset", path: "#skillSet" },
  { id: 3, link: "Partnered Job Board", path: "#partneredJob" },
  { id: 4, link: "Contact Us", path: "#contactUs" },
];

function Navbar() {
  const [toggled, setToggled] = useState(false);

  const handleToggled = () => {
    setToggled((prev) => !prev);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <header className="fixed top-4 z-50 w-full px-3 py-1 lg:relative lg:top-0 lg:px-12 lg:py-4">
      <nav
        className={`flex w-full flex-col items-center justify-between border-[1px] border-white bg-[#846EEE]/40 px-3 py-2.5 shadow backdrop-blur-xl lg:flex-row lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none lg:backdrop-blur-none ${
          toggled ? "rounded-2xl" : "rounded-full"
        } `}
      >
        <div className="flex w-full items-center justify-between">
          <Image
            onClick={handleRefresh}
            src={logo}
            alt="Logo"
            className="h-auto w-[130px] cursor-pointer object-cover lg:w-[187px]"
          />

          <ul className="mx-8 hidden items-center justify-center gap-10 lg:flex">
            {linkItems.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer text-base leading-[150%] text-neutral-800"
              >
                <a href={link.path}>{link.link}</a>{" "}
              </li>
            ))}
          </ul>

          <button className="hidden cursor-pointer items-center justify-center gap-2.5 rounded-full border border-white px-2 py-1.5 text-base leading-[150%] font-bold text-white backdrop-blur-lg outline-none lg:flex">
            Register Now
            <span className="text-primary flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white">
              <MdOutlineArrowOutward className="text-xl" />
            </span>
          </button>

          <button
            onClick={handleToggled}
            className="flex text-2xl font-bold text-white lg:hidden"
          >
            {toggled ? <RiCloseLargeLine /> : <RiMenu3Fill />}
          </button>
        </div>

        {toggled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative w-full"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              className="mt-1.5 flex w-full flex-col items-start gap-4"
            >
              {linkItems.map((link, index) => (
                <motion.li
                  key={index}
                  className="flex w-full cursor-pointer items-start justify-between text-sm leading-[150%] text-neutral-800"
                  variants={menuVariants}
                  transition={{ duration: 0.3 }}
                  onClick={() => setToggled(false)}
                >
                  <a href={link.path}>{link.link}</a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;

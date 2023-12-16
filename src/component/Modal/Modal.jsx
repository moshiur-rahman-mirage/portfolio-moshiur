import React from "react";
import "./Modal.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Modal = ({ project, close }) => {
  const { id, image, description, name,technology } = project;

  const modalVariants = {
    open: {
      opacity: 1,
      backgroundColor: "rgba(255,255,255,0.7)",
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
      className="modal"
      variants={modalVariants}
    //   onClick={(e) => e.stopPropagation()}
    >
      <motion.img
        className="modal__image"
        alt="Contest"
        src={image}
        variants={imageVariants}
      ></motion.img>

      <motion.div
        className="bg-white flex flex-col items-start w-full h-full p-5"
        variants={modalInfoVariants}
      >
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__price">{name}</span>
        </motion.div>
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">{description}</p>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="text-sm text-[#737373]">{technology}</span>
        </motion.div>
        <div className="flex items-center md:flex-row flex-col md:gap-5">
            <button className="btn btn-primary">Github Link</button>
            <button className="btn btn-primary">Demo Link</button>
        </div>
        <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;

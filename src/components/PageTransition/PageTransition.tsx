import type { FC, ReactNode } from "react";
import React from "react";
import { motion } from "framer-motion";

const PageTransition: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

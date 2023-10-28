import type { FC, ReactNode } from "react";
import React from "react";
import { AnimatePresence } from "framer-motion";

export const TransitionRoot: FC<{ children?: ReactNode }> = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default TransitionRoot;

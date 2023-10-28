import type { FC, ReactNode } from "react";
import React from "react";

import { PageTransition } from "../components/PageTransition";

export const withFramer =
  (Component: FC<{ children?: ReactNode }>) =>
  (props: { children?: ReactNode }) => {
    return (
      <PageTransition>
        <Component>{props.children}</Component>
      </PageTransition>
    );
  };

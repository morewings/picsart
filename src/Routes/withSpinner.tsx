import type { FC, ReactNode } from "react";
import React, { Suspense } from "react";

import { Loading } from "../components/Loading";

export const withSpinner =
  (Component: FC<{ children?: ReactNode }>) =>
  (props: { children?: ReactNode }) => {
    return (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    );
  };

import type { FC } from "react";
import React from "react";
import { Box, Spinner } from "grommet";

const Loading: FC = () => {
  return (
    <Box flex="grow" align="center" justify="center" height="300px">
      <Spinner />
    </Box>
  );
};

export default Loading;

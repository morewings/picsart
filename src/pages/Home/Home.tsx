import type { FC } from "react";
import React from "react";
import { Box, Grid, PageHeader } from "grommet";

import { UserForm } from "../../components/UserForm";

const Home: FC = () => {
  return (
    <Grid
      fill
      rows={["auto", "flex"]}
      columns={["auto", "flex"]}
      areas={[
        { name: "header", start: [0, 0], end: [1, 0] },
        { name: "main", start: [1, 1], end: [1, 1] },
      ]}
    >
      <PageHeader
        gridArea="header"
        direction="row"
        align="center"
        justify="between"
        pad={{ horizontal: "medium", vertical: "small" }}
        title="Add user"
        subtitle="Here you can add user"
      />
      <Box
        gridArea="main"
        justify="center"
        align="start"
        pad={{ horizontal: "medium", vertical: "small" }}
      >
        <UserForm />
      </Box>
    </Grid>
  );
};

export default Home;

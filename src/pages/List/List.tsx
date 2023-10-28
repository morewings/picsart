import type { FC } from "react";
import React, { useEffect } from "react";
import { Grid, Box, PageHeader } from "grommet";

import { useGetListQuery } from "../../features/users";
import { DataTable } from "../../components/DataTable";

const List: FC = () => {
  const getUserList = useGetListQuery();
  useEffect(() => {
    getUserList();
  }, [getUserList]);
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
        title="User list"
        subtitle="Click column headers (name and age) to sort. Click search icon to filter. Click rows to see user info."
      />
      <Box gridArea="main" justify="center" align="start">
        <DataTable />
      </Box>
    </Grid>
  );
};

export default List;

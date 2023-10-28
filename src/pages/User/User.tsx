import type { FC } from "react";
import React, { useEffect } from "react";
import { Grid } from "grommet";
import { useParams } from "react-router-dom";

import { UserInfo } from "../../components/UserInfo";
import { useGetInfoQuery } from "../../features/users";

const User: FC = () => {
  const { id } = useParams();
  const getInfo = useGetInfoQuery();
  useEffect(() => {
    getInfo(id);
  }, [getInfo, id]);
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
      <UserInfo id={id} />
    </Grid>
  );
};

export default User;

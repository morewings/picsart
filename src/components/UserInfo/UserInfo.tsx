import type { FC } from "react";
import React, { Fragment, useCallback } from "react";
import {
  Avatar,
  Box,
  NameValueList,
  NameValuePair,
  PageHeader,
  Text,
  Button,
} from "grommet";
import { useNavigate } from "react-router-dom";

import { useInfo } from "../../features/users";
import { calculateAge } from "../../utils/calculateAge";

const UserInfo: FC<{ id?: string }> = ({ id }) => {
  const info = useInfo(id);
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate("/list");
  }, [navigate]);
  return (
    <Fragment>
      <Box
        gridArea="header"
        direction="row"
        align="center"
        justify="between"
        pad={{ horizontal: "medium", vertical: "small" }}
      >
        <PageHeader title="User info" subtitle="Detailed user info" />
      </Box>
      <Box gridArea="main" justify="center" align="start" pad="medium">
        <Avatar size="large" src={info?.avatar} />
        <NameValueList>
          <NameValuePair name="Name">
            <Text color="text-strong">{info?.firstName}</Text>
          </NameValuePair>
          <NameValuePair name="Last name">
            <Text color="text-strong">{info?.lastName}</Text>
          </NameValuePair>
          <NameValuePair name="Age">
            <Text color="text-strong">
              {info?.birthdate && calculateAge(info?.birthdate)}
            </Text>
          </NameValuePair>
          <NameValuePair name="Email">
            <Text color="text-strong">{info?.email}</Text>
          </NameValuePair>
          <NameValuePair name="Address">
            <Text color="text-strong">
              {info?.address.country}, {info?.address.city},{" "}
              {info?.address.street}
            </Text>
          </NameValuePair>
        </NameValueList>
        <Button
          onClick={handleClick}
          type="button"
          primary
          label="View full list"
        />
      </Box>
    </Fragment>
  );
};

export default UserInfo;

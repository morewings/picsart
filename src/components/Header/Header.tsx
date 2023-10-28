import type { FC } from "react";
import React, { useCallback } from "react";
import {
  Nav,
  Header as GrommetHeader,
  Heading,
  Button,
  Box,
  ResponsiveContext,
  Menu,
} from "grommet";
import { Home, Search, Sun, Moon, Menu as MenuIcon } from "grommet-icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { NavLink } from "../NavLink";
import { useActiveTheme, Themes, useToggleTheme } from "../../features/themes";

const SiteName = styled(Heading)`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 24px;
`;

const StyledButton = styled(Button)`
  width: 133px;
`;

const Header: FC = () => {
  const theme = useActiveTheme();
  const toggleTheme = useToggleTheme();
  const handleClick = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);
  const Icon = {
    [Themes.day]: Sun,
    [Themes.night]: Moon,
  }[theme];
  const label = {
    [Themes.day]: "Day",
    [Themes.night]: "Night",
  }[theme];
  const navigate = useNavigate();
  return (
    <GrommetHeader
      pad={{ left: "medium", right: "medium", vertical: "small" }}
      background="brand"
    >
      <Box direction="row" gap="medium">
        <SiteName>Picsart</SiteName>
        <ResponsiveContext.Consumer>
          {(size) =>
            size === "small" ? (
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: "bottom", right: "right" } }}
                icon={<MenuIcon color="white" />}
                items={[
                  {
                    label: <Box pad="small">Home</Box>,
                    onClick: () => {
                      navigate("/");
                    },
                  },
                  {
                    label: <Box pad="small">Users</Box>,
                    onClick: () => {
                      navigate("/list");
                    },
                  },
                ]}
              />
            ) : (
              <Nav direction="row">
                <NavLink icon={<Home />} to="/" label="Home" />
                <NavLink icon={<Search />} label="Users" to="/list" />
              </Nav>
            )
          }
        </ResponsiveContext.Consumer>
      </Box>
      <StyledButton
        icon={<Icon />}
        label={label}
        onClick={handleClick}
        active={true}
      />
    </GrommetHeader>
  );
};

export default Header;

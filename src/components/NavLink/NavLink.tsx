import type { FC } from "react";
import React from "react";
import type { AnchorExtendedProps } from "grommet/components/Anchor";
import { Anchor } from "grommet/components/Anchor";
import type { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

export type NavLinkProps = LinkProps & AnchorExtendedProps;

const StyledLink = styled(Link)`
  display: flex;
`;

const NavLink: FC<NavLinkProps> = (props) => {
  return <Anchor as={StyledLink} {...props} />;
};

export default NavLink;

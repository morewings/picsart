import type { FC } from "react";
import React, { memo } from "react";
import { grommet, Grommet } from "grommet";

import { Routes } from "../../Routes";
import { Header } from "../Header";
import { useActiveTheme, Themes } from "../../features/themes";

const MemoizedRoutes = memo(Routes);

const App: FC = () => {
  const theme = useActiveTheme();
  const mode = {
    [Themes.day]: "light",
    [Themes.night]: "dark",
  }[theme] as "light" | "dark";
  return (
    <Grommet theme={grommet} full themeMode={mode}>
      <Header />
      <MemoizedRoutes />
    </Grommet>
  );
};

export default App;

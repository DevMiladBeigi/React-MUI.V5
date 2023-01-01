import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React from "react";

const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})
export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar><Typography variant="h6">LAMA DEV </Typography></StyledToolbar>
    </AppBar>
  );
};

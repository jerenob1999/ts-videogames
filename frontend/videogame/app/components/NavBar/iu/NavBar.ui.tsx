"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Route } from "../../../models/routes.model";
import Link from "next/link";
interface Props {
  pathNames: Route[];
}

export default function ButtonAppBar({ pathNames }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {pathNames.map((pathname) => (
            <Link className="link" key={pathname.path} href={pathname.path}>
              <Button color="inherit">{pathname.name}</Button>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

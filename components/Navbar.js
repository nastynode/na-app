import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Logo from './Logo';
import { MenuItem } from '@mui/material';
import Link from 'next/link';

const pages = [
  {page: "Home", path: "/"},
  {page: "Conventions", path: "/conventions"},
  {page: "Campouts", path: "/campouts"},
  {page: "Contribute", path: "/contribute"}
]

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Logo className="mr-2"/>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          {pages.map((p) => (
            <MenuItem key={p.page} className='mx-2 text-sm'>
              <Link href={p.path}>
                {p.page}
              </Link>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
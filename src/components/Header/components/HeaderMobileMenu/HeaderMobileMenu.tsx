'use client';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { styles } from './HeaderMobileMenu.styles';
import { HeaderConfigTypes } from '../../config/headerOptions.config';

export const HeaderMobileMenu = (props: { pages: HeaderConfigTypes[] }) => {
  const { pages } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const pathname = usePathname();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size='large'
        onClick={handleOpenNavMenu}
      >
        {anchorEl ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        marginThreshold={0}
        open={Boolean(anchorEl)}
        onClose={handleCloseNavMenu}
        sx={styles.menu}
      >
        {pages?.map(({ id, url }) => (
          <MenuItem
            key={id}
            component={Link}
            href={url}
            onClick={handleCloseNavMenu}
            sx={[styles.menuItem, pathname === url && styles.locationMenuItem]}
          >
            {id}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

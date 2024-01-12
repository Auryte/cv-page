'use client';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SyntheticEvent, useEffect, useState } from 'react';

import { currentTab } from '@/utils/header';

import { HeaderTabBarComponent } from './../../Header.types';
import { styles } from './HeaderTabBar.styles';

export const HeaderTabBar: HeaderTabBarComponent = (props) => {
  const { pages, dictionary } = props;
  const pathname = usePathname();
  const [page, setPage] = useState(currentTab(pathname, dictionary));

  useEffect(() => {
    setPage(currentTab(pathname, dictionary));
  }, [pathname, dictionary]);

  const handleChange = (event: SyntheticEvent, newPage: string) => {
    setPage(newPage);
  };

  return (
    <Tabs
      value={page}
      onChange={handleChange}
      textColor='inherit'
      centered
      aria-label='nav-tabs'
      TabIndicatorProps={{
        sx: styles.tabsIndicatorProps,
      }}
      sx={styles.tabsContent}
    >
      {pages &&
        pages.map(({ id, url }) => (
          <Tab
            key={id}
            label={id}
            value={id}
            href={url}
            LinkComponent={Link}
            sx={styles.headerTabBar}
          />
        ))}
    </Tabs>
  );
};

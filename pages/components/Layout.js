import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import useStyles from '../../utils/styles';

function Layout({ children, props }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>PropinVC</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>PropinVC</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <foote className={classes.footer} r>
        <Typography>All rights reserved. @PropinVC</Typography>
      </foote>
    </div>
  );
}

export default Layout;

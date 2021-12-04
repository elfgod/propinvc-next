import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Container, Toolbar, Typography, Link } from '@mui/material';
import useStyles from '../../utils/styles';

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>PropinVC</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>PropinVC</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer} r>
        <Typography>All rights reserved. @PropinVC</Typography>
      </footer>
    </div>
  );
}

export default Layout;

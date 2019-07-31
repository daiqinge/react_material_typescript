import { List, ListItem, withStyles } from '@material-ui/core';
import footerStyle from 'assets/jss/material-dashboard-react/footerStyle';
import * as React from 'react';

interface Props {
  classes: {
    footer: string;
    container: string;
    left: string;
    list: string;
    inlineBlock: string;
    block: string;
    right: string;
    a: string;
  };
}

const Footer: React.SFC<Props> = props => {
  const { classes } = props;

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={classes.block}>
                Contact Us
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {new Date().getFullYear()}
            <a href="https://www.google.com/" className={classes.a}>
              Company Name
            </a>, dashboard
          </span>
        </p>
      </div>
    </footer>
  );
};

export default withStyles(footerStyle)(Footer);

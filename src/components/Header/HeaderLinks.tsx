import {
  ClickAwayListener,
  Grow,
  Hidden,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  withStyles,
} from '@material-ui/core';
import { Notifications, Person } from '@material-ui/icons';
import headerLinksStyle from 'assets/jss/material-dashboard-react/headerLinksStyle';
import * as cx from 'classnames';
import { CustomSelect } from 'components';
import * as React from 'react';
import { Manager, Popper, Target } from 'react-popper';

interface Props {
  classes: {
    margin: string;
    search: string;
    searchButton: string;
    searchIcon: string;
    buttonLink: string;
    notifications: string;
    links: string;
    linkText: string;
    popperResponsive: string;
    dropdown: string;
    dropdownItem: string;
    popperClose: string;
  };
}

interface State {
  open: boolean;
  selectedVal: string;
}

class HeaderLinks extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { open: false , selectedVal: 'farm1' };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  public render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
        <Manager style={{ display: 'inline-block' }}>
          <Target>
            <IconButton
              color="inherit"
              aria-label="Notifications"
              aria-owns={open ? 'menu-list' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
              className={classes.buttonLink}
            >
              <Notifications className={classes.links} />
              <span className={classes.notifications}>5</span>
              <Hidden mdUp>
                <p onClick={this.handleClick} className={classes.linkText}>
                  Notification
                </p>
              </Hidden>
            </IconButton>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={open}
            className={cx(
              { [classes.popperClose]: !open },
              classes.popperResponsive,
            )}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} style={{ transformOrigin: '0 0 0' }}>
                <Paper className={classes.dropdown}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      You have 2 alerts.
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      Another Notification
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
        <IconButton
          color="inherit"
          aria-label="Person"
          className={classes.buttonLink}
        >
          <Person className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </IconButton>
        <CustomSelect
          formControlProps={{
            className: classes.margin + ' ' + classes.search,
          }}
          inputProps={{
            placeholder: 'Choose your farm',
            inputProps: {
              'aria-label': 'Search',
            },
          }}
        />
      </div>
    );
  }

  private handleClick() {
    this.setState({ open: !this.state.open });
  }

  private handleClose() {
    this.setState({ open: false });
  }
  
}

export default withStyles(headerLinksStyle)(HeaderLinks);

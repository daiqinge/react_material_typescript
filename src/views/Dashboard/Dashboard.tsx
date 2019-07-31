import { Grid, TableCell, withStyles } from '@material-ui/core';
import dashboardStyle from 'assets/jss/material-dashboard-react/dashboardStyle';
import {
  ItemGrid,
  RegularCard,
  BasicTable,
  Button,
} from 'components';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  classes: {
    successText: string;
    upArrowCardCategory: string;
  };
}

class Dashboard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              content={
                <BasicTable
                  tableHeaderColor="primary"
                  tableHead={['Name', 'Msg', 'Operation']}
                  tableData={[
                    [ 'name1', 'msg1'],
                    [ 'name2', 'msg2'],
                    [ 'name3', 'msg3'],
                    [ 'Test', 'msg4'],
                  ]}
                  tableOpt={
                    <TableCell key="operate">
                      <Button color="rose" size="small">
                          <NavLink to="/table" activeClassName="active" style={{color: 'white'}}> Link1 </NavLink>
                      </Button>
                      <Button color="blue" size="small">
                          <NavLink to="/user" activeClassName="active" style={{color: 'white'}} > Link2 </NavLink>
                      </Button>
                    </TableCell>
                  }
                />
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }

}

export default withStyles(dashboardStyle)(Dashboard);

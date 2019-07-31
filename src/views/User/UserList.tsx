import { Grid, TableCell, withStyles } from '@material-ui/core';
import dashboardStyle from 'assets/jss/material-dashboard-react/dashboardStyle';
import {
  ItemGrid,
  RegularCard,
  BasicTable,
  DialogButton,
  ConfirmButton,
  Button,
} from 'components';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import ActionDelete from '@material-ui/icons/Delete';

interface Props {
  classes: {
    successText: string;
    upArrowCardCategory: string;
  };
}

class UserList extends React.Component<Props> {
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
                  tableHead={['Name', 'Email', 'Operation']}
                  tableData={[
                    [ 'name1', 'abd@gmail.com'],
                    [ 'name2', 'abd@gmail.com'],
                    [ 'name3', 'abd@gmail.com'],
                  ]}
                  tableOpt={
                    <TableCell key="operate">
                      <Button color="blue" size="small">
                          <NavLink to="/AddUser" style={{color: 'white'}}> Edit </NavLink>
                      </Button>
                      <ConfirmButton color="rose" size="small" msg="delete">
                      <ActionDelete />
                        Delete
                      </ConfirmButton>
                    </TableCell>
                  }
                  addButton={
                    <DialogButton color="blue" > +Add </DialogButton>
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

export default withStyles(dashboardStyle)(UserList);

import {
  Card,
  CardContent,
  Typography,
  withStyles,
} from '@material-ui/core';
import tasksCardStyle from 'assets/jss/material-dashboard-react/tasksCardStyle';
import { Tasks } from 'components';
import * as React from 'react';
import { bugs } from 'variables/general';

interface Props {
  classes: {
    card: string;
    cardHeader: string;
    cardTitle: string;
    cardHeaderContent: string;
    tabsContainer: string;
    displayNone: string;
    tabWrapper: string;
    label: string;
    labelIcon: string;
    tabIcon: string;
  };
}

interface State {
  value: number;
}

class TasksCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { value: 0 };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          {this.state.value === 0 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={[0, 3]}
                tasksIndexes={[0, 1, 2, 3]}
                tasks={bugs}
              />
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  }

  private handleChange(event: React.ChangeEvent<{}>, value: any) {
    if (typeof value === 'number') {
      this.setState({ value });
    }
  }
}

export default withStyles(tasksCardStyle)(TasksCard);

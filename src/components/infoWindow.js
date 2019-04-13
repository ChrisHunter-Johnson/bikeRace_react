import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card, {  CardContent } from '@material-ui/core/Card';

import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
};

function InfoWindow(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>

        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Istanbul
          </Typography>
          <Typography component="p">
            Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here.

          </Typography>
        </CardContent>

      </Card>
    </div>
  );
}


export default withStyles(styles)(InfoWindow);

import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import '../css/layout.css';

// props to pass in:
// Avatar: User Intials
// Title
// Date: visible as a subheader to the main Title
// Content
// Upcoming: Images: to display any user images.
export default function DomumCard(props) {

  return (
    <Card className="cardSpacingTop">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className="orange lighten-1">
            {props.Avatar}
          </Avatar>
        }
        title={props.Title}
        subheader={props.Date}
      />
      {
        /*<CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />*/
      }
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.Content}
        </Typography>
      </CardContent>
    </Card>
  );
}

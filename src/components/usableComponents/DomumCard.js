import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import clsx from 'clsx';
import '../css/layout.css';

// props to pass in:
// Avatar: User Intials
// Title
// Date: visible as a subheader to the main Title
// Content
// Upcoming: Images: to display any user images.

const useStyles = makeStyles(theme => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    "&:focus": {
      backgroundColor: "transparent"
    }
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatarColor: {
    backgroundColor: orange[400],
  },
}));

export default function DomumCard(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className="cardSpacingTop boxShadow">
      <CardHeader
      {...(props.Avatar ?
        {
          avatar:
            <Avatar aria-label="recipe" className={classes.avatarColor}>
              {props.Avatar}
            </Avatar>

        } : {} )}
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
        <React.Fragment>
          {props.Content}
        </React.Fragment>
      </CardContent>


      { props.addExpandBtn && (
        <React.Fragment>
          <CardActions disableSpacing>
            <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
              >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {props.expandedContent}
            </CardContent>
          </Collapse>
        </React.Fragment>
      )}
    </Card>
  );
}

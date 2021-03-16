import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 310,
  },
  media: {
    height: 410,
    width: 310,
  },
  Button: {
    textAlign: "center",
    backgroundColor: "#12B0E8",
    color: "#ffffff",
    marginLeft: "90px",
    marginBottom: "20px",
  },
});

function Main() {
  const classes = useStyles();
  return (
    <div
      
     
    >
      <div className="flex-box">
        <Card className={classes.root} >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i.pinimg.com/originals/cc/cc/6f/cccc6f2cf89de0f217c5de58ef5dfc77.jpg"
              title="Movie/show image"
            />
            <CardContent style={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="h2">
                QuickSand
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                NETFLIX ORIGINAL SERIES
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="medium"
              href="https://www.netflix.com/browse"
              target="blank"
              className={classes.Button}
            >
              Watch Now
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
export default Main;

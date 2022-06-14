import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import man from "./man.avif";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ChatIcon from "@mui/icons-material/Chat";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const RedditCard = ({post}) => {
  return (
    <Card style={{ marginTop: "16px" }} sx={{ maxWidth: 592 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <div>
              <img src={man} height="41px" />
            </div>
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />

      <div className="cardInfo">
        <h2>{post.title}</h2>
        <div className="info">
          <p>
           {post.body}
          </p>
          <p className="infoEnd">
            {post.body}
          </p>
        </div>
      </div>
      <div className="cardActions">
        <div className="actions">
          <CardActions disableSpacing>
            <div className="actionIcons">
              <IconButton aria-label="add to favorites">
                <ThumbUpIcon />
              </IconButton>
              <span className="num">{post?.upVotesTotal}</span>
            </div>
            <div className="actionIcons">
              <IconButton aria-label="share">
                <ThumbDownIcon />
              </IconButton>
              <span className="num">{post?.downVotesTotal}</span>
            </div>
            <div className="actionIcons">
              <IconButton aria-label="share">
                <ChatIcon />
              </IconButton>
              <span className="num">{post.comments.length}</span>
            </div>
          </CardActions>
        </div>
        <Link to={`/postdetails/${post.id}`}>
          <div className="nextPage">
            <span className="openPost">Open Post</span>
            <IconButton aria-label="share">
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </Link>
      </div>
    </Card>
  );
};

export default RedditCard;

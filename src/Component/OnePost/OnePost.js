import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import man from "./man.avif";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ChatIcon from "@mui/icons-material/Chat";

const OnePost = ({ post }) => {

  return (
    <Card sx={{ maxWidth: 815 }}>
      <div className="header">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <div>
                <img src={man} height="41px" />
              </div>
            </Avatar>
          }
          title={post?.title}
          subheader="September 14, 2016"
        />
      </div>

      <div className="cardInfo">
        <div className="oneInfo">
          <p>
            {post?.body}
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
              <span className="num">{post?.comments?.length}</span>
            </div>
          </CardActions>
        </div>
      </div>
    </Card>
  );
};

export default OnePost;

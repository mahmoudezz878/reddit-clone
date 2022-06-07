import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import man from "./man.avif";

const oneComment = ({ body }) => {
  return (
    <div className="box">
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <div>
                <img src={man} height="41px" />
              </div>
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader={body}
        />
      </Card>
    </div>
  );
};

export default oneComment;

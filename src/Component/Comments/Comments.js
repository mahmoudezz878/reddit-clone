import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { CommentForm } from "./CommentForm";
import OneComment from "./OneComment";

const Comments = ({ comments }) => {
  return (
    <Card style={{ marginTop: "24px" }} sx={{ maxWidth: 815 }}>
      <div className="header">
        <CardHeader title="Comments" />
      </div>

      <div className="">
        <div className="">
          {!comments || comments == 0
            ? <div style={{padding: '16px'}}>No Comments</div>
            : comments.map((comment) => {
              return <OneComment body={comment.body} />;
            })}
          <CommentForm />
        </div>
      </div>
    </Card>
  );
};

export default Comments;

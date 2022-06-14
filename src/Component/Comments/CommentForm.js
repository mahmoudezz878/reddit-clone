import TextareaAutosize from "@mui/material/TextareaAutosize";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useState } from "react";
import { addComment } from "../../Api";
import { useParams } from "react-router-dom";
import axios from "axios";

export const CommentForm = () => {

  const { id } = useParams();


  const [comment, setComment] = useState("");


  const addOneComment = async (userId, postId, body) => {
    const res = await addComment(userId, postId, {body:comment})
    setComment("")
  }

  return (
    <div>
      <form className="commentForm">
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Add a Note"
          style={{ width: "100%" }}
          onChange={(e) => {setComment(e.target.value)}}
          value={comment}
        />
        <div className="img">
          <IconButton sx={{ "&:hover": { backgroundColor: "transparent" }}}
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
          onClick={() => {addOneComment(2, id, comment )}}
          >
            <Button sx={{ "&:hover": { backgroundColor: "rgb(225, 29, 72)" }}} variant="contained">Comment</Button>
          </IconButton>
        </div>
      </form>
    </div>
  );
};

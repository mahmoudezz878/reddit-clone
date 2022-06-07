import TextareaAutosize from "@mui/material/TextareaAutosize";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useState } from "react";
import { addComment } from "../../Api";
import { useParams } from "react-router-dom";
import axios from "axios";

export const CommentForm = () => {

  const { id } = useParams();

  console.log({id})

  const [comment, setComment] = useState("");

  const addOneComment = async (postId,userId, body) => {
    const res = await addComment(postId, userId, {body:comment})
    console.log(res)
  }

  return (
    <div>
      <form className="commentForm">
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Add a Note"
          style={{ width: "100%" }}
          onChange={(e) => {setComment(e.target.value)}}
        />
        <div className="img">
          <IconButton sx={{ "&:hover": { backgroundColor: "transparent" }}}
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
          onClick={() => {addOneComment(id,2, comment )}}
          >
            <Button sx={{ "&:hover": { backgroundColor: "rgb(225, 29, 72)" }}} variant="contained">Comment</Button>
          </IconButton>
        </div>
      </form>
    </div>
  );
};

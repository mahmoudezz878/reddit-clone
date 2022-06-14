import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { addPost } from "../../Api";

const PostModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      userId: 2,
      body: "",
      tags: [],
    },
    onSubmit: async (values, { resetForm }) => {

      const res = await addPost(values.userId, {
        title: values.title,
        body: values.body,
        tags: values.tags,
      });
      resetForm();
      setOpen(false);
    },
    validationSchema: Yup.object({
      title: Yup.string().required("this input is required"),
      userId: Yup.string().required("this input is required"),
      body: Yup.string().required("this input is required"),
    }),
  });

  return (
    <div>
      <Button className="postButtonColor" onClick={handleOpen}>
        New Post
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            error={!!formik.errors.title}
            helperText={formik.errors.title}
            id="title"
            name="title"
            label="Title"
            placeholder="Title"
            variant="standard"
            fullWidth
            onBlur={formik.handleBlur}
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <TextField
            error={!!formik.errors.userId}
            helperText={formik.errors.userId}
            id="userId"
            name="userId"
            label="userId"
            placeholder="userId"
            variant="standard"
            fullWidth
            onBlur={formik.handleBlur}
            value={formik.values.userId}
            onChange={formik.handleChange}
          />
          <TextField
            error={!!formik.errors.body}
            helperText={formik.errors.body}
            id="body"
            name="body"
            label="body"
            placeholder="body"
            variant="standard"
            fullWidth
            onBlur={formik.handleBlur}
            value={formik.values.body}
            onChange={formik.handleChange}
          />
          <TextField
            error={!!formik.errors.tags}
            helperText={formik.errors.tags}
            id="tags"
            name="tags"
            label="tags"
            placeholder="tags"
            variant="standard"
            fullWidth
            onBlur={formik.handleBlur}
            value={formik.values.tags}
            onChange={formik.handleChange}
          />
          <Button
            onClick={handleClose}
            variant="contained"
            style={{ margin: "10px" }}
          >
            Cancel
          </Button>
          <Button onClick={formik.handleSubmit} variant="contained">
            Add Post
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default PostModal;

import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

function NewPost({ onFormSubmit }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    authorName: "",
    bodyText: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    showModalHandler();
  };

  const showModalHandler = () => {
    navigate("/");
  };

  return (
    <Modal onBackDropClick={showModalHandler}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={handleFormChange}
            name="bodyText"
            value={formData.bodyText}
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={handleFormChange}
            name="authorName"
            value={formData.authorName}
          />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={showModalHandler}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;

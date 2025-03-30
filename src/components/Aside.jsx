import {
  Binoculars,
  CirclePlus,
  CircleUserRound,
  Cog,
  House,
} from "lucide-react";
import "./Aside.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createPost } from "../services/allAPI.js";

const Aside = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [post, setPost] = useState({
    userId: "",
    image: null,
    caption: "",
  });
  const [preview, setPreview] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPost({ ...post, image: file });
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview("");
    }
  };

  const handleAddPost = async () => {
    try {
      const reqBody = new FormData();
      reqBody.append("image", post.image);
      reqBody.append("caption", post.caption);
      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeaders = {
          authorization: `Bearer ${token}`,
        };
        const result = await createPost(reqBody, reqHeaders);
        console.log(result);
        setPost({ image: null, caption: "" });
        setPreview("");
        handleClose();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside>
      <span id="title">lyte</span>
      <hr />
      <Link to={"/"} className="link">
        <House size={30} />
      </Link>
      <Link to={"/explore"} className="link">
        <Binoculars size={30} />
      </Link>
      <Link to={"/profile"} className="link">
        <CircleUserRound size={30} />
      </Link>
      <div className="link" onClick={handleShow}>
        <CirclePlus size={30} />
      </div>
      <Link to={"/settings"} className="link">
        <Cog size={30} />
      </Link>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        data-bs-theme="dark"
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <label>
            <img src={preview} alt="Preview" />
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </label>
          <input
            type="text"
            placeholder="Caption"
            onChange={(e) => {
              setPost({ ...post, caption: e.target.value });
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="light" onClick={handleAddPost}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </aside>
  );
};

export default Aside;
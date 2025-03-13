import { LogOut, Pen, Trash2 } from "lucide-react";
import "./Settings.css";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteUser, updateUser } from "../services/allAPI.js";

const Settings = () => {
  const [modalDelete, setModalDelete] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [proShow, setProShow] = useState(false);
  const promptClose = () => setProShow(false);
  const promptShow = () => setProShow(true);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("user");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  const handleUpdate = async () => {
    try {
      const result = await updateUser(userData);
      sessionStorage.setItem("user", JSON.stringify(result.data));
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  const handleDelete = async () => {
    try {
      const result = await deleteUser(userData);
      if (result.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="settings">
      <Modal
        show={show}
        onHide={handleClose}
        centered
        data-bs-theme="dark"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <input
            value={userData?.name}
            placeholder="Name"
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
          />
          <input
            value={userData?.bio}
            placeholder="Bio"
            onChange={(e) => {
              setUserData({ ...userData, bio: e.target.value });
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={proShow}
        onHide={promptClose}
        centered
        data-bs-theme="dark"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Modal.Body>
          {modalDelete
            ? "Continue with deleting your account?"
            : "Are you sure you want to logout?"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={promptClose}>
            Cancel
          </Button>
          <Button
            variant="light"
            onClick={modalDelete ? handleDelete : handleLogout}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <section data-aos="fade-up">
        <div className="top" onClick={handleShow}>
          Edit profile
          <Pen />
        </div>
        <div
          className="red"
          onClick={() => {
            setModalDelete(true);
            promptShow();
          }}
        >
          Delete Account
          <Trash2 />
        </div>
        <div
          className="bottom red"
          onClick={() => {
            setModalDelete(false);
            promptShow();
          }}
        >
          Log Out
          <LogOut />
        </div>
      </section>
    </div>
  );
};

export default Settings;
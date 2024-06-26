import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../actions";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const dispatch = useDispatch();

  const handleSave = () => {
    const user = { firstName, lastName, mobile };
    dispatch(addUser(user));
    setFirstName("");
    setLastName("");
    setMobile("");
  };

  return (
    <div>
      <h2>Add User</h2>
      <div>
        <input
          type="text"
          placeholder="Firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Mobile no."
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button>Cancel</button>
    </div>
  );
};

export default AddUser;

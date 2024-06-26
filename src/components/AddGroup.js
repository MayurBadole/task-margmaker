import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGroup, removeUsers } from "../actions";

const AddGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleSave = () => {
    const group = { groupName, selectedUsers };
    dispatch(addGroup(group));
    dispatch(removeUsers(selectedUsers));
    setGroupName("");
    setSelectedUsers([]);
  };

  const handleSelectChange = (e) => {
    const options = Array.from(e.target.options);
    const selectedValues = options
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedUsers(selectedValues);
  };

  return (
    <div>
      <h2>Add Group</h2>
      <div>
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </div>
      <div>
        <select multiple value={selectedUsers} onChange={handleSelectChange}>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.firstName} {user.lastName}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSave}>Save</button>
      <button>Cancel</button>
    </div>
  );
};

export default AddGroup;

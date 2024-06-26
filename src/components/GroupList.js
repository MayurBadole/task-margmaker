import React from "react";
import { useSelector } from "react-redux";

const GroupList = () => {
  const groups = useSelector((state) => state.groups.groups);

  return (
    <div>
      <h2>Group List</h2>
      <table>
        <thead>
          <tr>
            <th>Group Name</th>
            <th>No. of Users</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr key={index}>
              <td>{group.groupName}</td>
              <td>{group.selectedUsers.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupList;

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import AddUser from "./components/AddUser";
import AddGroup from "./components/AddGroup";
import GroupList from "./components/GroupList";


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/add-user">Add User</Link>
              </li>
              <li>
                <Link to="/add-group">Add Group</Link>
              </li>
              <li>
                <Link to="/group-list">Group List</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/add-user" element={<AddUser/>} />
            <Route path="/add-group" element={<AddGroup/>} />
            <Route path="/group-list" element={<GroupList/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

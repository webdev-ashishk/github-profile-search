import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
const Home = () => {
  const [user, setUser] = useState("none");
  const [query, setQuery] = useState("webdev-ashishk");

  useEffect(() => {
    async function getUser() {
      const res = await fetch(`https://api.github.com/users/${query}`);
      const data = await res.json();
      setUser(data);
    }
    getUser();
  }, [query]);
  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <>
      <div className="container">
        <h1>Search Github Profile by username</h1>
        <div className="input">
          <input
            type="text"
            placeholder="GitHub username"
            className="inputbox"
            onChange={handleChange}
            value={query}
          />
        </div>
        <div className="output">
          <div className="profile-image">
            <img src={user.avatar_url} className="circle-image" />
            <h1 className="login">{user.login}</h1>
          </div>
          <div className="otherDetails">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Bio</th>
                  <th>id</th>
                  <th>followers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.bio}</td>
                  <td>{user.id}</td>
                  <td>{user.followers}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

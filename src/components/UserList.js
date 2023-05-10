import React, { useEffect, useState } from 'react';
import axios from 'axios';



const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const usersArray = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(usersArray.data);
        setLoading(false);
      } catch (error) {
        setUsers([]);
      }
    };
    getData();
    return () => {};
  }, []);

  return loading ? (
    <div >
      <div>
        Loading...
      </div>
    </div>
  ) : (
    <div>
      {users.map((user, key) => (
        <div>
            {user.name}
            {user.email}
        </div>
      ))}
    </div>
  );
};

export default UserList;

import React, { useEffect, useState } from 'react';

const userList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Retrieve and parse user data from localStorage
    const userData = JSON.parse(localStorage.getItem("user")) || [];
    setUsers(userData);
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="max-h-80 overflow-y-auto"> {/* Set max height and vertical scroll */}
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left border-b">Name</th>
              <th className="py-3 px-6 text-left border-b">Email</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {users.map((user, index) => (
              <tr key={index} className="border-b border-gray-300 even:bg-gray-100">
                <td className="py-3 px-6 text-left">{user.name}</td>
                <td className="py-3 px-6 text-left">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default userList;

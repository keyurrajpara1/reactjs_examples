import React from 'react';
import ReactDOM from 'react-dom/client';
import { toast } from 'react-toastify';
import './index.css';
function User() {
  const notify = () => toast.success("Wow so easy!");
  return (
    <>
      User
      <button onClick={notify}>Notify!</button>
    </>
  );
}

export default User;

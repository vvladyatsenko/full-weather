import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Profile.module.scss';

interface User {
  email: string;
}

export const Profile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/users/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.profile}>
      <h1>Welcome, {user.email}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

import React, { useEffect } from 'react'
import { useMatch } from 'react-router-dom'
import { Users } from "user-front/Users"

export const MfeRouter = () => {
  const users = useMatch("/dashboard/users");
  const others = useMatch("/dashboard/others")
  useEffect(() => {
  }, [location]);

  if (users) {
    return <Users />;
  } else if (others) {
    return <h1>others</h1>;
  } else {
    return <h1>HI BB</h1>;
  }
}

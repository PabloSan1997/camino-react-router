import React from "react";

import {  useAuth } from "./auth";

function ProfilePage(props) {
  const auth = useAuth();
    return (
        <>
          <h1>Perfil</h1>
          <p>Welcome, {auth.user?.userName}</p>
        </>
      );
}
export { ProfilePage };

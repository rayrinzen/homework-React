import { useContext } from "react";
import UserContext from "./UserContext";

export default function About() {
  const users = useContext(UserContext);

  return (
    <div>
      <h2>Це сторінка про нас</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

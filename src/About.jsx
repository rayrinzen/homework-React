import { useSelector } from "react-redux";

export default function About() {
  const users = useSelector((state) => state.users);

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

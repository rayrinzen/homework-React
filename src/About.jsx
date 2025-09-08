import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "./usersSlice";

export default function About() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Це сторінка про нас</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => dispatch(removeUser(user.id))}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Користувачів ще немає</p>
      )}
    </div>
  );
}

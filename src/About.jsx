import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "./usersSlice";

export default function About() {
  const { list, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p style={{ color: "red" }}>Помилка: {error}</p>;

  return (
    <div>
      <h2>Це сторінка про нас</h2>
      {list.length > 0 ? (
        <ul>
          {list.map((user) => (
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

// export default function Home() {
//   return <h2>Це домашня сторінка</h2>;
// }

import { useDispatch } from "react-redux";
import { addUser } from "./usersSlice";
import { useState } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name.trim() !== "") {
      dispatch(addUser(name));
      setName("");
    }
  };

  return (
    <div>
      <h2>Це домашня сторінка</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Введіть ім'я користувача"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <button onClick={handleAdd} className="form-button">
          Додати користувача
        </button>
      </div>
    </div>
  );
}

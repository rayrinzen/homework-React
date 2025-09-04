import { useContext } from "react";
import UserContext from "./UserContext";

function ContactDetails() {
  const users = useContext(UserContext);
  return <p>Перший користувач: {users[0].name}</p>;
}

export default function Contact() {
  return (
    <div>
      <h2>Це контактна сторінка</h2>
      <ContactDetails />
    </div>
  );
}

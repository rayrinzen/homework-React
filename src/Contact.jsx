import { useSelector } from "react-redux";

function ContactDetails() {
  const users = useSelector((state) => state.users);
  return (
    <p>
      Перший користувач: {users.length > 0 ? users[0].name : "Немає користувачів"}
    </p>
  );
}

export default function Contact() {
  return (
    <div>
      <h2>Це контактна сторінка</h2>
      <ContactDetails />
    </div>
  );
}

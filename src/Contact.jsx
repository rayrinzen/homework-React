import { useSelector } from "react-redux";

function ContactDetails() {
  const users = useSelector((state) => state.users);
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

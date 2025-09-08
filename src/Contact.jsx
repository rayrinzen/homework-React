import { useSelector } from "react-redux";

function ContactDetails() {
  const { list, loading, error } = useSelector((state) => state.users);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p style={{ color: "red" }}>Помилка: {error}</p>;

  return (
    <p>
      Перший користувач:{" "}
      {list.length > 0 ? list[0].name : "Немає користувачів"}
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

import { useEffect, useState } from "react";
import inputs from "../Constans/inputs";
import ContactList from "./ContactList";
import { v4 } from "uuid";
import styles from "./Contacts.module.css";
import { loadContacts, saveContacts } from "../utils/contactsStorage";
const emptyContact = {
  id: "",
  name: "",
  lastName: "",
  email: "",
  phone: "",
};
function Contacts() {
  const [contacts, setContacts] = useState(() => loadContacts());
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState(emptyContact);

  const deletHandeler = (id) => {
    setContacts((currentContacts) =>
      currentContacts.filter((contact) => contact.id !== id)
    );
  };

  useEffect(() => {
    saveContacts(contacts);
  }, [contacts]);

  const changeHandeler = (event) => {
    setContact((contact) => ({
      ...contact,
      [event.target.name]: event.target.value,
    }));
  };

  const addHandeler = () => {
    if (
      !contact.name ||
      !contact.email ||
      !contact.lastName ||
      !contact.phone
    ) {
      setAlert("Please enter valid data");
      return;
    }

    setAlert("");

    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact(emptyContact);
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandeler}
          />
        ))}
        <button onClick={addHandeler}>Add Contact</button>
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactList contacts={contacts} deletHandeler={deletHandeler} />
    </div>
  );
}

export default Contacts;

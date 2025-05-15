import { useState } from "react";

type Contact = {
  name: string;
  email: string;
};

const initialContacts: Contact[] = [
  { name: "Alice Smith", email: "alice@gmail.com" },
  { name: "Bob Jones", email: "bobby123@yahoo.com" },
  { name: "Carol White", email: "carol@outlook.com" },
];

export default function ContactApp() {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [query, setQuery] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const regex = new RegExp(query, "i");
  const filtered = contacts.filter(
    (c) => regex.test(c.name) || regex.test(c.email)
  );

  const handleSort = () => {
    const sorted = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sorted);
  };

  const handleAddContact = () => {
    if (!newName || !newEmail) {
      alert("Please enter both name and email.");
      return;
    }

    const newContact: Contact = {
      name: newName.trim(),
      email: newEmail.trim(),
    };

    setContacts([...contacts, newContact]);
    setNewName("");
    setNewEmail("");
  };

  const handleRemove = (email: string) => {
    const updated = contacts.filter((c) => c.email !== email);
    setContacts(updated);
  };

  return (
    <div className="container">
      <h1>Contact Search</h1>

      <input
        type="text"
        placeholder="Search by name or email"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSort}>Sort A-Z</button>

      <h2>Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <button onClick={handleAddContact}>Add</button>

      <ul>
        {filtered.map((contact) => (
          <li key={contact.email}>
            {contact.name} - {contact.email}
            <button onClick={() => handleRemove(contact.email)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

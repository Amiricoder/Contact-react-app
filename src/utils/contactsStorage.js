const KEY = "contacts";

export function loadContacts() {
  const savedContacts = localStorage.getItem(KEY);
  return savedContacts ? JSON.parse(savedContacts) : [];
}

export function saveContacts(contacts) {
  localStorage.setItem(KEY, JSON.stringify(contacts));
}

# Contact App

Contact App is a simple React project for managing a list of contacts.  
Users can add new contacts, see them in a list, delete them, and keep the data after a page refresh.

## Features

- Add a contact with name, last name, email, and phone number
- Show all saved contacts in a clean list
- Delete contacts from the list
- Keep contact data in the browser with `localStorage`
- Validate form input before adding a contact

## Tech Stack

- React
- Vite
- JavaScript
- CSS Modules
- Raw CSS
- `localStorage`
- `uuid`

## Project Structure

```bash
src/
|-- Component/
|   |-- ContactItem.jsx
|   |-- ContactList.jsx
|   |-- Contacts.jsx
|   `-- Header.jsx
|-- Constans/
|   `-- inputs.js
|-- utils/
|   `-- contactsStorage.js
|-- App.jsx
|-- main.jsx
`-- global.css
```

## How It Works

- The contact form is rendered in `Contacts.jsx`
- New contacts are created with a unique id using `uuid`
- Contacts are saved in `localStorage` through `contactsStorage.js`
- When the page reloads, saved contacts are loaded again automatically

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the project

```bash
npm run dev
```

### 3. Open in the browser

Vite will show a local URL in the terminal, usually something like:

```bash
http://localhost:5173
```

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - build the project for production
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint

## Notes

- The project uses CSS modules for component-level styling
- Contact data stays available after refresh because it is stored in the browser
- The app is fully client-side and does not need a backend

## License

This project is for learning and practice purposes.

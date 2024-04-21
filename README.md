# React Phonebook App
## App Link : https://phonebook57.netlify.app/

This is a simple Phonebook app built with React. It allows users to add new contacts with their name and phone number, and search for existing contacts.

## Components

### Phonebook.jsx

The main component of the app. It manages the state for the list of contacts (`persons`) and the input fields for adding new contacts (`newName` and `newNumber`). It includes event handler functions for adding new contacts (`addPerson`), updating the name input field (`handleNameChange`), and updating the number input field (`handleNumberChange`). The component also renders the search filter component (`SearchFilter`) and the list of contacts.

### SearchFilter.jsx

A component responsible for filtering and displaying the list of contacts based on a search query. It accepts the list of contacts (`persons`) as a prop and manages the state for the search query (`searched`). It includes an event handler function (`HandleChange`) to update the search query based on user input. The component renders an input field for searching contacts and displays the filtered results.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/57ajay/React-PhoneBook

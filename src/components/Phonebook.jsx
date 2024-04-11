import { useState } from "react";
import "./Phonebook.css";
import "./SearchFilter";
import SearchFilter from "./SearchFilter";
const  Phonebook= ()=>{
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456" },
        { name: "Ada Lovelace", number: "39-44-5323523" }, 
        { name: "Dan Abramov", number: "12-43-234567" }, 
        { name: "Mary Poppendieck", number: "39-23-642312" }
    ]);
    
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const addPerson = (event) => {
      event.preventDefault();
      const personObject = {
        name: newName,
        number: newNumber
      };
      if (persons.some((person) => person.name === newName && person.number === newNumber)) {
        alert(`${newName} & ${newNumber} is already added to phonebook`);
        setNewName("");
        setNewNumber("");
        return;
      } else {
        setPersons(persons.concat(personObject));
        setNewName("");
        setNewNumber("");
      }
    };
    

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    }

    return(
        <div className="phonebook-container">
            <h2 className="phonebook-title">Phonebook</h2>
            <SearchFilter persons={persons}/>
            <form onSubmit={addPerson}>
                <div>
                    Name: <input className="name-input" onChange={handleNameChange} type="text" placeholder="Ajay Upadhyay" required />
                </div>
                <div>
                    Number: <input className="number-input" type="text" onChange={handleNumberChange} placeholder="+91-123-456-7890" required />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2 className="phonebook-title">Contacts</h2>
            <div className="contacts">
                
                {persons.map(person => (
                    <p key={persons.indexOf(person)}>{person.name}{" | "}{person.number}</p>
                ))}
            </div>
        </div>
    );
};

export default Phonebook;

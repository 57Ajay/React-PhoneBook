import { useState } from "react";
import "./Phonebook.css";
const  Phonebook= ()=>{
    const [persons, setPersons] = useState([
        { name: "Arto Hellas" },
        { name: "Ada Lovelace" },
    ]);
    
    const [newName, setNewName] = useState("");

    const addPerson = (event) => {
      event.preventDefault();
      const personObject = {
        name: newName,
      };
      if (persons.some((person) => person.name === newName)) {
        alert(`${newName} is already added to phonebook`);
        setNewName("");
        return;
      } else {
        setPersons(persons.concat(personObject));
        setNewName("");
      }
    };
    

    const handleChange = (event) => {
        setNewName(event.target.value);
    }

    return(
        <div className="phonebook-container">
            <h2 className="phonebook-title">Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input onChange={handleChange} type="text"/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2 className="phonebook-title">Numbers</h2>
            <div>
                {persons.map(person => (
                    <p key={persons.indexOf(person)}>{person.name}</p>
                ))}
            </div>
        </div>
    );
};

export default Phonebook;
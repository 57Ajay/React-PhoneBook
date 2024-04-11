import { useState } from "react";
import "./Phonebook.css";
const  Phonebook= ()=>{
    const [persons, setPersons] = useState([
        { name: "Arto Hellas" },
        { name: "Ada Lovelace" },
    ]);
    
    const [newName, setNewName] = useState("");
    return(
        <div className="phonebook-container">
            <h2 className="phonebook-title">Phonebook</h2>
            <form>
                <div>
                    name: <input />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2 className="phonebook-title">Numbers</h2>
            <div>
                {persons.map(person => (
                    <p key={person.name}>{person.name}</p>
                ))}
            </div>
        </div>
    );
};

export default Phonebook;
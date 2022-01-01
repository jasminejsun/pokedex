import {useState, useEffect} from 'react';
import './Navbar.css'
import { FiSearch } from "react-icons/fi"
import Detail from "../../Detail"
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
    //const { search } = window.location;
    //const query = new URLSearchParams(search).get('pokemon');
    const [input, setInput] = useState('');

    function checkInp(query) {
        if (!query) return;
        if (isNaN(query)) {
            console.log("string?");
        } else {
            console.log("number");
        }
    }

    return (
        <div className="Navbar">
            <Link
                to={`/`}
                
            >
                <img className="Logo" src='pokemon-logo.png'/>
            </Link>
            <div className="Searchbar">
                <form action="">
                <input 
                    value={input}
                    type="text" 
                    className="search-input" 
                    name="pokemon" 
                    id="search" 
                    placeholder="Search for Pokemon by ID or name.."
                    onChange={e => setInput(e.target.value)}/>
                <Link
                    to={`/details`}
                    state={{ from: {input} }}
                    className="search-btn"
                >
                    <FiSearch/>
                </Link>
                </form>
            </div>
        </div>
    )
}

export default Navbar

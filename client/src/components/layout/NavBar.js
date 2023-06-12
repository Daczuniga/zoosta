import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import ReorderIcon from '@material-ui/icons/Reorder';


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);
    return (
        <div className='navbar' id={expandNavbar ? 'open': 'close'}>
            <div className='toggleButton'>
                <button 
                onClick={() => {
                        setExpandNavbar((prev) => !prev)
                    }}
                >
                    <ReorderIcon/>
                </button>
            </div>
            <div className='links'>
                <Link to='/Home'>Home</Link>
                <Link to='/Post'>Post</Link>
                <Link to='/Profile'>Profile</Link>
            </div>
        </div>
    )
}
export default Navbar;
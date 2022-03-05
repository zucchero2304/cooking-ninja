import './Navbar.css'

import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <Link to="/">
                    <h1>Cooking Ninja</h1>
                </Link>
                <Link to="/create">Create recipe</Link>
            </nav>
        </div>
    )
}

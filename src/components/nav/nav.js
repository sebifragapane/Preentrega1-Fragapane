import Cart from '../cart/cart.js'
import './style.css'
const NavBar = () => {
    return (
        <nav>
            <div>
                <h3>Cuyo travel</h3>
                <ul>
                    <li><a>Viajes</a></li>
                    <li><a>Planes</a></li>
                    <li><a>Hoteles</a></li>
                    <li><a>Nosotros</a></li>
                </ul>                               
            </div>
            <Cart/>
        </nav>
    )
}
export default NavBar

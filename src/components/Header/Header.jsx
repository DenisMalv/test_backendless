import tabs from "API/tabs.json"
import { NavLink } from "react-router-dom"




const Header = ()=>{
    
    return (
        <header>
            <ul className="header-list">
                {tabs.map((el)=>((
                <li className="header-item" key={el.id}>
                    <NavLink to={el.id}>{el.title}</NavLink>
                </li>)
            ))}
            </ul>
        </header>
    )
}


export default Header
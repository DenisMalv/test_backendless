import tabs from "API/tabs.json"
import { NavLink } from "react-router-dom"




const Header = ()=>{

    const sortedTabs = [...tabs].sort((a,b)=>a.order-b.order)
    console.log(sortedTabs)
    return (
        <header>
            <ul className="header-list">
                {sortedTabs.map((el)=>((
                <li className="header-item" key={el.id}>
                    <NavLink to={el.id}>{el.title}</NavLink>
                </li>)
            ))}
            </ul>
        </header>
    )
}


export default Header
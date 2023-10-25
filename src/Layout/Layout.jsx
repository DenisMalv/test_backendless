import Header from "components/Header/Header"
import Loader from "components/Loader/Loader"
import { Suspense, useEffect } from "react"

const { Outlet, useNavigate, useLocation } = require("react-router-dom")





const Layout = ()=>{
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{
        location.pathname === "/" && navigate('/dummyTable')
    },[location.pathname, navigate])

    return (
        <div className="container">
            <Header/>
            <main>
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </Suspense>
            </main>
            <footer>This is footer</footer>
        </div>
    )
}


export default Layout
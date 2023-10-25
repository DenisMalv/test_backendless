import Header from "components/Header/Header"
import Loader from "components/Loader/Loader"
import { Suspense, useEffect } from "react"

const { Outlet, useNavigate } = require("react-router-dom")





const Layout = ()=>{

    const navigate = useNavigate()

    useEffect(()=>{
        navigate('/dummyTable')
    },[navigate])

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
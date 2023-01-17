// component
import Footer from "./Footer"
import Navbar from "./Navbar"


// Layout component - the general application layout, wrapping every page with a structured layout.
function Layout({children}) {
    return (
        <div className="App">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout

import { Link } from "react-router-dom"


// Home Page
function Home() {
    return (
        <main className="Home d-flex flex-column align-items-center justify-content-center">
            <h1>Welcome to the Shop of the Century!</h1>
            <Link to={'/items'}>See All Items</Link>
        </main>
    )
}

export default Home
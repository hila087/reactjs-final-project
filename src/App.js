// import logo from './logo.svg';
// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Items from './pages/Items'
import AddItem from './pages/AddItem'
import ViewItem from './pages/ViewItem'
// components
import Layout from './components/Layout'


// router specs
const router = createBrowserRouter([
  {
    // -- home page
    path: '/', 
    element: <Layout><Home/></Layout>
  },
  { 
    // -- display all items
    path: '/items', 
    element: <Layout><Items/></Layout>
  },
  { 
    // -- add item page
    path: '/add-item', 
    element: <Layout><AddItem/></Layout>
  },
  {
    // -- view item page
    path: '/items/:item_id', 
    element: <Layout><ViewItem/></Layout>
  }
])


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;

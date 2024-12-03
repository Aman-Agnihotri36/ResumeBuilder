
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './components/Home'
// import './App.css'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
])

function App() {


  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App

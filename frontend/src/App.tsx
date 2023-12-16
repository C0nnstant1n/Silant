
import  './header/Header.tsx'
import Header from "./header/Header.tsx";
import Footer from "./footer/footer.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import Main from "./main/main.tsx";
import Signin from "./main/components/login/login.tsx";

const router = createBrowserRouter([
    {
        id: 'root',
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />
    },
    {
        path: '/signin',
        element: <Signin />,
        errorElement: <ErrorPage />
    }

])




function App() {

  return (
    <>
      <Header />
        <main>
            <RouterProvider router={router} />
        </main>
      <Footer />
    </>
  )
}

export default App

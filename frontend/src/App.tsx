
import  './header/Header.tsx'
import Header from "./header/Header.tsx";
import Footer from "./footer/footer.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import Main from "./main/main.tsx";
import Result from "./main/components/search_result/Result.tsx";
import {findAction, findLoader} from "./scripts/search.ts";

const router = createBrowserRouter([
    {
        id: 'root',
        path: '/',
        element: <Main />,
        action: findAction,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'result',
                loader: findLoader,
                element: <Result />
            }
        ]
    },
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

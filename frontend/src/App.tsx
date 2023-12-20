
import  './header/Header.tsx'
import Header from "./header/Header.tsx";
import Footer from "./footer/footer.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import Main from "./main/main.tsx";
import ResultShMachine from "./main/components/search_result/ResultShMachine.tsx";
import {findAction} from "./scripts/actions.ts";
import {Provider} from "react-redux";
import {store} from "./redux";
import {service} from "./main/components/service/service.tsx";
import {authenticatedLoader} from "./scripts/loaders.ts";


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
                element: <ResultShMachine />,
                loader: authenticatedLoader,
                errorElement: <ErrorPage />,
            },
        ]
    },
    service
])

function App() {

  return (
    <>
      <Header />
        <main>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </main>
      <Footer />
    </>
  )
}

export default App

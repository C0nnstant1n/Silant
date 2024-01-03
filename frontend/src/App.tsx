import "./header/Header.tsx";
import Header from "./header/Header.tsx";
import Footer from "./footer/footer.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import Main from "./main/main.tsx";
import ResultShMachine from "./main/components/service/components/ResultShMachine.tsx";
import { findAction } from "./scripts/actions.ts";
import { Provider } from "react-redux";
import { store } from "./redux";
import { service } from "./main/routes.tsx";
import { authenticatedLoader } from "./scripts/loaders.ts";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Main />,
    action: findAction,
    errorElement: <ErrorPage />,
    loader: authenticatedLoader,
    children: [
      {
        path: "result",
        element: <ResultShMachine />,
        loader: authenticatedLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
  service,
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <main>
          <RouterProvider router={router} />
        </main>
        <Footer />
      </Provider>
    </>
  );
}

export default App;

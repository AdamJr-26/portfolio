import {
  RouterProvider,
} from "react-router-dom";
import MyRouter from "./Router";

function App() {

  return (
    <>
      <RouterProvider router={MyRouter} />
    </>
  )
}

export default App

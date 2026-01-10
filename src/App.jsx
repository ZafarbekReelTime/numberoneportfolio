import React from "react";
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Abaut from "./pages/Abaut";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
 
  const routes = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/haqida" element={<Abaut />} />
          <Route path="/loyixalar" element={<Projects />} />
          <Route path="/boglanish" element={<Contact />} />

        </Route>
        <Route path="*" element={<Page404 />} />
      </>
    )
  )

  return <RouterProvider router={routes} />;
};

export default App;

import {StarbucksNavBar} from "./components/Starbucks-navbar/Starbubucks-navbar";
import StarbucksConditions from "./components/Starbucks-main/Condition";
import StarbucksFooter from "./components/Starbucks-footer/Starbucks-footer";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Home from "./components/Screens/Home";
import Menu from "./components/Screens/Menu";

function Layout() {
  return (
    <>
      <StarbucksNavBar />
      <main>
        <Outlet />
      </main>
      <StarbucksConditions />
      <StarbucksFooter />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

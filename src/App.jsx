import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./contexts/itemContext";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import {CheckOut } from "./components/CheckOut";

function App() {
    return (
        <Provider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/CheckOut" element={<CheckOut />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

import { Login } from "@mui/icons-material";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feira from "./pages/Feira";
import Carrinho from "./pages/Carrinho";

export default function Router() {
    const [nome, setNome] = useState("Thalya");
    const [saldo, setSaldo] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login nome={nome} setNome={setNome} saldo={saldo} setSaldo={setSaldo}/>} />
                <Route path="/feira" element={<Feira />}/>
                <Route path="/carrinho" element={<Carrinho />}/>
            </Routes>
        </BrowserRouter>
    )
}
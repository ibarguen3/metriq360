"use client";
import React from "react";
import Navbar from "../components/ui/navbar";


export default function PagosDeNomina() {
  return (
    <div>
    <Navbar />
    < header className="w-full py-4 ">
    <nav className="">
        <a href="">
             <span className="">
            <img src="/images/pagos-de-nomina.png"
                alt="Pagos de Nómina"
                className="w-full h-auto object-cover" />
        </span>
        </a>
        
    </nav>
    </header>
    </div>
  );
}
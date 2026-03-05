"use client";
import React from "react";
import Navbar from "../components/ui/navbar";


export default function ImpuestosYRetenciones() {
  return (
    <div>
    <Navbar />
    < header className="w-full py-4 ">
    <nav className="">
        <a href="">
             <span className="">
            <img src="/images/impuestos-y-retenciones.png"
                alt="Impuestos y Retenciones"
                className="w-full h-auto object-cover" />
        </span>
        </a>
        
    </nav>
    </header>
    </div>
  );
}
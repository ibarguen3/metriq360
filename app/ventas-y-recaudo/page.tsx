"use client";
import React from "react";
import Navbar from "../components/ui/navbar";


export default function VentasYRecaudo() {
  return (
    <div>
    <Navbar />
    < header className="w-full py-4 ">
    <nav className="">
        <a href="">
             <span className="">
            <img src="/images/ventas-y-recaudo.png"
                alt="Ventas y Recaudo"
                className="w-full h-auto object-cover" />
        </span>
        </a>
        
    </nav>
    </header>
    </div>
  );
}
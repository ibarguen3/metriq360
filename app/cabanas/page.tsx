"use client";
import React from "react";
import Navbar from "../components/ui/navbar";


export default function Cabanas() {
  return (
    <div>
    <Navbar />
    < header className="w-full py-4 ">
    <nav className="">
        <a href="">
             <span className="">
            <img src="/images/cabanas.png"
                alt="Cabañas"
                className="w-full h-auto object-cover" />
        </span>
        </a>
        
    </nav>
    </header>
    </div>
  );
}
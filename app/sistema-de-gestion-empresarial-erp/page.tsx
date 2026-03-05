"use client";
import React from "react";
import Navbar from "../components/ui/navbar";


export default function SistemaDeGestionEmpresarialERP() {
  return (
    <div>
    <Navbar />
    < header className="w-full py-4 ">
    <nav className="">
        <a href="">
             <span className="">
            <img src="/images/sistema-de-gestion-empresarial-erp.png"
                alt="Sistema de Gestión Empresarial (ERP)"
                className="w-full h-auto object-cover" />
        </span>
        </a>
        
    </nav>
    </header>
    </div>
  );
}
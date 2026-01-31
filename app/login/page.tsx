"use client";

import { useState } from "react";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { Lock, Mail } from "lucide-react";
import { useRouter } from 'next/navigation';


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(email && password){

      router.push('/dashboard');
    
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* Branding */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl mb-6">
            <h1 className="text-4xl font-bold text-white tracking-tight">
              METRIQ 360
            </h1>
          </div>
          <p className="text-white/90 text-lg">
            Datos claros para decisiones rentables
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl mb-2 text-center">Bienvenido</h2>
          <p className="text-muted-foreground text-center mb-6">
            Ingresa tus credenciales para continuar
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Correo electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>
      
            <Button type="submit" className="w-full h-12">
              Ingresar
            </Button>

          </form>
        </div>

        <div className="mt-8 text-center text-white/70 text-sm">
          © 2025 METRIQ 360. Todos los derechos reservados.
        </div>
      </div>
    </div>
  );
}

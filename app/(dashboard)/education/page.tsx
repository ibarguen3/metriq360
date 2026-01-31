"use client";

import { Progress } from '@components/ui/progress';
import { StatusBadge } from '@components/common/StatusBadge';
import { Play, CheckCircle, Clock, Award, BookOpen } from 'lucide-react';
import { Button } from '@components/ui/button';

const courses = [
  {
    id: 1,
    title: 'Control de Costos Gastronómicos',
    category: 'Fundamentos',
    progress: 100,
    duration: '4 horas',
    lessons: 12,
    status: 'completed' as const,
    certification: true,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    title: 'Gestión de Inventarios',
    category: 'Operaciones',
    progress: 65,
    duration: '3 horas',
    lessons: 10,
    status: 'in-progress' as const,
    certification: true,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    title: 'Análisis Financiero para Restaurantes',
    category: 'Finanzas',
    progress: 0,
    duration: '5 horas',
    lessons: 15,
    status: 'not-started' as const,
    certification: true,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop',
  },
  {
    id: 4,
    title: 'Ingeniería de Menú',
    category: 'Estrategia',
    progress: 100,
    duration: '6 horas',
    lessons: 18,
    status: 'completed' as const,
    certification: true,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop',
  },
  {
    id: 5,
    title: 'Optimización de Compras',
    category: 'Operaciones',
    progress: 30,
    duration: '4 horas',
    lessons: 11,
    status: 'in-progress' as const,
    certification: true,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=250&fit=crop',
  },
  {
    id: 6,
    title: 'KPIs para la Gastronomía',
    category: 'Análisis',
    progress: 0,
    duration: '3 horas',
    lessons: 9,
    status: 'not-started' as const,
    certification: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
  },
];

const certifications = [
  { title: 'Especialista en Control de Costos', date: '15 Dic 2025', level: 'Avanzado' },
  { title: 'Gestión Financiera Gastronómica', date: '28 Dic 2025', level: 'Intermedio' },
  { title: 'Ingeniería de Menú', date: '10 Ene 2026', level: 'Avanzado' },
];

export default function EducationPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Educación & Certificaciones</h1>
          <p className="text-muted-foreground mt-1">Mejora tus habilidades en gestión gastronómica</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Cursos Activos</span>
          </div>
          <p className="text-3xl font-semibold">6</p>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="text-sm text-muted-foreground">Completados</span>
          </div>
          <p className="text-3xl font-semibold text-success">2</p>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-5 h-5 text-warning" />
            <span className="text-sm text-muted-foreground">Certificaciones</span>
          </div>
          <p className="text-3xl font-semibold">3</p>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Horas totales</span>
          </div>
          <p className="text-3xl font-semibold">25h</p>
        </div>
      </div>

      {/* Courses Grid */}
      <div>
        <h2 className="mb-4">Cursos Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-40 bg-muted">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3">
                  <StatusBadge
                    status={
                      course.status === 'completed' ? 'success' :
                      course.status === 'in-progress' ? 'warning' : 'info'
                    }
                    label={
                      course.status === 'completed' ? 'Completado' :
                      course.status === 'in-progress' ? 'En Progreso' : 'Nuevo'
                    }
                  />
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3">
                  <span className="text-xs text-primary font-medium">{course.category}</span>
                  <h3 className="text-lg mt-1">{course.title}</h3>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    <span>{course.lessons} lecciones</span>
                  </div>
                </div>

                {course.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progreso</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Button
                    className={`flex-1 ${course.status === 'not-started' ? 'bg-primary' : 'bg-secondary hover:bg-secondary/90'}`}
                  >
                    {course.status === 'completed' ? 'Revisar' :
                     course.status === 'in-progress' ? 'Continuar' : 'Comenzar'}
                  </Button>
                  {course.certification && course.status === 'completed' && (
                    <Button variant="outline" size="icon">
                      <Award className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-6 h-6 text-warning" />
          <h2>Mis Certificaciones</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="relative p-6 bg-gradient-to-br from-primary to-primary/80 rounded-lg text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <Award className="w-12 h-12 mb-4 text-warning" />
                <h3 className="text-lg mb-2">{cert.title}</h3>
                <p className="text-white/80 text-sm mb-1">Nivel: {cert.level}</p>
                <p className="text-white/80 text-sm">Obtenido: {cert.date}</p>
              </div>
              <Button variant="outline" className="w-full mt-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
                Descargar Certificado
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

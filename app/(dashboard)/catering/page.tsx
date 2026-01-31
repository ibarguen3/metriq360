"use client";

import React, { useState } from 'react'
import { StatusBadge } from '@components/common/StatusBadge';
import { Calendar, Users, DollarSign, TrendingUp, Plus, Edit } from 'lucide-react';
import { Button } from '@components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@components/ui/dialog';
import { Label } from '@components/ui/label';
import { Input } from '@components/ui/input';


const initialEvents = [
  {
    id: 1,
    name: 'Daniel García Martínez',
      date: '25 Nov 2025',
    guests: 120,
    venue: 'Salón Vista Hermosa',
    revenue: 33600000,
    costs: 16800000,
    profit: 16800000,
    margin: 50,
    status: 'confirmed' as const,
    category: 'Boda',
  },
  {
    id: 2,
    name: 'Evento Corporativo TechCorp',
    date: '5 Dic 2025',
    guests: 80,
    venue: 'Hotel Plaza Central',
    revenue: 19200000,
    costs: 10560000,
    profit: 8640000,
    margin: 45,
    status: 'confirmed' as const,
    category: 'Corporativo',
  },
  {
    id: 3,
    name: 'Cumpleaños 50 años',
    date: '12 Dic 2025',
    guests: 60,
    venue: 'Restaurante propio',
    revenue: 12000000,
    costs: 6600000,
    profit: 5400000,
    margin: 45,
    status: 'pending' as const,
    category: 'Privado',
  },
  {
    id: 4,
    name: 'Conferencia Anual MedCorp',
    date: '20 Dic 2025',
    guests: 200,
    venue: 'Centro de Convenciones',
    revenue: 48000000,
    costs: 26400000,
    profit: 21600000,
    margin: 45,
    status: 'quoted' as const,
    category: 'Corporativo',
  },
];

const eventDetails = {
  menu: [
    { item: 'Entrada: Ensalada caprese', costPerPerson: 14000, pricePerPerson: 32000 },
    { item: 'Plato Principal: Salmón con risotto', costPerPerson: 48000, pricePerPerson: 112000 },
    { item: 'Postre: Tarta de chocolate', costPerPerson: 18000, pricePerPerson: 40000 },
    { item: 'Bebidas y servicio', costPerPerson: 32000, pricePerPerson: 72000 },
  ],
  additionalCosts: [
    { item: 'Personal adicional (5 personas)', cost: 2400000 },
    { item: 'Transporte y logística', cost: 1000000 },
    { item: 'Decoración y montaje', cost: 1800000 },
    { item: 'Vajilla y mantelería', cost: 1200000 },
  ],
};

export default function CateringPage() {
  const [events, setEvents] = useState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [isNewEventModalOpen, setIsNewEventModalOpen] = useState(false);
  const [isEditEventModalOpen, setIsEditEventModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<any>(null);
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    guests: 0,
    venue: '',
    category: 'Corporativo',
    pricePerGuest: 200000,
    costPerGuest: 110000,
  });

  const stats = {
    totalEvents: events.length,
    totalGuests: events.reduce((sum, e) => sum + e.guests, 0),
    totalRevenue: events.reduce((sum, e) => sum + e.revenue, 0),
    avgMargin: Math.round(events.reduce((sum, e) => sum + e.margin, 0) / events.length),
  };

  const handleCreateEvent = () => {
    const revenue = newEvent.guests * newEvent.pricePerGuest;
    const costs = newEvent.guests * newEvent.costPerGuest;
    const profit = revenue - costs;
    const margin = Math.round((profit / revenue) * 100);

    const event = {
      id: events.length + 1,
      name: newEvent.name,
      date: newEvent.date,
      guests: newEvent.guests,
      venue: newEvent.venue,
      revenue,
      costs,
      profit,
      margin,
      status: 'quoted' as const,
      category: newEvent.category,
    };

    setEvents([...events, event]);
    setSelectedEvent(event);
    setIsNewEventModalOpen(false);
    setNewEvent({
      name: '',
      date: '',
      guests: 0,
      venue: '',
      category: 'Corporativo',
      pricePerGuest: 200000,
      costPerGuest: 110000,
    });
  };

  const handleEditEvent = (event: any) => {
    setEditingEvent({
      ...event,
      pricePerGuest: Math.round(event.revenue / event.guests),
      costPerGuest: Math.round(event.costs / event.guests),
    });
    setIsEditEventModalOpen(true);
  };

  const handleUpdateEvent = () => {
    const revenue = editingEvent.guests * editingEvent.pricePerGuest;
    const costs = editingEvent.guests * editingEvent.costPerGuest;
    const profit = revenue - costs;
    const margin = Math.round((profit / revenue) * 100);

    const updatedEvent = {
      ...editingEvent,
      revenue,
      costs,
      profit,
      margin,
    };

    setEvents(events.map(e => e.id === updatedEvent.id ? updatedEvent : e));
    setSelectedEvent(updatedEvent);
    setIsEditEventModalOpen(false);
  };

  const handleChangeStatus = (eventId: number, newStatus: 'quoted' | 'pending' | 'confirmed') => {
    setEvents(events.map(e => e.id === eventId ? { ...e, status: newStatus } : e));
    if (selectedEvent.id === eventId) {
      setSelectedEvent({ ...selectedEvent, status: newStatus });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Catering Lab</h1>
          <p className="text-muted-foreground mt-1">Gestiona tus eventos y calcula rentabilidad</p>
        </div>
        <Button 
          className="bg-secondary hover:bg-secondary/90"
          onClick={() => setIsNewEventModalOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Evento
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Eventos este mes</span>
          </div>
          <p className="text-3xl font-semibold">{stats.totalEvents}</p>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Total comensales</span>
          </div>
          <p className="text-3xl font-semibold">{stats.totalGuests}</p>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-5 h-5 text-success" />
            <span className="text-sm text-muted-foreground">Ingresos proyectados</span>
          </div>
          <p className="text-3xl font-semibold text-success">${(stats.totalRevenue / 1000000).toFixed(0)}M</p>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-success" />
            <span className="text-sm text-muted-foreground">Margen promedio</span>
          </div>
          <p className="text-3xl font-semibold">{stats.avgMargin}%</p>
        </div>
      </div>

      {/* Events List and Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Events List */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3>Próximos Eventos</h3>
            </div>
            <div className="divide-y divide-border">
              {events.map((event) => (
                <div 
                  key={event.id} 
                  className={`p-6 hover:bg-accent/50 transition-colors cursor-pointer ${selectedEvent.id === event.id ? 'bg-accent' : ''}`}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="mb-1">{event.name}</h4>
                      <p className="text-sm text-muted-foreground">{event.category}</p>
                    </div>
                    <div className="flex gap-2">
                      <StatusBadge
                        status={
                          event.status === 'confirmed' ? 'success' :
                          event.status === 'pending' ? 'warning' : 'info'
                        }
                        label={
                          event.status === 'confirmed' ? 'Confirmado' :
                          event.status === 'pending' ? 'Pendiente' : 'Cotizado'
                        }
                      />
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditEvent(event);
                        }}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{event.guests} personas</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Ingresos</p>
                      <p className="font-semibold text-success">${(event.revenue / 1000000).toFixed(1)}M</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Costos</p>
                      <p className="font-semibold text-critical">${(event.costs / 1000000).toFixed(1)}M</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Beneficio</p>
                      <p className="font-semibold">${(event.profit / 1000000).toFixed(1)}M</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Margen</p>
                      <p className="font-semibold text-success">{event.margin}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event Detail */}
        <div className="space-y-4">
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3>{selectedEvent.name}</h3>
              <Button 
                size="sm"
                onClick={() => handleEditEvent(selectedEvent)}
              >
                <Edit className="w-4 h-4 mr-2" />
                Editar
              </Button>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                <span className="text-sm">Fecha</span>
                <span className="font-medium">{selectedEvent.date}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                <span className="text-sm">Comensales</span>
                <span className="font-medium">{selectedEvent.guests} personas</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                <span className="text-sm">Ubicación</span>
                <span className="font-medium text-right text-sm">{selectedEvent.venue}</span>
              </div>
            </div>

            <div className="border-t border-border pt-4 mb-4">
              <h4 className="text-sm mb-3">Menú por Persona</h4>
              <div className="space-y-2">
                {eventDetails.menu.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm p-2 bg-accent/50 rounded">
                    <span className="text-muted-foreground">{item.item}</span>
                    <span className="font-medium">${item.pricePerPerson.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between text-sm p-2 bg-primary/5 rounded font-semibold border border-primary/20">
                  <span>Total por persona</span>
                  <span>${eventDetails.menu.reduce((sum, item) => sum + item.pricePerPerson, 0).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4 mb-4">
              <h4 className="text-sm mb-3">Costos Adicionales</h4>
              <div className="space-y-2">
                {eventDetails.additionalCosts.map((cost, index) => (
                  <div key={index} className="flex justify-between text-sm p-2 bg-accent/50 rounded">
                    <span className="text-muted-foreground">{cost.item}</span>
                    <span className="font-medium">${cost.cost.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Beneficio Total</span>
                <span className="text-2xl font-bold text-success">${(selectedEvent.profit / 1000000).toFixed(1)}M</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Margen</span>
                <span className="font-semibold text-success">{selectedEvent.margin}%</span>
              </div>
            </div>

            {selectedEvent.status === 'quoted' && (
              <div className="flex gap-2">
                <Button 
                  className="flex-1 bg-warning hover:bg-warning/90"
                  onClick={() => handleChangeStatus(selectedEvent.id, 'pending')}
                >
                  Marcar Pendiente
                </Button>
                <Button 
                  className="flex-1 bg-secondary hover:bg-secondary/90"
                  onClick={() => handleChangeStatus(selectedEvent.id, 'confirmed')}
                >
                  Confirmar
                </Button>
              </div>
            )}
            {selectedEvent.status === 'pending' && (
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90"
                onClick={() => handleChangeStatus(selectedEvent.id, 'confirmed')}
              >
                Confirmar Evento
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* New Event Modal */}
      <Dialog open={isNewEventModalOpen} onOpenChange={setIsNewEventModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nuevo Evento</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label>Nombre del Evento</Label>
              <Input
                value={newEvent.name}
                onChange={(e) => setNewEvent({...newEvent, name: e.target.value})}
                placeholder="Ej: Boda María y Juan"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Categoría</Label>
                <select 
                  className="w-full p-2 rounded-lg border border-border bg-input-background"
                  value={newEvent.category}
                  onChange={(e) => setNewEvent({...newEvent, category: e.target.value})}
                >
                  <option>Boda</option>
                  <option>Corporativo</option>
                  <option>Privado</option>
                  <option>Social</option>
                </select>
              </div>
              <div>
                <Label>Fecha</Label>
                <Input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                />
              </div>
            </div>
            <div>
              <Label>Número de Invitados</Label>
              <Input
                type="number"
                value={newEvent.guests}
                onChange={(e) => setNewEvent({...newEvent, guests: parseInt(e.target.value) || 0})}
                placeholder="0"
              />
            </div>
            <div>
              <Label>Ubicación/Venue</Label>
              <Input
                value={newEvent.venue}
                onChange={(e) => setNewEvent({...newEvent, venue: e.target.value})}
                placeholder="Ej: Hotel Plaza Central"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Precio por Persona (COP)</Label>
                <Input
                  type="number"
                  value={newEvent.pricePerGuest}
                  onChange={(e) => setNewEvent({...newEvent, pricePerGuest: parseInt(e.target.value) || 0})}
                />
              </div>
              <div>
                <Label>Costo por Persona (COP)</Label>
                <Input
                  type="number"
                  value={newEvent.costPerGuest}
                  onChange={(e) => setNewEvent({...newEvent, costPerGuest: parseInt(e.target.value) || 0})}
                />
              </div>
            </div>
            {newEvent.guests > 0 && newEvent.pricePerGuest > 0 && (
              <div className="p-4 bg-accent rounded-lg space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Ingresos Totales:</span>
                  <span className="font-semibold text-success">
                    ${((newEvent.guests * newEvent.pricePerGuest) / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Costos Totales:</span>
                  <span className="font-semibold text-critical">
                    ${((newEvent.guests * newEvent.costPerGuest) / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-border">
                  <span>Margen Estimado:</span>
                  <span className="font-semibold text-success">
                    {Math.round(((newEvent.pricePerGuest - newEvent.costPerGuest) / newEvent.pricePerGuest) * 100)}%
                  </span>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNewEventModalOpen(false)}>
              Cancelar
            </Button>
            <Button 
              className="bg-secondary hover:bg-secondary/90"
              onClick={handleCreateEvent}
              disabled={!newEvent.name || newEvent.guests === 0}
            >
              Crear Evento
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Event Modal */}
      <Dialog open={isEditEventModalOpen} onOpenChange={setIsEditEventModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Evento</DialogTitle>
          </DialogHeader>
          {editingEvent && (
            <div className="space-y-4 py-4">
              <div>
                <Label>Nombre del Evento</Label>
                <Input
                  value={editingEvent.name}
                  onChange={(e) => setEditingEvent({...editingEvent, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Categoría</Label>
                  <select 
                    className="w-full p-2 rounded-lg border border-border bg-input-background"
                    value={editingEvent.category}
                    onChange={(e) => setEditingEvent({...editingEvent, category: e.target.value})}
                  >
                    <option>Boda</option>
                    <option>Corporativo</option>
                    <option>Privado</option>
                    <option>Social</option>
                  </select>
                </div>
                <div>
                  <Label>Fecha</Label>
                  <Input
                    type="date"
                    value={editingEvent.date}
                    onChange={(e) => setEditingEvent({...editingEvent, date: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <Label>Número de Invitados</Label>
                <Input
                  type="number"
                  value={editingEvent.guests}
                  onChange={(e) => setEditingEvent({...editingEvent, guests: parseInt(e.target.value) || 0})}
                />
              </div>
              <div>
                <Label>Ubicación/Venue</Label>
                <Input
                  value={editingEvent.venue}
                  onChange={(e) => setEditingEvent({...editingEvent, venue: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Precio por Persona (COP)</Label>
                  <Input
                    type="number"
                    value={editingEvent.pricePerGuest}
                    onChange={(e) => setEditingEvent({...editingEvent, pricePerGuest: parseInt(e.target.value) || 0})}
                  />
                </div>
                <div>
                  <Label>Costo por Persona (COP)</Label>
                  <Input
                    type="number"
                    value={editingEvent.costPerGuest}
                    onChange={(e) => setEditingEvent({...editingEvent, costPerGuest: parseInt(e.target.value) || 0})}
                  />
                </div>
              </div>
              <div className="p-4 bg-accent rounded-lg space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Margen Calculado:</span>
                  <span className="font-semibold text-success">
                    {Math.round(((editingEvent.pricePerGuest - editingEvent.costPerGuest) / editingEvent.pricePerGuest) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditEventModalOpen(false)}>
              Cancelar
            </Button>
            <Button 
              className="bg-secondary hover:bg-secondary/90"
              onClick={handleUpdateEvent}
            >
              Guardar Cambios
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

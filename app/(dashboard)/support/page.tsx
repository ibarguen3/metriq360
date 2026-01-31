"use client";

import { useState } from 'react';
import { StatusBadge } from '@components/common/StatusBadge';
import { MessageSquare, Send, Phone, Mail, Calendar, Clock, CheckCircle, Plus } from 'lucide-react';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Textarea } from '@components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@components/ui/dialog';
import { Label } from '@components/ui/label';

const initialChatMessages = [
  { id: 1, sender: 'support', message: 'Hola, ¿en qué puedo ayudarte hoy?', time: '10:30' },
  { id: 2, sender: 'user', message: 'Necesito ayuda con la configuración de alertas de inventario', time: '10:32' },
  { id: 3, sender: 'support', message: 'Por supuesto. Para configurar alertas, ve a Inventario > Configuración > Alertas. Ahí podrás definir los niveles mínimos para cada producto.', time: '10:33' },
  { id: 4, sender: 'user', message: 'Perfecto, ¿y cómo configuro notificaciones por email?', time: '10:35' },
  { id: 5, sender: 'support', message: 'En el mismo panel, verás una opción "Notificaciones". Puedes activar las alertas por email y elegir la frecuencia.', time: '10:36' },
];

const initialTickets = [
  { id: '#TK-2847', subject: 'Error al exportar reporte financiero', status: 'in-progress' as const, priority: 'high', date: '14 Nov 2025', assignedTo: 'Carlos M.' },
  { id: '#TK-2834', subject: 'Consulta sobre integración con proveedor', status: 'pending' as const, priority: 'medium', date: '13 Nov 2025', assignedTo: 'Pendiente' },
  { id: '#TK-2821', subject: 'Solicitud de nueva funcionalidad', status: 'resolved' as const, priority: 'low', date: '11 Nov 2025', assignedTo: 'Ana R.' },
  { id: '#TK-2809', subject: 'Problema con cálculo de margen', status: 'resolved' as const, priority: 'high', date: '9 Nov 2025', assignedTo: 'Carlos M.' },
];

const meetings = [
  { title: 'Revisión Trimestral', date: '20 Dic 2025', time: '15:00', consultant: 'María González', type: 'Consultoría' },
  { title: 'Capacitación: Módulo Financiero', date: '20 Dic 2025', time: '10:00', consultant: 'Pedro Sánchez', type: 'Capacitación' },
  { title: 'Sesión de Seguimiento', date: '2 Dic 2025', time: '16:00', consultant: 'María González', type: 'Seguimiento' },
];

export default function SupportPage() {
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState(initialChatMessages);
  const [tickets, setTickets] = useState(initialTickets);
  const [isNewTicketModalOpen, setIsNewTicketModalOpen] = useState(false);
  const [isNewMeetingModalOpen, setIsNewMeetingModalOpen] = useState(false);
  const [newTicket, setNewTicket] = useState({
    subject: '',
    priority: 'medium',
    description: '',
  });
  const [newMeeting, setNewMeeting] = useState({
    type: 'Consultoría',
    subject: '',
    date: '',
    details: '',
  });

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      const now = new Date();
      const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
      
      const newMessage = {
        id: chatMessages.length + 1,
        sender: 'user',
        message: chatInput,
        time,
      };
      
      setChatMessages([...chatMessages, newMessage]);
      setChatInput('');
      
      // Simulate support response
      setTimeout(() => {
        const supportMessage = {
          id: chatMessages.length + 2,
          sender: 'support',
          message: 'Gracias por tu mensaje. Un miembro de nuestro equipo te responderá pronto.',
          time: `${now.getHours()}:${(now.getMinutes() + 1).toString().padStart(2, '0')}`,
        };
        setChatMessages(prev => [...prev, supportMessage]);
      }, 1000);
    }
  };

  const handleCreateTicket = () => {
    const ticketNumber = `#TK-${2848 + tickets.length}`;
    const today = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' });
    
    const ticket = {
      id: ticketNumber,
      subject: newTicket.subject,
      status: 'pending' as const,
      priority: newTicket.priority,
      date: today,
      assignedTo: 'Pendiente',
    };
    
    setTickets([ticket, ...tickets]);
    setIsNewTicketModalOpen(false);
    setNewTicket({
      subject: '',
      priority: 'medium',
      description: '',
    });
  };

  const handleCreateMeeting = () => {
    setIsNewMeetingModalOpen(false);
    setNewMeeting({
      type: 'Consultoría',
      subject: '',
      date: '',
      details: '',
    });
    alert('Solicitud de reunión enviada exitosamente. Te contactaremos pronto.');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Soporte & Relación con Cliente</h1>
          <p className="text-muted-foreground mt-1">Obtén ayuda y mantente conectado</p>
        </div>
        <Button 
          className="bg-secondary hover:bg-secondary/90"
          onClick={() => setIsNewTicketModalOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Crear Ticket
        </Button>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>
          <h3>Chat en Vivo</h3>
          <p className="text-sm text-muted-foreground mt-2 mb-4">Respuesta inmediata de nuestro equipo</p>
          <span className="text-xs text-success flex items-center gap-1">
            <span className="w-2 h-2 bg-success rounded-full"></span>
            Disponible ahora
          </span>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <h3>Teléfono</h3>
          <p className="text-sm text-muted-foreground mt-2 mb-4">+57 313 363 1228</p>
          <span className="text-xs text-muted-foreground">Lun-Vie 9:00-18:00</span>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h3>Email</h3>
          <p className="text-sm text-muted-foreground mt-2 mb-4">soporte@metriq360.com</p>
          <span className="text-xs text-muted-foreground">Respuesta en 24h</span>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="chat" className="w-full">
        <TabsList>
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="tickets">Tickets</TabsTrigger>
          <TabsTrigger value="meetings">Reuniones</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chat Interface */}
            <div className="lg:col-span-2 bg-card rounded-lg border border-border overflow-hidden flex flex-col" style={{ height: '600px' }}>
              <div className="p-4 border-b border-border bg-muted">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4>Soporte METRIQ 360</h4>
                    <p className="text-xs text-success flex items-center gap-1">
                      <span className="w-2 h-2 bg-success rounded-full"></span>
                      En línea
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        msg.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-accent'
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    placeholder="Escribe tu mensaje..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} className="bg-primary">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Help */}
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="mb-4">Preguntas Frecuentes</h3>
                <div className="space-y-3">
                  <div 
                    className="p-3 bg-accent/50 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                    onClick={() => setChatInput('¿Cómo exporto reportes?')}
                  >
                    <p className="text-sm font-medium">¿Cómo exporto reportes?</p>
                  </div>
                  <div 
                    className="p-3 bg-accent/50 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                    onClick={() => setChatInput('¿Cómo configuro alertas de stock?')}
                  >
                    <p className="text-sm font-medium">Configurar alertas de stock</p>
                  </div>
                  <div 
                    className="p-3 bg-accent/50 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                    onClick={() => setChatInput('¿Cómo añado nuevos usuarios?')}
                  >
                    <p className="text-sm font-medium">Añadir nuevos usuarios</p>
                  </div>
                  <div 
                    className="p-3 bg-accent/50 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                    onClick={() => setChatInput('¿Cómo integro proveedores?')}
                  >
                    <p className="text-sm font-medium">Integración con proveedores</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="mb-4">Centro de Ayuda</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Accede a nuestra documentación completa y tutoriales en video.
                </p>
                <Button variant="outline" className="w-full">
                  Visitar Centro de Ayuda
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tickets" className="mt-6">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3>Historial de Tickets</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left">ID</th>
                    <th className="px-6 py-4 text-left">Asunto</th>
                    <th className="px-6 py-4 text-left">Estado</th>
                    <th className="px-6 py-4 text-left">Prioridad</th>
                    <th className="px-6 py-4 text-left">Fecha</th>
                    <th className="px-6 py-4 text-left">Asignado a</th>
                    <th className="px-6 py-4 text-center">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {tickets.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-accent/50 transition-colors">
                      <td className="px-6 py-4 font-mono text-sm">{ticket.id}</td>
                      <td className="px-6 py-4">{ticket.subject}</td>
                      <td className="px-6 py-4">
                        <StatusBadge
                          status={
                            ticket.status === 'resolved' ? 'success' :
                            ticket.status === 'in-progress' ? 'warning' : 'info'
                          }
                          label={
                            ticket.status === 'resolved' ? 'Resuelto' :
                            ticket.status === 'in-progress' ? 'En Progreso' : 'Pendiente'
                          }
                        />
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge
                          status={
                            ticket.priority === 'high' ? 'critical' :
                            ticket.priority === 'medium' ? 'warning' : 'info'
                          }
                          label={ticket.priority === 'high' ? 'Alta' : ticket.priority === 'medium' ? 'Media' : 'Baja'}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{ticket.date}</td>
                      <td className="px-6 py-4 text-sm">{ticket.assignedTo}</td>
                      <td className="px-6 py-4 text-center">
                        <Button size="sm" variant="outline">Ver</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="meetings" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="mb-4">Próximas Reuniones</h3>
              <div className="space-y-4">
                {meetings.map((meeting, index) => (
                  <div key={index} className="bg-card p-5 rounded-lg border border-border hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h4>{meeting.title}</h4>
                      <StatusBadge status="info" label={meeting.type} />
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{meeting.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{meeting.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>{meeting.consultant}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" className="flex-1">Unirse</Button>
                      <Button size="sm" variant="outline">Reagendar</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="mb-4">Agendar Nueva Reunión</h3>
              <div className="space-y-4">
                <div>
                  <Label>Tipo de reunión</Label>
                  <select 
                    className="w-full p-2 rounded-lg border border-border bg-input-background"
                    value={newMeeting.type}
                    onChange={(e) => setNewMeeting({...newMeeting, type: e.target.value})}
                  >
                    <option>Consultoría</option>
                    <option>Capacitación</option>
                    <option>Soporte Técnico</option>
                    <option>Seguimiento</option>
                  </select>
                </div>
                <div>
                  <Label>Asunto</Label>
                  <Input 
                    placeholder="Describe el motivo de la reunión"
                    value={newMeeting.subject}
                    onChange={(e) => setNewMeeting({...newMeeting, subject: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Fecha preferida</Label>
                  <Input 
                    type="date"
                    value={newMeeting.date}
                    onChange={(e) => setNewMeeting({...newMeeting, date: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Detalles adicionales</Label>
                  <Textarea 
                    placeholder="Comparte cualquier detalle relevante..." 
                    rows={4}
                    value={newMeeting.details}
                    onChange={(e) => setNewMeeting({...newMeeting, details: e.target.value})}
                  />
                </div>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90"
                  onClick={handleCreateMeeting}
                  disabled={!newMeeting.subject || !newMeeting.date}
                >
                  Solicitar Reunión
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* New Ticket Modal */}
      <Dialog open={isNewTicketModalOpen} onOpenChange={setIsNewTicketModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear Nuevo Ticket</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label>Asunto</Label>
              <Input
                value={newTicket.subject}
                onChange={(e) => setNewTicket({...newTicket, subject: e.target.value})}
                placeholder="Breve descripción del problema"
              />
            </div>
            <div>
              <Label>Prioridad</Label>
              <select 
                className="w-full p-2 rounded-lg border border-border bg-input-background"
                value={newTicket.priority}
                onChange={(e) => setNewTicket({...newTicket, priority: e.target.value})}
              >
                <option value="low">Baja</option>
                <option value="medium">Media</option>
                <option value="high">Alta</option>
              </select>
            </div>
            <div>
              <Label>Descripción</Label>
              <Textarea
                value={newTicket.description}
                onChange={(e) => setNewTicket({...newTicket, description: e.target.value})}
                placeholder="Describe el problema en detalle..."
                rows={6}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNewTicketModalOpen(false)}>
              Cancelar
            </Button>
            <Button 
              className="bg-secondary hover:bg-secondary/90"
              onClick={handleCreateTicket}
              disabled={!newTicket.subject || !newTicket.description}
            >
              Crear Ticket
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

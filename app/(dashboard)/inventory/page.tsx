"use client";

import { useState } from 'react';
import { KPICard } from '@components/common/KPICard';
import { StatusBadge } from '@components/common/StatusBadge';
import { Package, TrendingDown, AlertTriangle, DollarSign, Plus, Edit } from 'lucide-react';
import { Button } from '@components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@components/ui/dialog';
import { Label } from '@components/ui/label';
import { Input } from '@components/ui/input';

const inventoryItems = [
  { name: 'Tomates Cherry', category: 'Vegetales', stock: 2.5, unit: 'kg', minStock: 5, maxStock: 15, supplier: 'VeggieSupply', status: 'critical' as const, lastOrder: '2025-12-10', cost: 180000 },
  { name: 'Aceite de Oliva Premium', category: 'Aceites', stock: 8, unit: 'L', minStock: 5, maxStock: 20, supplier: 'DeliFoods', status: 'success' as const, lastOrder: '2025-12-08', cost: 480000 },
  { name: 'Salmón Fresco', category: 'Pescados', stock: 5.5, unit: 'kg', minStock: 3, maxStock: 10, supplier: 'MarFresh', status: 'warning' as const, lastOrder: '2025-12-13', cost: 660000 },
  { name: 'Queso Parmesano', category: 'Lácteos', stock: 3.2, unit: 'kg', minStock: 2, maxStock: 8, supplier: 'DairyPro', status: 'success' as const, lastOrder: '2025-12-11', cost: 384000 },
  { name: 'Pasta Fresca', category: 'Harinas', stock: 8, unit: 'kg', minStock: 10, maxStock: 30, supplier: 'PastaItalia', status: 'warning' as const, lastOrder: '2025-12-09', cost: 256000 },
  { name: 'Carne de Res Premium', category: 'Carnes', stock: 12, unit: 'kg', minStock: 8, maxStock: 20, supplier: 'MeatMaster', status: 'success' as const, lastOrder: '2025-12-12', cost: 1440000 },
  { name: 'Hongos Portobello', category: 'Vegetales', stock: 1.5, unit: 'kg', minStock: 3, maxStock: 8, supplier: 'VeggieSupply', status: 'critical' as const, lastOrder: '2025-12-10', cost: 88000 },
  { name: 'Vino Blanco Cocina', category: 'Bebidas', stock: 15, unit: 'Botellas', minStock: 10, maxStock: 30, supplier: 'WineSupply', status: 'success' as const, lastOrder: '2025-12-05', cost: 540000 },
  { name: 'Especias Mix Mediterráneo', category: 'Especias', stock: 0.8, unit: 'kg', minStock: 1, maxStock: 3, supplier: 'SpiceWorld', status: 'critical' as const, lastOrder: '2025-12-07', cost: 168000 },
  { name: 'Papas', category: 'Vegetales', stock: 25, unit: 'kg', minStock: 20, maxStock: 50, supplier: 'VeggieSupply', status: 'success' as const, lastOrder: '2025-12-11', cost: 148000 },
];

export default function InventoryPage() {
  const [inventoryList, setInventoryList] = useState(inventoryItems);
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isEntryModalOpen, setIsEntryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Vegetales',
    stock: 0,
    unit: 'kg',
    minStock: 0,
    maxStock: 0,
    supplier: '',
    cost: 0,
  });
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [entryData, setEntryData] = useState({
    quantity: 0,
    cost: 0,
  });

  const stats = {
    totalValue: inventoryList.reduce((sum, item) => sum + item.cost, 0),
    totalProducts: inventoryList.length,
    alerts: inventoryList.filter(item => item.status === 'warning' || item.status === 'critical').length,
    lowStock: inventoryList.filter(item => item.status === 'critical').length,
  };

  const handleCreateProduct = () => {
    const product = {
      ...newProduct,
      status: (newProduct.stock / newProduct.maxStock) < 0.3 ? 'critical' as const : 
              (newProduct.stock / newProduct.maxStock) < 0.5 ? 'warning' as const : 'success' as const,
      lastOrder: new Date().toISOString().split('T')[0],
    };
    
    setInventoryList([...inventoryList, product]);
    setIsNewProductModalOpen(false);
    setNewProduct({
      name: '',
      category: 'Vegetales',
      stock: 0,
      unit: 'kg',
      minStock: 0,
      maxStock: 0,
      supplier: '',
      cost: 0,
    });
  };

  const handleGenerateOrder = () => {
    const updatedList = inventoryList.map(item => {
      if (item.name === selectedProduct.name) {
        return {
          ...item,
          stock: item.stock + orderQuantity,
          status: ((item.stock + orderQuantity) / item.maxStock) < 0.3 ? 'critical' as const :
                  ((item.stock + orderQuantity) / item.maxStock) < 0.5 ? 'warning' as const : 'success' as const,
        };
      }
      return item;
    });
    
    setInventoryList(updatedList);
    setIsOrderModalOpen(false);
    setOrderQuantity(0);
    setSelectedProduct(null);
  };

  const handleRegisterEntry = () => {
    const updatedList = inventoryList.map(item => {
      if (item.name === selectedProduct.name) {
        const newStock = item.stock + entryData.quantity;
        return {
          ...item,
          stock: newStock,
          cost: item.cost + entryData.cost,
          status: (newStock / item.maxStock) < 0.3 ? 'critical' as const :
                  (newStock / item.maxStock) < 0.5 ? 'warning' as const : 'success' as const,
          lastOrder: new Date().toISOString().split('T')[0],
        };
      }
      return item;
    });
    
    setInventoryList(updatedList);
    setIsEntryModalOpen(false);
    setEntryData({ quantity: 0, cost: 0 });
    setSelectedProduct(null);
  };

  const handleQuickOrder = (item: any) => {
    setSelectedProduct(item);
    setOrderQuantity(item.maxStock - item.stock);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Inventario & Operaciones</h1>
          <p className="text-muted-foreground mt-1">Gestiona tu stock y proveedores</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setIsNewProductModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Producto
          </Button>
          <Button 
            className="bg-secondary hover:bg-secondary/90"
            onClick={() => {
              setSelectedProduct(null);
              setIsEntryModalOpen(true);
            }}
          >
            Registrar Entrada
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Valor Total Inventario"
          value={`$${(stats.totalValue / 1000000).toFixed(1)}M`}
          icon={DollarSign}
        />
        <KPICard
          title="Productos en Stock"
          value={stats.totalProducts.toString()}
          icon={Package}
        />
        <KPICard
          title="Alertas Activas"
          value={stats.alerts.toString()}
          icon={AlertTriangle}
          status="warning"
        />
        <KPICard
          title="Stock Bajo"
          value={stats.lowStock.toString()}
          icon={TrendingDown}
          status="critical"
        />
      </div>

      {/* Inventory Table */}
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3>Stock Actual</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-4 text-left">Producto</th>
                <th className="px-6 py-4 text-left">Categoría</th>
                <th className="px-6 py-4 text-right">Stock Actual</th>
                <th className="px-6 py-4 text-right">Stock Mínimo</th>
                <th className="px-6 py-4 text-left">Proveedor</th>
                <th className="px-6 py-4 text-right">Valor</th>
                <th className="px-6 py-4 text-center">Estado</th>
                <th className="px-6 py-4 text-center">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {inventoryList.map((item, index) => {
                const stockPercentage = (item.stock / item.maxStock) * 100;
                
                return (
                  <tr key={index} className="hover:bg-accent/50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Última orden: {item.lastOrder}</p>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{item.category}</td>
                    <td className="px-6 py-4 text-right">
                      <div>
                        <p className="font-medium">{item.stock} {item.unit}</p>
                        <div className="w-20 bg-muted rounded-full h-1.5 mt-1">
                          <div
                            className={`h-1.5 rounded-full ${
                              stockPercentage < 30 ? 'bg-critical' : stockPercentage < 50 ? 'bg-warning' : 'bg-success'
                            }`}
                            style={{ width: `${Math.min(stockPercentage, 100)}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-muted-foreground">{item.minStock} {item.unit}</td>
                    <td className="px-6 py-4">{item.supplier}</td>
                    <td className="px-6 py-4 text-right font-medium">${item.cost.toLocaleString()}</td>
                    <td className="px-6 py-4 text-center">
                      <StatusBadge
                        status={item.status}
                        label={
                          item.status === 'critical' ? 'Crítico' : item.status === 'warning' ? 'Bajo' : 'Normal'
                        }
                      />
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.status === 'critical' || item.status === 'warning' ? (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-xs"
                          onClick={() => handleQuickOrder(item)}
                        >
                          Ordenar
                        </Button>
                      ) : (
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => {
                            setSelectedProduct(item);
                            setIsEntryModalOpen(true);
                          }}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="mb-3">Pedidos Pendientes</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
              <span className="text-sm">VeggieSupply</span>
              <StatusBadge status="warning" label="Pendiente" />
            </div>
            <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
              <span className="text-sm">MarFresh</span>
              <StatusBadge status="info" label="En tránsito" />
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="mb-3">Próximos Vencimientos</h4>
          <div className="space-y-2">
            <div className="p-3 bg-accent/50 rounded-lg">
              <p className="text-sm font-medium">Queso Fresco</p>
              <p className="text-xs text-muted-foreground">Vence: 18 Dic 2025</p>
            </div>
            <div className="p-3 bg-accent/50 rounded-lg">
              <p className="text-sm font-medium">Yogurt Natural</p>
              <p className="text-xs text-muted-foreground">Vence: 20 Ene 2026</p>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h4 className="mb-3">Top Proveedores</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
              <span className="text-sm">VeggieSupply</span>
              <span className="text-xs text-success font-medium">$9'800.000</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
              <span className="text-sm">MarFresh</span>
              <span className="text-xs text-success font-medium">$7'920.000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Dialog open={isNewProductModalOpen} onOpenChange={setIsNewProductModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nuevo Producto</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label>Nombre del Producto</Label>
              <Input
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                placeholder="Ej: Tomates Cherry"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Categoría</Label>
                <select 
                  className="w-full p-2 rounded-lg border border-border bg-input-background"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                >
                  <option>Vegetales</option>
                  <option>Carnes</option>
                  <option>Pescados</option>
                  <option>Lácteos</option>
                </select>
              </div>
              <div>
                <Label>Unidad</Label>
                <select 
                  className="w-full p-2 rounded-lg border border-border bg-input-background"
                  value={newProduct.unit}
                  onChange={(e) => setNewProduct({...newProduct, unit: e.target.value})}
                >
                  <option>kg</option>
                  <option>L</option>
                  <option>unidades</option>
                </select>
              </div>
            </div>
            <div>
              <Label>Proveedor</Label>
              <Input
                value={newProduct.supplier}
                onChange={(e) => setNewProduct({...newProduct, supplier: e.target.value})}
                placeholder="Ej: VeggieSupply"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNewProductModalOpen(false)}>
              Cancelar
            </Button>
            <Button 
              className="bg-secondary hover:bg-secondary/90"
              onClick={handleCreateProduct}
              disabled={!newProduct.name || !newProduct.supplier}
            >
              Crear Producto
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Generar Orden de Compra</DialogTitle>
          </DialogHeader>
          {selectedProduct && (
            <div className="space-y-4 py-4">
              <div className="p-4 bg-accent rounded-lg">
                <h4 className="mb-2">{selectedProduct.name}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Stock Actual</p>
                    <p className="font-semibold">{selectedProduct.stock} {selectedProduct.unit}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Stock Máximo</p>
                    <p className="font-semibold">{selectedProduct.maxStock} {selectedProduct.unit}</p>
                  </div>
                </div>
              </div>
              <div>
                <Label>Cantidad a Ordenar ({selectedProduct.unit})</Label>
                <Input
                  type="number"
                  value={orderQuantity}
                  onChange={(e) => setOrderQuantity(parseFloat(e.target.value) || 0)}
                  placeholder="0"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOrderModalOpen(false)}>
              Cancelar
            </Button>
            <Button 
              className="bg-secondary hover:bg-secondary/90"
              onClick={handleGenerateOrder}
              disabled={orderQuantity <= 0}
            >
              Generar Orden
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isEntryModalOpen} onOpenChange={setIsEntryModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Registrar Entrada de Inventario</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {selectedProduct && (
              <div className="p-4 bg-accent rounded-lg mb-4">
                <h4>{selectedProduct.name}</h4>
                <p className="text-sm text-muted-foreground">Stock actual: {selectedProduct.stock} {selectedProduct.unit}</p>
              </div>
            )}
            {!selectedProduct && (
              <div>
                <Label>Seleccionar Producto</Label>
                <select 
                  className="w-full p-2 rounded-lg border border-border bg-input-background"
                  onChange={(e) => {
                    const product = inventoryList.find(p => p.name === e.target.value);
                    setSelectedProduct(product);
                  }}
                >
                  <option value="">Seleccione un producto</option>
                  {inventoryList.map((item, idx) => (
                    <option key={idx} value={item.name}>{item.name}</option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <Label>Cantidad Recibida</Label>
              <Input
                type="number"
                value={entryData.quantity}
                onChange={(e) => setEntryData({...entryData, quantity: parseFloat(e.target.value) || 0})}
                placeholder="0"
              />
            </div>
            <div>
              <Label>Valor Total (COP)</Label>
              <Input
                type="number"
                value={entryData.cost}
                onChange={(e) => setEntryData({...entryData, cost: parseInt(e.target.value) || 0})}
                placeholder="0"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEntryModalOpen(false)}>
              Cancelar
            </Button>
            <Button 
              className="bg-secondary hover:bg-secondary/90"
              onClick={handleRegisterEntry}
              disabled={!selectedProduct || entryData.quantity <= 0}
            >
              Registrar Entrada
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

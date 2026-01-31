'use client';

import { useState } from 'react';
import { Button } from '@components/ui/button';
import { StatusBadge } from '@components/common/StatusBadge';
import { Search, Plus, TrendingUp, AlertCircle, Edit, Trash2, X } from 'lucide-react';
import { Input } from '@components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@components/ui/dialog';
import { Label } from '@components/ui/label';

type StatusType = 'success' | 'warning' | 'critical' | 'info';

interface Recipe {
  id: number;
  name: string;
  category: string;
  cost: number;
  price: number;
  margin: number;
  status: StatusType;
  portions: number;
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Salmón a la Parrilla',
    category: 'Platos Principales',
    cost: 34000,
    price: 99600,
    margin: 66,
    status: 'success' as const,
    portions: 1,
  },
  {
    id: 2,
    name: 'Risotto de Hongos',
    category: 'Platos Principales',
    cost: 16800,
    price: 67600,
    margin: 75,
    status: 'success' as const,
    portions: 1,
  },
  {
    id: 3,
    name: 'Hamburguesa Premium',
    category: 'Platos Principales',
    cost: 23200,
    price: 58000,
    margin: 60,
    status: 'warning' as const,
    portions: 1,
  },
  {
    id: 4,
    name: 'Pizza Margherita',
    category: 'Pizzas',
    cost: 18000,
    price: 47600,
    margin: 62,
    status: 'warning' as const,
    portions: 1,
  },
  {
    id: 5,
    name: 'Ensalada César',
    category: 'Entradas',
    cost: 11200,
    price: 39600,
    margin: 72,
    status: 'success' as const,
    portions: 1,
  },
  {
    id: 6,
    name: 'Pasta Carbonara',
    category: 'Platos Principales',
    cost: 14000,
    price: 36000,
    margin: 61,
    status: 'critical' as const,
    portions: 1,
  },
];

const selectedRecipeDetails = {
  name: 'Salmón a la Parrilla',
  portions: 1,
  cost: 34000,
  price: 99600,
  margin: 66,
  ingredients: [
    { name: 'Filete de salmón (200g)', quantity: '1 unidad', unitCost: 20800, totalCost: 20800, supplier: 'MarFresh' },
    { name: 'Aceite de oliva', quantity: '15ml', unitCost: 320, totalCost: 320, supplier: 'DeliFoods' },
    { name: 'Limón', quantity: '0.5 unidad', unitCost: 1200, totalCost: 600, supplier: 'VeggieSupply' },
    { name: 'Especias mix', quantity: '5g', unitCost: 2000, totalCost: 2000, supplier: 'SpiceWorld' },
    { name: 'Vegetales de guarnición', quantity: '150g', unitCost: 7200, totalCost: 7200, supplier: 'VeggieSupply' },
    { name: 'Papas asadas', quantity: '100g', unitCost: 2200, totalCost: 2200, supplier: 'VeggieSupply' },
    { name: 'Mantequilla de hierbas', quantity: '20g', unitCost: 880, totalCost: 880, supplier: 'DeliFoods' },
  ],
  suggestedPrice: 106000,
};

export default function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);
  const [recipeList, setRecipeList] = useState(recipes);
  const [isNewRecipeModalOpen, setIsNewRecipeModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState<any>(null);
  const [newRecipe, setNewRecipe] = useState<Omit<Recipe, 'id' | 'margin' | 'status' | 'portions'>>({
    name: '',
    category: 'Platos Principales',
    cost: 0,
    price: 0,
  });

  const filteredRecipes = recipeList.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateRecipe = () => {
    const margin = ((newRecipe.price - newRecipe.cost) / newRecipe.price) * 100;
    const status: StatusType = margin >= 70 ? 'success' : margin >= 60 ? 'warning' : 'critical';
    
    const recipe: Recipe = {
      id: recipeList.length + 1,
      ...newRecipe,
      margin: Math.round(margin),
      status,
      portions: 1,
    };

    setRecipeList([...recipeList, recipe]);
    setIsNewRecipeModalOpen(false);
    setNewRecipe({ name: '', category: 'Platos Principales', cost: 0, price: 0 });
  };

  const handleDeleteRecipe = (id: number) => {
    if (confirm('¿Estás seguro de eliminar esta receta?')) {
      setRecipeList(recipeList.filter(r => r.id !== id));
      if (selectedRecipe.id === id) {
        setSelectedRecipe(recipeList[0]);
      }
    }
  };

  const handleEditRecipe = (recipe: any) => {
    setEditingRecipe({...recipe});
    setIsEditModalOpen(true);
  };

  const handleUpdateRecipe = () => {
    const margin = ((editingRecipe.price - editingRecipe.cost) / editingRecipe.price) * 100;
    const status = margin >= 70 ? 'success' : margin >= 60 ? 'warning' : 'critical';
    
    const updatedRecipe = {
      ...editingRecipe,
      margin: Math.round(margin),
      status,
    };
    
    setRecipeList(recipeList.map(r => r.id === updatedRecipe.id ? updatedRecipe : r));
    setSelectedRecipe(updatedRecipe);
    setIsEditModalOpen(false);
  };

  const handleApplySuggestedPrice = () => {
    const updatedRecipe = {
      ...selectedRecipe,
      price: selectedRecipeDetails.suggestedPrice,
      margin: 70,
    };
    setRecipeList(recipeList.map(r => r.id === updatedRecipe.id ? updatedRecipe : r));
    setSelectedRecipe(updatedRecipe);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Recetas & Control de Costos</h1>
          <p className="text-muted-foreground mt-1">Gestiona tus recetas y optimiza márgenes</p>
        </div>
        <Button 
          className="gap-2 bg-secondary hover:bg-secondary/90"
          onClick={() => setIsNewRecipeModalOpen(true)}
        >
          <Plus className="w-4 h-4" />
          Nueva Receta
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recipe List */}
        <div className="lg:col-span-2 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Buscar recetas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card"
            />
          </div>

          {/* Recipe Cards */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left">Receta</th>
                  <th className="px-6 py-4 text-right">Costo</th>
                  <th className="px-6 py-4 text-right">Precio</th>
                  <th className="px-6 py-4 text-right">Margen</th>
                  <th className="px-6 py-4 text-center">Estado</th>
                  <th className="px-6 py-4 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredRecipes.map((recipe) => (
                  <tr
                    key={recipe.id}
                    onClick={() => setSelectedRecipe(recipe)}
                    className={`cursor-pointer hover:bg-accent/50 transition-colors ${
                      selectedRecipe.id === recipe.id ? 'bg-accent' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium">{recipe.name}</p>
                        <p className="text-sm text-muted-foreground">{recipe.category}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">${recipe.cost.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right">${recipe.price.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right font-semibold text-success">{recipe.margin}%</td>
                    <td className="px-6 py-4 text-center">
                      <StatusBadge
                        status={recipe.status}
                        label={
                          recipe.status === 'success'
                            ? 'Óptimo'
                            : recipe.status === 'warning'
                            ? 'Revisar'
                            : 'Bajo'
                        }
                      />
                    </td>
                    <td className="px-6 py-4 text-center" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-center gap-2">
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => handleEditRecipe(recipe)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => handleDeleteRecipe(recipe.id)}
                        >
                          <Trash2 className="w-4 h-4 text-critical" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recipe Details Panel */}
        <div className="space-y-4">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="mb-4">{selectedRecipeDetails.name}</h3>
            
            {/* Cost Summary */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                <span className="text-sm text-muted-foreground">Costo Total</span>
                <span className="font-semibold">${selectedRecipe.cost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                <span className="text-sm text-muted-foreground">Precio Actual</span>
                <span className="font-semibold">${selectedRecipe.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg border border-success/20">
                <span className="text-sm text-muted-foreground">Margen</span>
                <span className="font-semibold text-success">{selectedRecipe.margin}%</span>
              </div>
            </div>

            {/* Suggested Price */}
            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium text-sm mb-1">Precio Sugerido</p>
                  <p className="text-2xl font-semibold text-warning mb-2">${selectedRecipeDetails.suggestedPrice.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Basado en análisis de mercado y margen objetivo del 70%</p>
                </div>
              </div>
              <Button 
                className="w-full mt-3 bg-warning hover:bg-warning/90 text-white"
                onClick={handleApplySuggestedPrice}
              >
                Aplicar Precio Sugerido
              </Button>
            </div>

            {/* Ingredients Breakdown */}
            <div>
              <h4 className="mb-3 text-sm">Desglose de Ingredientes</h4>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {selectedRecipeDetails.ingredients.map((ingredient, index) => (
                  <div key={index} className="p-3 bg-accent/50 rounded-lg text-sm">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium">{ingredient.name}</span>
                      <span className="font-semibold">${ingredient.totalCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{ingredient.quantity}</span>
                      <span>{ingredient.supplier}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Recipe Modal */}
      <Dialog open={isNewRecipeModalOpen} onOpenChange={setIsNewRecipeModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nueva Receta</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label>Nombre de la Receta</Label>
              <Input
                value={newRecipe.name}
                onChange={(e) => setNewRecipe({...newRecipe, name: e.target.value})}
                placeholder="Ej: Salmón al Horno"
              />
            </div>
            <div>
              <Label>Categoría</Label>
              <select 
                className="w-full p-2 rounded-lg border border-border bg-input-background"
                value={newRecipe.category}
                onChange={(e) => setNewRecipe({...newRecipe, category: e.target.value})}
              >
                <option>Platos Principales</option>
                <option>Entradas</option>
                <option>Pizzas</option>
                <option>Postres</option>
                <option>Bebidas</option>
              </select>
            </div>
            <div>
              <Label>Costo (COP)</Label>
              <Input
                type="number"
                value={newRecipe.cost}
                onChange={(e) => setNewRecipe({...newRecipe, cost: parseInt(e.target.value) || 0})}
                placeholder="0"
              />
            </div>
            <div>
              <Label>Precio de Venta (COP)</Label>
              <Input
                type="number"
                value={newRecipe.price}
                onChange={(e) => setNewRecipe({...newRecipe, price: parseInt(e.target.value) || 0})}
                placeholder="0"
              />
            </div>
            {newRecipe.cost > 0 && newRecipe.price > 0 && (
              <div className="p-3 bg-accent rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Margen Calculado:</span>
                  <span className="font-semibold text-success">
                    {Math.round(((newRecipe.price - newRecipe.cost) / newRecipe.price) * 100)}%
                  </span>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNewRecipeModalOpen(false)}>
              Cancelar
            </Button>
            <Button 
              className="bg-secondary hover:bg-secondary/90"
              onClick={handleCreateRecipe}
              disabled={!newRecipe.name || newRecipe.cost === 0 || newRecipe.price === 0}
            >
              Crear Receta
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Recipe Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Receta</DialogTitle>
          </DialogHeader>
          {editingRecipe && (
            <div className="space-y-4 py-4">
              <div>
                <Label>Nombre de la Receta</Label>
                <Input
                  value={editingRecipe.name}
                  onChange={(e) => setEditingRecipe({...editingRecipe, name: e.target.value})}
                />
              </div>
              <div>
                <Label>Categoría</Label>
                <select 
                  className="w-full p-2 rounded-lg border border-border bg-input-background"
                  value={editingRecipe.category}
                  onChange={(e) => setEditingRecipe({...editingRecipe, category: e.target.value})}
                >
                  <option>Platos Principales</option>
                  <option>Entradas</option>
                  <option>Pizzas</option>
                  <option>Postres</option>
                  <option>Bebidas</option>
                </select>
              </div>
              <div>
                <Label>Costo (COP)</Label>
                <Input
                  type="number"
                  value={editingRecipe.cost}
                  onChange={(e) => setEditingRecipe({...editingRecipe, cost: parseInt(e.target.value) || 0})}
                />
              </div>
              <div>
                <Label>Precio de Venta (COP)</Label>
                <Input
                  type="number"
                  value={editingRecipe.price}
                  onChange={(e) => setEditingRecipe({...editingRecipe, price: parseInt(e.target.value) || 0})}
                />
              </div>
              <div className="p-3 bg-accent rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Margen Calculado:</span>
                  <span className="font-semibold text-success">
                    {Math.round(((editingRecipe.price - editingRecipe.cost) / editingRecipe.price) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
              Cancelar
            </Button>
            <Button 
              className="bg-secondary hover:bg-secondary/90"
              onClick={handleUpdateRecipe}
            >
              Guardar Cambios
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

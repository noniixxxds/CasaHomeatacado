
import React from 'react';
import { 
  Truck, 
  ShieldCheck, 
  CreditCard, 
  Box, 
  Utensils, 
  Footprints, 
  Dumbbell, 
  Sparkles,
  ShoppingCart,
  Star,
  Lightbulb,
  Phone,
  User
} from 'lucide-react';
import { Category, Benefit } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'feet',
    name: 'Conforto para os Pés',
    description: 'Palmilhas e acessórios ortopédicos.',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800'
  },
  {
    id: 'fitness',
    name: 'Fitness',
    description: 'Acessórios diversos para treino.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800'
  },
  {
    id: 'kitchen',
    name: 'Utensílios para Cozinha',
    description: 'Praticidade para o seu dia a dia.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800'
  },
  {
    id: 'hair',
    name: 'Acessórios para Cabelos',
    description: 'Pentes e escovas profissionais.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: '1',
    title: 'Entrega Rápida',
    description: 'Logística integrada para todo o Brasil.',
    icon: 'Truck'
  },
  {
    id: '2',
    title: 'Qualidade Total',
    description: 'Produtos selecionados para o seu negócio.',
    icon: 'ShieldCheck'
  },
  {
    id: '3',
    title: 'Pagamento Facilitado',
    description: 'Condições especiais no boleto e cartão.',
    icon: 'CreditCard'
  },
  {
    id: '4',
    title: 'Estoque Real',
    description: 'Itens disponíveis para pronta entrega.',
    icon: 'Box'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-8 h-8 text-magenta" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-magenta" />,
  CreditCard: <CreditCard className="w-8 h-8 text-magenta" />,
  Box: <Box className="w-8 h-8 text-magenta" />,
  Utensils: <Utensils className="w-12 h-12 text-white" />,
  Footprints: <Footprints className="w-12 h-12 text-white" />,
  Dumbbell: <Dumbbell className="w-12 h-12 text-white" />,
  Sparkles: <Sparkles className="w-12 h-12 text-white" />,
  ShoppingCart: <ShoppingCart className="w-4 h-4" />,
  Star: <Star className="w-4 h-4" />,
  Lightbulb: <Lightbulb className="w-4 h-4" />,
  Phone: <Phone className="w-4 h-4" />,
  User: <User className="w-4 h-4" />
};

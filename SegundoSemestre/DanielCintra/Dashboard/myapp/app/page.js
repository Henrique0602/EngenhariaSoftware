'use client'
import { useState } from 'react'
import Header from './Components/header';
import UserProfile from './Components/useProfile'
import StatsGrid from './Components/StatsGrid';
import DataTable from './Components/DataTable'


export default function Home() {

  const [user] = useState({
    name: 'João Silva',
    email: 'joao@email.com',
    avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'
  })

  const [stats] = useState([
    { label: 'Vendas', value: 'R$ 12.500', change: '+15%', color: 'green' },
    { label: 'Usuários', value: '1.234', change: '+8%', color: 'blue' },
    { label: 'Pedidos', value: '89', change: '+23%', color: 'purple' },
    { label: 'Receita', value: 'R$ 45.200', change: '+12%', color: 'orange' }
  ]);

  const [recentOrders] = useState([
    { id: 1, customer: 'Maria Santos', amount: 'R$ 150', status: 'Entregue' },
    { id: 2, customer: 'Pedro Costa', amount: 'R$ 89', status: 'Em trânsito' },
    { id: 3, customer: 'Ana Lima', amount: 'R$ 320', status: 'Processando' }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Dashboard">
        <UserProfile user={user} />
      </Header>
      {/* Main Content */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}

        <StatsGrid stats={stats}></StatsGrid>

        {/* Recent Orders */}

        <DataTable title=' Pedidos Recentes' columns={['ID', 'Cliente', 'Valor', 'Status']}></DataTable>


      </main>



    </div>
  );
}

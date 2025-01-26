'use client'
import React from 'react'
import { 
  Users, 
  UserPlus, 
  Search, 
  QrCode 
} from 'lucide-react';

import {useRouter} from 'next/navigation'
export default function BeneficiaryManagementLandingPage() {
  const router = useRouter()
  const userRoles = [
    {
      icon: Users,
      title: "Admin",
      description: "Full system access with comprehensive management and reporting capabilities.",
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-500"
    },
    {
      icon: UserPlus,
      title: "Receptionist",
      description: "Manage beneficiary registration, token assignment, and initial data verification.",
      gradient: "bg-gradient-to-br from-green-500 to-teal-500"
    },
    {
      icon: QrCode,
      title: "Department Staff",
      description: "Process tokens, provide assistance, and update beneficiary status in real-time.",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: Search,
      title: "Beneficiary",
      description: "Track your request, receive token-based service, and get real-time status updates.",
      gradient: "bg-gradient-to-br from-orange-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Beneficiary Management System</h1>
          <nav className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">User Roles</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">How It Works</a>
            <button onClick={() => router.push('/login')} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full">
              Login
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
            Streamlined Beneficiary Management
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Efficient, transparent, and user-friendly system for managing beneficiary interactions across multiple departments.
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userRoles.map((role, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 ${role.gradient}`}
            >
              <div className="absolute inset-0 opacity-10 bg-pattern"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    <role.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{role.title}</h3>
                </div>
                <p className="text-white text-opacity-80 mb-4">{role.description}</p>
                <button className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full hover:bg-opacity-30 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">How It Works</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Registration</h4>
              <p>Beneficiaries are registered with unique identifiers and purpose.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Token Generation</h4>
              <p>Unique tokens are assigned for specific department interactions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Tracking</h4>
              <p>Real-time status updates and comprehensive tracking.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Beneficiary Management System – Empowering Efficient Service
          </p>
        </div>
      </footer>
    </div>
  );
}
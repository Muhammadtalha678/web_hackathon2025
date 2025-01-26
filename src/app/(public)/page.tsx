import React from 'react'
import { Heart, Home, Rocket, BookOpen } from 'lucide-react';
// import LoanCard from '@/components/LocanCard';
export default function MilestoneLoanLandingPage() {
  const loanTypes = [
    {
      icon: Heart,
      title: "Wedding Loans",
      description: "Transform your love story into a magical celebration without financial stress.",
      gradient: "bg-gradient-to-br from-pink-500 to-rose-500"
    },
    {
      icon: Home,
      title: "Home Construction Loans",
      description: "Build the sanctuary where your dreams and memories will flourish.",
      gradient: "bg-gradient-to-br from-teal-500 to-green-500"
    },
    {
      icon: Rocket,
      title: "Business Startup Loans",
      description: "Ignite your entrepreneurial spark and turn passionate ideas into reality.",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-500"
    },
    {
      icon: BookOpen,
      title: "Education Loans",
      description: "Invest in knowledge – the most powerful pathway to transforming your future.",
      gradient: "bg-gradient-to-br from-blue-500 to-sky-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">LifeStage Loans</h1>
          <nav className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Loan Types</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full">
              Apply Now
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
            Your Milestones, Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Personalized financial support for life's most significant chapters.
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* {loanTypes.map((loan, index) => (
            // <LoanCard key={index} {...loan} />
          ))} */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 LifeStage Loans – Empowering Your Journey
          </p>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Journal from './pages/Journal';
import SocialFunding from './pages/SocialFunding';
import SocialTrading from './pages/SocialTrading';
import Mentorship from './pages/Mentorship';
import Rewards from './pages/Rewards';

export default function App(){
  // Parent container with min-h-screen and text color
  return (
    <div className="min-h-screen text-gray-900 flex flex-col">
      {/* Simple Navbar */}
      <nav className="bg-gray-100 p-4 flex justify-between items-center">
        <div className="font-bold text-lg">
          <Link to="/">TAMTRADES</Link>
        </div>
        <div className="space-x-4">
          <Link className="hover:text-blue-600" to="/">Dashboard</Link>
          <Link className="hover:text-blue-600" to="/journal">Journal</Link>
          <Link className="hover:text-blue-600" to="/social-funding">Social Funding</Link>
          <Link className="hover:text-blue-600" to="/social-trading">Social Trading</Link>
          <Link className="hover:text-blue-600" to="/mentorship">Mentorship</Link>
          <Link className="hover:text-blue-600" to="/rewards">Rewards</Link>
        </div>
      </nav>

      {/* Main Page Content */}
      <div className="h-full flex-1 p-4 box-border">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/social-funding" element={<SocialFunding />} />
          <Route path="/social-trading" element={<SocialTrading />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
      </div>

      {/* Footer with "Made on ZAPT" badge */}
      <footer className="bg-gray-100 p-4 text-center">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-600"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}
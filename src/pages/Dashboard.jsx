import React from 'react';

export default function Dashboard() {
  console.log("Entered Dashboard page");
  return (
    <div className="h-full box-border">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to your trading overview. Future analytics and summaries will appear here.</p>
    </div>
  );
}
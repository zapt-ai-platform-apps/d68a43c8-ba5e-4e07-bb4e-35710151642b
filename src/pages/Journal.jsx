import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import TradeForm from '../components/TradeForm';
import TradeList from '../components/TradeList';

export default function Journal() {
  const [trades, setTrades] = useState([]);
  const [newTrade, setNewTrade] = useState({ ticker: '', entry: '', exit: '', quantity: '', notes: '' });
  const [loading, setLoading] = useState(false);

  console.log("Entered Journal page");

  function handleChange(e) {
    setNewTrade({ ...newTrade, [e.target.name]: e.target.value });
  }

  async function handleAddTrade() {
    try {
      setLoading(true);
      console.log("Attempting to add trade...");
      const simulatedDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      await simulatedDelay(1000);

      const updatedTrades = [...trades, newTrade];
      setTrades(updatedTrades);
      setNewTrade({ ticker: '', entry: '', exit: '', quantity: '', notes: '' });
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-full box-border">
      <h1 className="text-2xl font-bold mb-4">Trade Journal</h1>
      <TradeForm
        newTrade={newTrade}
        handleChange={handleChange}
        handleAddTrade={handleAddTrade}
        loading={loading}
      />
      <TradeList trades={trades} />
    </div>
  );
}
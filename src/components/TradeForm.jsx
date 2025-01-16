import React from 'react';

export default function TradeForm({ newTrade, handleChange, handleAddTrade, loading }) {
  return (
    <>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Ticker</label>
        <input
          name="ticker"
          value={newTrade.ticker}
          onChange={handleChange}
          className="w-full p-2 box-border border border-gray-300 rounded"
          type="text"
          placeholder="e.g. AAPL"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Entry Price</label>
        <input
          name="entry"
          value={newTrade.entry}
          onChange={handleChange}
          className="w-full p-2 box-border border border-gray-300 rounded"
          type="number"
          step="any"
          placeholder="e.g. 150.00"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Exit Price</label>
        <input
          name="exit"
          value={newTrade.exit}
          onChange={handleChange}
          className="w-full p-2 box-border border border-gray-300 rounded"
          type="number"
          step="any"
          placeholder="e.g. 155.25"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Quantity</label>
        <input
          name="quantity"
          value={newTrade.quantity}
          onChange={handleChange}
          className="w-full p-2 box-border border border-gray-300 rounded"
          type="number"
          placeholder="e.g. 10"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Notes</label>
        <textarea
          name="notes"
          value={newTrade.notes}
          onChange={handleChange}
          className="w-full p-2 box-border border border-gray-300 rounded"
          rows="3"
          placeholder="Reason for trade, strategy, emotions, etc."
        />
      </div>

      <button
        disabled={loading}
        onClick={handleAddTrade}
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Saving...' : 'Add Trade'}
      </button>
    </>
  );
}
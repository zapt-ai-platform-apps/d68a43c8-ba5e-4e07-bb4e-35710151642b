import React from 'react';

export default function TradeList({ trades }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">All Trades</h2>
      {trades.length === 0 ? (
        <p>No trades recorded yet.</p>
      ) : (
        <ul className="list-disc pl-6">
          {trades.map((trade, index) => (
            <li key={index} className="mb-2">
              <strong>{trade.ticker}</strong> - {trade.quantity} shares entered at {trade.entry} and exited at {trade.exit}. Notes: {trade.notes}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
import React from "react";
import { formatCurrency } from "../utils/formatters";

const HoldingsTable = ({
  holdings,
  selectedIds,
  onToggle,
  onToggleAll,
  onSort,
  sortConfig,
}) => {
  const isAllSelected = selectedIds.size === holdings.length;

  return (
    <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#0F172A] text-[10px] uppercase text-gray-400 font-bold tracking-widest">
            <tr>
              <th className="p-4 w-12 text-center">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={onToggleAll}
                  className="accent-brand-blue"
                />
              </th>
              <th className="p-4">Asset</th>
              <th className="p-4 text-right">
                Holdings <br />
                <span className="text-[8px] opacity-50 lowercase font-normal">
                  Avg Buy Price
                </span>
              </th>
              <th className="p-4 text-right">Current Price</th>
              <th
                className="p-4 text-right cursor-pointer select-none group"
                onClick={onSort}
              >
                <div className="flex items-center justify-end gap-1">
                  Short-Term
                  <span className="bg-white text-brand-black rounded px-0.5 text-[8px]">
                    {sortConfig.direction === "asc" ? "▲" : "▼"}
                  </span>
                </div>
              </th>
              <th className="p-4 text-right">Long-Term</th>
              <th className="p-4 text-right">Amount to Sell</th>
            </tr>
          </thead>
          <tbody className="text-gray-300 divide-y divide-brand-border">
            {holdings.map((coin) => (
              <tr
                key={coin.coin}
                className={`transition-colors hover:bg-white/5 ${selectedIds.has(coin.coin) ? "bg-brand-blue/10" : ""}`}
              >
                <td className="p-4 text-center">
                  <input
                    type="checkbox"
                    checked={selectedIds.has(coin.coin)}
                    onChange={() => onToggle(coin.coin)}
                    className="accent-brand-blue"
                  />
                </td>
                <td className="p-4 flex items-center gap-3">
                  <img src={coin.logo} className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-bold text-sm">{coin.coinName}</p>
                    <p className="text-[10px] opacity-50 uppercase">
                      {coin.coin}
                    </p>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <p className="text-sm font-medium">
                    {coin.totalHolding.toFixed(2)} {coin.coin}
                  </p>
                  <p className="text-[10px] opacity-50">
                    ${coin.averageBuyPrice.toLocaleString()}
                  </p>
                </td>
                <td className="p-4 text-right text-sm font-semibold">
                  ${coin.currentPrice.toLocaleString()}
                </td>
                <td
                  className={`p-4 text-right text-sm font-bold ${coin.stcg.gain >= 0 ? "text-green-400" : "text-red-400"}`}
                >
                  {formatCurrency(coin.stcg.gain)}
                </td>
                <td
                  className={`p-4 text-right text-sm font-bold ${coin.ltcg.gain >= 0 ? "text-green-400" : "text-red-400"}`}
                >
                  {formatCurrency(coin.ltcg.gain)}
                </td>
                <td className="p-4 text-right text-sm opacity-80">
                  {selectedIds.has(coin.coin)
                    ? `${coin.totalHolding.toFixed(4)} ${coin.coin}`
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HoldingsTable;

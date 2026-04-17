import React from "react";
import { formatCurrency } from "../utils/formatters";

const GainsCard = ({ title, data, variant = "dark", totalReduction = 0 }) => {
  const isBlue = variant === "blue";

  const netSTCG = data.stcg.profits - data.stcg.losses;
  const netLTCG = data.ltcg.profits - data.ltcg.losses;
  const total = netSTCG + netLTCG;

  return (
    <div
      className={`p-8 rounded-xl border transition-all duration-500 h-full ${
        isBlue
          ? "bg-brand-blue border-blue-400 text-white shadow-lg"
          : "bg-brand-card border-brand-border text-gray-300"
      }`}
    >
      <h3 className="text-lg font-semibold mb-6">{title}</h3>

      <div className="space-y-4 mb-10">
        <div className="grid grid-cols-3 text-[10px] uppercase tracking-widest opacity-50 font-bold">
          <div></div>
          <div className="text-right">Short-term</div>
          <div className="text-right">Long-term</div>
        </div>

        <div className="grid grid-cols-3 text-sm">
          <div className="opacity-70">Profits</div>
          <div className="text-right">{formatCurrency(data.stcg.profits)}</div>
          <div className="text-right">{formatCurrency(data.ltcg.profits)}</div>
        </div>

        <div className="grid grid-cols-3 text-sm">
          <div className="opacity-70">Losses</div>
          <div className="text-right">
            {data.stcg.losses > 0 ? "-" : ""}
            {formatCurrency(data.stcg.losses)}
          </div>
          <div className="text-right">
            {data.ltcg.losses > 0 ? "-" : ""}
            {formatCurrency(data.ltcg.losses)}
          </div>
        </div>

        <div className="grid grid-cols-3 text-sm font-bold border-t border-white/10 pt-3">
          <div className="opacity-70">Net Capital Gains</div>
          <div className="text-right">
            {netSTCG < 0 ? "-" : ""}
            {formatCurrency(Math.abs(netSTCG))}
          </div>
          <div className="text-right">
            {netLTCG < 0 ? "-" : ""}
            {formatCurrency(Math.abs(netLTCG))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold whitespace-nowrap">
            {isBlue ? "Effective Capital Gains:" : "Realised Capital Gains:"}
          </p>
          <span
            className={`text-xl font-black px-2 py-1 rounded ${isBlue ? "bg-white/20" : ""}`}
          >
            {total < 0 ? "-" : ""}
            {formatCurrency(Math.abs(total))}
          </span>
        </div>

        {/* Reduction Message specifically for Blue Card */}
        {isBlue && (
          <p className="text-sm font-medium flex items-center gap-2 mt-2">
            🎉 Your taxable capital gains are reduced by:
            <span className="font-bold underline decoration-dotted">
              {formatCurrency(Math.abs(totalReduction))}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default GainsCard;

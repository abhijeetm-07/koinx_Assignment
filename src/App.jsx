import React, { useState, useEffect } from "react";
import { fetchHoldings, fetchGains } from "./services/api";
import { useTaxHarvesting } from "./hooks/useTaxHarvesting";
import GainsCard from "./components/GainsCard";
import HoldingsTable from "./components/HoldingsTable";
import Navbar from "./components/Navbar";
import Disclaimer from "./components/Disclaimer";
import { formatCurrency } from "./utils/formatters";

function App() {
  const [holdings, setHoldings] = useState([]);
  const [initialGains, setInitialGains] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    key: "stcg",
    direction: "desc",
  });

  useEffect(() => {
    Promise.all([fetchHoldings(), fetchGains()]).then(([h, g]) => {
      setHoldings(h);
      setInitialGains(g);
      setLoading(false);
    });
  }, []);

  const { selectedIds, postHarvestGains, toggleAsset, selectAll } =
    useTaxHarvesting(initialGains, holdings);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-black font-mono text-brand-blue">
        Loading Financial Intelligence...
      </div>
    );

  // Sorting Logic
  const sortedHoldings = [...holdings].sort((a, b) => {
    const valA = a.stcg.gain + a.ltcg.gain;
    const valB = b.stcg.gain + b.ltcg.gain;
    return sortConfig.direction === "asc" ? valA - valB : valB - valA;
  });

  const toggleSort = () => {
    setSortConfig((prev) => ({
      key: "stcg",
      direction: prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const displayedHoldings = showAll
    ? sortedHoldings
    : sortedHoldings.slice(0, 4);

  const totalReduction = Array.from(selectedIds).reduce((acc, id) => {
    const asset = holdings.find((h) => h.coin === id);
    return acc + (asset ? asset.stcg.gain + asset.ltcg.gain : 0);
  }, 0);

  const getRealised = (g) =>
    g.stcg.profits - g.stcg.losses + (g.ltcg.profits - g.ltcg.losses);
  const savings =
    getRealised(initialGains.capitalGains) - getRealised(postHarvestGains);

  return (
    <div className="min-h-screen bg-brand-black text-white font-sans">
      <Navbar />
      <main className="max-w-[1440px] mx-auto pb-20">
        <div className="px-10 lg:px-20 mt-8">
          <Disclaimer />
        </div>

        <div className="px-10 lg:px-20 mt-10">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Tax Harvesting</h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <GainsCard
              title="Pre Harvesting"
              data={initialGains.capitalGains}
              variant="dark"
            />
            <GainsCard
              title="After Harvesting"
              data={postHarvestGains}
              variant="blue"
              savings={savings}
              totalReduction={totalReduction}
            />
          </div>

          {/* {selectedIds.size > 0 && (
            <div className="mb-6 p-4 bg-brand-blue/10 border border-brand-blue/30 rounded-xl animate-in fade-in slide-in-from-top-4">
              <p className="text-brand-blue text-sm font-medium">
                ✨ Your taxable capital gains are reduced by:{" "}
                <span className="font-bold">
                  {formatCurrency(Math.abs(totalReduction))}
                </span>
              </p>
            </div>
          )} */}

          <HoldingsTable
            holdings={displayedHoldings}
            selectedIds={selectedIds}
            onToggle={toggleAsset}
            onToggleAll={() => selectAll(holdings.map((h) => h.coin))}
            onSort={toggleSort}
            sortConfig={sortConfig}
          />

          <div className="mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-brand-blue text-sm font-semibold hover:underline bg-brand-card/30 px-4 py-2 rounded-lg border border-brand-border"
            >
              {showAll ? "View less" : "View all holdings"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

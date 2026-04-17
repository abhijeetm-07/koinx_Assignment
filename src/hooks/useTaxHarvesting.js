import { useState, useMemo } from "react";

export const useTaxHarvesting = (initialGains, holdings) => {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const postHarvestGains = useMemo(() => {
    if (!initialGains) return null;

    let updated = JSON.parse(JSON.stringify(initialGains.capitalGains));

    selectedIds.forEach((id) => {
      const asset = holdings.find((h) => h.coin === id);
      if (!asset) return;

      if (asset.stcg.gain > 0) {
        updated.stcg.profits += asset.stcg.gain;
      } else {
        updated.stcg.losses += Math.abs(asset.stcg.gain);
      }

      if (asset.ltcg.gain > 0) {
        updated.ltcg.profits += asset.ltcg.gain;
      } else {
        updated.ltcg.losses += Math.abs(asset.ltcg.gain);
      }
    });

    return updated;
  }, [selectedIds, initialGains, holdings]);

  // Helper function to check/uncheck a box
  const toggleAsset = (id) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  return { selectedIds, postHarvestGains, toggleAsset };
};

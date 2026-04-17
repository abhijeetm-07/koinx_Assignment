import { HOLDINGS_DATA, GAINS_DATA } from "../data/mockData";

export const fetchHoldings = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(HOLDINGS_DATA), 800);
  });
};

export const fetchGains = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(GAINS_DATA), 500);
  });
};

import React from "react";
import { useSelector } from "react-redux";
import "./CryptoTable.css";

const CryptoTable = () => {
  const coins = useSelector((state) => state.crypto.coins);

  const formatNumber = (num) =>
    num.toLocaleString("en-US", { maximumFractionDigits: 2 });

  const getColor = (value) => (value >= 0 ? "green" : "red");

  return (
    <div className="table-container">
      <h2>🪙 Crypto Price Tracker</h2>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price ($)</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>

            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={coin.id}>
              <td>{index + 1}</td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>${formatNumber(coin.price)}</td>
              <td style={{ color: getColor(coin.change1h) }}>
                {coin.change1h}%
              </td>
              <td style={{ color: getColor(coin.change24h) }}>
                {coin.change24h}%
              </td>
              <td style={{ color: getColor(coin.change7d) }}>
                {coin.change7d}%
              </td>
              <td>${formatNumber(coin.marketCap)}</td>
              <td>${formatNumber(coin.volume24h)}</td>
              <td>{coin.circulatingSupply}</td>

              <td>{coin.chart7d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;

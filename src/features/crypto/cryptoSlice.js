import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coins: [
    {
      id: 1,
      name:  'Bitcoin',
      symbol: 'BTC',
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      circulatingSupply: '19.85M BTC',
      maxSupply: '21M BTC',
      chart7d: '📈'
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      price: 1802.46,
      change1h: 0.6,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      circulatingSupply: '120.71M ETH',
      maxSupply: '∞',
      chart7d: '📈'
    },
    {
      id: 3,
      name: 'Tether',
      symbol: 'USDT',
      price: 1.00,
      change1h: 0.01,
      change24h: -0.01,
      change7d: 0.03,
      marketCap: 102581279327,
      volume24h: 7894561230,
      circulatingSupply: '85.45B USDT',
      maxSupply: 'N/A',
      chart7d: '📈'
    },
    {
      id: 4,
      name: 'BNB',
      symbol: 'BNB',
      price: 324.72,
      change1h: -0.18,
      change24h: 1.22,
      change7d: 6.79,
      marketCap: 50127932700,
      volume24h: 3412567890,
      circulatingSupply: '157.89M BNB',
      maxSupply: '200M',
      chart7d: '📈'
    },
    {
      id: 5,
      name: 'Solana',
      symbol: 'SOL',
      price: 136.82,
      change1h: 0.75,
      change24h: 2.98,
      change7d: 18.12,
      marketCap: 58671279327,
      volume24h: 6712567890,
      circulatingSupply: '431.89M SOL',
      maxSupply: '∞',
      chart7d: '📈'
    }
  ]
};


const randomChange = () => (Math.random() * 2 - 1).toFixed(2);


const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state) => {
      state.coins = state.coins.map((coin) => {
        const priceFactor = 1 + randomChange() / 100;
        const volumeFactor = 1 + randomChange() / 100;

        return {
          ...coin,
          price: +(coin.price * priceFactor).toFixed(2),
          change1h: +randomChange(),
          change24h: +randomChange(),
          change7d: +randomChange(),
          volume24h: +(coin.volume24h * volumeFactor).toFixed(0),
        };
      });
    }
  }
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;

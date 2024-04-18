const API_KEY = 'sk_0ffc6da160f84c3f989557431d9bc991';
const BASE_URL = 'https://cloud.iexapis.com/v1';

export const getStockData = async (partialSymbol) => {
  try {
    const searchResponse = await fetch(`${BASE_URL}/search/${partialSymbol}?token=${API_KEY}`);
    if (!searchResponse.ok) {
      throw new Error('Failed to search for stocks');
    }
    const searchResults = await searchResponse.json();

    const stockPromises = searchResults.map(async (result) => {
      const symbol = result.symbol;
      const quoteResponse = await fetch(`${BASE_URL}/stock/${symbol}/quote?token=${API_KEY}`);
      if (!quoteResponse.ok) {
        throw new Error(`Failed to fetch quote for ${symbol}`);
      }
      const quoteData = await quoteResponse.json();
      return quoteData;
    });

    const stockData = await Promise.all(stockPromises);
    return stockData;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
};

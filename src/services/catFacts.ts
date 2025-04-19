import axios from 'axios';

export const getCatFact = async (): Promise<string> => {
  try {
    const response = await axios.get('https://catfact.ninja/fact');
    return response.data.fact;
  } catch (error) {
    console.error('Error fetching cat fact:', error);
    return 'Could not fetch a cat fact at this time.';
  }
};

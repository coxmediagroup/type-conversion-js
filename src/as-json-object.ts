// Helper function for to safely parse JSON object data from text.
export const asJSONObject = (str: string | undefined): any | undefined => {
  if (str !== '') {
    try {
      const data = JSON.parse(str);
      if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
        return data;
      }
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return {};
};

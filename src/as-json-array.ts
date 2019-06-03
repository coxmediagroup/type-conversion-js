// Helper function for to safely parse JSON array from text.
export const asJSONArray = (str: string | undefined): any[] => {
  if (str !== '') {
    try {
      const data = JSON.parse(str);
      if (Array.isArray(data)) {
        return data;
      }
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return [];
};

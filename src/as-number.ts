// Helper function for APIGatewayProxyHandlers to safely parse numbers from query vars.
export const asNumber = (str: string | undefined): number | undefined => {
  if (str !== '' && !isNaN(Number(str))) {
    return parseInt(str, 10);
  }

  return;
};

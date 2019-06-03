/**
 * Regex for ISO-8601, imperfect but not overkill. We should expect
 * timestamp GET params to NEVER be used in prod. Perhaps we use it for
 * debugging something (unlikely). QA will test the form: YYYY-MM-DDTHH:MM:00Z
 */
const TIME_STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(([+-]\d{2}:\d{2})|Z)?$/i;

// Helper function for APIGatewayProxyHandlers to safely parse timestamp from query vars.
export const asTimestamp = (str: string | undefined): number | undefined => {
  if (str && str.match(TIME_STAMP_RE)) {
    return Date.parse(str);
  }

  return;
};

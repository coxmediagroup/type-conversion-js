"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asNumber = void 0;

// Helper function for APIGatewayProxyHandlers to safely parse numbers from query vars.
var asNumber = function asNumber(str) {
  if (str !== '' && !isNaN(Number(str))) {
    return parseInt(str, 10);
  }

  return;
};

exports.asNumber = asNumber;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcy1udW1iZXIudHMiXSwibmFtZXMiOlsiYXNOdW1iZXIiLCJzdHIiLCJpc05hTiIsIk51bWJlciIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxHQUFELEVBQWlEO0FBQ3ZFLE1BQUlBLEdBQUcsS0FBSyxFQUFSLElBQWMsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNGLEdBQUQsQ0FBUCxDQUF4QixFQUF1QztBQUNyQyxXQUFPRyxRQUFRLENBQUNILEdBQUQsRUFBTSxFQUFOLENBQWY7QUFDRDs7QUFFRDtBQUNELENBTk0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWxwZXIgZnVuY3Rpb24gZm9yIEFQSUdhdGV3YXlQcm94eUhhbmRsZXJzIHRvIHNhZmVseSBwYXJzZSBudW1iZXJzIGZyb20gcXVlcnkgdmFycy5cbmV4cG9ydCBjb25zdCBhc051bWJlciA9IChzdHI6IHN0cmluZyB8IHVuZGVmaW5lZCk6IG51bWJlciB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmIChzdHIgIT09ICcnICYmICFpc05hTihOdW1iZXIoc3RyKSkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoc3RyLCAxMCk7XG4gIH1cblxuICByZXR1cm47XG59O1xuIl19
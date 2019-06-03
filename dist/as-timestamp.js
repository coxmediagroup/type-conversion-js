"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asTimestamp = void 0;

/**
 * Regex for ISO-8601, imperfect but not overkill. We should expect
 * timestamp GET params to NEVER be used in prod. Perhaps we use it for
 * debugging something (unlikely). QA will test the form: YYYY-MM-DDTHH:MM:00Z
 */
var TIME_STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(([+-]\d{2}:\d{2})|Z)?$/i; // Helper function for APIGatewayProxyHandlers to safely parse timestamp from query vars.

var asTimestamp = function asTimestamp(str) {
  if (str && str.match(TIME_STAMP_RE)) {
    return Date.parse(str);
  }

  return;
};

exports.asTimestamp = asTimestamp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcy10aW1lc3RhbXAudHMiXSwibmFtZXMiOlsiVElNRV9TVEFNUF9SRSIsImFzVGltZXN0YW1wIiwic3RyIiwibWF0Y2giLCJEYXRlIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7QUFLQSxJQUFNQSxhQUFhLEdBQUcsc0VBQXRCLEMsQ0FFQTs7QUFDTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQWlEO0FBQzFFLE1BQUlBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxLQUFKLENBQVVILGFBQVYsQ0FBWCxFQUFxQztBQUNuQyxXQUFPSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsR0FBWCxDQUFQO0FBQ0Q7O0FBRUQ7QUFDRCxDQU5NIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWdleCBmb3IgSVNPLTg2MDEsIGltcGVyZmVjdCBidXQgbm90IG92ZXJraWxsLiBXZSBzaG91bGQgZXhwZWN0XG4gKiB0aW1lc3RhbXAgR0VUIHBhcmFtcyB0byBORVZFUiBiZSB1c2VkIGluIHByb2QuIFBlcmhhcHMgd2UgdXNlIGl0IGZvclxuICogZGVidWdnaW5nIHNvbWV0aGluZyAodW5saWtlbHkpLiBRQSB3aWxsIHRlc3QgdGhlIGZvcm06IFlZWVktTU0tRERUSEg6TU06MDBaXG4gKi9cbmNvbnN0IFRJTUVfU1RBTVBfUkUgPSAvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9VFxcZHsyfTpcXGR7Mn06XFxkezJ9KFxcLlxcZCspPygoWystXVxcZHsyfTpcXGR7Mn0pfFopPyQvaTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBBUElHYXRld2F5UHJveHlIYW5kbGVycyB0byBzYWZlbHkgcGFyc2UgdGltZXN0YW1wIGZyb20gcXVlcnkgdmFycy5cbmV4cG9ydCBjb25zdCBhc1RpbWVzdGFtcCA9IChzdHI6IHN0cmluZyB8IHVuZGVmaW5lZCk6IG51bWJlciB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmIChzdHIgJiYgc3RyLm1hdGNoKFRJTUVfU1RBTVBfUkUpKSB7XG4gICAgcmV0dXJuIERhdGUucGFyc2Uoc3RyKTtcbiAgfVxuXG4gIHJldHVybjtcbn07XG4iXX0=
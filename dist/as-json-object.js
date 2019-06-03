"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asJSONObject = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Helper function for to safely parse JSON object data from text.
var asJSONObject = function asJSONObject(str) {
  if (str !== '') {
    try {
      var data = JSON.parse(str);

      if (_typeof(data) === 'object' && data !== null && !Array.isArray(data)) {
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

exports.asJSONObject = asJSONObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcy1qc29uLW9iamVjdC50cyJdLCJuYW1lcyI6WyJhc0pTT05PYmplY3QiLCJzdHIiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiQXJyYXkiLCJpc0FycmF5IiwiZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ08sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsR0FBRCxFQUE4QztBQUN4RSxNQUFJQSxHQUFHLEtBQUssRUFBWixFQUFnQjtBQUNkLFFBQUk7QUFDRixVQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxHQUFYLENBQWI7O0FBQ0EsVUFBSSxRQUFPQyxJQUFQLE1BQWdCLFFBQWhCLElBQTRCQSxJQUFJLEtBQUssSUFBckMsSUFBNkMsQ0FBQ0csS0FBSyxDQUFDQyxPQUFOLENBQWNKLElBQWQsQ0FBbEQsRUFBdUU7QUFDckUsZUFBT0EsSUFBUDtBQUNEO0FBQ0YsS0FMRCxDQUtFLE9BQU9LLENBQVAsRUFBVTtBQUNWLFVBQUlBLENBQUMsQ0FBQ0MsSUFBRixLQUFXLGFBQWYsRUFBOEI7QUFDNUIsY0FBTUQsQ0FBTjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPLEVBQVA7QUFDRCxDQWZNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyIGZ1bmN0aW9uIGZvciB0byBzYWZlbHkgcGFyc2UgSlNPTiBvYmplY3QgZGF0YSBmcm9tIHRleHQuXG5leHBvcnQgY29uc3QgYXNKU09OT2JqZWN0ID0gKHN0cjogc3RyaW5nIHwgdW5kZWZpbmVkKTogYW55IHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKHN0ciAhPT0gJycpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgZGF0YSAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lICE9PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHt9O1xufTtcbiJdfQ==
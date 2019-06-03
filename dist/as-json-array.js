"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asJSONArray = void 0;

// Helper function for to safely parse JSON array from text.
var asJSONArray = function asJSONArray(str) {
  if (str !== '') {
    try {
      var data = JSON.parse(str);

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

exports.asJSONArray = asJSONArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcy1qc29uLWFycmF5LnRzIl0sIm5hbWVzIjpbImFzSlNPTkFycmF5Iiwic3RyIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIkFycmF5IiwiaXNBcnJheSIsImUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQW9DO0FBQzdELE1BQUlBLEdBQUcsS0FBSyxFQUFaLEVBQWdCO0FBQ2QsUUFBSTtBQUNGLFVBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEdBQVgsQ0FBYjs7QUFDQSxVQUFJSSxLQUFLLENBQUNDLE9BQU4sQ0FBY0osSUFBZCxDQUFKLEVBQXlCO0FBQ3ZCLGVBQU9BLElBQVA7QUFDRDtBQUNGLEtBTEQsQ0FLRSxPQUFPSyxDQUFQLEVBQVU7QUFDVixVQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxhQUFmLEVBQThCO0FBQzVCLGNBQU1ELENBQU47QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBTyxFQUFQO0FBQ0QsQ0FmTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhlbHBlciBmdW5jdGlvbiBmb3IgdG8gc2FmZWx5IHBhcnNlIEpTT04gYXJyYXkgZnJvbSB0ZXh0LlxuZXhwb3J0IGNvbnN0IGFzSlNPTkFycmF5ID0gKHN0cjogc3RyaW5nIHwgdW5kZWZpbmVkKTogYW55W10gPT4ge1xuICBpZiAoc3RyICE9PSAnJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSAhPT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbXTtcbn07XG4iXX0=
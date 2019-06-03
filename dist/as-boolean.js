"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asBoolean = void 0;

var asBoolean = function asBoolean(str) {
  if (str) {
    var strNormalized = str.toLowerCase();

    if (['true', 'false'].includes(strNormalized)) {
      return strNormalized === 'true';
    }
  }

  return;
};

exports.asBoolean = asBoolean;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcy1ib29sZWFuLnRzIl0sIm5hbWVzIjpbImFzQm9vbGVhbiIsInN0ciIsInN0ck5vcm1hbGl6ZWQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFxRTtBQUM1RixNQUFJQSxHQUFKLEVBQVM7QUFDUCxRQUFNQyxhQUFhLEdBQUdELEdBQUcsQ0FBQ0UsV0FBSixFQUF0Qjs7QUFDQSxRQUFJLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0JDLFFBQWxCLENBQTJCRixhQUEzQixDQUFKLEVBQStDO0FBQzdDLGFBQU9BLGFBQWEsS0FBSyxNQUF6QjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDRCxDQVRNIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFzQm9vbGVhbiA9IChzdHI6ICdUcnVlJyB8ICdGYWxzZScgfCBzdHJpbmcgfCB1bmRlZmluZWQpOiBib29sZWFuIHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKHN0cikge1xuICAgIGNvbnN0IHN0ck5vcm1hbGl6ZWQgPSBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoWyd0cnVlJywgJ2ZhbHNlJ10uaW5jbHVkZXMoc3RyTm9ybWFsaXplZCkpIHtcbiAgICAgIHJldHVybiBzdHJOb3JtYWxpemVkID09PSAndHJ1ZSc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuO1xufTtcbiJdfQ==
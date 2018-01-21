/**
 * Do unless production
 * @function unlessProduction
 * @param {function} handler
 */
'use strict';

var isProduction = require('./is_production');
/** @lends unlessProduction */


function unlessProduction(handler) {
  if (isProduction()) {
    return false;
  }

  var assert = require('assert');

  return handler(assert);
}

module.exports = unlessProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubGVzc19wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbImlzUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJ1bmxlc3NQcm9kdWN0aW9uIiwiaGFuZGxlciIsImFzc2VydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOztBQUVBLElBQU1BLGVBQWVDLFFBQVEsaUJBQVIsQ0FBckI7QUFFQTs7O0FBQ0EsU0FBU0MsZ0JBQVQsQ0FBMkJDLE9BQTNCLEVBQW9DO0FBQ2xDLE1BQUlILGNBQUosRUFBb0I7QUFDbEIsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBTUksU0FBU0gsUUFBUSxRQUFSLENBQWY7O0FBQ0EsU0FBT0UsUUFBUUMsTUFBUixDQUFQO0FBQ0Q7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJKLGdCQUFqQiIsImZpbGUiOiJ1bmxlc3NfcHJvZHVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuLi9saWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERvIHVubGVzcyBwcm9kdWN0aW9uXG4gKiBAZnVuY3Rpb24gdW5sZXNzUHJvZHVjdGlvblxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlclxuICovXG4ndXNlIHN0cmljdCdcblxuY29uc3QgaXNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9pc19wcm9kdWN0aW9uJylcblxuLyoqIEBsZW5kcyB1bmxlc3NQcm9kdWN0aW9uICovXG5mdW5jdGlvbiB1bmxlc3NQcm9kdWN0aW9uIChoYW5kbGVyKSB7XG4gIGlmIChpc1Byb2R1Y3Rpb24oKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGNvbnN0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG4gIHJldHVybiBoYW5kbGVyKGFzc2VydClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmxlc3NQcm9kdWN0aW9uXG4iXX0=
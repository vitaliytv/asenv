/**
 * Check if the env is test
 * @function isTest
 * @returns {boolean} - Test or not
 */
'use strict';

var _require = require('./constants'),
    TEST = _require.TEST;

var getEnv = require('./get_env');
/** @lends isTest */


function isTest() {
  return getEnv() === TEST;
}

module.exports = isTest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzX3Rlc3QuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlRFU1QiLCJnZXRFbnYiLCJpc1Rlc3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7ZUFFaUJBLFFBQVEsYUFBUixDO0lBQVRDLEksWUFBQUEsSTs7QUFDUixJQUFNQyxTQUFTRixRQUFRLFdBQVIsQ0FBZjtBQUVBOzs7QUFDQSxTQUFTRyxNQUFULEdBQW1CO0FBQ2pCLFNBQU9ELGFBQWFELElBQXBCO0FBQ0Q7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUJGLE1BQWpCIiwiZmlsZSI6ImlzX3Rlc3QuanMiLCJzb3VyY2VSb290IjoiLi4vbGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDaGVjayBpZiB0aGUgZW52IGlzIHRlc3RcbiAqIEBmdW5jdGlvbiBpc1Rlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIFRlc3Qgb3Igbm90XG4gKi9cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IFRFU1QgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJylcbmNvbnN0IGdldEVudiA9IHJlcXVpcmUoJy4vZ2V0X2VudicpXG5cbi8qKiBAbGVuZHMgaXNUZXN0ICovXG5mdW5jdGlvbiBpc1Rlc3QgKCkge1xuICByZXR1cm4gZ2V0RW52KCkgPT09IFRFU1Rcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Rlc3RcbiJdfQ==
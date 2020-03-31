"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function doTime(start, lunchStart, lunchEnd, end) {
  console.log('Do Time Invoked');

  function getRows(parent) {
    //one of the cells in the table contains data from all of the other cells. We don't want to alter that cell;
    var bubbleSheetTest = new RegExp('BubbleSheet');

    var rows = _toConsumableArray(parent.getElementsByTagName('TR')).filter(function (_t, i) {
      console.log("row ".concat(i, " ").concat(_t));
      return _toConsumableArray(_t.cells).some(function (_cell, c) {
        return /Mon -|Tue -|Wed -|Thu -|Fri -/.test(_cell.innerHTML) && !bubbleSheetTest.test(_cell.innerHTML);
      });
    });

    return rows;
  }

  document.body.style.color = 'red';
  start = start || '09:00 AM';
  lunchStart = lunchStart || '11:30 AM';
  lunchEnd = lunchEnd || '12:30 PM';
  end = end || '04:59 PM'; // The table containing time inputs may be imbedded in an iframe, if so we need to search the iframe rather than the DOM;

  var frameElement = document.getElementById('bFrame');
  var parentHTML = frameElement === null ? document : frameElement.contentDocument;
  var weekDayRows = getRows(parentHTML);
  console.log('Pulled ', weekDayRows.length, ' rows');
  weekDayRows.forEach(function (_r) {
    var cells = _toConsumableArray(_r.cells);

    cells.forEach(function (_c, i) {
      if (!_c) return;
      if (_c.innerText === '00:00' && i < 12) _c.innerText = '06:59';
      var field = _c.firstElementChild;
      if (!field) return;
      if (field.readonly) return;
      var fName = field.name;
      if (/in_/.test(fName)) field.value = start;
      if (/lunchOut_/.test(fName)) field.value = lunchStart;
      if (/lunchIn_/.test(fName)) field.value = lunchEnd;
      if (/out_/.test(fName)) field.value = end;
      if (/action_/.test(fName)) field.value = '1';
      if (/code_/.test(fName)) field.value = 'WFH';
      if (/absHours_/.test(fName)) field.value = '00:01';
    });
  });
  console.log('Do Time Executed');
})();
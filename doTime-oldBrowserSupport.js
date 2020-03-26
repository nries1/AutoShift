function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(n);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter))
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

var getRows = function getRows() {
  clear();

  var weekDayRows = _toConsumableArray(
    document.getElementsByTagName('TR')
  ).filter(function(_t) {
    return (
      /Mon -|Tue -|Wed -|Thu -|Fri -/.test(_t.innerText) &&
      !/BubbleSheet/.test(_t.innerText)
    );
  });

  return weekDayRows;
};

var doTime = function doTime(start, lunchStart, lunchEnd, end) {
  var rows = getRows();
  rows.forEach(function(_r) {
    var cells = _toConsumableArray(_r.cells);

    cells.forEach(function(_c) {
      if (!_c) return;
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
};

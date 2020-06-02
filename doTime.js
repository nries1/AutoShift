function getRows(parent) {
  //one of the cells in the table contains data from all of the other cells. We don't want to alter that cell;
  const bubbleSheetTest = new RegExp('BubbleSheet');
  const weekDay = /Mon -|Tue -|Wed -|Thu -|Fri -/
  const rows = [...parent.getElementsByTagName('TR')].filter((_t, i) => {
    return [..._t.cells].some((_cell, c) => {
      return (
        weekDay.test(_cell.innerHTML) &&
        !bubbleSheetTest.test(_cell.innerHTML)
      );
    });
  });
  return rows;
}

function fillBubbleSheet(table, start, end, lunchStart, lunchEnd) {
  const weekDayRows = getRows(table);
  weekDayRows.forEach(_r => {
    const cells = [..._r.cells];
    cells.forEach((_c, i) => {
      if (!_c) return;
      if (_c.innerText === '00:00' && i < 12) _c.innerText = '06:59';
      const field = _c.firstElementChild;
      if (!field) return;
      if (field.readonly) return;
      const fName = field.name;
      if (/in_/.test(fName)) field.value = start;
      if (/lunchOut_/.test(fName)) field.value = lunchStart;
      if (/lunchIn_/.test(fName)) field.value = lunchEnd;
      if (/out_/.test(fName)) field.value = end;
      if (/action_/.test(fName)) field.value = '1';
      if (/code_/.test(fName)) field.value = 'WFH';
      if (/absHours_/.test(fName)) field.value = '00:01';
    });
  });
}

(async function doTime() {
  let start = '09:30 AM'
  let end = '04:59 PM';
  const lunchStart = '11:30 AM';
  const lunchEnd = '12:30 PM';
  // The table containing time inputs may be imbedded in an iframe, if so we need to search the iframe rather than the DOM;
  const frameElement = document.getElementById('bFrame');
  const parentHTML =
    frameElement === null ? document : frameElement.contentDocument;
  chrome.storage.local.get(['start', 'end'], function(result) {
    if (result['start']) start = result['start'];
    if (result['end']) end = result['end'];
    fillBubbleSheet(parentHTML, start, end, lunchStart, lunchEnd);
  });
})();

(function doTime(start, lunchStart, lunchEnd, end) {
  console.log('Do Time Invoked');
  function getRows(parent) {
  //one of the cells in the table contains data from all of the other cells. We don't want to alter that cell;
  const bubbleSheetTest = new RegExp('BubbleSheet');
  const rows = [...parent.getElementsByTagName('TR')].filter((_t, i) => {
    console.log(`row ${i} ${_t}`);
    return [..._t.cells].some((_cell, c) => {
      return (
        /Mon -|Tue -|Wed -|Thu -|Fri -/.test(_cell.innerHTML) &&
        !bubbleSheetTest.test(_cell.innerHTML)
      );
    });
  });
  return rows;
}
  document.body.style.color = 'red';
  start = start || '09:00 AM';
  lunchStart = lunchStart || '11:30 AM';
  lunchEnd = lunchEnd || '12:30 PM';
  end = end || '04:59 PM';
  // The table containing time inputs may be imbedded in an iframe, if so we need to search the iframe rather than the DOM;
  const frameElement = document.getElementById('bFrame');
  const parentHTML =
    frameElement === null ? document : frameElement.contentDocument;
  const weekDayRows = getRows(parentHTML);
  console.log('Pulled ', weekDayRows.length, ' rows');
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
  console.log('Do Time Executed');
})();

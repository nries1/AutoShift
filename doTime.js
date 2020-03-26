let getRows = () => {
  clear();
  const weekDayRows = [...document.getElementsByTagName('TR')].filter(
    _t =>
      /Mon -|Tue -|Wed -|Thu -|Fri -/.test(_t.innerText) &&
      !/BubbleSheet/.test(_t.innerText)
  );
  return weekDayRows;
};

let doTime = (start, lunchStart, lunchEnd, end) => {
  const rows = getRows();
  rows.forEach(_r => {
    const cells = [..._r.cells];
    cells.forEach(_c => {
      if (!_c) return;
      if (_c.innerText === '00:00') _c.innerText = '06:59';
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
};

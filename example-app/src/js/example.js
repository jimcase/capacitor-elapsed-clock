import { ElapsedClock } from 'capacitor-elapsed-clock';

const KEY = 'last-reading';

const readClocks = async () => {
  const { value } = await ElapsedClock.now();
  return {
    'ElapsedClock.now()': value,
    'Date.now()': Date.now(),
    'performance.now()': performance.now(),
  };
};

const render = (current, last) => {
  const rows = Object.entries(current).map(([name, value]) => {
    const delta = last && name in last ? ((value - last[name]) / 1000).toFixed(1) : '';
    const tr = document.createElement('tr');
    for (const text of [name, String(Math.round(value)), delta]) {
      const td = document.createElement('td');
      td.textContent = text;
      tr.append(td);
    }
    return tr;
  });
  document.getElementById('rows').replaceChildren(...rows);
};

document.getElementById('read').addEventListener('click', async () => {
  try {
    const current = await readClocks();
    const last = JSON.parse(localStorage.getItem(KEY) ?? 'null');
    render(current, last);
    localStorage.setItem(KEY, JSON.stringify(current));
    document.getElementById('error').textContent = '';
  } catch (e) {
    document.getElementById('error').textContent = String(e);
  }
});

export function fillText() {
  const ctx = document.getElementById('fillText').getContext('2d');

  ctx.font = '48px';
  ctx.fillText('hello world',10,`50`)
}
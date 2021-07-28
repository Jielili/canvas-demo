function load() {
  const ele = document.querySelector('.border');
  const right = document.querySelector('.right');
  const left = document.querySelector('.left');
  const main = document.querySelector('.main');
  document.addEventListener('mousedown', (e) => {
    if(e.target !== ele){
      return;
    }
    let x0 = e.clientX;
    const handleMove = ({ clientX }) => {
      if (!main.contains(e.target)) {
        document.removeEventListener('mousemove', handleMove);
        return;
      }
      const diff = x0 - clientX;
      right.style.width = parseFloat(right.style.width || right.getBoundingClientRect().width, 10) + diff + 'px';
      left.style.width = parseFloat(left.style.width || left.getBoundingClientRect().width, 10) - diff + 'px';
      x0 = clientX
    }
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleMove);
    })
  })

  document.querySelector('.controller').addEventListener('click', () => {
    console.log('click')
    console.log(left.style.width)
    if (left.style.width === '0px') {
      left.style.width = '50%';
      right.style.width = '50%';
    } else {
      left.style.width = '0px';
      right.style.width = '100%'
    }

  })

  date();
  
}

function date() {
  // console.log(moment().format())
  moment.locale('zh-cn');  
  const a = moment().add(0, 'd')
  console.log(a.format('E'))

  const parent = document.querySelector('.right .header')


  for (let i = 0; i < 5; i++){
    const container = document.createElement('div')
    container.classList.add('container')
    const up = document.createElement('div')
    up.classList.add('up')
    const down = document.createElement('div')
    down.classList.add('down')
    container.appendChild(up);
    container.appendChild(down);
    const start = moment().add(i * 7 - 3, 'd');
    const end = moment().add(i * 7 - 3 + 6, 'd');
    up.textContent = start.format('MM')+ '.'+start.format('DD') +"~"+end.format('MM')+ '.'+end.format('DD')
    for (let j = 0; j < 7; j++){
      const dayContainer = document.createElement('div')
      dayContainer.classList.add('day')
      const day = moment().add(i*7+j -3,'d')
      const d = document.createElement('div')
      d.classList.add('num')
      d.textContent = day.format("D")
      const w = document.createElement('div')
      w.textContent = day.format("dddd").substring(2) 
      dayContainer.appendChild(d)
      dayContainer.appendChild(w)
      down.appendChild(dayContainer)
    }
    parent.appendChild(container)
  }

}
const data = [
  {
    name: 'lili',
    task: [
      {
        name: 'task1',
        start: '2021-07-29',
        end: '2021-07-31'
      },
      {
        name: 'task2',
        start: '2021-08-02',
        end: '2021-08-09'
      },
      {
        name: 'task3',
        start: '2021-08-04',
        end: '2021-08-12'
      },
      {
        name: 'task4',
        start: '2021-09-01',
        end: '2021-09-12'
      },
      {
        name: 'task5',
        start: '2021-07-29',
        end: '2021-07-31'
      },
      {
        name: 'task6',
        start: '2021-07-29',
        end: '2021-07-31'
      },
    ]
  }
]


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
    if (left.style.width === '0px') {
      left.style.width = '50%';
      right.style.width = '50%';
    } else {
      left.style.width = '0px';
      right.style.width = '100%'
    }

  })

  date();


  dataDisplay();

  scroll();
  hover();
  
}

function date() {
  moment.locale('zh-cn');  
  const parent = document.querySelector('.right .header')
  const diffTime = Number(moment().format('E'))
  const draw = document.querySelector('.draw-bg')

  for (let i = 0; i < 10; i++){
    const container = document.createElement('div')
    container.classList.add('container')
    const up = document.createElement('div')
    up.classList.add('up')
    const down = document.createElement('div')
    down.classList.add('down')
    container.appendChild(up);
    container.appendChild(down);
    const start = moment().add(i * 7 - diffTime, 'd');
    const end = moment().add(i * 7 - diffTime + 6, 'd');


    const section = document.createElement('div');
    section.classList.add('section')
    draw.appendChild(section);


    up.textContent = start.format('MM')+ '.'+start.format('DD') +"~"+end.format('MM')+ '.'+end.format('DD')
    for (let j = 0; j < 7; j++){
      const dayContainer = document.createElement('div')
      dayContainer.classList.add('day')


      const day = moment().add(i*7+j -diffTime,'d')
      const d = document.createElement('div')
      d.classList.add('num')
      d.textContent = day.format("D")
      const w = document.createElement('div')
      w.textContent = day.format("dddd").substring(2) 
      dayContainer.appendChild(d)
      dayContainer.appendChild(w)
      down.appendChild(dayContainer)


      const bg = document.createElement('div');
      bg.classList.add('bg');

      section.appendChild(bg)
    }
    parent.appendChild(container)
  }

}


function dataDisplay() {
  const info = document.querySelector('.left .info');
  const draw = document.querySelector('.right .draw');
  const diffTime = Number(moment().format('E'))
  const drawStart = moment().add(-diffTime, 'd')
  const width = 200 / 7;

  let count = 0;
  data.forEach((personInfo, index) => {
    const person = document.createElement('div')
    person.classList.add('person');
    const leftPerson = person.cloneNode(true)
    personInfo.task.forEach((task) => {
      const row = document.createElement('div')
      row.classList.add('row-' + count)
      count++;
      leftPerson.appendChild(row.cloneNode(true))
      const start = moment(new Date(task.start)).diff(drawStart, 'days')
      const end = moment(new Date(task.end)).diff(drawStart, 'days')
      const bar = document.createElement('div');
      bar.style.marginLeft = start * width + 'px';
      bar.style.width = (end - start) * width + 'px';
      bar.classList.add('bar');
      row.appendChild(bar)
      person.appendChild(row);
    })
    info.appendChild(leftPerson)
    draw.appendChild(person)
  })
}


function tree() {
  
}


function scroll() {
  document.querySelector('.right .content .draw').addEventListener('scroll', ({ target }) => {
    const scrollTop = target.scrollTop
    document.querySelector('.left .info').scrollTop = scrollTop;
  })
  document.querySelector('.left .info').addEventListener('scroll', ({ target }) => {
    const scrollTop = target.scrollTop
    document.querySelector('.right .content .draw').scrollTop = scrollTop;
  })
}

function hover() {
  document.querySelectorAll('.right [class|="row"]').forEach(node => {
    node.addEventListener('mouseover', () => {
      document.querySelector('.left .info .' + node.className).style.background= "#E9F2FF"
    })
    node.addEventListener('mouseout', () => {
      document.querySelector('.left .info .' + node.className).style.background= ""
    })
  })
  document.querySelectorAll('.left [class|="row"]').forEach(node => {
    node.addEventListener('mouseover', () => {
      document.querySelector('.right .' + node.className).style.background= "#E9F2FF"
    })
    node.addEventListener('mouseout', () => {
      document.querySelector('.right .' + node.className).style.background= ""
    })
  })
}
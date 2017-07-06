var head = document.getElementsByClassName('head'),
    margin = document.getElementById('margin');

for(let j = 0; j < 5; j ++) {
  window['ct' + (j + 6)] = document.getElementById('content' + (j + 6));
}

for(var i = 0; i < 5; i ++) {
  ((i) => {
    head[i].addEventListener('mouseout',() => {
      window['ct' + (i + 6)].style.display = 'none';
      head[i].style.backgroundColor = 'rgb(241, 255, 230)';
      head[i].style.borderBottom = '1px solid black';
      margin.style.backgroundColor = 'rgba(203, 196, 191, 0.4)';
    },false);

    head[i].addEventListener("mouseover",function(){
      window['ct' + (i + 6)].style.display = 'block';
      head[i].style.borderBottom = 'none';
      switch(i) {
        case 0: head[i].style.backgroundColor = 'rgb(230, 138, 157)'; margin.style.backgroundColor = 'rgb(230, 138, 157)'; break;
        case 1: head[i].style.backgroundColor = 'rgb(138, 179, 230)'; margin.style.backgroundColor = 'rgb(138, 179, 230)'; break;
        case 2: head[i].style.backgroundColor = 'rgb(138, 230, 166)'; margin.style.backgroundColor = 'rgb(138, 230, 166)'; break;
        case 3: head[i].style.backgroundColor = 'rgb(230, 223, 138)'; margin.style.backgroundColor = 'rgb(230, 223, 138)'; break;
        case 4: head[i].style.backgroundColor = 'rgb(131, 83, 91)'; margin.style.backgroundColor = 'rgb(131, 83, 91)'; break;
      }
    },false);
  })(i);
}

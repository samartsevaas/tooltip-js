
let tooltipElem;

let container = document.querySelector('.tooltips-container');
let tool = document.querySelector('.tooltip');

tool.onmouseover = function(event){
    let target = event.target;
    let tooltipHtml = target.innerText;
    if (tooltipHtml == undefined) return;
    
    tooltipElem = document.createElement('div');
    tooltipElem.classList.add('tooltipElemDis');
    container.appendChild(tooltipElem);
    tooltipElem.innerHTML = tooltipHtml;

    let elemPosition = tool.getBoundingClientRect();
    let elemCoord = target.dataset.position;
    switch(elemCoord){
        case 'bottom':
    tooltipElem.style.top = elemPosition.top +'px';
    break; 
        case 'left':
    tooltipElem.style.top = elemPosition.top + 8 +'px';
    tooltipElem.style.left = elemPosition.left - 140 + 'px';
    break;
        case 'right':
    tooltipElem.style.top = elemPosition.top + 8 +'px';
    tooltipElem.style.left = elemPosition.left + 160 +  'px';
    break;
    }
}

tool.onmouseout = function(event){
    if(tooltipElem){
        tooltipElem.remove();
    }
}
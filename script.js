var pin1 = document.querySelector('.pin-1');
var pin2 = document.querySelector('.pin-2');
var pin3 = document.querySelector('.pin-3');
var pin4 = document.querySelector('.pin-4');
var pin5 = document.querySelector('.pin-5');
var pin6 = document.querySelector('.pin-6');

var view1 = document.querySelector('.view-1');
var view2 = document.querySelector('.view-2');
var view3 = document.querySelector('.view-3');

var p1 = document.querySelector('.info-1');
var p2 = document.querySelector('.info-2');
var p3 = document.querySelector('.info-3');
var p4 = document.querySelector('.info-4');
var p5 = document.querySelector('.info-5');

pin1.style.cssText = `left: ${0.62*view1.clientWidth}px; bottom: ${0.4*document.querySelector('body').clientHeight}px;`;

window.addEventListener('resize', () => {
    pin1.style.cssText = `left: ${0.62*view1.clientWidth}px; bottom: ${0.4*view1.clientHeight}px;`;
    pin2.style.cssText = `opacity: 0; left: ${0.3*view2.clientWidth}px; bottom: ${0.43*document.querySelector('body').clientHeight}px;`;
    pin3.style.cssText = `left: ${0.18*view2.clientWidth}px; bottom: ${0.46*document.querySelector('body').clientHeight}px;`;
    pin4.style.cssText = `opacity: 0; left: ${0.6*view3.clientWidth}px; bottom: ${0.3*document.querySelector('body').clientHeight}px;`;
    pin5.style.cssText = `opacity: 0; left: ${0.8*view3.clientWidth}px; bottom: ${0.4*document.querySelector('body').clientHeight}px;`;
    pin6.style.cssText = `opacity: 0; left: ${0.64*view3.clientWidth}px; bottom: ${0.6*document.querySelector('body').clientHeight}px;`;
});

pin1.addEventListener('click', () => {
    if(!pin1.style.cssText.includes('opacity: 0;')) {
        pin1.classList.add('dissappear');
        view1.style.cssText = `display: none;`;
        view2.style.cssText = `display: block;`;

        p1.style.cssText = ''; p1.classList.add('dissappear');
        p2.classList.add('appear');

        pin2.style.cssText = `opacity: 0; left: ${0.3*view2.clientWidth}px; bottom: ${0.43*document.querySelector('body').clientHeight}px;`;
        pin2.classList.add('appear');

        pin3.classList.add('appear-delayed');
        pin3.style.cssText = `left: ${0.18*view2.clientWidth}px; bottom: ${0.46*document.querySelector('body').clientHeight}px;`;
    }
});

var np = 3;

pin3.addEventListener('click', () => {
    if(!pin3.style.cssText.includes('opacity: 0;')) {
        pin2.classList.add('dissappear');
        pin3.classList.add('dissappear');
        view2.style.cssText = `display: none;`;
        view3.style.cssText = `display: block;`;

        p2.style.cssText = ''; p2.classList.add('dissappear');
        p3.classList.add('appear');
        np = 3;

        pin4.style.cssText = `opacity: 0; left: ${0.6*view3.clientWidth}px; bottom: ${0.3*document.querySelector('body').clientHeight}px;`;
        pin4.classList.add('appear');

        pin5.style.cssText = `opacity: 0; left: ${0.8*view3.clientWidth}px; bottom: ${0.4*document.querySelector('body').clientHeight}px;`;
        pin5.classList.add('appear');

        pin6.style.cssText = `opacity: 0; left: ${0.64*view3.clientWidth}px; bottom: ${0.6*document.querySelector('body').clientHeight}px;`;
        pin6.classList.add('appear');
    }
});

pin4.addEventListener('click', () => {
    document.querySelector(`.info-${np}`).style.cssText = ''; document.querySelector(`.info-${np}`).classList.add('dissappear');
    p3.classList.remove('dissappear');
    p3.classList.add('appear');
    np = 3;
});

pin5.addEventListener('click', () => {
    document.querySelector(`.info-${np}`).style.cssText = ''; document.querySelector(`.info-${np}`).classList.add('dissappear');
    p4.classList.remove('dissappear');
    p4.classList.add('appear');
    np = 4;
});

pin6.addEventListener('click', () => {
    document.querySelector(`.info-${np}`).style.cssText = ''; document.querySelector(`.info-${np}`).classList.add('dissappear');
    p5.classList.remove('dissappear');
    p5.classList.add('appear');
    np = 5;
});
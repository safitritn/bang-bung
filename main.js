let bohlam = document.getElementById('bohlam');
for (let i = 0; i < 1000; i++) {
let trafficLight = `<div class="traffic" id="traffic` + i + `">
                <div class="light bulat"></div>
                <button class="button bulat" data-index="`+ i + `"></button></div>`

bohlam.innerHTML += trafficLight
}

function toggleLight(index) {
let light = document.getElementById('traffic' + index).querySelector('.light');
light.classList.toggle('on')
}

bohlam.addEventListener('click', function (event) { 
    { let index = event.target.attributes['data-index'].value
    toggleLight(index)}
});
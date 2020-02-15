var blinkstick = require('blinkstick');

var led = blinkstick.findFirst();

/*
led.blink('random', function(){
    led.pulse('random', function(){
        led.setColor('red', function(){
        });
    });
});
*/
// rgb is a '#RRGGBB' string
// red/green/blue are each numbers in [0..255]
// function is optional

//led.setColor(rgb, function() { /* called when color is changed */ });
//led.setColor(256, 256, 0, function() { /* called when color is changed */ });

//led.setColor('random', function() { /* called when color is changed */ });

//led.turnOff();    // i.e., setColor(0, 0, 0)

//All color parameters and options work on these functions too
//led.pulse('random', function() { /* called when color animation is complete */ });
//led.blink('random', function() { /* called when color animation is complete */ });
//led.morph('random', function() { /* called when color animation is complete */ });

var temp = require("pi-temperature");

function GetTemp() {

    temp.measure(function(err, temp) {
        if (err) console.error(err);
        else 
        {
            let R = Math.round((100/256)*temp);
            led.setColor(R, function() {  });
            console.log(`CPU-Temp: ${temp}`);
        }
    });
}

/*
const osxTemp = require('osx-temperature-sensor');
function GetTemp() {

    let temperature = osxTemp.cpuTemperature();
            let R = Math.round((100/256)*temp);
            led.setColor(R, function() {  });
            console.log(`CPU-Temp: ${temp}`);

}
*/  
setInterval(GetTemp, 1500);

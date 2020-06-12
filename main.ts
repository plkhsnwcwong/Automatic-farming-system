let Moisture = 0
basic.forever(function () {
    Moisture = Math.round(pins.analogReadPin(AnalogPin.P0))
    basic.showNumber(0)
    if (Moisture < 520) {
        pins.servoWritePin(AnalogPin.P1, 180)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(2000)
    }
})

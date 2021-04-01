let leer = 0
basic.forever(function () {
    leer = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    leer,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(leer)
    }
})

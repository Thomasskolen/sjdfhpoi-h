input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.A, function () {
    tæller += 1
})
input.onButtonPressed(Button.B, function () {
    while (tæller > 0) {
        tæller += -1
        basic.pause(1000)
    }
})
let tæller = 0
tæller = 5
basic.forever(function () {
    basic.showNumber(tæller)
})

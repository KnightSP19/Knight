radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > dice) {
        basic.showIcon(IconNames.Sad)
    }
    if (receivedNumber == dice) {
        basic.showIcon(IconNames.Heart)
    }
    if (receivedNumber < dice) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("- - A G A B C5 G ", 120)
    }
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    basic.showNumber(dice)
    radio.sendNumber(dice)
})
let dice = 0
radio.setGroup(133)

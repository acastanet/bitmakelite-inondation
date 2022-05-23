let cm = 0
basic.showIcon(IconNames.StickFigure)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
    cm = Math.round(grove.measureInCentimeters(DigitalPin.P1))
    basic.showString("" + (cm))
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    if (cm < 12) {
        for (let index = 0; index < 8; index++) {
            music.playTone(175, music.beat(BeatFraction.Eighth))
            basic.pause(100)
        }
    }
})

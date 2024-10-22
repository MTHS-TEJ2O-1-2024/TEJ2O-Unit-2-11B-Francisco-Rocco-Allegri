/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco Rocco Allegri
 * Created on: Oct 2024
 * This program compares 2 generated numbers
*/

let randomNumber1: number = randint(0, 99)
let randomNumber2: number = randint(0, 99)

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(randomNumber1)
    basic.showIcon(IconNames.Happy)
});

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(randomNumber2)
    basic.showIcon(IconNames.Happy)
});

input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (randomNumber1 > randomNumber2) {
        basic.showString("#1 > #2")
    } else if (randomNumber1 < randomNumber2) {
        basic.showString("#1 < #2")
    }
    basic.showIcon(IconNames.Sad)
})

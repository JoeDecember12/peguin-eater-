let Penguin = game.createSprite(2, 0)
let fish = game.createSprite(randint(0, 4), randint(0, 4))
game.startCountdown(80000)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -300) {
        Penguin.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.X) > -300) {
        Penguin.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.Y) < -300) {
        Penguin.change(LedSpriteProperty.Y, -1)
    }
    if (input.acceleration(Dimension.Y) > -300) {
        Penguin.change(LedSpriteProperty.Y, 1)
    }
    if (Penguin.isTouching(fish)) {
        game.addScore(1)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
        fish.set(LedSpriteProperty.X, randint(0, 4))
        fish.set(LedSpriteProperty.Y, randint(0, 4))
        if (game.score() == 50) {
            game.gameOver()
            music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.OnceInBackground)
        }
    }
})

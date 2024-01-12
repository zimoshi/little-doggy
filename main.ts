scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral3, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    info.setScore(info.highScore())
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
tiles.setTilemap(tilemap`级别1`)
myCorg.cameraFollow()
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(myCorg)
tickevent.post([
tickevent.createKV("12-", "myCorg"),
tickevent.createKV("23-", "myCorg"),
tickevent.createKV("34-", "myCorg"),
tickevent.createKV("ii", "i"),
tickevent.createKV("i", "i"),
tickevent.createKV("i", "i"),
tickevent.createKV("ii", "i"),
tickevent.createKV("i", "i"),
tickevent.createKV("ii", "i")
])

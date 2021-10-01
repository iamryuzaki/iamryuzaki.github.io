var gameState = {
    hasActiveGame: false,
    currentSecond: 0,
    ActiveIcon: undefined,
    GoodPos: [6, 11, 3, 8, 13, 9, 14, 5, 10, 15, 2, 1, 7, 12, 4],
}

var gameSettings = {
    intervalCheckFinish: 1000,
    maxSecond: 30000,
    fps: 60
}

function OnClickIcon(el) {
    if (gameState.ActiveIcon != undefined) {

        const lastPos = gameState.ActiveIcon.getAttribute('data-pos_id')
        const nextPos = el.getAttribute('data-pos_id')

        gameState.ActiveIcon.setAttribute('data-pos_id', nextPos)
        el.setAttribute('data-pos_id', lastPos)

        gameState.ActiveIcon.classList.remove('focus')
        gameState.ActiveIcon = undefined

        setTimeout(function () {
            OnCheckGameFinish()
        }, gameSettings.intervalCheckFinish)

    } else {
        gameState.ActiveIcon = el
        el.classList.add('focus')
    }
}

function OnInitIcon(el, index) {
    el.setAttribute('data-icon_id', index)
}

function OnCheckGameFinish(noFinishGame = false) {
    let result = true
    for (let index = 1; index - 1 < gameState.GoodPos.length; index++) {
        const iconID = gameState.GoodPos[index - 1]
        const el = document.querySelector('.game-icon[data-icon_id="' + iconID + '"]')
        if (Number(el.getAttribute('data-pos_id')) != index) {
            result = false
            break
        }
    }

    if (result == true && noFinishGame == false) {
        GameFinish()
    }

    return result
}

function OnInitGameScene() {
    const initedPos = []
    document.querySelectorAll('.game-icon').forEach((el) => {
        let pos = 0;
        while (true) {
            pos = (Date.now() % 15) + 1
            if (initedPos.indexOf(pos) == -1) {
                break
            }
        }
        initedPos.push(pos)
        el.setAttribute('data-pos_id', pos)
    })

    gameState.hasActiveGame = true
    gameState.currentSecond = 0
}

function OnUpdateUI() {
    document.querySelector('.progress-bar .progress').style.width = (100 - (gameState.currentSecond * 100 / gameSettings.maxSecond)) + '%'
}

function StartTimer() {
    const interval = 1000 / gameSettings.fps
    setInterval(function () {
        if (gameState.hasActiveGame == true) {
            gameState.currentSecond += interval

            OnUpdateUI()

            if (gameState.currentSecond >= gameSettings.maxSecond) {
                GameFinish()
            }
        }
    }, interval)
}

function GameFinish() {
    if (gameState.hasActiveGame == true) {
        gameState.hasActiveGame = false

        const hasGoodResult = OnCheckGameFinish(true)

        if ('OnGameFinish' in window) {
            window.OnGameFinish(gameState.currentSecond, gameSettings.maxSecond, hasGoodResult)
        }

        // TODO: Re Init Game
        OnInitGameScene()
    }
}

function GameClose() {
    if ('OnGameClose' in window) {
        const hasGoodResult = OnCheckGameFinish(true)

        window.OnGameClose(gameState.currentSecond, gameSettings.maxSecond, hasGoodResult)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let index = 1
    document.querySelectorAll('.game-icon').forEach((el) => {
        OnInitIcon(el, index++)
        el.onclick = function () {
            OnClickIcon(el)
        }
    })

    StartTimer()
    OnInitGameScene()
})
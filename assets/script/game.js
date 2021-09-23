var playerBlock, playerCart, gameScene, enemyBlocks;
var playerState = {
    HasClicked: false,
    HasStarted: false,
    StartPosition: {
        x: 0
    },
    MovePosition: {
        x: 0
    },
    LastPosition: {
        x: 0
    },
    CurrentLeft: {
        x: 0
    }
}
var gameState = {
    currentScore: 0,
    maxScore: 20,
    fps: 60,
    speed: 15,
    delaySpawn: 1000,
    lastSpawn: 500,
    startTime: 0,
    lastTick: 0,
}
const uiSettings = {
    buttonNextWidth: 64,
    paddingPage: 24
}

var enemyInSceneList = []

function UpdateUI() {
    document.querySelector('.score-line .current').innerHTML = gameState.currentScore
    document.querySelector('.score-line .max').innerHTML = gameState.maxScore
    document.querySelector('.progress-bar .progress').style.width = (gameState.currentScore * 100 / gameState.maxScore) + "%"

}

function OnInit() {
    UpdateUI()

    playerBlock = document.querySelector('.player-block');
    playerCart = document.querySelector('.player-block .player-cart');
    gameScene = document.querySelector('.game-scene');
    enemyBlocks = document.querySelector('.enemy-blocks')

    playerBlock.onmousedown = OnPlayerDown
    document.addEventListener('mouseup', (env) => OnPlayerUp(env), false)
    document.addEventListener('mousemove', (env) => OnPlayerMove(env), false)
    playerBlock.onmouseup = OnPlayerUp

    playerBlock.ontouchstart = OnPlayerTouchStart
    playerBlock.ontouchend = OnPlayerTouchEnd
    gameScene.ontouchmove = OnPlayerTouchMove

    gameState.startTime = Date.now()
    gameState.lastTick = Date.now()

    setInterval(() => {
        try {
            OnGameTick(Date.now() - gameState.lastTick)
        } catch (e) {
            console.error(e)
        }
        gameState.lastTick = Date.now()
    }, 1000 / gameState.fps)
}

function CanNewSpawnEnemy() {
    return ((Date.now() - gameState.lastSpawn) > gameState.delaySpawn)
}

function SpawnEnemy() {
    const newEnemy = document.createElement('div')
    const salt = (Date.now() + enemyInSceneList.length + gameState.currentScore + playerState.CurrentLeft.x)
    let leftPosition = (Date.now() % (gameScene.clientWidth - uiSettings.buttonNextWidth - uiSettings.paddingPage))
    if (leftPosition < uiSettings.buttonNextWidth) {
        leftPosition = uiSettings.buttonNextWidth
    }

    newEnemy.classList.add('enemy-block')
    newEnemy.classList.add('enemy-' + ((salt % 7) + 1))
    newEnemy.style.top = "0px"
    newEnemy.style.left = leftPosition + "px"
    newEnemy.spawned = true
    newEnemy.opancity = true

    enemyBlocks.appendChild(newEnemy)
    enemyInSceneList.push(newEnemy)
    gameState.lastSpawn = Date.now()
}

function GameClose() {
    if ('OnGameClose' in window) {
        window.OnGameClose(gameState.currentScore, gameState.maxScore)
    }
}

function NextButtonClick() {
    if ('OnNextButtonClick' in window) {
        window.OnNextButtonClick(gameState.currentScore, gameState.maxScore)
    }
}

function PrevButtonClick() {
    if ('OnPrevButtonClick' in window) {
        window.OnPrevButtonClick(gameState.currentScore, gameState.maxScore)
    }
}

function UpScore() {
    gameState.currentScore = gameState.currentScore + 1
    UpdateUI()
    if ('OnUpScore' in window) {
        window.OnUpScore(gameState.currentScore, gameState.maxScore)
    }
    if (gameState.currentScore >= gameState.maxScore) {
        GameFinish()
    }
}

function GameFinish() {
    if ('OnGameFinish' in window) {
        window.OnGameFinish(gameState.currentScore, gameState.maxScore)
    }
}

function OnEnemyUpdate(deltaTime, enemy, playerRect) {
    const top = Number(enemy.style.top.substr(0, enemy.style.top.length - 2))
    const newTop = (top + (deltaTime * (gameState.speed / 100)))

    // remove
    if (newTop > gameScene.clientHeight) {
        RemoveEnemy(enemy)
        return;
    }

    if (enemy.spawned == true) {
        enemy.spawned = false
    } else if (enemy.opancity == true) {
        enemy.opancity = false
        enemy.style.opacity = 1
    }

    if (CheckCollision(enemy, playerRect) == true) {
        UpScore()
        return
    }

    enemy.style.top = newTop + "px"
}

function OnGameTick(deltaTime) {
    if (CanNewSpawnEnemy()) {
        SpawnEnemy()
    }

    const playerRect = playerCart.getBoundingClientRect()

    for (const enemy of enemyInSceneList) {
        OnEnemyUpdate(deltaTime, enemy, playerRect)
    }
}

function RemoveEnemy(enemy) {
    enemyInSceneList.slice(enemyInSceneList.indexOf(enemy), 1)
    enemy.remove()
}

function CheckCollision(enemy, playerRect) {
    if (enemy.offsetTop + enemy.clientHeight + 10 >= playerBlock.offsetTop && enemy.offsetTop + enemy.clientHeight < playerBlock.offsetTop + (enemy.clientHeight)) {
        const enemyRect = enemy.getBoundingClientRect()
        if (HasCollision(playerRect, enemyRect) && (playerRect.y + 5) > (enemyRect.y + enemyRect.height)) {
            RemoveEnemy(enemy)
            return true
        }
    }
    return false
}

function HasCollision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        return true
    }

    return false
}

function OnPlayerDown(env) {
    console.log('OnPlayerDown')
    playerState.HasClicked = true
}

function OnPlayerUp(env) {
    console.log('OnPlayerUp')
    playerState.HasClicked = false
    playerState.HasStarted = false
}

function OnPlayerMove(env) {
    const clientX = env.clientX
    SetPlayerPositionX(clientX)
}

function OnPlayerTouchStart(env) {
    playerState.HasClicked = true
}

function OnPlayerTouchEnd(env) {
    playerState.HasClicked = false
    playerState.HasStarted = false
}

function OnPlayerTouchMove(env) {
    const clientX = env.touches[0].clientX
    SetPlayerPositionX(clientX)
}

function SetPlayerPositionX(clientX) {
    if (playerState.HasClicked == false) {
        return
    }
    if (clientX < 0 || clientX > gameScene.clientWidth) {
        // playerState.HasClicked = false
        // playerState.HasStarted = false
        return
    }

    if (playerState.HasStarted == false) {
        playerState.HasStarted = true;
        playerState.StartPosition.x = clientX
        playerState.LastPosition.x = clientX
        playerState.MovePosition.x = playerBlock.offsetLeft

    } else {
        if (clientX - playerState.StartPosition.x > 30 || clientX - playerState.StartPosition.x < -30) {
            playerState.NotNeedClick = true
        }
        if (clientX - playerState.LastPosition.x > 0 && playerState.ToLeft == true) {
            playerState.ToLeft = false
            playerState.HasStarted = false
        } else if (clientX - playerState.LastPosition.x < 0 && playerState.ToLeft == false) {
            playerState.ToLeft = true
            playerState.HasStarted = false
        }
        playerState.LastPosition.x = clientX


        let newLeft = (playerState.MovePosition.x + (clientX - playerState.StartPosition.x))

        if (newLeft < uiSettings.buttonNextWidth) {
            newLeft = uiSettings.buttonNextWidth;
        } else if (newLeft > gameScene.clientWidth - uiSettings.buttonNextWidth - playerBlock.clientWidth) {
            newLeft = gameScene.clientWidth - uiSettings.buttonNextWidth - playerBlock.clientWidth
        }

        playerBlock.style.left = newLeft + "px";
    }
}


document.addEventListener('DOMContentLoaded', () => OnInit())
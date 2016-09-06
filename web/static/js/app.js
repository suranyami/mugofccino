import 'phoenix_html'
import socket from './socket'
import {Game} from './Game'

const assetPath = document.body.dataset.assetPath
const game = new Game(800, 600, 'screen', assetPath)

game.start(socket)

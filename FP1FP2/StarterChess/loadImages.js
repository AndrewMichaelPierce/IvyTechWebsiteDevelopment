let images = [];
function loadImages() {
    for (let i = 0, len = loadImages.arguments.length; i < len; i++) {
        images[i] = new Image();
        images[i].src = loadImages.arguments[i]
    }
}

loadImages("img/absolutePin.png", "img/bishopMove.png", "img/blankBoard.png", "img/castle1.png", "img/castle2.png",
    "img/chessboard.png", "img/enPassant1.png", "img/enPassant2.png", "img/fork.png", "img/gameMove1.png",
    "img/gameMove1b.png", "img/gameMove2.png", "img/gameMove2b.png", "img/gameMove3.png", "img/gameMove3b.png",
    "img/gameMove4.png", "img/kingMoves.png", "img/knightMoves.png", "img/newGame.png", "img/pawnAttack.png",
    "img/pawnFirstMove.png", "img/queenMoves.png", "img/relativePin.png", "img/rookMoves.png", "img/skewer.png",
    "img/starterChessLogo.png")
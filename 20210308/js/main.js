
// 初期設定等
// canvasの初期設定
var canvas = document.getElementById('playArea');
var canvasWidth = window.innerWidth - 30;
var canvasHeight = window.innerHeight - 30;

// Canvasの準備
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');

// 比率計算
rw = canvasWidth/2875;
rh = canvasHeight/5920;

showUI();

// ゲーム機本体などの表示
function showUI () {

    // 本体は画面幅いっぱいにする
    const gameBody = new Image();
    gameBody.src = "./images/本体.png";
    gameBody.onload = () => {
    };

    // プレイ画面
    const gameDisplayBezel = new Image();
    gameDisplayBezel.src = "./images/黒ふち.png";
    gameDisplayBezel.onload = () => {
    };
 
    const gameDisplayShadow = new Image();
    gameDisplayShadow.src = "./images/画面影.png";

    // ボタン
    const gameCrossButtonShadow = new Image();
    gameCrossButtonShadow.src = "./images/ボタン穴_十字.png";
    const gameCrossButton = new Image();
    gameCrossButton.src = "./images/ボタン_十字キー.png";

    gameCrossButton.onload = () => {
        ctx.drawImage(gameBody, 0, 0, 2875, 5920, 0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(gameDisplayBezel, 0, 0, 2749, 3670, 59*rw, 280*rh, 2749*rw, 3670*rh);
        ctx.drawImage(gameDisplayShadow, 0, 0, 2357, 3093, 253*rw, 473*rh, 2357*rw, 3093*rh);
        ctx.drawImage(gameCrossButtonShadow, 0, 0, 1069, 1069, 131*rw, 4262*rh, 1069*rw, 1069*rh);
        ctx.drawImage(gameCrossButton, 0, 0, 975, 975, 178*rw, 4309*rh, 975*rw, 975*rh);
    };
}
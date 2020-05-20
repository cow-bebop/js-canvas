"use strict";
{
  let t = 0;

  function draw() {
    const canvas = document.querySelector("canvas");
    if (typeof canvas.getContext === "undefined") {
      return;
    }
    const ctx = canvas.getContext("2d");

    // 11.楕円
    // ctx.ellipse(x, y, rx, ry, rotation, start, end);
    // ctx.ellipse(100, 100, 50, 30, 0, 0, 2 * Math.PI);
    // ctx.rect(50, 50, 50, 50);
    // ctx.stroke();

    // 12.テキストの描画
    // ctx.beginPath();
    // ctx.moveTo(0, 100);
    // ctx.lineTo(canvas.width, 100);
    // ctx.moveTo(100, 0);
    // ctx.lineTo(100, canvas.height);
    // ctx.stroke();

    // ctx.font = "bold 64px Verdana";
    // ctx.textAlign = "right";
    // ctx.textBaseline = "top";
    // ctx.fillText("Tokyo", 100, 100);
    // ctx.fillText("Tokyo", 100, 100, 100);
    // ctx.strokeText("Tokyo", 100, 100, 100);

    // 14.画像を描画してみよう
    // const img = document.createElement("img");
    // img.src = "img/logo.png";

    // img.addEventListener("load", () => {
    //   ctx.drawImage(img, 0, 0);
    //   ctx.drawImage(img, 0, 0, 40, 40);
    //   repeat-x, repeat-y, no-repeat
    //   const pattern = ctx.createPattern(img, "repeat-x");
    //   ctx.fillStyle = pattern;
    //   ctx.fillRect(0, 0, canvas.width, canvas.height);
    // });

    // 15.画像の一部を切り出してみよう
    // const img = document.createElement("img");
    // img.src = "img/sprite.png";

    // img.addEventListener("load", () => {
    //   ctx.drawImage(img, 0, 0);
    //   ctx.drawImage(
    //     img,
    //     sx, sy, sw, sh
    //     70 * 2,
    //     70,
    //     70,
    //     70,
    //     dx, dy, dw, dh
    //     0,
    //     0,
    //     70,
    //     70
    //   );
    // });

    // 16.キャラクターを書いてみよう

    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = "pink";
    // ctx.fillRect(0, 0, 200, 200);

    // ctx.beginPath();
    // ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = "black";
    // ctx.fill();

    // ctx.beginPath();
    // アニメーションを三角関数で表現
    // ctx.ellipse(80 + Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.ellipse(120 + Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = "skyblue";
    // ctx.fill();
    // tが10msで変化していく
    // t++;
    // setTimeout(draw, 10);

    // 設定を保存する
    // ctx.save();

    // ctx.scale(0.5, 0.5);
    // ctx.translate(400, 0);
    // ctx.rotate((45 / 180) * Math.PI);

    // ctx.fillStyle = "olive";
    // ctx.fillRect(0, 0, 200, 200);

    // ctx.beginPath();
    // ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = "black";
    // ctx.fill();

    // ctx.beginPath();
    // ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = "skyblue";
    // ctx.fill();

    // 設定を戻す
    // ctx.restore();

    // ctx.fillStyle = "black";
    // ctx.fillRect(80, 120, 40, 40);

    // 20.高解像度ディスプレイに対応させよう
    // 計算のためにcanvasの幅と高さを定数で保持;
    // const CANVAS_WIDTH = 600;
    // const CANVAS_HEIGHT = 240;
    // ディスプレイの密度はdevicePixelRatioで取得できる;
    // const dpr = window.devicePixelRatio || 1;
    // ディスプレイ密度の比率でキャンバスを拡大したい;
    // canvas.width = CANVAS_WIDTH * dpr;
    // canvas.height = CANVAS_HEIGHT * dpr;
    // ctx.scale(dpr, dpr);
    // canvas.style.width = CANVAS_WIDTH * "px";
    // canvas.style.height = CANVAS_HEIGHT * "px";

    // ctx.font = "bold 48px Verdana";
    // strokeText,テキストと枠線を描写
    // ctx.strokeText("Tokyo", 100, 100);

    // 21. 手元のファイルで実行してみる
  }

  draw();
}

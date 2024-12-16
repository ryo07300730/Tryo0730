function checkLuckyNumber() {
    // ユーザーが入力した数字を取得
    var number = parseInt(document.getElementById('number-input').value, 10);

    // ラッキー数字を生成（0〜9のランダムな数字）
    var luckyNumber = Math.floor(Math.random() * 10);

    // 結果のメッセージを初期化
    var resultMessage = "";

    // 入力された数字とラッキー数字を比較
    if (number === luckyNumber) {
        resultMessage = "おめでとう！あなたの選んだ数字【" + number + "】がラッキー数字です！";
    } else {
        resultMessage = "残念、選んだ数字【" + number + "】はラッキー数字ではありません。ラッキー数字は【" + luckyNumber + "】です。";
    }

    // 結果を画面に表示
    document.getElementById('result-output').innerText = resultMessage;
}

function checkLuckyNumber() {

    const input = document.getElementById('number-input').value;

    const resultOutput = document.getElementById('result-output');

    // 入力値を確認

    if (input === "" || isNaN(input) || input < 0 || input > 9) {

        resultOutput.textContent = "0〜9の数字を入力してください。";

        return;

    }

    // 占いの結果リスト

    const fortunes = [

        { message: "今日は素晴らしい出会いがあるでしょう！", isGood: true },

        { message: "思い切った挑戦が運を引き寄せます。", isGood: true },

        { message: "リラックスして過ごすのが吉。", isGood: true },

        { message: "今日は少し注意が必要です。", isGood: false },

        { message: "トラブルに巻き込まれるかもしれません。", isGood: false },

        { message: "健康に気をつけてください。", isGood: false },

        { message: "運気が停滞しているかも。", isGood: false },

        { message: "今日は大人しく過ごすのが良いでしょう。", isGood: false },

        { message: "些細なことに感謝すると良いことが起きます。", isGood: true },

        { message: "直感を信じると成功するでしょう。", isGood: true }

    ];

    // 新しいラッキーアイテムリスト

    const luckyItems = [

        "消しゴム", "ノート", "ダンベル", 

        "ダウンジャケット", "ほうき", 

        "たわし", "しゃもじ"

    ];

    // 入力された数字を元に占い結果を取得

    const fortune = fortunes[input % fortunes.length];

    // 結果メッセージの生成

    let resultMessage = fortune.message;

    // 悪い結果の場合、ラッキーアイテムを追加表示

    if (!fortune.isGood) {

        const luckyItem = luckyItems[input % luckyItems.length];

        resultMessage += ` ラッキーアイテムは「${luckyItem}」です！`;

    }

    // 結果を表示

    resultOutput.textContent = resultMessage;

} 

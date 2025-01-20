function checkFortune(coffeeBean) {
    var fortuneMessage = document.getElementById('fortune-message');
    var suggestion = document.getElementById('suggestion-output');
    var retryButton = document.getElementById('retry-button');
    var negativeCurse = document.getElementById('negative-curse');
    
    // コーヒー豆占いのメッセージ（運命）
    var fortunes = {
        arabica: "アラビカ豆の運命: 落ち着いた日々が訪れるでしょう。あなたには静かな幸せが待っています。",
        robusta: "ロブスタ豆の運命: 今日は元気いっぱいで、周囲の人々に良い影響を与える日になります。",
        liberica: "リベリカ豆の運命: やや波乱の一日が待っていますが、あなたには乗り越える力があります。",
        excelsa: "エクセルサ豆の運命: 新しいチャンスが訪れる予感！積極的に行動すると良い結果が待っています。"
    };

    // 改善アイテム（悪い結果の場合）
    var itemsToImproveDay = [
        "カフェインを摂ることで、エネルギーを補充しましょう。",
        "お守りのストーンを持つと、運気が上がるかもしれません。",
        "新しいことに挑戦してみると、運気が改善されます！",
        "神社を訪れると運気が上がるでしょう。",
        "お気に入りのコーヒーを飲んで、気分をリフレッシュ！"
    ];

    // 選ばれたコーヒー豆の運命を表示
    fortuneMessage.textContent = fortunes[coffeeBean];

    // 良い運命と悪い運命の分岐
    if (coffeeBean === "arabica" || coffeeBean === "robusta") {
        suggestion.textContent = "その調子！コーヒー豆のように、あなたの一日は穏やかで素晴らしいものになるでしょう。";
        retryButton.style.display = "none"; // 良い運命の場合、再占いボタンは隠す
        negativeCurse.style.display = "none"; // 負のオーラを隠す
    } else {
        suggestion.textContent = "残念！ですが、" + itemsToImproveDay[Math.floor(Math.random() * itemsToImproveDay.length)] + " このアイテムで運気を改善してみて！";
        retryButton.style.display = "block"; // 悪い運命の場合、再占いボタンを表示
        negativeCurse.style.display = "block"; // 負のオーラを表示
    }

    // 悪い運命の負のオーラ
    if (coffeeBean === "liberica" || coffeeBean === "excelsa") {
        suggestion.textContent += " さらに、負のオーラが1週間君を追いつめるだろう…";
    }

    // ボタンを非表示にして、占い結果を表示
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.style.display = 'none';
    });
}

// ページをリセットする関数
function resetPage() {
    location.reload();  // ページをリロードして最初の状態に戻す
}

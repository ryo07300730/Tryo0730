function checkFortune() {
    var userNumber = document.getElementById('number-input').value;
    var result = document.getElementById('result-output');
    var suggestion = document.getElementById('suggestion-output');
    var retryButton = document.getElementById('retry-button');  // 追加: 再占いボタン
    
    // 運命のメッセージ
    var fortunes = [
        "今日は素晴らしい一日になります！",
        "注意が必要です。慎重に行動しましょう。",
        "新しいチャンスが訪れそうです！",
        "何か困難が待ち受けているかもしれませんが、乗り越えられます。",
        "あなたの努力が実を結ぶ日が来るでしょう！"
    ];

    // アイテムの提案（悪い結果の際に改善できるアイテム）
    var itemsToImproveDay = [
        "お守りの石を身に着けると、今日の運勢が改善されるかも。",
        "ラッキーアイテムとして、黄色い花を飾ってみてください。",
        "今日のお守りはこの幸運の猫の置物です！",
        "ラッキーアイテムとして、今日の運勢を引き寄せる本を読むことをおすすめします。",
        "神社を訪れると、運気が上がるかもしれません。",
        "コーヒーを飲んでリラックスすると、気分が良くなり、運気も改善されるでしょう。",
        "縄跳びをすると、気分がスッキリして運気も上がるかもしれません！"
    ];

    // ユーザーが入力した数字を元に運命を決める
    var fortuneIndex = (parseInt(userNumber) + 1) % fortunes.length;

    // 運命の結果を表示
    result.textContent = "あなたの運命は: " + fortunes[fortuneIndex];

    // 良い運命のときの追加メッセージ
    if (fortuneIndex === 0) {
        suggestion.textContent = "その調子！あなたからは輝くオーラを感じます。素敵な一日をお過ごしください！";
        retryButton.style.display = "none";  // 良い運命のときは再占いボタンを隠す
    } 
    // 運命が悪い場合、アイテムを提案
    else {
        suggestion.textContent = "残念！でも、" + itemsToImproveDay[Math.floor(Math.random() * itemsToImproveDay.length)] + " このアイテムで今日を改善してみて！";
        retryButton.style.display = "inline-block";  // 悪い運命のときは再占いボタンを表示
    }

    // 悪い運命の場合に負のオーラメッセージ
    if (fortuneIndex >= 1) {
        suggestion.textContent += " さらに、負のオーラが1週間君を追いつめるだろう…";
    }
}

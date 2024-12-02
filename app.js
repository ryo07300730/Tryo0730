       function checkFortune() {

    var weather = document.getElementById('weather-select').value; // 天気の取得

    var number = parseInt(document.getElementById('number-input').value, 10); // 数字の取得

    var result = "普通"; // デフォルトの値

    if (weather === "晴れ" && number === 0) {

        result = "大吉";

    } else if (weather === "晴れ" && number === 1) {

        result = "中吉";

    } else if (weather === "晴れ" && number === 2) {

        result = "小吉";

    } else if (weather === "雨" && number === 0) {

        result = "中吉";

    } else if (weather === "雨" && number === 1) {

        result = "小吉";

    } else if (weather === "雨" && number === 2) {

        result = "凶";

    } else if (weather === "曇り" && number === 0) {

        result = "小吉";

    } else if (weather === "曇り" && number === 1) {

        result = "凶";

    } else if (weather === "曇り" && number === 2) {

        result = "大凶";

    } else if (weather === "雪" && number === 0) {

        result = "中吉";

    } else if (weather === "雪" && number === 1) {

        result = "大吉";

    } else if (weather === "雪" && number === 2) {

        result = "凶";

    }

    document.getElementById('result-output').innerText = "選んだ天気「" + weather + "」と数字「" + number + "」の結果は【" + result + "】です";

} 

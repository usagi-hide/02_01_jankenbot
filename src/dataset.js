import image1 from "./assets/img/kirarapajamas.PNG";
import image2 from "./assets/img/kiraralingerietop.PNG";
import image3 from "./assets/img/kiraralingerie.PNG";
const stones = { name: "グー", number: 1 }
const stone = stones.name
const stoneNumber = stones.number
const scissors = { name: "チョキ", number: 2 }
const scissor = scissors.name
const scissorNumber = scissors.number
const papers = {name: "パー", number: 3}
const paper = papers.name
const paperNumber = papers.number

const random = Math.random();
const randomSecound  = Math.random();
const randomThird  = Math.random();
const randomForth = Math.random();
const comSelect = Math.floor(random * 3 + 1);
const comSelect2 = Math.floor(randomSecound * 3 + 1);
const comSelect3 = Math.floor(randomThird * 3 + 1);
const comSelect4 = Math.floor(randomForth * 3 + 1);


// yakyu-ken
const stoneAnswer1 = (stoneNumber - comSelect + 3) % 3;
const scissorAnswer1 = (scissorNumber - comSelect + 3) % 3;
const paperAnswer1 = (paperNumber - comSelect + 3) % 3;

let nextIdAnswer = ""
let nextIdAnswer2 = ""
let nextIdAnswer3 = ""

// 相手負け
let result = ""
let result2 = ""
let result3 = ""
let result4 = ""
// あいこ
let result5 = ""
let result6 = ""
let result7 = ""
let result8 = ""
// 自分負け
let result9 = ""
let result10 = ""
let result11 = ""
let result12 = ""

if (stoneAnswer1 === 0) {
  nextIdAnswer = "yakyukenretryFirst"
} else if (stoneAnswer1 === 1) {
  nextIdAnswer = "yakyu-ken-retry2-1"
} else if (stoneAnswer1 === 2) {
  nextIdAnswer = "yakyu-ken-win1"
}
console.log(nextIdAnswer)

if (scissorAnswer1 === 0) {
  nextIdAnswer2 = "yakyukenretryFirst"
} else if (scissorAnswer1 === 1) {
  nextIdAnswer2 = "yakyu-ken-retry2-1"
} else if (scissorAnswer1 === 2) {
  nextIdAnswer2 = "yakyu-ken-win1"
}
console.log(nextIdAnswer2)

if (paperAnswer1 === 0) {
  nextIdAnswer3 = "yakyukenretryFirst"
} else if (paperAnswer1 === 1) {
  nextIdAnswer3 = "yakyu-ken-retry2-1"
} else if (paperAnswer1 === 2) {
  nextIdAnswer3 = "yakyu-ken-win1"
}
console.log(nextIdAnswer3)


// 相手負け
if (nextIdAnswer === "yakyu-ken-win1") {
  result = "チョキ！！！"
} else if (nextIdAnswer2 === "yakyu-ken-win1") {
  result = "パー！！！"
} else if (nextIdAnswer3 === "yakyu-ken-win1") {
  result = "グー！！！"
}

// あいこ
if (nextIdAnswer === "yakyu-ken-retry2-1") {
  result5 = "グー！！！"
} else if (nextIdAnswer2 === "yakyu-ken-retry2-1") {
  result5 = "チョキ！！！"
} else if (nextIdAnswer3 === "yakyu-ken-retry2-1") {
  result5 = "パー！！！"
}

// 自分負け
if (nextIdAnswer === "yakyukenretryFirst") {
    result9 = "パー！！！"
} else if (nextIdAnswer2 === "yakyukenretryFirst") {
    result9 = "グー！！！"
} else if (nextIdAnswer3 === "yakyukenretryFirst") {
    result9 = "チョキ！！！"
}



// yakyu-ken2
const stoneAnswer2 = (stoneNumber - comSelect2 + 3) % 3;
const scissorAnswer2 = (scissorNumber - comSelect2 + 3) % 3;
const paperAnswer2 = (paperNumber - comSelect2 + 3) % 3;

let nextIdAnswer4 = ""
let nextIdAnswer5 = ""
let nextIdAnswer6 = ""

if (stoneAnswer2 === 0) {
  nextIdAnswer4 = "yakyukenRetrySecound"
} else if (stoneAnswer2 === 1) {
  nextIdAnswer4 = "yakyu-ken-retry2-2"
} else if (stoneAnswer2 === 2) {
  nextIdAnswer4 = "yakyu-ken-win2"
}
console.log(nextIdAnswer4)

if (scissorAnswer2 === 0) {
  nextIdAnswer5 = "yakyukenRetrySecound"
} else if (scissorAnswer2 === 1) {
  nextIdAnswer5 = "yakyu-ken-retry2-2"
} else if (scissorAnswer2 === 2) {
  nextIdAnswer5 = "yakyu-ken-win2"
}
console.log(nextIdAnswer5)

if (paperAnswer2 === 0) {
  nextIdAnswer6 = "yakyukenRetrySecound"
} else if (paperAnswer2 === 1) {
  nextIdAnswer6 = "yakyu-ken-retry2-2"
} else if (paperAnswer2 === 2) {
  nextIdAnswer6 = "yakyu-ken-win2"
}
console.log(nextIdAnswer6)

// 相手負け
if (nextIdAnswer4 === "yakyu-ken-win2") {
  result2 = "チョキ！！！"
} else if (nextIdAnswer5 === "yakyu-ken-win2") {
  result2 = "パー！！！"
} else if (nextIdAnswer6 === "yakyu-ken-win2") {
  result2 = "グー！！！"
}

// あいこ
if (nextIdAnswer4 === "yakyu-ken-retry2-2") {
  result6 = "グー！！！"
} else if (nextIdAnswer5 === "yakyu-ken-retry2-2") {
  result6 = "チョキ！！！"
} else if (nextIdAnswer6 === "yakyu-ken-retry2-2") {
  result6 = "パー！！！"
}

// 自分負け
if (nextIdAnswer4 === "yakyukenRetrySecound") {
  result10 = "パー！！！"
} else if (nextIdAnswer5 === "yakyukenRetrySecound") {
  result10 = "グー！！！"
} else if (nextIdAnswer6 === "yakyukenRetrySecound") {
  result10 = "チョキ！！！"
}
// console.log(result10)
// yakyu-ken3
const stoneAnswer3 = (stoneNumber - comSelect3 + 3) % 3;
const scissorAnswer3 = (scissorNumber - comSelect3 + 3) % 3;
const paperAnswer3 = (paperNumber - comSelect3 + 3) % 3;

let nextIdAnswer7 = ""
let nextIdAnswer8 = ""
let nextIdAnswer9 = ""

if (stoneAnswer3 === 0) {
  nextIdAnswer7 = "yakyukenRetryThird"
} else if (stoneAnswer3 === 1) {
  nextIdAnswer7 = "yakyu-ken-retry2-3"
} else if (stoneAnswer3 === 2) {
  nextIdAnswer7 = "yakyu-ken-win3"
}  
console.log(nextIdAnswer7)

if (scissorAnswer3 === 0) {
  nextIdAnswer8 = "yakyukenRetryThird"
} else if (scissorAnswer3 === 1) {
  nextIdAnswer8 = "yakyu-ken-retry2-3"
} else if (scissorAnswer3 === 2) {
  nextIdAnswer8 = "yakyu-ken-win3"
}  
console.log(nextIdAnswer8)

if (paperAnswer3 === 0) {
  nextIdAnswer9 = "yakyukenRetryThird"
} else if (paperAnswer3 === 1) {
  nextIdAnswer9 = "yakyu-ken-retry2-3"
} else if (paperAnswer3 === 2) {
  nextIdAnswer9 = "yakyu-ken-win3"
}  
console.log(nextIdAnswer9)

// 相手負け
if (nextIdAnswer7 === "yakyu-ken-win3") {
  result3 = "チョキ！！！"
} else if (nextIdAnswer8 === "yakyu-ken-win3") {
  result3 = "パー！！！"
} else if (nextIdAnswer9 === "yakyu-ken-win3") {
  result3 = "グー！！！"
}

// あいこ
if (nextIdAnswer7 === "yakyu-ken-retry2-3") {
  result7 = "グー！！！"
} else if (nextIdAnswer8 === "yakyu-ken-retry2-3") {
  result7 = "チョキ！！！"
} else if (nextIdAnswer9 === "yakyu-ken-retry2-3") {
  result7 = "パー！！！"
}

// 自分負け
if (nextIdAnswer7 === "yakyukenRetryThird") {
  result11 = "パー！！！"
} else if (nextIdAnswer8 === "yakyukenRetryThird") {
  result11 = "グー！！！"
} else if (nextIdAnswer9 === "yakyukenRetryThird") {
  result11 = "チョキ！！！"
}


// yakyu-ken4
const stoneAnswer4 = (stoneNumber - comSelect4 + 3) % 3;
const scissorAnswer4 = (scissorNumber - comSelect4 + 3) % 3;
const paperAnswer4 = (paperNumber - comSelect4 + 3) % 3;

let nextIdAnswer10 = ""
let nextIdAnswer11 = ""
let nextIdAnswer12 = ""

if (stoneAnswer4 === 0) {
  nextIdAnswer10 = "yakyukenRetryForth"
} else if (stoneAnswer4 === 1) {
  nextIdAnswer10 = "yakyu-ken-retry2-4"
} else if (stoneAnswer4 === 2) {
  nextIdAnswer10 = "yakyu-ken-win4"
}
console.log(nextIdAnswer10)

if (scissorAnswer4 === 0) {
  nextIdAnswer11 = "yakyukenRetryForth"
} else if (scissorAnswer4 === 1) {
  nextIdAnswer11 = "yakyu-ken-retry2-4"
} else if (scissorAnswer4 === 2) {
  nextIdAnswer11 = "yakyu-ken-win4"
}
console.log(nextIdAnswer11)

if (paperAnswer4 === 0) {
  nextIdAnswer12 = "yakyukenRetryForth"
} else if (paperAnswer4 === 1) {
  nextIdAnswer12 = "yakyu-ken-retry2-4"
} else if (paperAnswer4 === 2) {
  nextIdAnswer12 = "yakyu-ken-win4"
}
console.log(nextIdAnswer12)

// 相手負け
if (nextIdAnswer10 === "yakyu-ken-win4") {
  result4 = "チョキ！！！"
} else if (nextIdAnswer11 === "yakyu-ken-win4") {
  result4 = "パー！！！"
} else if (nextIdAnswer12 === "yakyu-ken-win4") {
  result4 = "グー！！！"
}

// あいこ
if (nextIdAnswer10 === "yakyu-ken-retry2-4") {
  result8 = "グー！！！"
} else if (nextIdAnswer11 === "yakyu-ken-retry2-4") {
  result8 = "チョキ！！！"
} else if (nextIdAnswer12 === "yakyu-ken-retry2-4") {
  result8 = "パー！！！"
}

// 自分負け
if (nextIdAnswer10 === "yakyukenRetryForth") {
  result12 = "チョキ！！！"
} else if (nextIdAnswer11 === "yakyukenRetryForth") {
  result12 = "パー！！！"
} else if (nextIdAnswer12 === "yakyukenRetryForth") {
  result12 = "グー！！！"
}



const defaultDataset = {
  "init": {
    answers: [
      { content: "お話しませんか？", nextId: "talk" },
      { content: "野球拳しませんか？", nextId: "yakyu-ken" },
      { content: "お付き合いしたい", nextId: "dating" },
      { content: "その他", nextId: "other" }
    ],
    question: "こんにちは🌟明日花キララです💖私に何か御用でしょうか？",
  },
  "talk": {
    answers: [
      { content: "彼氏はいますか？", nextId: "boyfriend" },
      { content: "3サイズを教えて！", nextId: "threesize" },
      { content: "野球拳しませんか？", nextId: "yakyu-ken" },
      { content: "その他", nextId: "other" }
    ],
    question: "何か聞きたいことでもありますか😘？",
  },
  "boyfriend": {
    answers: [
      { content: "野球拳しませんか？", nextId: "yakyu-ken" },
      { content: "3サイズを教えて！", nextId: "threesize" },
      { content: "その他", nextId: "other" },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "皆さんのご想像にお任せしてます💖他に聞きたいことはありますか？",
  },
  "threesize": {
    answers: [
      { content: "野球拳しませんか？", nextId: "yakyu-ken" },
      { content: "彼氏はいますか？", nextId: "boyfriend" },
      { content: "その他", nextId: "other" },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "3サイズは上からB90cm(Gcup),W58cm,H85cmです💖他に聞きたいことはありますか？",
  },
  "other": {
    answers: [
      { content: "作品を購入する", nextId: "https://www.dmm.co.jp/mono/dvd/-/list/=/article=actress/id=23988/" },
      { content: "Twitter", nextId: "https://twitter.com/asukakiraran" },
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "その他についてですね💖コチラからお問い合わせできます🌟",
  },
  "dating": {
    answers: [
      { content: "DMする", nextId: "https://twitter.com/asukakiraran" },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "まずは一緒にランチでもいかがですか？DMしてください😘",
  },
  // yakyu-ken-zone
  "yakyu-ken": {
    answers: [
      { content: stone, nextId: nextIdAnswer },
      { content: scissor, nextId: nextIdAnswer2 },
      { content: paper, nextId: nextIdAnswer3 },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "野球拳いいですね🌟私が負けたら脱いでいく画像をおくりますね💖では始めましょう！野球〜をす〜るなら〜こういう具合にしやしゃんせ🌟アウト！セーフ！ヨヨイのヨイ！！",
  },
  "yakyu-ken2": {
    answers: [
      { content: stone, nextId: nextIdAnswer4 },
      { content: scissor, nextId: nextIdAnswer5 },
      { content: paper, nextId: nextIdAnswer6 },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "第2戦です🌟次は負けませんよ🔥野球〜をす〜るなら〜こういう具合にしやしゃんせ🌟アウト！セーフ！ヨヨイのヨイ！！",
  },
  "yakyu-ken3": {
    answers: [
      { content: stone, nextId: nextIdAnswer7 },
      { content: scissor, nextId: nextIdAnswer8 },
      { content: paper, nextId: nextIdAnswer9 },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "第3戦です🌟私もそろそろ本気になります🔥野球〜をす〜るなら〜こういう具合にしやしゃんせ🌟アウト！セーフ！ヨヨイのヨイ！！",
  },
  "yakyu-ken4": {
    answers: [
      { content: stone, nextId: nextIdAnswer10 },
      { content: scissor, nextId: nextIdAnswer11 },
      { content: paper, nextId: nextIdAnswer12 },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "最終戦です🌟負けられない戦いがここにあります🔥野球〜をす〜るなら〜こういう具合にしやしゃんせ🌟アウト！セーフ！ヨヨイのヨイ！！",
  },
  // win-zone
  "yakyu-ken-win1": {
    answers: [
      { content: "画像を受け取る", nextId: "yakyu-ken-2nd" },
    ],
    question: [ result, "わー😂負けちゃいました😂"],
  },
  "yakyu-ken-win2": {
    answers: [
      { content: "画像を受け取る", nextId: "yakyu-ken-3rd" },
    ],
    question: [ result2, "また負けちゃいました😂"],
  },
  "yakyu-ken-win3": {
    answers: [
      { content: "画像を受け取る", nextId: "yakyu-ken-4th" },
    ],
    question: [ result3, "うわーん😂次負けたら見られちゃうよー💦"],
  },
  "yakyu-ken-win4": {
    answers: [
      { content: "作品を購入する", nextId: "https://www.dmm.co.jp/mono/dvd/-/list/=/article=actress/id=23988/" },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: [ result4, "な、、、なん、、だと、、、😥仕方ないな〜そんなに私の裸が見たいなら購入して存分にたのしんでね💖"],
  },
  // next-fight-zone
  "yakyu-ken-2nd": {
    answers: [
      { content: "2戦目に進む", nextId: "yakyu-ken2" },
    ],
    question: <img src={image1} width="100%" height="auto"/>,
  },
    "yakyu-ken-3rd": {
      answers: [
        { content: "3戦目に進む", nextId: "yakyu-ken3" },
      ],
      question: <img src={image2} width="100%" height="auto"/>,
  },
    "yakyu-ken-4th": {
      answers: [
        { content: "最終戦に進む", nextId: "yakyu-ken4" },
      ],
    question: <img src={image3} width="100%" height="auto"/>,
  },
    // drow or lose-zone
  "yakyukenretryFirst": {
    answers: [
      { content: "はい", nextId: "yakyu-ken-again" },
      { content: "いいえ", nextId: "init" }
    ],
    question: [result9, "私の勝ちですね🌟もう一度挑戦しますか？"],
  },
  "yakyukenRetrySecound": {
    answers: [
      { content: "はい", nextId: "yakyu-ken-again" },
      { content: "いいえ", nextId: "init" }
    ],
    question: [result10, "私の勝ちですね🌟もう一度挑戦しますか？"],
  },
  "yakyukenRetryThird": {
    answers: [
      { content: "はい", nextId: "yakyu-ken-again" },
      { content: "いいえ", nextId: "init" }
    ],
    question: [result11, "私の勝ちですね🌟もう一度挑戦しますか？"],
  },
  "yakyukenRetryForth": {
    answers: [
      { content: "はい", nextId: "yakyu-ken-again" },
      { content: "いいえ", nextId: "init" }
    ],
    question: [result12, "私の勝ちですね🌟もう一度挑戦しますか？"],
  },
  "yakyu-ken-retry2-1": {
    answers: [
      { content: "はい", nextId: "yakyu-ken-again" },
      { content: "いいえ", nextId: "init" }
    ],
    question: [result5, "あいこでしたねー💦もう一度挑戦しますか？"],
  },
  "yakyu-ken-retry2-2": {
    answers: [
      { content: "はい", nextId: "yakyu-ken-again" },
      { content: "いいえ", nextId: "init" }
    ],
    question: [result6, "あいこでしたねー💦もう一度挑戦しますか？"],
  },
  "yakyu-ken-retry2-3": {
    answers: [
      { content: "はい", nextId: "yakyu-ken-again" },
      { content: "いいえ", nextId: "init" }
    ],
    question: [result7, "あいこでしたねー💦もう一度挑戦しますか？"],
  },
  "yakyu-ken-retry2-4": {
    answers: [
      { content: "はい", nextId: "yakyu-ken-again" },
      { content: "いいえ", nextId: "init" }
    ],
    question: [result8, "あいこでしたねー💦もう一度挑戦しますか？"],
  },
  "yakyu-ken-again": {
    answers: [
      { content: stone, nextId: nextIdAnswer },
      { content: scissor, nextId: nextIdAnswer2 },
      { content: paper, nextId: nextIdAnswer3 },
      { content: "最初の質問に戻る", nextId: "init" }
    ],
    question: "では始めましょう！野球〜をす〜るなら〜こういう具合にしやしゃんせ🌟アウト！セーフ！ヨヨイのヨイ！！",
  },
}

export default defaultDataset
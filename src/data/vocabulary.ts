import type { VocabularyItem } from "@/types/learning";

export const vocabulary: VocabularyItem[] = [
  {
    id: "coffee",
    language: "ja-JP",
    word: "コーヒー",
    romanization: "Kōhī",
    meaning: "Coffee",
    partOfSpeech: "Noun · loanword",
    syllables: [
      { kana: "コー", romaji: "kō" },
      { kana: "ヒー", romaji: "hī" },
    ],
    illustration: "coffee",
    tip: "The long bar ー stretches the vowel. Hold each “o” and “i” a little longer.",
    sentences: [
      {
        text: "コーヒーをください。",
        romanization: "Kōhī o kudasai.",
        translation: "A coffee, please.",
      },
      {
        text: "朝はいつもコーヒーを飲みます。",
        romanization: "Asa wa itsumo kōhī o nomimasu.",
        translation: "I always drink coffee in the morning.",
      },
    ],
  },
  {
    id: "cat",
    language: "ja-JP",
    word: "猫",
    reading: "ねこ",
    romanization: "Neko",
    meaning: "Cat",
    partOfSpeech: "Noun",
    syllables: [
      { kana: "ね", romaji: "ne" },
      { kana: "こ", romaji: "ko" },
    ],
    illustration: "cat",
    tip: "Keep both syllables short and even — “ne-ko”, with no stress on either.",
    sentences: [
      {
        text: "猫が好きです。",
        romanization: "Neko ga suki desu.",
        translation: "I like cats.",
      },
      {
        text: "あの猫はとてもかわいいですね。",
        romanization: "Ano neko wa totemo kawaii desu ne.",
        translation: "That cat is really cute, isn't it?",
      },
    ],
  },
  {
    id: "train",
    language: "ja-JP",
    word: "電車",
    reading: "でんしゃ",
    romanization: "Densha",
    meaning: "Train",
    partOfSpeech: "Noun",
    syllables: [
      { kana: "で", romaji: "de" },
      { kana: "ん", romaji: "n" },
      { kana: "しゃ", romaji: "sha" },
    ],
    illustration: "train",
    tip: "ん is its own beat. Say “de-n-sha” in three even counts.",
    sentences: [
      {
        text: "電車で学校に行きます。",
        romanization: "Densha de gakkō ni ikimasu.",
        translation: "I go to school by train.",
      },
      {
        text: "次の電車は何時ですか？",
        romanization: "Tsugi no densha wa nanji desu ka?",
        translation: "What time is the next train?",
      },
    ],
  },
  {
    id: "sakura",
    language: "ja-JP",
    word: "桜",
    reading: "さくら",
    romanization: "Sakura",
    meaning: "Cherry blossom",
    partOfSpeech: "Noun",
    syllables: [
      { kana: "さ", romaji: "sa" },
      { kana: "く", romaji: "ku" },
      { kana: "ら", romaji: "ra" },
    ],
    illustration: "sakura",
    tip: "The Japanese “r” is a light tap — somewhere between an “l” and a “d”.",
    sentences: [
      {
        text: "桜がきれいですね。",
        romanization: "Sakura ga kirei desu ne.",
        translation: "The cherry blossoms are beautiful, aren't they?",
      },
      {
        text: "春に桜を見に行きましょう。",
        romanization: "Haru ni sakura o mi ni ikimashō.",
        translation: "Let's go see the cherry blossoms in spring.",
      },
    ],
  },
  {
    id: "ramen",
    language: "ja-JP",
    word: "ラーメン",
    romanization: "Rāmen",
    meaning: "Ramen",
    partOfSpeech: "Noun · loanword",
    syllables: [
      { kana: "ラー", romaji: "rā" },
      { kana: "メ", romaji: "me" },
      { kana: "ン", romaji: "n" },
    ],
    illustration: "ramen",
    tip: "Stretch the first “a”, then finish with a soft, nasal ン.",
    sentences: [
      {
        text: "ラーメンを一つお願いします。",
        romanization: "Rāmen o hitotsu onegaishimasu.",
        translation: "One ramen, please.",
      },
      {
        text: "このラーメンはおいしいです！",
        romanization: "Kono rāmen wa oishii desu!",
        translation: "This ramen is delicious!",
      },
    ],
  },
];

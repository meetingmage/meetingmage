import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

const express = require("express");
const cors = require("cors")({
  origin: true
});
const app = express();

const apiVersion = "v1";

const allWords = [
  {
    rank: "1",
    word: "the"
  },
  {
    rank: "2",
    word: "be"
  },
  {
    rank: "3",
    word: "to"
  },
  {
    rank: "4",
    word: "of"
  },
  {
    rank: "5",
    word: "and"
  },
  {
    rank: "6",
    word: "a"
  },
  {
    rank: "7",
    word: "in"
  },
  {
    rank: "8",
    word: "that"
  },
  {
    rank: "9",
    word: "have"
  },
  {
    rank: "10",
    word: "I"
  },
  {
    rank: "11",
    word: "it"
  },
  {
    rank: "12",
    word: "for"
  },
  {
    rank: "13",
    word: "not"
  },
  {
    rank: "14",
    word: "on"
  },
  {
    rank: "15",
    word: "with"
  },
  {
    rank: "16",
    word: "he"
  },
  {
    rank: "17",
    word: "as"
  },
  {
    rank: "18",
    word: "you"
  },
  {
    rank: "19",
    word: "do"
  },
  {
    rank: "20",
    word: "at"
  },
  {
    rank: "21",
    word: "this"
  },
  {
    rank: "22",
    word: "but"
  },
  {
    rank: "23",
    word: "his"
  },
  {
    rank: "24",
    word: "by"
  },
  {
    rank: "25",
    word: "from"
  },
  {
    rank: "26",
    word: "they"
  },
  {
    rank: "27",
    word: "we"
  },
  {
    rank: "28",
    word: "say"
  },
  {
    rank: "29",
    word: "her"
  },
  {
    rank: "30",
    word: "she"
  },
  {
    rank: "31",
    word: "or"
  },
  {
    rank: "32",
    word: "an"
  },
  {
    rank: "33",
    word: "will"
  },
  {
    rank: "34",
    word: "my"
  },
  {
    rank: "35",
    word: "one"
  },
  {
    rank: "36",
    word: "all"
  },
  {
    rank: "37",
    word: "would"
  },
  {
    rank: "38",
    word: "there"
  },
  {
    rank: "39",
    word: "their"
  },
  {
    rank: "40",
    word: "what"
  },
  {
    rank: "41",
    word: "so"
  },
  {
    rank: "42",
    word: "up"
  },
  {
    rank: "43",
    word: "out"
  },
  {
    rank: "44",
    word: "if"
  },
  {
    rank: "45",
    word: "about"
  },
  {
    rank: "46",
    word: "who"
  },
  {
    rank: "47",
    word: "get"
  },
  {
    rank: "48",
    word: "which"
  },
  {
    rank: "49",
    word: "go"
  },
  {
    rank: "50",
    word: "me"
  },
  {
    rank: "51",
    word: "when"
  },
  {
    rank: "52",
    word: "make"
  },
  {
    rank: "53",
    word: "can"
  },
  {
    rank: "54",
    word: "like"
  },
  {
    rank: "55",
    word: "time"
  },
  {
    rank: "56",
    word: "no"
  },
  {
    rank: "57",
    word: "just"
  },
  {
    rank: "58",
    word: "him"
  },
  {
    rank: "59",
    word: "know"
  },
  {
    rank: "60",
    word: "take"
  },
  {
    rank: "61",
    word: "people"
  },
  {
    rank: "62",
    word: "into"
  },
  {
    rank: "63",
    word: "year"
  },
  {
    rank: "64",
    word: "your"
  },
  {
    rank: "65",
    word: "good"
  },
  {
    rank: "66",
    word: "some"
  },
  {
    rank: "67",
    word: "could"
  },
  {
    rank: "68",
    word: "them"
  },
  {
    rank: "69",
    word: "see"
  },
  {
    rank: "70",
    word: "other"
  },
  {
    rank: "71",
    word: "than"
  },
  {
    rank: "72",
    word: "then"
  },
  {
    rank: "73",
    word: "now"
  },
  {
    rank: "74",
    word: "look"
  },
  {
    rank: "75",
    word: "only"
  },
  {
    rank: "76",
    word: "come"
  },
  {
    rank: "77",
    word: "its"
  },
  {
    rank: "78",
    word: "over"
  },
  {
    rank: "79",
    word: "think"
  },
  {
    rank: "80",
    word: "also"
  },
  {
    rank: "81",
    word: "back"
  },
  {
    rank: "82",
    word: "after"
  },
  {
    rank: "83",
    word: "use"
  },
  {
    rank: "84",
    word: "two"
  },
  {
    rank: "85",
    word: "how"
  },
  {
    rank: "86",
    word: "our"
  },
  {
    rank: "87",
    word: "work"
  },
  {
    rank: "88",
    word: "first"
  },
  {
    rank: "89",
    word: "well"
  },
  {
    rank: "90",
    word: "way"
  },
  {
    rank: "91",
    word: "even"
  },
  {
    rank: "92",
    word: "new"
  },
  {
    rank: "93",
    word: "want"
  },
  {
    rank: "94",
    word: "because"
  },
  {
    rank: "95",
    word: "any"
  },
  {
    rank: "96",
    word: "these"
  },
  {
    rank: "97",
    word: "give"
  },
  {
    rank: "98",
    word: "day"
  },
  {
    rank: "99",
    word: "most"
  },
  {
    rank: "100",
    word: "us"
  }
];

function makeRandomString(length: Number) {
  let result = "";
  // const characters =
  //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

app.use(cors);
app.get(`/${apiVersion}/hello`, (req: any, res: any) => {
  res.send(`Hello ${req.user.name || "world"}`);
});
app.post(`/${apiVersion}/meeting`, async (req: any, res: any) => {
  const word1 = allWords[Math.floor(Math.random() * allWords.length)].word;
  const word2 = allWords[Math.floor(Math.random() * allWords.length)].word;
  const word3 = allWords[Math.floor(Math.random() * allWords.length)].word;

  const url_slug = `${word1}-${word2}-${word3}-${makeRandomString(6)}`;
  const meeting = {
    url_slug: url_slug,
    title: "New Meeting",
    description: "",
    created_date: new Date(),
    updated_date: new Date()
  };

  const writeResult = await admin
    .firestore()
    .collection("meetings")
    .add(meeting);

  res.status(201).send({
    result: `Meeting created with ID: ${writeResult.id} and url_slug: ${url_slug}`,
    data: meeting
  });
});

exports.api = functions.https.onRequest(app);

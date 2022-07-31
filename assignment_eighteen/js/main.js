/*
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
*/

let str1 = '10 20 100 1000 5000';
let str2 = 'Os1 Os12 Os123 Os123Os Os12312Os123';

let invalidEmail = 'Anas@@@@gmail....com';
let validEmail = 'a@nn.sa';

let ip = '192.168.1.1'; // IPv4
/*
  Regular Expression
  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  - Matches A String Against a Regular Expression Pattern
  - Returns An Array With The Matches
  - Returns null If No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/ig;
console.log(myString.match(regex));

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let tld = "Com Net Org Info Code Io";
let tldRe = /(org|info|io)/ig;
console.log(tld.match(tldRe));

let nums = "12345678910";
let numsRe = /[0-9]/g;
console.log(nums.match(numsRe));

let notnums = "12345678910";
let notNumsRe = /[^0-2]/g;
console.log(notnums.match(notNumsRe));

let specialNums = "1!@#$%^&2345678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe));

myString = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
let notAtozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let notAtozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let notaAndcAnde = /[^ace]/g;
let allLetters = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
let specials = /[^a-zA-Z1-9]/g;
console.log(myString.match(atozSmall));
console.log(myString.match(notAtozSmall));
console.log(myString.match(atozCapital));
console.log(myString.match(notAtozCapital));
console.log(myString.match(aAndcAnde));
console.log(myString.match(notaAndcAnde));
console.log(myString.match(allLetters));
console.log(myString.match(numsAndSpecials));
console.log(myString.match(specials));

/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters.
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
let dot = /./g;
let word = /\w/g;
let wordCap = /\W/g;
let valid = /\w@\w.(com|net|org)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(wordCap));
console.log(email.match(valid));

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word
  \B => matches Not at the beginning/end of a word

  Test Method
  Pattern.test(input)
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/ig;
console.log(names.match(re));


console.log(re.test(names));
console.log(/(\bspam|spam\b)/ig.test(names));
console.log(re.test("Osama"));
console.log(re.test("1Spam"));
console.log(/(\bspam|spam\b)/ig.test("Spam1"));

/*
  Regular Expression

  Quantifiers
  n+ => One Or More
  n* => zero or more
  n? => zero or one
*/
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/ig;
console.log(mails.match(mailsRe));

let numss = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numssRe = /0\d*0/ig;
console.log(numss.match(numssRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlsRe));

/*
  Regular Expression

  Quantifiers
  n{x} => Number Of
  n{x,y} => Range
  n{x,} => At Least x
*/
let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S

/*
  Regular Expression

  Quantifiers
  $ => End With Something
  ^ => Start With Somrthing
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myStrings = "We Love Programming";
let namess = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myStrings));
console.log(/^we/ig.test(myStrings));
console.log(/lz$/ig.test(namess));
console.log(/^\d/ig.test(namess));

console.log(namess.match(/\d\w{5}(?=Z)/ig));
console.log(namess.match(/\d\w{8}(?!Z)/ig));
console.log(namess.match(/\d\w{8}(?!Z)?/ig));

/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));

let reg = /@/ig;
console.log(txt.replaceAll(reg, "JavaScript"));
console.log(txt.replaceAll(/@/ig, "JavaScript"));

/*
  Regular Expression
  - Input Form Validation Practice
*/

document.getElementById('register').onsubmit = function () {
  let phoneInput = document.getElementById('phone').value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validationResult = phoneRe.test(phoneInput);
  if(validationResult === false) {
    return false;
  }
  return true;
};

/*******************/
let ips = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipsRe = /((\d|\w){3,}:?)+/g;
console.log(ips.match(ipsRe));

/*******************/
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRe = /Os(\d{2,})?O/ig;
console.log(specialNames.match(specialNamesRe)); // ['Os10O', 'OsO', 'Os100O']
/******************/
let phones = "+(995)-123 (4567)";
let phoneRes = /\+\(\d{3}\)\-\d{3}\s\(\d{4}\)/ig;
console.log(phones.match(phoneRes));
/*******************/
let urlss = "https://hello.com http://hello.com www.hello.com hello.com";
let res = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/gi;
console.log(urlss.match(res));
// https? If https exists or not if exists print it if not skip it
// \/\/ skip the // characters
// (?:[-\w]+\.)? ? if the previous exists print nothing if not print www. ?if exist 
// ([-\w]+)\.\w+(?:\.\w+)? ? if exist print \w+ print any character after www. then print . then print \w+ any character of words (?:\.\w+) if true print "" nothing if not print . then \w+ any characters after . symbol 
// \/? if there is slash print if if not skip this
// .* print . then all characters after .

/*******************/
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reDate = /\d{2,}\/?\s?-?\s?\d{2}\/?\s?-?\s?\d{2,}/ig;
console.log(date1.match(reDate)); // "25/10/1982"
console.log(date2.match(reDate)); // "25 - 10 - 1982"
console.log(date3.match(reDate)); // "25 10 1982"
console.log(date4.match(reDate)); // "25 10 82"
/*******************/
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let reURLs = /(https?:\/\/)?(w{3})?.\w+.\w+(:\d{4}\/\w+.\w+\?\w+\=\d{1,}\&\w+\=\w+)?/ig; 

console.log(url1.match(reURLs));
console.log(url2.match(reURLs));
console.log(url3.match(reURLs));
console.log(url4.match(reURLs));
console.log(url5.match(reURLs));

function isValidUrl(url) {
  try {
    const pattern = /https?\:\/\/www\.[a-zA-Z0-9]{1,}\.[a-zA-Z]{2,3}/;
    console.log(pattern.test(url));
    if (new URL(url) && pattern.test(url)) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}

const uniqueSet = new Set();

const short_url_db = { 1: "https://freeCodeCamp.org" };

function randomNumber() {
  let num;
  do {
    num = Math.floor(Math.random() * 100000);
  } while (uniqueSet.has(num));

  uniqueSet.add(num);
  return num;
}

module.exports = {
  isValidUrl,
  randomNumber,
  short_url_db,
};

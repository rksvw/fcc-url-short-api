function isValidUrl(url) {
  try {
    const nurl = new URL(url);
    return nurl.protocol === "http:" || nurl.protocol === "https:";
  } catch (err) {
    return false;
  }
}

const uniqueSet = new Set();

const short_url_db = {};

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

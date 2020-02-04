process.stdin.resume();
process.stdin.setEncoding('utf8');
Object.defineProperties(Array.prototype, {
    count: {
        value: function(value) {
            return this.filter(x => x==value).length;
        }
    }
});
var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    loop: for (let s = 0; s < t; s++) {
      let str = arr[s].split('');
      if (str.length < 3) {
        console.log('Dynamic');
        continue loop;
      } else {
        let set = new Set(str), counts = [];
        for (let char of set) {
          counts.push(str.count(char));
        }
        counts.sort((a, b) => a - b);
        console.log(isFibSeq(counts) ? 'Dynamic' : 'Not');
      }
    }
});

const isFibSeq = (seq) => {
  if (seq.length > 3 && seq[1] + seq[2] !== seq[3]) {
    [ seq[0], seq[1] ] = [ seq[1], seq[0] ];
  }
  let i = 1;
  while (++i < seq.length) {
    if (seq[i] !== seq[i - 1] + seq[i - 2]) {
      return false;
    }
  }
  return true;
};

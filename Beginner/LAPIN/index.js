process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = arr.shift();
    loop: for (var i = 0; i < t; i++) {
      const string = arr[i];
      const len = string.length;
      let strl = string.substring(0,len/2);
      let strr = '';
      if (len % 2 == 0) {
        strr = string.substring(len/2);
      } else {
        strr = string.substring(len/2+1);
      }
      if (strl === strr) {
        console.log('YES');
        continue loop;
      }
      const strlFreq = getFrequency(strl);
      const strrFreq = getFrequency(strr);
      for (var key in strlFreq) {
        if (strlFreq[key] !== strrFreq[key]) {
          console.log('NO');
          continue loop;
        }
      }
      console.log('YES');
    }
});

function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    return freq;
};

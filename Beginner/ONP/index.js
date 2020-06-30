process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = arr.shift();
    for (var i = 0; i < t; i++) {
      var str = arr[i];
      var ch_str = [];
      var result = "";
      for(var j = 0; j < str.length; j++){
            var l = str[j];
            if(l == "(" || l == "+" || l == "-" || l == "*" || l == "/" || l == "^"){
                ch_str.push(l);
            } else if(l === ")") {
                var sub_str = ch_str.pop();
                while(sub_str !== "("){
                    result += sub_str;
                    sub_str = ch_str.pop();
                }
            } else {
                result += l;
            }
      }
      console.log(result);
    }
});

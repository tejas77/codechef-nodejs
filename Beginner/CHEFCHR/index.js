process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    let k = 4;
    loop: for (let s = 0; s < t; s++) {
      let lovely = 0;
      const string = arr[s];
      for (var i = 0; i <= string.length-k; i++) {
        if(string[i]=='f'||string[i]=='e'||string[i]=='c'||string[i]=='h')
        {
          if((string[i+1]=='f'||string[i+1]=='e'||string[i+1]=='c'||string[i+1]=='h')&&string[i+1]!=string[i])
          {
            if((string[i+2]=='f'||string[i+2]=='e'||string[i+2]=='c'||string[i+2]=='h')&&string[i]!=string[i+2]&&string[i+1]!=string[i+2])
            {
              if((string[i+3]=='f'||string[i+3]=='e'||string[i+3]=='c'||string[i+3]=='h')&&string[i]!=string[i+3]&&string[i+1]!=string[i+3]&&string[i+2]!=string[i+3])
              {
                lovely++;
              }
            }
          }
        }
      }
      console.log(lovely ? `lovely ${lovely}` : 'normal');
    }
});

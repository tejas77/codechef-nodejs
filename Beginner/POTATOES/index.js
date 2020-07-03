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
      var potatoes = arr[i].split(' ').map(Number).reduce((a,b) => a+b);
      var farm3 = potatoes + 1;
      while (true) {
        if (test_prime(farm3)) {
          console.log(farm3-potatoes);
          continue loop;
        } else {
          farm3++;
        }
      }
    }
});

function test_prime(n)
{
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;
  }
}

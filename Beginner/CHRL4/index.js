var r = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
var c = 0
var n;
var ki = 0;
var k;
var dp = [];
var ans = [];
r.on('line', function(cmd) {
    if (c === 1) {
        var a = cmd.split(' ').map(Number);
        for (i = 0; i < n; i++) {
            if (i <= k) {
                dp[i] = Math.log(a[i])
                ans[i] = a[i]
            } else if (i - k - 1 == ki) {
                var sa = dp.slice(ki + 1, i)
                var m = Math.min.apply(null, sa);
                var si = sa.indexOf(m);
                dp[i] = Math.log(a[i]) + m
                ki = ki + 1 + si;
                ans[i] = a[i] * ans[ki] % 1000000007
            } else {
                dp[i] = Math.log(a[i]) + dp[ki]
                ans[i] = a[i] * ans[ki] % 1000000007
            }
        }
        console.log(a[0] * ans.slice(-1).pop() % 1000000007)
        process.exit(0);
    }
    c++;
    n = parseInt(cmd.split(' ')[0]);
    for (var i = n - 1; i >= 0; i--) {
        dp.push(0);
        ans.push(0);
    }
    k = parseInt(cmd.split(' ')[1]);
});

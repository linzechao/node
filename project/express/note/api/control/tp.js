// 设置代理

// 指定唯一子网
app.set('trust proxy', 'loopback') 

// 指定子网和 IP 地址
app.set('trust proxy', 'loopback, 123.123.123.123') 

// 指定多个子网
app.set('trust proxy', 'loopback, linklocal, uniquelocal') 

// 使用数组指定多个子网
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']) 


// 定制实现，只有在您知道自己在干什么时才能这样做。
app.set('trust proxy', function (ip) {
  if (ip === '127.0.0.1' || ip === '123.123.123.123') return true; // 受信的 IP 地址
  else return false;
});
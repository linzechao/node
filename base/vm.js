// 虚拟机
var vm = require('vm');
// console.log(vm);

var localVal = 'local';

// vm.runInThisContext('localVal = "vm";');
// console.log(localVal); // 还是local

// vm.runInThisContext('global.localVal = "vm";'); // 可以访问当前global对象
// console.log(global.localVal); // vm


// 创建一个沙箱(沙盒)
// 参数为数组或对象
var xup = {name: 'Super', sex: 'Man'};
var sandbox = vm.createContext(xup);
// console.log(sandbox); // 返回对象

// console.log(vm.isContext(sandbox)); // 是否通过vm.createContext创建的上下文对象

vm.runInContext('link = "JavaScript";', sandbox); // 运行在指定的沙箱里面
// console.log(sandbox);


// var newSandbox = vm.runInNewContext('name = "Chao";'); // 返回一个新的沙箱
// console.log(newSandbox);

vm.runInNewContext('name = "Chao";', sandbox); // 在原有沙箱上执行
// console.log(sandbox);

// var script = new vm.Script('age = 24; console.log("This is Script Context", "age = " + this.age);');
// script.runInThisContext(); // 执行脚本

var script = new vm.Script('age = 24;');
// console.log(script);

script.runInContext(sandbox); // 保存至sandbox对象中
// console.log(sandbox);

var newScript = script.runInNewContext();
console.log(newScript);


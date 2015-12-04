 var message = "some string";
alert(typeof message);//返回字符串string类型
alert(typeof (message));//返回字符串string类型
alert(typeof 95);//返回数字number类型
var num = parseInt("10", 2);//按二进制解析
var num2 = parseInt("10", 8);//按八进制解析
var num3 = parseInt("10", 10);//按十进制解析
var num4 = parseInt("10", 16);//按十六进制解析
var num5 = parseFloat("1234blue");//返回1234整数
var num6 = parseFloat("0xA");//返回0
var num7 = parseFloat("22.5");//返回22.5
var num8 = parseFloat("22.34.5");//返回22.34
var num9 = parseFloat("0908.5");//返回908.5
var num10 = parseFloat("3.125e7");//返回31250000
var num11 = 10;
//转换为字符串
alert(num.toString());//"10"
alert(num.toString(2));//"1010"二进制
alert(num.toString(8));//"12"八进制
alert(num.toString(10));//"10"十进制
alert(num.toString(16));//"a"十六进制
var value1 = 10;
var value2 = true;
var value3 = null;
var value4;
alert(String(value1));//"10"
alert(String(value2));//"true"
alert(String(value3));//"null"
alert(String(value4));//"undefined"
//一元运算符
var age = 29;
var anotherAge = --age + 2;
alert(age);//28
alert(anotherAge);//30
var num12 = 2;
var num13 = 20;
var num14 = --num12 + num13;//21
var num15 = num12 + num13;//21
var num16 = 2;
var num17 = 20;
var num18 = num16-- + num17;//22
var num19 = num16 + num17;//21
var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = {valueOf: function(){return -1;}};
s1++;//值变成3
s2++;//值变成NaN
b++;//值变成数值1
f--;//值变成0.10000000000000009（由浮点舍入错误所致）
o--;//值变成数值-2
var s3 = "01";
var s4 = "1.1";
var s5 = "z";
var b = false;
var f = 1.1;
var o = {valueOf: function(){return -1;}};
s3 = +s3;//值变成数值1
s4 = +s4;//值变成数值1.1
s5 = +s5;//值变成NaN
b = +b;//值变成数值0
f = +f;//值未变，仍然是1.1
o = +o;//值变成数值-1
var num20 = 25;
num20 = -num20;//变成-25
//按位非~(NOT)(操作数的负数减一)
var num20 = 25;
var num21 = ~num20;
alert(num21);//-26(-25-1)
//按位与&(AND)(仅当二进制位同时为一时当前位才输出1，否则当前位为零)
var result = 25 & 3;
alert(result);//1(11001和00011按位操作只有最后一位是1)
//按位或|(OR)(仅当二进制位同事为0时当前位才输出0，否则当前位为1)
var result = 25 | 3;
alert(result);//27(11001和00011按位操作只有第三位是0，即11011，所以输出27)
//按位异或^(XOR)(位相同为0，不同为1)
var result = 25 ^ 3;
alert(result);//(11001和00011按位操作11010，所以输出26)
//左移<<(移动位)
var oldValue = 2;
var newValue = oldValue << 5;//向左移位5位，由10变为1000000，即64
//有符号右移>>
var oldValue = 64;
var newValue = oldValue >> 5;//向右移5位，由1000000变为10，即2
//无符号右移>>>
var oldValue = 64;//正数
var newValue = oldValue >>> 5;//二进制1000000变为000001000000值不变
var oldValue = -64;//二进制11111111111111111111111111000000
var newValue = oldValue >>> 5;//变为0000011111111111111111111111111000000，值为134217726
/*
 * 逻辑非!,操作数时一个对象返回false，操作数是一个空字符串返回true，
 * 操作数是一个非空字符串返回false 操作数是数值0返回true，
 * 操作数是 任意非0数值(包括Infinity)返回false，操作数是null返回true，
 * 操作数是NaN返回true，操作数是undefined返回true
 */
alert(!false);//true
alert(!"blue");//false
alert(!0);//true
alert(!NaN);//true
alert(!"");//true
alert(!12345);//false
/*
 * 逻辑非操作符也可以用于将一个值转换为与其对应的布尔值。
 * !!第一个逻辑非操作返回一个布尔值，第二个对布尔值取反，相当于使用Boolean()函数
 */
alert(!!"blue");//true
alert(!!0);//false
alert(!!NaN);//false
alert(!!"")//false
alert(!!12345);//true
/*
 * 逻辑与&&，当且仅当两个操作数同为true时结果为true
 * 如果第一个操作数是对象，则返回第二个操作数
 * 如果第二个操作数是对象，则只有在第一个操作数的值为true的情况下才会返回该对象
 * 如果两个操作数都是对象，则返回第二个操作数
 * 如果有一个操作数是null，则返回null
 * 如果有一个操作数是NaN，则返回NaN
 * 如果有一个操作数是undifined，则返回undefined
 */
var found = true;
var result = (found && someUndefinedVariable);//没有声明SomeUndefinedVariable
alert(result);//由于第一个操作数为true，所以对第二个操作数取值，第二个操作数没声明，所以不会执行alert
var found = false;
//虽然没声明该函数但不会发生错误因为第一个操作数已经是false
var result = (found && someUndefinedVariable);
alert(result);//会执行("false")
/*
 * 逻辑或||，当且仅当两个操作数的值同为false时结果返回false
 * 如果第一个操作数是对象，则返回第一个操作数
 * 如果第一个操作数的求值结果为false，则返回第二个操作数
 * 如果两个操作数都是对象，则返回第一个操作数
 * 如果两个操作数是null，则返回null
 * 如果两个操作数是NaN，则返回NaN
 * 如果两个操作数是undifined，则返回undefined
 */
var found = true;
var result = (found || someUndefinedVariable);//虽然没声明该函数，不会发生错误
alert(result);//会执行("true")
var found = false;
//由于第一个操作数的值为false，对第二个操作数取值发生错误
var result = (found || someUndefinedVariable);
alert(result);//所以这一行不会被执行
//利用逻辑或来避免为变量赋null或undefined值
var myObject = preferredObject || backupObject;//变量preferredObject中包含优先赋给变量myObject的值，
/*
 * 变量backupObject负责在preferredObject中不包含有效值的情况下提供后备值。如果preferredObject的值不是null
 * 那么它的值将被赋给myObject;如果是null，则将backupObject的值赋给myObject
 */
//乘法 *
var result = 34 * 56;
//除法 ／
var result = 66 / 11;
/*
 * 求模 %
 * 如果操作数都是数值，执行常规的除法计算，返回除得的余数
 * 如果被除数是无穷大值而除数是有限大值，则结果是NaN
 * 如果被除数是有限大的数值而除数是零，则结果是NaN
 * 如果是Infinity被Infinity除，则结果是NaN
 * 如果被除数是有限大的数值而除数死无穷大的数值，则结果是被除数
 * 如果被除数是零，则结果是零
 * 如果有一个操作数不是数值，则在后台调用Number()将其转换为数值，然后应用上述规则
 */
var result = 26 % 5;//等于1
//加性操作符+ -
var result1 = 5 + 5;//两个数值相加
alert(result1);//10
var result2 = 5 + "5";//数值和字符串相加
alert(result2);//得到字符串"55"
var num1 = 5;
var num2 = 10;
var message = "The sum of 5 and 10 is " + num1 +num2;
alert(message);//先执行前两个操作数加法，即把num1的值5转换为字符串5，再和num2的值转换为字符串10拼接
var num1 = 5;
var num2 = 10;
var message = "The sum of 5 and 10 is " + (num1 + num2);
alert(message);//输出"The sum of 5 and 10 is 15"
//减法
var result1 = 5 - true;//返回4，true被转换成1
var result2 = NaN - 1;//NaN
var result3 = 5 - 3;//数值减法运算2
var result4 = 5 - "";//返回5，""被转换成0
var result5 = 5 - "2";//3，"2"被转换成2
var result6 = 5 - null;//5，null被转换成0
/*
 * 关系操作符 <, >, <=, >=, 返回布尔值
 * 如果两个操作数都是数值，执行数值比较
 * 如果两个操作数都是字符串，执行数值比较
 * 如果一个操作数是数值，则将另一个操作数转换为 一个数值，然后执行数值比较
 * 如果一个操作数是对象，则调用这个对象的valueOf()方法，用得到的结果按照前面的规则执行。如
 * 果对象没有valueOf()方法，则调用toString()方法
 * 如果一个操作数是布尔值，则先将其转换为数值，然后执行比较
 * 比较字符串时，实际比较的是两个字符串中对应位置的每个字符的字符编码值，
 * 由于大写字母的字符编码全部小于小写字母的字符编码，会出现下列现象：
 */
var result = "Brick" < "alphabet";//true
var result = "Brick".toLowerCase() < "alphabet".toLowerCase();//false
var result = "23" < "3";//true
var result = "23" < 3;//false
var result = "a" < 3;//false,因为"a"被转换成了NaN
var result1 = NaN < 3;//false
var result2 = NaN >= 3;//false
/*
 * 相等操作符== !=
 * 如果有一个操作数时布尔值，则在比较相等性之前先将其转换为数值－false转换为0.而true转换为1
 * 如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值
 * 如果一个操作数是对象，另一个操作数不是，则调用对象的valueOf()方法，
 * 用得到的基本类型按照前面的规则进行比较null和undefined是相等的
 * 要比较相等性之前，不能将null和undefined转换成其他任何值
 * 如果有一个操作数是NaN，则相等操作符返回false，不相等操作符返回true，
 * 即使两个操作符都是NaN,相等操作符也返回false
 * 如果两个操作数都是对象，则比较他们是不是同一个对象，如果都指向同一对象返回true，否则false
 */
//全等和不全等
var result1 = ("55" == 55);//true经过转换后
var result2 = ("55" ===55);//false不同数据类型不相等
var result1 = ("55" != 55);//false
var result2 = ("55" !== 55);//true
//条件操作符
variable = boolean_expression ? true_value : false_value;
//如果num1大于num2(关系表达式返回true)，则将num1的值赋给max，否则将num2的值赋给max
var max = (num1 > num2) ? num1 : num2;
//赋值操作符 *=, /=, %=, +=, -=, <<=, >>=, >>>=
//if 语句
if (i > 25) {
	alert("Greater than 25.");
} else if (i < 0) {
	alert("Less than 0.");
} else {
	alert("Between 0 and 25, inclusive.");
}
//do-while 语句(最常用于循环体中的代码至少要被执行一次的情形)
var i = 0;
do {
	i += 2;
} while (i < 10);
alert(i);
//while语句
var i = 0;
while (i < 10) {
	i += 2;
}
//for语句
var count = 10;
for (var i = 0; i < count; i++) {
	alert(i);
}
//for-in 语句是一种精准的迭代语句，可以用来枚举对象的属性
for (var propName in window) {
	document.write(propName);
}
//label语句在代码中添加标签，加标签的语句一般都要与for语句等循环语句配合使用
start: for (var i = 0; i < count; i++) {//定义的start标签可以将来由break或continue语句引用，
	alert(i);
} 
/* break和continue语句用于在循环中精确的控制代码的执行。break语句会立即退出循环，强制继续执行循环后面的语句
 * continue语句虽然也是立即退出循环，但退出循环后会从循环的顶部继续执行
 */
var num = 0;
for (var i = 1; i < 10; i++) {
	if (i % 5 == 0) {
		break;
	}
	num++;
}
alert(num);//不再执行num++,结果是4
var num = 0;
for (var i = 1; i < 10; i++) {
	if (i % 5 == 0) {
		continue;
	}
	num++;
}
alert(num);//当循环到5时，continue执行，并从循环头部开始，到10结束，共循环12346789八次，所以结果为8
var num = 0;
outermost:
for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		if (i == 5 && j == 5) {
			break outermost;
		}
		num++;
	}
}
alert(num);//利用label，结果为55
var num = 0;
outermost:
for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		if ( i == 5 && j == 5) {
			continue outermost;
		}
		num++;
	}
}
alert(num);//95
//switch语句
switch (i) {
	case 25:
	    alert("25");
	    break;
	case 35:
	    alert("35");
	    break;
	case 45:
	    alert("45");
	    break;
	default:
	    alert("Other");
}
switch ("hello world") {
	case "hello" + "world":
	    alert("Greeting was found.");
	    break;
	case "goodbye":
	    alert("Closing was found.");
	    break;
	default:
	    alert("Unexpected message was found.");
}
var num = 25;
switch (true) {
	case num < 0:
	    alert("Less than 0.");
	    break;
    case num >= 0 && num <= 10:
        alert("Between 0 and 10.");
        break;
    case num > 10 && num <= 20:
        alert("Between 10 and 20");
        break;
    default:
        alert("More than 20.");
}
//函数
function sayHi(name, message) {
	alert("Hello" + name + "," + message);
}
sayHi("Nicholas", "How are you feeling today?");
function sum(num1, num2) {
	return num1 + num2;
}
var result = sum(5, 10);
function diff(num1, num2) {
	if (num1 < num2) {
		return num2 - num1;
	} else {
		return num1 -num2;
	}
}
function sayHi() {
	alert("Hello " + arguments[0] + "," + arguments[1]);
	//和alert("Hello" + name + "," + message)相等
}
function howManyArgs() {
	alert(arguments.length);
}
howManyArgs("string", 45);//2
howManyArgs();//0
howManyArgs(12);//1
function doAdd() {
	if(arguments.length == 1) {
		alert(arguments[0] + 10);
	} else if (arguments.length == 2) {
		alert(arguments[0] + arguments[1]);
	}
}
doAdd(10);//20
doAdd(30, 20);//50
//arguments对象与命名参数一起使用
function doAdd(num1, num2) {
	if (arguments.length == 1) {
		alert(num1 + 10);
	} else if (arguments.length == 2) {
		alert(arguments[0] + num2);
	}
}
function setName(obj) {
	obj.name = "Nicholas";
}
var person = new Object();
setName(person);
alert(person.name);//"Nicholas" 
function setName(obj) {
	obj.name = "Nicholas";
	obj = new Object();
	obj.name = "Greg";//当在函数内部充血obj时，这个变量引用的就是一个局部对象，它会在函数执行完毕后立即被销毁
}
var person = new Object();
setName(person);
alert(person.name);//局部对象被销毁，返回"Nicholas"
//检测类型
var s = "Nicholas";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();
alert(typeof s);//string
alert(typeof i);//number
alert(typeof b);//boolean
alert(typeof u);//undefined
alert(typeof n);//object
alert(typeof o);//object
alert(person instanceof Object);//变量person是Object吗
alert(colors instanceof Array);//变量colors是Array吗
alert(pattern instanceof RegExp);//变量pattern是RegExp吗
var color = "blue";
function changeColor() {
	var anotherColor = "red";
	function swapColors() {
		var tempColor = anotherColor;
		anotherColor = color;
		color = tempColor;//这里可以访问color, anotherColor, tempColor
	}
	swapColors();//这里可以访问color和anotherColor, 但不能访问tempColor
}
changeColor();//这里智能访问color
//对象字面量表示法
var person = {
	name : "Nicholas",
	age : 29
};
function displayInfo(args) {
	var output = " ";
    if (typeof args.name == "string") {
    	output += "Name: " + args.name + "\n";
    }
    if (typeof args.age == "number") {
    	output += "age: " + args.age + "\n";
    }
    alert(output);
}
displayInfo({
	name: "Nicholas",
	age: 29
});
displayInfo({
	name: "Greg"
});
//方括号表示法
alert(person["name"]);//"Nicholas"
alert(person.name);//"Nicholas"
var propertyName = "name";
alert(person[propertyName]);//"Nicholas"
person["first name"] = "Nicholas";
//数组
var colors = Array(3);//创建包含三项的数组，new省略
var names = Array("Greg");//创建一个包含一项字符串为"Greg"的数组
//数组字面量表示法
var colors = ["red", "blue", "green"];//创建包含三个字符串的数组
alert(color[0]);//显示第一项
colors[2] = "black";//修改第三项
colors[3] = "brown";//新增第四项
colors.length = 2;//将数组长度改为2
alert(colors[2]);//第三项被删除，返回undefined
colors[colors.length] = "black";//在数组最后添加项
colors[colors.length] = "brown";//在数组最后添加项
colors[99] = "purple";//在数组位置99添加紫色
alert(colors.length);//100
//检测数组
if (Array.isArray(value)) {
	//对数组执行某些操作
}
var person1 = {
	toLocaleString : function() {
		return "Nikolaos";
	},
	toString : function() {
		return "Nicholas";
	}
};
var person2 = {
	toLocaleString : function() {
		return "Grigorios";
	},
	toString : function() {
		return "Greg";
	}
};
var people = [person1, person2];
alert(people);//Nicholas, Greg
alert(people.toString());//Nicholas, Greg
alert(people.toLocaleString());//Nikolaos, Grigorios
var colors = ["red", "green", "blue"];
alert(colors.join(","));//red,green,blue
alert(colors.join("||"));//red||green||blue
/*
 * 栈方法。栈是一种可以限制插入和删除项的数据结构。栈是一种后进先出的数据结构，也就是最新添加的项最早被移除
 * 而栈中项的插入(叫推入)和移除(叫弹出)，只发生在一个位置，即栈的顶部
 * push()方法可以接收任意数量的参数，把他们逐个添加到数组末尾，并返回修改后数组的长度。
 * 而pop()方法则从数组末尾移除最后一项，减少数组的length值，然后返回移除的项
 */
var colors = [];
var count = colors.push("red", "green");//推入两项
alert(count);//2
count = colors.push("black");//推入另一项
alert(count);//3
var item = colors.pop();//取得最后一项
alert(item);//"black"
alert(colors.length);//2
var colors = ["red", "blue"];
colors.push("brown");//添加另一项
colors[3] = "black";//添加一项
alert(colors.length);//4
var item = colors.pop();//取得最后一项
alert(item);//"black"
/*
 * 队列方法。队列数据结构的访问规则是先进先出。队列在列表的末端添加项，从列表的前端移除项。
 * 由于push()是像数组末端添加项的方法，因此要模拟队列只需一个从数组前端取得项的方法。
 * 实现这一操作的数组方法是shift(),它能够移除数组中的第一个项并返回该项，同时将数组长度减一。
 * 结合使用shift()和push()方法，可以像使用队列一样使用数组。
 */
varr colors = [];
car count = colors.push("red", "green");//推入两项
alert(count);//2
count = colors.push("black");
alert(count);//3
var item = colors.shift();//取得第一项
alert(item);//"red"
alert(colors.length);//2
//unshift()能在数组前端添加任意个项并返回新数组的长度
var colors = [];
var count = colors.unshift("red", "green");
alert(count);//2
count = colors. unshift("black");//数组前端推入项
alert(count);//3
var item = colors.pop();
alert(item);//"green"
alert(colors.length);//2
//重排序方法reverse()
var values = [1, 2, 3, 4, 5];
values.reverse();
alert(values);//5, 4, 3, 2, 1
/*
 *sort()方法在默认情况下按升序排列数组项。
 *为了实现排序，sort()方法会调用每个数组项的toString()转型方法， 然后比较得到的字符串
 *即使数组中的每一项都是数值，sort()放啊放比较的夜市字符串。
 */
var values = [0, 1, 5, 10, 15];
values.sort();
alert(values);//0,1,10,15,5(比较每一项的字符串，故5在最后)
//比较函数
function compare(value1, value2) {
	if (value1 < value2) {
		return -1;
	} else if (value1 > value2) {
		return 1;
	} else {
		return 0;
	}
}
var values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values);//0,1,5,10,15
function compare(value1, value2) {
	if (value1 < value2) {
		return 1;
	} else if (value1 > value2) {
		return -1;
	} else {
		return 0;
	}
}
var values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values);//15,10,5,1,0(交换返回值让更大的数值在前，即降序排列)
function compare(value1, value2) {
	return value2 - value1;
}//降序比较函数
/*
 * concat()方法基于当前数组中的所有项创建一个新数组。这个方法会先创建当前数组的一个副本，然后将接收到的参数添加到
 * 这个副本的末尾，最后返回新构建的数组。
 */
var colors = ["red", "green", "blue"];
va colors2 = colors.concat("yellow", ["black", "brown"]);
alert(colors);//red,green,blue
alert(colors2)l//red,green,blue,yellow,black,brown
/*
 * slice()方法能够基于当前数组中的一或多个项创建一个新数组。
 * slice()方法接受一或两个参数，即要返回项的起始和结束位置。
 * 在只有一个参数的情况下，slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。
 * 如果有两个参数，该方法返回气势和结束位置之间的项，但不包括结束位置的项
 * slice()方法不会影响原始数组
 * 如果slice()方法的参数中有一个负数，则用数组长度加上该数来确定相应的位置
 * 例如在一个包含5项的数组上调用slice(-2,-1)与调用slice(3,4)得到的结果相同
 * 如果结束位置小于起始位置，则返回空数组
 */
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);
alert(colors2);//green,blue,yellow,purple
alert(colors3);//green,blue,yellow(注意数组4(purple)并不包括进新数组)
/*
 * splice()方法。只要用途是向数组的中部插入项。
 * 删除：可以删除任意数量的项，只需指定两个参数：要删除的第一项的位置和要删除的项数。
 *      例如splice(0,2)会删除数组中的前两项
 * 插入：可以向指定位置插入任意数量的项，只需提供三个参数：起始位置、0(要删除的项数)和要插入的项
 *      例如，splice(2,0,"red","green")会从当前数组的位置2开始插入字符串"red"和"green"。
 * 替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项。
 *      只需指定三个参数：起始位置、要删除的项数和要插入的任意数量的项，插入的项数不必于删除项数相等。
 *      例如splice(2,1,"red","green")会删除当前数组位置2的项，然后再从位置2开始插入字符串"red"和"green"
 * splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项(如果没有删除任何项，则返回空数组)
 */
var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1);//删除第一项
alert(colors);//green,blue
alert(removed);//red返回的数组中只包含一项
removed = colors.splice(1, 0, "yellow", "orange");//从位置1开始插入两项
alert(colors);//green,yellow,orange,blue
alert(removed);//返回的是一个空数组
removed = colors.splice(1, 1, "red", "purple");//插入两项，删除一项
alert(colors);//green,red,purple,orange,blue
alert(removed);//yellow,返回的数组中只包含一项
/*
 * 位置方法
 * indexOf()和lastIndexOf()都接受两个参数:要查找的项和(可选的)表示查找起点位置的索引。
 * 其中indexOf()方法从数组的开头(位置0)开始向后查找，lastIndexOf()方法则从数组的末尾开始向前查找。
 * 这两个方法都返回要查找的项在数组中的位置，或者在没找到的情况下返回-1。
 * 在比较第一个参数与数组中的每一项时，会使用全等操作符，
 * 也就是说，要求查找的项必须严格相等。
 */
var numbers = [1,2,3,4,5,4,3,2,1];
alert(numbers.indexOf(4));//从前向后查找4的位置，输出3
alert(nubmers.lastIndexOf(4));//从后向前查找4的位置，输出5
alert(numbers.indexOf(4, 4));//从第四个位置开始从前向后查找4，输出5
alert(numbers.lastIndexOf(4, 4));//从第四个位置开始从后向前查找4，输出3
var person = {name: "Nicholas"};
var people = [{name: "Nicholas"}];
var morePeople = [person];
alert(people.indexOf(person));//-1
alert(morePeople.indexOf(person));//0
/*
 * 迭代方法
 * ECMAScript5 为数组定义了5个迭代方法。每个方法都接受两个参数：
 * 要在每一项上运行的函数和(可选的)运行该函数的作用域对象－影响this的值。
 * 传入这些方法中的函数会接受三个参数：数组项的值、该项在数组中的位置和数组对象本身。
 * every():对数组中的每一项运行给定函数，如果该函数对每一项都返回true,则返回true。
 * filter():对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组。
 * forEach():对数组的每一项运行给定函数。此方法没有返回值。
 * map():对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
 * some():对数组中的每一项运行给定函数，如果该函数对任意项返回true,则返回true
 * 以上方法都不会修改数组中包含的值
 */
var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item, index, array) {
	return (item > 2);
});
alert(everyResult);//false
var someResult = numbers.some(function(item, index, array) {
	return (item > 2);
});
alert(someResult);//true
var numbers = [1,2,3,4,5,4,3,2,1];
var filterResult = numbers.filter(function(item, index, array) {
	return (item > 2);
});
alert(filterResult);//[3,4,5,4,3]
var numbers = [1,2,3,4,5,4,3,2,1];
var mapResult = numbers.map(function(item, index, array) {
	return item * 2;
});
alert(mapResult);//[2,4,6,8,10,8,6,4,2]适合创建包含的项与另一个数组一一对应的数组
var numbers = [1,2,3,4,5,4,3,2,1];
numbers.forEach(function(item, index, array) {
	//执行某些操作
});//本质上与使用for循环迭代数组一样
/*
 * 缩小方法
 * reduce()和reduceRight()这两个方法都会迭代数组的所有项，然后构建一个最终返回的值。
 * reduce()方法从数组的第一项开始，逐遍历到最后。
 * reduceRight()方法则从数组的最后一项开始，向前遍历到第一项。
 * 这两个方法都接收两个参数：一个在每一项上调用的函数和(可选的)作为缩小基础的初始值。
 * 传给reduce()和reduceRight()的函数接收4个参数：前一个值、当前值、项的索引和数组对象。
 * 这个函数返回的任何值都会作为第一个参数自动传给下一项。
 * 第一次迭代发生在数组第二项上，因此第一个参数是数组的第一项，第二个参数就是数组第二项。
 */
var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array) {
	return prev + cur;
});
alert(sum);//数组求和，输出15
//Date类型
var now = new Date();
//Date.parse()方法接受一个表示日期的字符串参数，然后尝试根据这个字符串返回相应日期的毫秒数
var someDate = new Date(Date.parse("May 25, 2004"));
var someDate = new Date("May 25, 2004");//等价
/*
 * Date.UTC()方法同样也返回表示日期的毫秒数，但它与Date.parse()在构建值时使用不同信息。
 * Date.UTC()的参数分别是年份、基于0的月份(一月是0，二月是1，以此类推)、月中的哪一天(1到31)、
 * 小时数(0到23)、分钟、秒以及毫秒数。在这些参数中只有前两个参数(年和月)是必需的。
 * 如果没有提供月中的天数，则假设天数为1；如果省略其他参数，则统统假设为0。
 */
var y2k = new Date(Date.UTC(2000,0));//2000年1月1日午夜零时
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));//2005年5月5日下午5点55分55秒
var allFives = new Date(2005, 4, 5, 17, 55, 55);//等价
var start = +new Date();
doSomething();
var stop = +new Date(),
    result = stop - start;
var start = Date.now();
doSomething();
var stop = Date.now(),
    result = stop -start;
/*
 * 日期格式化方法 
 * toDateString()以特定于实现的格式显示星期几、月、日、年；
 * toTimeString()以特定于实现的格式显示时、分、秒和时区；
 * toLocaleDateString()以特定于地区的格式显示星期几、月、日、年；
 * toLocaleTimeString()以特定于实现的格式显示时、分、秒；
 * toUTCString()以特定于实现的格式完整的UTC日期
 */

/*
 * RegExp类型
 * var expression = /pattern / flags;
 * 其中的模式(pattern)部分可以是任何简单或复杂的正则表达式，可以包含字符类、限定符、分组、向前查找以及反响引用。
 * 每个正则表达式都可带有一或多个标志(flags)，用以标明正则表达式的行为。正则表达式的匹配模式支持下列三个标志：
 * g: 表示全局(global)模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止。
 * i: 表示不区分大小写(case-insensitive)模式，即在确定匹配项时忽略模式与字符串的大小写。
 * m: 表示多行(multiline)模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。
 */
var pattern1 = /at/g;//匹配字符串中所有"at"的实例
var pattern2 = /[bc]at/i;//匹配第一个"bat"或"cat"，不区分大小写
var pattern3 = /.at/gi;//匹配所有以"at"结尾的三个字符串的组合，不区分大小写
/*
 * 与其他语言中的正则表达式类似，模式中使用的所有元字符都必须转义。正则表达式中的原字符包括：
 * ( [ { \ ^ $ | ? * + . } ] )
 */
var pattern1 = /[bc]at/i;//匹配第一个"bat"或"cat"，不区分大小写
var pattern2 = /\[bc\]at/i;//匹配第一个"[bc]at",不区分大小写
var pattern3 = /.at/gi;//匹配所有以"at"结尾的三个字符串的组合，不区分大小写
var pattern4 = /\.at/gi;//匹配所有".at",不区分大小写
/*
 * 使用RegExp构造函数，它接受两个参数：一个是要匹配的字符串模式，另一个是可选的标志字符串。
 */
var pattern1 = /[bc]at/i;//匹配第一个"bat"或"cat"，不区分大小写
var pattern2 = new RegExp("[bc]at", "i");//等价
var re = null;
for (var i = 0; i < 10; i++) {
	re = /cat/g;
	re.test("catastrophe");//虽然在循环体中，只查找第一次，第二次从上一次查找后开始，返回false
}
for (var i = 0; i < 10; i++) {
	re = new RegExp("cat", "g");
	re.test("catastrophe");//循环查找，返回true
}
/*
 * RegExp实例属性
 * global: 布尔值，表示是否设置了g标志
 * ignoreCase: 布尔值，表示是否设置了i标志
 * lastIndex: 整数，表示开始搜索下一个匹配项的字符位置，从0算起
 * multiline: 布尔值，表示是否设置了m标志
 * source: 正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回
 */
var pattern1 = /\[bc\]at/i;
alert(pattern1.global);//false
alert(pattern1.ignoreCase);//true
alert(pattern1.multiline);//false
alert(pattern1.lastIndex);//0
alert(pattern1.source);//"\[bc\]at"

var pattern2 = new RegExp("\\[bc\\]at", "i");
alert(pattern2.global);//false
alert(pattern2.ignoreCase);//true
alert(pattern2.multiline);//false
alert(pattern2.lastIndex);//0
alert(pattern2.source);//"\[bc\]at"
/*
 * RegExp实例方法
 * RegExp对象的主要方法exec()，exec()接受一个参数，即要应用模式的字符串，
 * 然后返回包含第一个匹配项信息的数组；或者在没有匹配项的情况下返回null。
 * 返回的数组虽然是Array的实例，但包含两个额外的属性: index和input。
 * 其中，index表示匹配项在字符串中的位置，而input表示应用正则表达式的字符串。
 * 在数组中，第一项是与整个模式匹配的字符串，
 * 其他项是与模式中的捕获组匹配的字符串(如果模式中没有捕获组，则该数组只包含一项)
 */
var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);
alert(matches.index);//0
alert(matches.input);//"mom aand dad and baby"
alert(matches[0]);//"mom and dad and baby"
alert(matches[1]);//" and dad and baby"
alert(matches[2]);//" and baby"

var text = "cat, bat, sat, fat";
var pattern1 = /.at/;//非全局模式每次从头检索
var matches = pattern1.exec(text);
alert(matches.index);//0
alert(matches[0]);//cat
alert(pattern1.lastIndex);//0

matches = pattern1.exec(text);
alert(matches.index);//0
alert(matches[0]);//cat
alert(pattern1.lastIndex);//0

var pattern2 = /.at/g;//全局模式检索后从下一项开始检索

var matches = pattern2.exec(text);
alert(matches.index);//0
alert(matches[0]);//cat
alert(pattern2.lastIndex);//0
matches = pattern2.exec(text);
alert(matches.index);//5
alert(matches[0]);//bat
alert(pattern2.lastIndex);//8
/*
 * 正则表达式第二个方法是test(),它接受一个字符串参数。在模式与该参数匹配的情况下返回true，否则返回false。
 * 在只想知道目标字符串与某个模式是否匹配，但不需要知道其文本内容的情况下，使用这个方法非常方便。
 */
var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;
if (pattern.test(text)) {
	alert("The pattern was matched.");
}
var pattern = new RegExp("\\[bc\\]at", "gi");
alert(pattern.toString());// /\[bc\]at/gi
alert(pattern.toLocaleString());// /\[bc\]at/gi
//作为值的函数
function add10(num) {
	return num + 10;
}

va result1 = callSomeFunction(add10, 10);
alert(result1);//20

function getGreeting(name) {
	return "Hello, " + name;
}

var result2 = callSomeFunction(getGreeting, "Nicholas");
alert(result2);//"Hello, Nicholas"

function createComparisonFunction(propertyName) {
	return function(object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		if (value1 < value2) {
			return -1;
		} else if (value1 > value2) {
			return 1;
		} else {
			return 0;
		}
	}
}
var data = [{
	name: "Zachary",
	age: 28
},
{
	name: "Nicholas",
	age: 29
}];
data.sort(createComparisonFunction("name"));
alert(data[0].name);//Nicholas
data.sort(createComparisonFunction("age"));
alert(data[0].name);//Zachary
/*
 * 函数内部属性
 * arguments的主要用途是保存函数参数，它还有一个名叫callee的属性，
 * 该属性是一个指针，指向拥有这个arguments对象的函数。
 */
function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num - 1);
	}
}
var trueFactorial = factorial;
factorial = function() {
	return 0;
};
alert(trueFactorial(5));//120
alert(factorial(5));//0
/*
 * this引用的事函数据以指向的环境对象
 * 或者也可以说是this值(当在网页的全局作用域中调用函数时，this对象引用的就是window)
 */
window.color = "red";
var o = {color: "blue"};
function sayColor() {
	alert(this.color);//全局对象
}
sayColor();//"red"
o.sayColor = sayColor;//被赋值后变为局部对象
o.sayColor();//"blue"
//caller属性中保存着调用当前函数的函数的引用，如果是在全局作用域中调用当前函数，它的值为null
function outer() {
	inner();
}
function inner() {
	alert(inner.caller);
}
outer();//会显示outer()函数中的源代码

function outer() {
	inner();
}
function inner() {
	alert(arguments.callee.caller);
}
outer();

function sayName(name) {
	alert(name);
}
function sum(num1, num2) {
	return num1 + num2;
}
function sayHi() {
	alert("hi");
}
alert(sayName.length);//1
alert(sum.length);//2
alert(sayHi.length);//0
/*
 * 每个函数都包含两个非继承而来的方法：apply()和call()。
 * 这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内this对象的值。
 * apply()方法接受两个参数：一个是在其中运行函数的作用域，另一个是参数数组。
 * 其中第二个参数可以是array的实例也可以是arguments对象。
 */
function sum(num1, num2) {
	return num1 + num2;
}
function callSum1(num1, num2) {
	return sum.apply(this.arguments);//传入arguments对象
}
function callSum2(num1, num2) {
	return sum.apply(this, [num1, num2]);//传入数组
}
alert(callSum1(10,10));//20
alert(callSum2(10,10));//20
/*
 * call()方法与apply()方法的作用相同，它们的区别仅在于接受参数的方式不同。
 * 对于call()方法而言，第一个参数是this值没有变化，
 * 变化的事其余参数都直接传递给函数。使用call()方法是，传递给函数的参数必须逐个列举出来。
 */
function sum(num1, num2) {
	return num1 + num2;
}
function callSum(num1, num2) {
	return sum.call(this, num1, num2);
}
alert(callSum(10,10));//20
//扩充函数赖以运行的作用域
window.color = "red";
var o = {color:"blue"};
function sayColor() {
	alert(this.color);
}
sayColor();//red
sayColor.call(this);//red
sayColor.call(window);//red
sayColor.call(o);//blue
//用bind()绑定this传给函数的值
window.color = "red";
var o = {color: "blue"};
function sayColor() {
	alert(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor();//blue

var num = 10;
alert(num.toFixed(2));//"10.00"
var num = 10.005;
alert(num.toFixed(2));//"10.001"
var num = 10;
alert(num.toExponential(1));//"1.0e+1"
var num = 99;
alert(num.toPrecision(1));//"1e+2"一位数表示
alert(num.toPrecision(2));//"99"两位数表示
alert(num.toPrecision(3));//"99.0"三位数表示
var numberObject = new Number(10);
var numberValue = 10;
alert(typeof numberObject);//"object"
alert(typeof numberValue);//"number"
alert(numberObject instanceof Number);//true(number对象是number类型的实例)
alert(numberValue instanceof Number);//false(基本类型的数值不是number类型的实例)
//string类型
var stringObject = new String("hello world");
var stringValue = "hello world";
alert(stringValue.length);//"11"
/*
 * 两个用于访问字符串中特定字符的方法：charAt()和charCodeAt()。这两个方法都接受一个参数，即基于0的字符位置。
 * 其中，charAt()方法以单字符字符串的形式返回给定位置的那个字符。
 */
var stringValue = "hello world";
alert(stringValue.charAt(1));//"e"
alert(stringValue.charCodeAt(1));//"101"(字符编码)
//concat()方法泳衣将一或多个字符串拼接起来，返回拼接得到的新字符串。
var stringValue = "hello ";
var result = stringValue.concat("world");
alert(result);//"hello world"
alert(stringValue);//"hello"

var stringValue = "hello ";
var result = stringValue.concat("world", "!");
alert(result);//"hello world!"
alert(stringValue);//"hello"
/*
 * 三个基于子字字符串创建新字符串的方法slice() substr() substring()
 * 这三个方法都会返回被操作字符串的一个子字符串，而且也都接受一或两个参数。
 * 第一个参数指定子字符串的开始位置，第二个参数(在指定的情况下)表示子字符串到哪里结束。
 * 具体来说，slice()和substring()的第二个参数指定的是子字符串最后一个字符后面的位置。
 * 而substr()的第二个参数指定的则是返回字符个数。若果没有给这些方法传递第二个参数，则将字符串的长度作为结束位置。
 */
var stringValue = "hello world";
alert(stringValue.slice(3));//"lo world"
alert(stringValue.substring(3));//"lo world"
alert(stringValue.substr(3));//"lo world"
alert(stringValue.slice(3,7));//"lo w"
alert(stringValue.substring(3,7));//"lo w"(返回3到7之间的四个字符(不包括7))
alert(stringValue.substr(3,7));//"lo worl"(返回七个字符)
/*
 * slice()方法会将传入的负值与字符串的长度相加，
 * substr()方法将负的第一个参数加上字符串的长度，而将负的第二个参数转换为0，
 * substring()方法会把所有负值参数都转换为0
 */
var stringValue = "hello world";
alert(stringValue.slice(-3));//"rld"等价于slice(11-3)
alert(stringValue.substring(-3));//"hello world"转换为substring(0)
alert(stringValue.substr(-3));//"rld"等价于substr(11-3)
alert(stringValue.slice(3, -4));//"lo w"等价于slice(3, 11-4)
//"hel"等价于substring(3, 0)(会将较小的数作为开始位置，即substring(0,3))
alert(stringValue.substring(3,-4));
alert(stringValue.substr(3,-4));//等价于substr(3,0)即返回0个字符，所以返回空""
//字符串位置方法indexOf() lastIndexOf()
var stringValue = "hello world";
alert(stringValue.indexOf("o"));//4(从前向后查找)
alert(stringValue.lastIndexOf("o"));//7(从后向前查找)

var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf("e");
while (pos > 1) {
	positions.push(pos);
	pos = stringValue.indexOf("e", pos + 1);//(pos + 1)代表从下一个位置开始查找
}
alert(positions);//"3,24,32,35,52"
//trim()方法会创建一个字符串的副本，删除前置及后缀的所有空格，然后返回结果
var stringValue = "    hello world    ";
var trimmedStringValue = stringValue.trim();
alert(stringValue);//"    hello world    "
alert(trimmedStringValue);//"hello world"
//字符串大小写转换方法
var stringValue = "hello world";
alert(stringValue.toLocaleUpperCase());//"HELLO WORLD"
alert(stringValue.toUpperCase());//"HELLO WORLD"
alert(stringValue.toLocaleLowerCase());//"hello world"
alert(stringValue.toLowerCase());//"hello world"
/*
 * 字符串的模式匹配方法
 * match()方法本质上与调用RegExp的exec()方法相同。
 * 该方法只接受一个参数，要么是一个正则表达式，要么是一个RegExp对象。
 */
var text = "cat, bat, sat, fat";
var pattern = /.at/;
//与pattern.exec(text)相同
var matches = text.match(pattern);
alert(matches.index);//0
alert(matches[0]);//"cat"
alert(pattern.lastIndex);//0
/*
 * search()方法返回字符串中国年第一个匹配项的索引；如果没有找到匹配项，则返回－1
 * search()方法适中是从字符串开通向后查找模式
 */
var text = "cat, bat, sat, fat";
var pos = text.search(/at/);
alert(pos);//1
/*
 * replace()方法接受两个参数：
 * 第一个参数可以是一个RegExp对象或者一个字符串(这个字符串不会被转换为正则表达式)，
 * 第二个参数可以是一个字符或者一个函数。如果第一个参数是字符串，那么只会替换第一个子字符串。
 * 要想替换所有子字符串，唯一的办法就是提供一个正则表达式，而且要指定全局(g)标志。
 */
var text = "cat, bat, sat, fat";
var result = text.replace("at", "ond");
alert(result);//"cond, bat, sat, fat"
result = text.replace(/at/g, "ond");
alert(result);//"cond, bond, sond, fond"
/*
 * 在只有一个匹配项(即与模式匹配的字符串)的情况下，会向这个函数传递三个参数：
 * 模式的匹配项、模式匹配项在字符串中的位置和原始字符串。
 * 在正则表达式中定义了多个捕获组的情况下，传递给函数的参数依次是
 * 模式的匹配项、第一个捕获组的匹配项、第二个捕获组的匹配项......,
 * 但最后两个参数仍然分别是模式的匹配项在字符串中的位置和原始字符串。
 */
function htmlEscape(text) {
	return text.replace(/[<>"&]/g, function(match, pos, originalText){
		switch (match) {
			case "<":
			    return "&lt;";
			case ">":
			    return "&gt;";
			case "&":
			    return "&amp;";
			case "\"":
			    return "&quot;";
		}
	});
}
//&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;
alert(htmlEscape("<p class=\"greeting\">Hello world!</p>"));
/*
 * split()方法可以给予指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。
 * 分隔符可以是字符串，也可以是一个RegExp对象(这个方法不会将字符串看成正则表达式)。
 * split()方法可以接受可选的第二个参数，用于指定数组的大小，以便确保返回的数组不会超过既定大小。
 */
var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(",");//["red", "blue", "green", yellow]
var colors2 = colorText.split(",", 2);//["red", "blue"]
var colors3 = colorText.split(/[^\,]+/);//["", ",", ",", ",", ""]	
/*
 * localeCompare()方法比较两个字符串，并返回下列值中的一个：
 * 如果字符串在字母表中应该排在字符串参数之前，则返回一个负数(大多数情况下是－1，具体的值要视实现而定)；
 * 如果字符串等于字符串参数则返回0
 * 如果字符串在字母表中应该排在字符串中参数之后，则返回一个正数(大多数情况下是1，具体的值同样要视实现而定)
 */
var stringValue = "yellow";
alert(stringValue.localeCompare("brick"));//1
alert(stringValue.localeCompare("yellow"));//0
alert(stringValue.localeCompare("zoo"));//-1

function determinOrder(value) {
	va result = stringValue.localeCompare(value);
	if (result < 0) {
		alert("The string 'yellow' comes before the string '" + value + "'.");
	} else if (result > 0) {
		alert("The string 'yellow' comes after the string '" + value + "'.");
	} else {
		alert("The string 'yellow' is equal to the string '" + value +"'.");
	}
}
determinOrder("brick");
determinOrder("yellow");
determinOrder("zoo");
//fromCharCode()接受一或多个字符编码，然后将它们转换成一个字符串
alert(String.fromCharCode(104, 101, 108, 108, 111));//"hello"

var max = Math.max(3, 54, 32, 16);
alert(max);//54
var min = Math.min(3, 54, 32, 16);
alert(min);//3
/*
 * 舍入方法
 * Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数
 * Math.floor()执行向下舍入，即它总是将数值向下舍入为最接近的整数
 * Math.round()执行标准舍入，即它总是将数值四舍五入为最接近的整数
 */
alert(Math.ceil(25.9));//26
alert(Math.ceil(25.5));//26
alert(Math.ceil(25.1));//26
alert(Math.round(25.9));//26
alert(Math.round(25.5));//26
alert(Math.round(25.1));//25
alert(Math.floor(25.9));//25
alert(Math.floor(25.5));//25
alert(Math.floor(25.1));//25
//值 = Math.floor(Math.random() * 可能值的总数 ＋ 第一个可能的值)
var num = Math.floor(Math.random() * 10 + 1);

function selectFrom(lowerValue, upperValue) {
	var choices = upperValue - lowerValue + 1;
	return Math.floor(Math.random() * choices + lowerValue);
}
var num = selectFrom(2, 10);
alert(num);//介于2和10之间(包括2和10)的一个数值
var colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
var color = colors[selectFrom(0, colors.length - 1)];
alert(color);//可能是数组中包含的任何一个字符串
//对象字面量表示法
var person = {
	name: "Nicholas",
	age: 29,
	job: "software Engineer",
	sayName: function() {
		alert(this.name);
	}
};
/*
 * 修改属性默认，使用Object.defineProperty()
 * 这个方法接受三个参数：属性所在的对象、属性的名字和一个描述符对象
 * 其中描述符(descriptor)对象的属性必须是：configurable、enumerable、writable和value
 */
var person = {};
Object.defineProperty(person, "name", {
	writable: false,//只读
	value: "Nicholas"
});
alert(person.name);//"Nicholas"
person.name = "Greg";
alert(person.name);//"Nicholas"
var person = {};
Object.defineProperty(person, "name", {
	configurable: false,//不能从对象删除属性
	value: "Nicholas"
});
alert(person.name);//"Nicholas"
delete person.name;
alert(person.name);//"Nicholas"
/*
 * 定义多个属性Object.Properties()。这个方法接受两个对象参数：
 * 第一个对象是要添加和修改其属性的对象，第二个对象的属性与第一个对象中要添加或修改的属性一一对应
 */
var book = {};
Object.defineProperties(book, {
	_year: {
		value: 2004;
	},
	edition: {
		value: 1;
	},
	year: {
		get: function() {
			return this._year;
		},
		set: function(newValue) {
			if (newValue > 2004) {
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	}
});
/*
 * Object.getOwnPropertyDescriptor()方法可以取得给定属性的描述符
 * 这个方法接受两个参数：属性所在的对象和要读取其属性描述的属性名称。
 * 返回值是一个对象，如果是访问器属性，这个对象属性有configurable、enumerable、get和set；
 * 如果是数据属性，这个对象属性有configurable、enumerable、writable和value
 */
var book = {};
Object.defineProperties(book, {
	_year: {
		value: 2004;
	},
	edition: {
		value: 1
	},
	year: {
		get: function(){
			return this._year;
		},
		set:function(newValue) {
			if (newValue > 2004) {
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	}
});
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
alert(descriptor.value);//2004
alert(descriptor.configurable);//false
alert(typeof descriptor.get);//"undefined"
var descriptor = Object.getOwnPropertyDescriptor(book, "year");
alert(descriptor.value);//undefined
alert(descriptor.enumerable);//false
alert(typeof descriptor.get);//"function"
//工厂模式封装函数
function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		alert(this.name);
	};
	return o;
}
var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor"); 
//构造函数模式
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		alert(this.name);
	};
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
/*
 * 原型模式
 * 创建的每个函数都有一个prototype(原型)属性，这个属性是一个指针，指向一个对象，
 * 而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。
 * 使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法，
 * 不必在构造函数中定义对象实例的信息，而是将这些信息直接添加到原型对象中
 */
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
	alert(this.name);
};
var person1 = new Person();
person1.sayName();//"Nicholas"
var person2 = new Person();
person2.sayName();//"Nicholas"
alert(person1.sayName == person2.sayName);//true
alert(Person.prototype.isPrototypeOf(person1));//true
alert(Person.prototype.isPrototypeOf(person2));//true
alert(Object.getPrototypeOf(person1) == Person.prototype);//true
alert(Object.getPrototypeOf(person1).name);//"Nicholas"
person1.name = "Greg";
alert(person1.name);//"Greg"来自实例，屏蔽了原型中的Nicholas
alert(person2.name);//"Nicholas"
delete person1.name;
alert(prson1.name);//"Nicholas"来自原型
//hasOwnProperty()方法可以检测一个属性是存在于实例中还是存在于原型中
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName =function() {
	alert(this.name);
};
var person1 = new Person();
var person2 = new Person();
alert(person1.hasOwnProperty("name"));//false
person1.name = "Greg";
alert(person1.name);//"Greg"来自实例
alert(person1.hasOwnProperty("name"));//true
alert(person2.name);//"Nicholas"来自原型
alert(person2.hasOwnProperty("name"));//false
delete person1.name;
alert(person1.name);//"Nicholas"
alert(person1.hasOwnProperty("name"));//false
/*
 * 原型与in操作符
 * 有两种方法使用in操作符: 单独使用和在for-in循环中使用。
 * 在单独使用时，in操作符会在通过对象能够访问给定属性是返回true，无论该属性存在于实例中还是原型中
 */
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
	alert(this.name);
};
var person1 = new Person();
var person2 = new Person();
alert(person1.hasOwnProperty("name"));//false
alert("name" in person1);//true
person1.name = "Greg";
alert(person1.name);//"Greg"
alert(person1.hasOwnProperty("name"));//true
alert("name" in person1);//true
alert(person2.name);//"Nicholas"
alert(person2.hasOwnProperty("name"));//false
alert("name" in person2);//true
delete person1.name;
alert(person1.name);//"Nicholas"
alert(person1.hasOwnProperty("name"));//false
alert("name" in person1);//true

function hasPrototypeProperty(object, name) {
	return !object.hasOwnProperty(name) && (name in object);
	/*
	 * 由于in操作符只要通过对象能够访问到属性就返回true, hasOwnProperty()只在属性存在于实例中时才返回true,
	 *因此只要in操作符返回true而hasOwnProperty()返回false，就可以确定属性是原型中的属性。
	 */
}
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
	alert(this.name);
};
var person = new Person();
alert(hasPrototypeProperty(person, "name"));//true
person.name = "Greg";
alert(hasPrototypeProperty(person, "name"));//false
/*
 * 在使用for-in循环时，返回的是所有能够通过对象访问的、可枚举的(enumerated)属性.
 * 其中既包括存在于实例中的属性，也包括存在于原型中的属性。
 * 屏蔽了原型中不可枚举属性(即将[[Enumerable]]标记的属性)的实例属性也会在for-in循环中返回。
 * 要取得对象上所有可枚举的实例属性，可以使用Object.keys()方法。
 * 这个方法接受一个对象作为参数，返回一个包含所有可枚举属性的字符串数组。
 */
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
	alert(this.name);
};
var keys = Object.keys(Person.prototype);
alert(keys);//"name,age,job,sayName"
var p1 = new Person();
p1.name = "Rob";
p1.age = 31;
var p1keys = Object.keys(p1);
alert(p1keys);//"name,age"
//得到所有实例属性，无论是否可枚举，都可以使用Object.getOwnPropertyNames()方法
var keys = Object.getOwnPropertyNames(Person,prototype);
alert(keys);//"constructor,name,age,job,sayName"
//对象字面量原型方法
function Person() {}
Person.prototype = {
	name: "Nicholas",
	age: 29,
	job: "Software Engineer",
	sayName: function() {
		alert(this.name);
	}
};

var friend = new Person();
Person.prototype.sayHi = function() {
	alert("hi");
};
friend.sayHi();//"Hi"
function Person() {}
var friend = new Person();
Person.prototype = {
	constructor: Person,
	name: "Nicholas",
	age: 29,
	job: "Software Engineer",
	sayName: function() {
		alert(this.name);
	}
};
friend.sayName();//error

alert(typeof Array.prototype.sort);//"function"
alert(typeof String.prototype.substring);//"function"

String.prototype.startsWith = function(text) {
	return this.indexOf(text) == 0;
};
var msg = "Hello world!";
alert(msg.startsWith("Hello"));//true
/*
 * 组合使用构造函数模式和原型模式
 * 构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。
 * 每个实例都会有自己的一份实例属性的副本，但同时又共享着对方法的引用，最大限度地节省了内存。
 */
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ["Shelby", "Court"];
}
Person.prototype = {
	constructor: Person,
	sayName: function() {
		alert(this.name);
	}
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.friends.push("Van");
alert(person1.friends);//"Shelby,Count,Van"
alert(person2.friends);//"Shelby,Count"
alert(person1.friends === person2.friends);//false
alert(person1.sayName === person2.sayName);//true
//通过检查某个应该存在的方法是否有效，来决定是否需要初始化原型
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	if (typeof this.sayName != "function") {
		person.prototype.sayName = function() {
			alert(this.name)
		};
	}
}
/*
 * 寄生构造函数模式
 * 这种模式的基本思想是创建一个函数，该函数的总用仅仅是封装创建对象的代码，然后再返回新创建的对象
 * 从表面上看，这个函数又很像是典型的构造函数
 */
function Person(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		alert(this.name);
	};
	return o;
}
var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();//"Nicholas"

function SpecialArray() {
	var values = new Array();
	values.push.apply(values, arguments);
	values.toPipedString = function() {
		return this.join("|");
	};
	return values;
}
var colors = new SpecialArray("red", "blue", "green");
alert(colors.toPipedString());//"red|blue|green"
/*
 * 稳妥构造函数模式
 * 所谓稳妥对象，指的是没有公共属性，而且其方法也不引用this对象。
 * 委托对象最适合在一些安全的环境中(这些环境中会禁止使用this和new)，
 * 或者在防止数据被其他应用程序(Mashup程序)改动时使用。
 * 稳妥构造函数遵循与寄生构造函数类似的模式，但有两点不同:
 * 一事新创建的对象的实例方法不引用this;二是不使用new操作符调用构造函数
 */
function Person(name, age, job) {
	//创建要返回的对象
	var o = new Object();
	//可以在这里定义私有变量和函数
	
	//添加方法
	o.sayName = function() {
		alert(name);
	};
	//返回对象
	return o;
}
var friend = Person("Nicholas", 29, "Software Engineer");
friend.sayName();//"Nicholas"
//原型链
function SuperType() {
	this.property = true;
	SuperType.prototype.getSuperValue = function() {
		return this.property;
	};
	function subType() {
		this.subproperty = false;
	}
    //继承了SuperType
    SubType.prototype = new SuperType();
    SubType.prototype.getSubValue = function() {
    	return this.subproperty;
    };
    var instance = new SubType();
    alert(instance.getSuperValue());//true
}
//确定原型和实例的关系
alert(instance instanceof Object);//true
alert(instance instanceof SuperType);//ture
alert(instance instanceof SubType);//true
alert(Object.prototype.isPrototypeOf(instance));//true
alert(SuperType.prototype.isPrototypeOf(instance));//true
alert(SubType.prototype.isPrototypeOf(instance));//true

function SuperType() {
	this.property = true;
}
SuperType.prototype.getSuperValue = function() {
	return this.property;
};
function SubType() {
	this.subproperty = false;
}
//继承了SuperType
SubType.prototype = new SuperType();
//添加新方法
SubType.prototype.getSuperValue = function() {
	return this.subproperty;
};
//重写超类型中的方法
SubType.prototype.getSuperValue = function() {
	return false;
};
var instance = new SubType();
alert(instance.getSuperValue());//false
/*
 * 原型链的问题
 * 包含引用类型值的原型属性会被所有实例共享，在通过原型来实现继承时，原型实际上会变成另一个类型的实例。
 * 在创建子类型的实例时，不能像超类型的构造函数中传递参数。实际上，应该说是
 * 没办法在不影响所有对象实例的情况下，给超类型的构造函数传递参数。
 */
function SuperType() {
	this.colors = ["red", "blue", "green"];
}
function SubType() {}
//继承SuperType
SubType.prototype = new SuperType();
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);//"red,blue,green,black"
var instance2 = new SubType();
alert(instance2.colors);//"red,blue,green,black"
/*
 * 借用构造函数
 * 在子类型构造函数的内部调用超类型构造函数。
 * 函数只不过是在特定环境中执行代码的对象，通过使用apply()和call()方法可以在(将来)新创建的对象上执行构造函数
 */
function SuperType() {
	this.colors = ["red", "blue", "green"];
}
function SubType() {
	//继承了SuperType
	SuperType.call(this);
}
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);//"red,blue,green,black"
var instance2 = new SubType();
alert(instance2.colors);//"red,blue,green"

//借用构造函数可以在子类型构造函数中向超类型构造函数传递参数
function SuperType(name) {
	this.name = name;
}
function SubType() {
	//继承了SuperType，同时还传递了参数
	SuperType.call(this, "Nicholas");
	//实例属性
	this.age = 29;
}
var instance = new SubType();
alert(instance.name);//"Nicholas"
alert(instance.age);//29
/*
 * 组合继承，有时候也叫伪经典继承，指的是将原型链和借用构造函数的技术组合到一块，从而发挥二者之长。
 * 其背后的思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。
 * 既通过在原型上定义方法实现了函数复用，又能够保证每个实例都有它自己的属性。
 */
function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
	alert(this.name);
};
function SubType(name, age) {
	//继承属性
	SuperType.call(this, name);
	this.age = age;
}
//继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function() {
	alert(this.age);
};
var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors);//"red,blue,green,black"
instance1.sayName();//"Nicholas"
instance1.sayAge();//29
var instance2 = new SubType("Greg", 27);
alert(instance2.colors);//"red,blue,green"
instance2.sayName();//"Greg"
instance2.sayAge();//27













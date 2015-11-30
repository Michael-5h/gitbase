//canvas绘制矩形
function draw(id){
	var canvas = document.getElementById(id);//取得canvas对象
    if (canvas == null) 
    	reutrn false;
    var context = canvas.getContext('2d');//取得上下文
    context.fillStyle = "#eeefff";//填充样式
    context.fillRect(0, 0, 400, 300);
    context.fillStyle = "red";
    context.strokeStyle = "blue";//绘制图形边框样式
    context.lineWidth=1;
    context.fillRect(50,50,100,100);//填充矩形context.fillRect(x,y,width,height)
    context.strokeRect(50,50,100,100);//绘制矩形边框
}
//canvas使用路径绘制图形
function draw(id){
	var canvas = document.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	var n = 0;
	for(var i = 0; i < 10; i++){
		context.beginPath();//创建路径
		//context.arc(x, y, radius, startAngle, endAngle, anticlockwise(布尔值：逆时针false顺时针true))
		context.arc(i * 25, i * 25, i * 10, 0, Math.PI * 2, true);//转换弧度var radians = degrees*math.PI/180
		context.closePath();//关闭路径
		context.fillStyle = 'rgba(255, 0, 0, 0.25)';//设定绘制样式，进行图形绘制
		context.fill();
	}
}
//不关闭路径重叠绘制图形
function draw(id){
	var canvas = document.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	var n = 0;
	for (var i = 0; i <10; i++){
		context.arc(i * 25, i * 25, i * 10, 0, Math.PI * 2, true);
		context.fillStyle = 'rgba(255, 0, 0, 0.25)';
		context.fill();
	}
}
//绘制复杂图形
function draw(id){
	var canvas = document.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	var n = 0;
	var dx = 150;
	var dy = 150;
	var s = 100;
	context.beginPath();
	context.fillStyle = 'rgb(100, 255, 100)';
	context.strokeStyle = 'rgb(0, 0, 100)';
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI / 15 * 11;
	for (var i = 0; i < 30; i++){
		var x = Math.sin(i * dig);
		var y = Math.cos(i * dig);
		context.lineTo( dx + x * s, dy + y * s);//指定直线起点与参数中指定直线之间绘制一条直线
	}
	context.closePath();
	context.fill();
	context.stroke();
}
//使用bezierCurveTo绘制贝济埃曲线
function draw(id){
	var canvas = document.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillREct(0, 0, 400, 300);
	var n = 0;
	var dx = 150;
	var dy = 150;
	var s = 100;
	context.beginPath();
	context.globalCompositeOperation = 'and';
	context.fillStyle = 'rgb(100,255,100)';
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI / 15 * 11;
	context.moveTo(dx,dy);
	for(var i = 0; i < 30; i++){
		var x = Math.sin(i * dig);
		var y = Math.cos(i * dig);
	    //context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y)
	    //cp1x，cp1y为第一个控制点横、纵坐标，cp2x,cp2y为第二个控制点横、纵坐标，x,y为终点横纵坐标
	    //或者使用context.quadraticCurveTo(in float cpx,in float cpy,in float x, in float y)绘制二次样条曲线
		context.bezierCurveTo(dx + x * s, dy +y * s - 100, dx + x * s + 100, dy + y * s, dx + x *s, dy + y * s);
	}
	context.closePath();
	context.fill();
	context.stroke();
}
//绘制线性渐变
function draw(id){
	var canvas = document.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
	//context.creatLinearGradient(xStart, yStart, xEnd, yEnd)渐变起始点的横纵坐标以及渐变中点的横纵坐标
	var g1 = context.createLinearGradient(0,0,0,300);
	//context.addColorStop(offset,color)offset设定颜色离开渐变起始点的偏移量，范围为0～1的浮点值，起始为0终点为1，color为绘制时使用的颜色
	g1.addColorStop(0,'rgb(255,255,0)');
	//可追加多个颜色区间
    g1.addColorStop(1,'rgb(0,255,255)');
    context.fillStyle = g1;
    context.fillRect(0, 0, 400, 300);
    var n = 0;
    var g2 = context.createLinearGradient(0,0,300,0);
    g2.addColorStop(0,'rgba(0,0,255,0.5)');
    g2.addColorStop(1,'rgba(255,0,0,0.5)');
    for(var i = 0; i < 10; i++){
    	context.beginPath();
    	context.fillStyle = g2;
    	context.arc(i * 25, i * 25, i * 10, 0, Math.PI*2, true);
    	context.closePath();
    	context.fill();
    }
}
//绘制径向渐变
function draw(id){
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext('2d');
	//context.createRadialGradient(xStart,yStart,radiusStart,xEnd,yEnd,radiusEnd)
	//xStart,yStart为渐变开始圆的圆心横纵坐标，xEnd,yEnd为渐变结束圆的圆心横纵坐标，radiusStart,radiusEnd开始和结束圆半径
	var g1 = context.createRedialGradient(400,0,0,400,0,400);
	g1.addColorStop(0.1,'rgb(255,255,0)');
	g1.addColorStop(0.3,'rgb(255,0,255)');
	g1.addColorStop(1,'rgb(0,255,255)');
	context.fillstyle = g1;
	context.fillRect(0, 0, 400, 300);
	var n = 0;
	var g2 = context.createRadialGradient(250,250,0,250,250,300);
	g2.addColorStop(0.1,'rgba(255,0,0,0.5)');
	g2.addColorStop(0.7,'rgba(255,255,0,0.5)');
	g2.addColorStop(1,'rgba(0,0,255,0.5)');
	for (var i = 0; i < 10; i++) {
		context.beginPath();
		context.fillStyle = g2;
		context.arc(i * 25, i * 25, i * 10, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
	}
}
//坐标变换示例
function draw(id){
	var canvas = document.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	//图形绘制
	context.translate(200,50);//平移context.translate(x,y);
	context.fillStyle = 'rgba(255,0,0,0.25)';
	for (var i = 0; i < 50; i++) {
		context.tanslate(25,25);
		context.scale(0.95,0.95);//放大或缩小context.scale(x,y);
		context.rotate(Math.PI/10);//旋转context.rotate(angle);
		context.fillRect(0,0,100,50);
    }
}
//坐标变换与路径变换结合使用示例
function draw(id){
	var canvas = document.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
    context.fillStyle = "#EEEEFF";
    context.fillRect(0,0,400,300);
    //图形绘制
    context.translate(200,50);
    for (var i = 0; i < 50; i++) {
    	context.translate(25,25);
        context.scale(0.95,0.95);
        context.rotate(Math.PI/10);
        //在循环中创建路径，防止坐标变换后路径失效
        create5Star(context);
        context.fill();
    }
}
function creat5Star(context){
	var n = 0;
	var dx = 100;
	var dy = 0;
	var s = 50;
    //创建路径	
    context.beginPath();
    context.fillStyle = 'rgba(255,0,0,0.5)';
    var x = Math.sin(0);
    var y = Math.cos(0);
    var dig = Math.PI/5 * 4;
    for (var i = 0; i < 5; i++) {
        var x = Math.sin(i * dig);
        var y = Math.cos(i * dig);
        context.lineTo(dx + x * s,dy + y * s);
    }
    context.closePath();
}
//矩阵变换:用transform方法实现变形的示例
function draw(id){
	var canvas = document.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
	//定义颜色
	var colors = ["red","orange","yellow","green","blue","navy","purple"];
	//定义线宽
	context.linewidth = 10;
	context.transform(1, 0, 0, 1, 100, 0);
	//循环绘制圆弧
	for (var i = 0; i < colors.length; i++){
		//定义每次向下移动十个像素的变换矩阵
		//context.tansform(m11,m12,m21,m22,dx,xy) 
		context.transform(1, 0, 0, 1, 0, 10);//表示不对徒刑进行缩放操作，变形操作，仅向下移动十像素
		//设定颜色
		context.strokeStyle = colors[i];
		//绘制圆弧
		context.beginPath():
		context.arc(50, 100, 100, 0, Math.PI, true);
		contxt.stroke();
	}
}
//使用setTransform方法绘制变形图形的示例
function draw(id){
	var canvas = document.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
	//绘制红色长方形
	context.strokeStyle = "red";
	context.strokeRect(30, 10, 60, 20);
	//绘制顺时针旋转45度的变换矩阵
	context.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 0, 0);
	//绘制图形
	context.strokeStyle = "blue";
	context.strokeRect(30, 10, 60, 20);
	//绘制放大2.5倍后的绿色长方形
	//定义放大2.5倍的变换矩阵
	context.setTransform(2.5, 0, 0, 2.5, 0, 0);
	//绘制图形
	context.strokeStyle = "green";
	context.strokeRect(30, 10, 60, 20);
	//将坐标原点向右移动40像素，向下移动80像素的矩阵
	context.setTransform(1, 0, 0, 1, 40, 80);
	//绘制图形
	context.strokeStyle = "gray";
	context.strokeRect(30, 10, 60, 20);
}
//图形组合示例
function draw(id){
	var (canvas == null)
	return false;
	var context = canvas.getContext('2d');
	var oprtns = new Array(
		//只绘制新图形中与原有图形重叠的部分与未被重叠覆盖的原有图形，新图形的其他部分变成透明
		"source-atop",
		//新图形与原有图形作in运算，只显示新图形中与原有图形相重叠的部分，新图形与原有图形的其他部分均变成透明
		"source-in",
		//新图形与原有图形作out运算，只显示新图形中与原有图形不重叠的部分，新图形与原有图形的其他部分均变成透明
		"source-out",
		//source-over为globalCompositeOperation属性的默认值，表示新图形覆盖在原有图形之上
		"source-over",
		//只绘制原有图形中被新图形重叠覆盖的部分与新图形的其他部分，原有图形中其他部分变成透明，不绘制新图形中与原有图形重叠的部分
		"destination-atop",
		//原有图形与新图形作in运算，只显示原有图形中与新图形相重叠的部分，新图形与原有图形的其他部分均变成透明
		"destination-in",
		//原有图形与新图形作out运算，只显示原有图形中与新图形不重叠的部分，新图形与原有图形的其他部分均变成透明
		"destination-out",
		//表示在原有图形之下绘制新图形
		"destination-over",
		//原有图形与新图形均绘制，重叠部分作加色处理
		"lighter",
		//只绘制新图形，原有图形中未与新图形重叠的部分变成透明
		"copy",
		//只绘制新图形中与原有图形不重叠的部分，重叠部分变成透明
		"xor"
	);
	i=8;//自行修改参数i来显示想要查看的组合效果
    //绘制原有图形（蓝色长方形）
    context.fillStyle = "blue";
    context.fillRect(10, 10, 60, 60);
    //设置组合方式，从组合的参数数组中挑选组合方式，此处因为i是8，所以选择oprtns数组中第9(数组从0开始计算)个组合方式lighter
    context.globalCompositeOperation = oprtns[i];
    //设置新图形（红色圆形）
    context.beginPath();
    context.fillStyle = "red";
    context.arc(60, 60, 30, 0, Math.PI*2, false);
    context.fill();
}
//给图形绘制阴影
function draw(id){
	var canvas = document.getElementById(id);
	if (canvas = null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	context.shadowOffsetX = 10;//阴影的横向位移量
	context.shadowOffsetY = 10;//阴影的纵向位移量
	context.shadowColor = 'rgba(100,100,100,0.5)';//阴影的颜色
	context.shadowBlur = 7.5;//阴影的模糊范围
	//图形绘制
	context.translate(0,50);
	for (var i = 0; i < 3; i++) {
		context.translate(50,50);
		create5Star(context);
		context.fill();
	}
}
function create5Star(context){
	var n = 0;
	var dx = 100;
	var dy = 0;
	var s = 50;
	//创建路径
	context.beginPath();
	context.fillStyle = 'rgba(255,0,0,0.5)';
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI / 5 * 4;
	for (var i = 0; i < 5; i++) {
		var x = Math.sin(i * dig);
		var y = Math.cos(i * dig);
		context.lineTo(dx + x * s, dy + y * s);
	}
	context.closePath();
}
//绘制图像示例
function draw(id){
	var canvas = document.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	image = new Image();
	image.src = "tyl.jpg";
	image.onload = function(){//一边加载一边绘制
		drawImg(context,image);
	};
}
function drawImg(context, image){
	for (var i = 0; i < 7; i++)
		//context.drawImage(image,x,y)第一个参数可以是一个img元素，一个video元素，或者一个js中的Image对象，x和y是绘制图像起始坐标
		//context.drawImage(image,x,y,w,h)w和h为绘制图像的宽度和高度
		context.drawImage(image,0 + i * 50, 0 +i * 25, 100, 100);
}
//复制放大局部图像示例
function draw(id){
	var canvas = document.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
    context.fillRect(0, 0, 400, 300);
    image = new Image();
    image.src = "tyl.jpg";
    image.onload = function(){
    	drawImg(context,image);
    };
}
function drawImg(context,image){
	var i=0;
	//首先调用该方法绘制原始图像
	context.drawImage(image,0,0,100,100);
	//绘制将局部区域进行放大后的图像
	/*context.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)将已经绘制好的图像的全部或者局部区域复制到画布的另一个位置
	  sx和sy表示原图像的被复制区域在画布中的起始横纵坐标，sw和sh表示被复制区域的宽度和高度，dx和dy表示复制后的目标图像
	  在画布中的起始横纵坐标，dw和dh表示复制后的目标图像的宽度和高度*/
	context.drawImage(image,23,5,57,80,110,0,100,100);
}
//图像平铺的两种方法
//drawImage方法
function draw(id){
	var image = new Image();
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext('2d');
	image.src = "tyl2.jpg";
	image.onload = function(){
		drawImg(canvas,context,image);
	};
}
function drawImg(canvas,context,image){
	//平铺比例
	var scale=5;
	//缩小后图像宽度
	var n1=image.width/scale;
	//缩小后图像高度
	var n2=image.height/scale;
	//平铺横向个数
	var n3=canvas.width/n1;
	//平铺纵向个数
	var n4=canvas.height/n2;
	for (var i = 0; i < n3; i++)
		for (var j = 0; j < n4; j++)
			context.drawImage(image,i*n1,j*n2,n1,n2);
}
//createPattern方法
function draw(id){
	var image = new image();
	var canvas = context.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
	image.src ="ty13.jpg";
	image.onload = function(){
		//创建填充样式，全方向平铺
		//context.creatPattern(image,type)type参数:
		//no-repeat:不平铺,repeat-x:横向平铺,repeat-y:纵向平铺,repeat:全方向平铺
		var ptrn = context.createPattern(image,'repeat');
		//指定填充样式
		context.fillStyle = ptrn;
		//填充画布
		context.fillRect(0,0,400,300);
	};
}
//图像裁减示例
function draw(id){
	var canvas = documet.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
	var gr = context.createRadialGradient(0,400,300,0);
	gr.addColorStop(0,'rgb(255,255,0');
	gr.addColorStop(1,'rgb(0,255,255');
	context.fillStyle = gr;
	context.fillRect(0,0,400,300);
	image = new image();
	image.onload=function(){
		drawImg(context,image);
	};
	image.src = "tyl.jpg";
}
function drawImg(context,image){
	create5StarClip(context);
	context.drawImage(image,-50,-150,300,300);
}
function create5StarClip(context){
	var n = 0;
	var dx = 100;
	var dy = 0;
	var s = 150;
	//创建裁减路径
	context.beginPath();
	context.translate(100,150);
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI / 5 * 4;
	for (var i = 0; i < 5; i++){
		var x = Math.sin(i * dig);
		var y = Math.cos(i * dig);
		context.lineTo(dx + x * s,dy + y * s);
	}
	context.clip();
}
//获取图像中的所有元素
var image = new Image();
var context = canvas.getContext('2d');
image.onload = function(){
	var imagedata;
	context.drawImage(image,0,0);
	//var imagedata = context.getImageData(sx,sy,sw,sh)获取区域的起始横纵坐标以及宽度和高度
	imagedata = context.getImageData(0,0,image.width,image.height);
}
//将图像进行反显操作
function draw(id){
	var canvas = document.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
	var image = new Image();
	image.src = "tyl.jpg";
	image.onload = function(){
		context.drawImage(image, 0 ,0);
		var imagedata = context.getImageData(0,0,image.width,image.height);
		for (var i = 0, n = imagedata.data.length; i < n; i += 4){
			imagedata.data[i+0] = 255 - imagedata.data[i+0];//red
			imagedata.data[i+1] = 255 - imagedata.data[i+2];//green
			imagedata.data[i+2] = 255 - imagedata.data[i+1];//blue

		}
		/*context.putImageData(imagedata,dx,dy[,dirtyX,dirtyY,dirtyWidth,dirtyHeight]);
		  imagedata为像素组，dx,dy为重绘图像的起始横纵坐标。后面四个为可选参数，给出一个矩形的起点横纵坐标，宽度和高度，
		  绘制在这个矩形范围内的图像*/
		context.putImageData(imagedata,0,0);
	};
}
//绘制文字示例
function draw(id){
	var canvas = document.getElementById(id);
	if (canvas == null)
		return false;
	var context = canvas.getContext('2d');
	context.fillStyle = '#00f';
	context.font = 'italic 30px sans-serif';
	//设置文字垂直对齐方式，属性值可以为top,hanging,middle,alphabetic,ideographic,bottom.默认为alphabetic
	context.textBaseline = 'top';
	//填充字符串
	//void fillText(text, x, y, [maxWidth]);绘制文字，起始点横纵坐标，和可选参数maxWidth表示显示文字时的最大宽度，可防止文字溢出
	context.fillText('示例文字', 0, 0);
	context.font = 'bold 30px sans-serif';
	//轮廊字符串 void strokeText(text, x, y, [maxWidth]);
	context.strokeText('示例文字', 0, 50);
}
//测量文字宽度的示例
function draw(id){
	var canvas = document.getElementById(id);
    if (canvas == null)
    	return false;
    var context = getContext('2d');
    context.font = 'italic 20px sans-serif';
    //定义绘制文字
    var txt = "字符串的宽度为";
    //获取文字宽度
    //metrics=context.measureText(text);返回一个TextMetrics对象，它的width属性表示总文字宽度
    var tm1= context.measureText(txt);
    //绘制文字
    context.fillText(txt,10,30);
    context.filltext(tml.width, tml.width+10,30);
    //改变字体
    context.font = "bold 30px sans-srif";
    //重新获取文字宽度
    var tm2 = context.measureText(txt);
    //重新绘制文字
    context.fillText(txt, 10, 70);
    context.fillText(tm2.width,tm2.width+10, 70);
}
//媒体播放示例
var video;
function init(){
    video = document.getElementById("video1");
    //监听视频播放结束事件
    video.addEventListener("ended", function(){
    	alert("播放结束。");
    }, true);
    //发生错误
    video.addEventListener("error",function(){
    	switch (video.error.code){
    		case MediaError.MEDIA_ERROR_ABORTED:
    		    alert("视频的下载过程中被中止。");
    		    break;
            case MediaError.MEDIA_ERROR_NETWORK:
                alert("网络发生故障，视频的下载过程被中止。");
                break;
            case MediaError.MEDIA_ERROR_DECODE:
                alert("解码失败。");
                break;
            case MediaError.MEDIA_ERROR_SRC_NOT_SUPPORTED:
                alert("不支持播放的视频格式。");
                break;
            default:
                alert("发生未知错误。");
    	}
    }, false);
}
function play(){
	//播放视频
	video.play();
}
function pause(){
	//暂停播放
	video.pause();
}
function playOrPauseVideo(){
	var videoUrl = document.getElementById("videoUrl").value;
	var video = document.getElementById("video");
	//使用事件监听方式捕捉事件
	video.addEventListener("timeupdate",function(){
		var timeDisplay = document.getElementById("time");
		//用秒数来显示当前播放进度
		timeDisplay.innerHTML = Math.floor(video.currentTime) +"/"+Math.floor(video.duration) +"(秒)";
	}, false);
	if (video.paused){
		if (videoUrl != video.src){
			video.src = videoUrl;
			video.load();
		}
		else{
			video.play();
		}
		document.getElementById("playButton").value = "暂停";
	}
	else{
		video.pause();
		document.getElementById("playButton").value = "播放";
	}
}
//Web Storage示例的JavaScript脚本代码
function savaStorage(id){//sessionStorage示例(关闭浏览器数据丢失)
    var target = document.getElementById(id);
    var str = target.value;
    //保存数据
    sessionStorage.setItem("message",str); 
}
function loadStorage(id){
	var target = document.getElementById(id);
	//读取数据
	var msg = sessionStorage.getItem("message");
	target.innerHTML = msg;
}
function saveStorage(id){//localStorage示例(数据仅保存在输入的浏览器中 其他浏览器不存储)
    var target = document.getElementById(id);
    var str = target.value;
    //保存数据
    localStorage.setItem("message",str);
}
function loadStorage(id){
	var target = document.getElementById(id);
	//读取数据
	var msg = localStorage.getItem("message");
	target.innerHTML = msg;
}
//简单Web留言本
function saveStorage(id){
	var data = document.getElementById(id).value;
	var time = new Date().getTime();
	localStorage.setItem(time,data);
	alert("数据已保存。");
	loadStorage('msg');
}
function loadStorage(id){
	var result = '<table border="1">';
	for (var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var date = new Date();
		date.setTime(key);
		var datestr = date.toGMTString();
		result += '<tr><td>' + value + '</td><td>' + datestr + '</td></tr>';
	}
	result += '</table>';
	var target = document.getElementById(id);
	target.innerHTML = result;
}
function clearStorage(){
	localStorage.clear();
	alert("全部数据被清除。");
	loadStorage('msg');
}
//简易数据库
function saveStorage(){
	var data = new Object;
    data.name = document.getElementById('name').value;
    data.email = document.getElementById('email').value;
    data.tel = document.getElementById('tel').value;
    data.memo = document.getElementById('memo').value;
    //将对象转换为JSON格式的文本数据 var str = JSON.stringify(data);
    var str = JSON.stringify(data);
    localStorage.setItem(data.name,str);
    alert("数据已保存。");
}
function findStorage(id){
	var find = document.getElementById('find').value;
	var str = localStorage.getItem(find);
	//将从localStorage中获取的数据转换成JSON对象 var data = JSON.parse(str);
	var data = JSON.parse(str);
	var result = "姓名: " + data.name + '<br>';
	result += "EMAIL: " + data.email + '<br>';
	result += "电话号码: " + data.tel + '<br>';
	var target = document.getElementById(id);
	target.innerHTML = result;
}
//web留言本界面
/*打开数据库:
  var datatable = null;
  var db = openDatabase('MyData', '', 'My Database', 102400);
  第一个参数为数据库名，第二个参数为版本号，第三个参数为数据库描述，第四个参数为数据库大小*/
var datatable = null;
var db = openDatabase('MyData', '', 'My Database', 102400);
function init(){//初始化
	datatable = document.getElementById("datatable");
	showAllData();
}
function removeAllData(){//将table元素下的子元素全部擦除，只留下一个空表格框架，然后填入表头。
	for (var i = datatable.childNodes.length-1; i>=0; i--){
		datatable.removeChild(datatable.childNodes[i]);
	}
	var tr = document.createElement('tr');
	var th1 = document.createElement('th');
	var th2 = document.createElement('th');
    var th3= document.createElement('th');
    th1.innerHTML = '姓名';
    th2.innerHTML = '留言';
    th3.innerHTML = '时间';
    //appendChild向最后一个节点添加
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    datatable.appendChild(tr);
}
function showData(row){
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	td1.innerHTML = row.name;
	vaar td2 = document.createElement('td');
	td2.innerHTML = row.message;
	var td3 = document.createElement('td');
	var t = new Date();
	t.setTime(row.time);
	td3.innerHTML=t.toLocaleDateString()+" "+t.toLocaleTimeString();
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	datatable.appendChild(tr);
}
function showAllData(){
	/*调用transaction方法来执行事务处理，防止在对数据库进行访问及执行有关操作时受到外界的打扰
	  db.transaction(function(tx){
	  	 tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, Log)');
	  });*/
	db.transaction(function(tx){
		/*transaction.executeSql(sqlquery, [], dataHandler, errorHandler);
		  第一个参数为需要执行的SQL语句；第二个参数为SQL语句中所有使用到的参数的数组。在executeSql方法中，
		  将SQL语句中所要使用到的参数先用"?"代替，然后一次将这些参数组成数组放在第二个参数中，例如
		  transaction.executeSql("UPDATE people set age=? where name=?;", [age, name ]);
		  第三个参数为执行SQL语句成功时调用的回调函数 function dataHandler(transaction,results){//执行SQL语句成功时的处理}
		  第一个参数为transaction对象，第二个参数为执行查询操作时返回的查询到的结果数据集对象。第四个参数为执行SQL语句成功时调用
		  的回调函数。function errorHandler(transaction,errmsg){//执行SQL语句出错时的处理}第一个参数为transaction对象，第
		  二个位执行发生错误时的错误信息文字。*/
		tx.executeSql('CREATE TABLE IF NOT EXISTS MsgData(name TEXT, message TEXT, time INTEGER)',[]);//创建数据表
		tx.executeSql('SELECT * FROM MsgData', [], function(tx, rs){
			removeAllData();
			for (var i = 0; i < rs.rows.length; i++) {
				showData(rs.rows.item(i));
			}
		});
	});
}
function addData(name, message, time){//追加数据
	db.transaction(function(tx){//追加数据成功时执行的处理
		tx.executeSql('INSERT INTO MsgData VALUES(?, ?, ?)', [name, message, time],function(tx, rs){
			alert("成功保存数据!");
		},
		function(tx,error){//追加数据失败时执行的处理
			alert(error.source + "::" + error.message);
		});
	});
}
function saveData(){
	var name = document.getElementById('name').value;
	var memo = document.getElementById('memo').value;
	var time = new Date().getTime();
	addData(name,memo,time);
	showAllData();
}
//在多个子线程中进行数据交互示例的主线程代码
onmessage=function(event){
	var worker;
	//创建发送数据的子线程
	worker=new Worker("worker1.js");
	worker.postMessage("");
	worker.onmessage = function(event){
		//接受子线程中数据，本示例中为创建好的随机数组
		var data=event.data;
		//创建接受数据子线程
		worker=new Worker("worker2.js");
		//把从发送数据的子线程中发回的消息传递给接受数据的子线程
		worker.postMessage(data);
		worker.onmessage = function(event){
			//获取接受数据的子线程中传回的数据，本示例中为挑选结果
			var data=event.data;
			//把跳线结果发送回主界面
			postMessage(data);
		}
	}
}
//在多个子线程中进行数据交互示例的发送数据子线程代码
onmessage = function(event){
	var intArray=new Array(100);//随机数组
	for(var i=0; i<100; i++)
		intArray[i]=parseInt(Math.random()*100);
	//发送回随机数组
	postMessage(JSON.stringify(intArray));
	//关闭子线程
	close();
}

































































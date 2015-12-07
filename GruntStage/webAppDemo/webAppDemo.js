var data = new Object;
var dataTable;
var db = openDatabase('MyData', '', 'My Database', 102400);
function init(){
	dataTable = document.getElementById("dataTable");
	showAllData(true);
}
function tbxBrand_onblur(){
	var brand = document.getElementById("tbxBrand").value;
	document.getElementById("tbxBrandName").value="";
	var name;
	db.transaction(function(tx){
		tx.executeSql('SELECT * FROM brand where code=?', [brand],
		function(tx, rs){
			name=rs.rows.item(0).name;
			document.getElementById("tbxBrandName").value=name;
		});
	});
}
function tbxPerson_onblur(){
	var person = document.getElementById("tbxBrandName").value;
	document.getElementById("tbxPersonName").value="";
	var name;
	db.transaction(function(tx){
		tx.executeSql('SELECT * FROM person where code=?', [person],
		function(tx, rs){
			name = rs.rows.item(0).name;
			document.getElementById("tbxPersonName").value = name;
		});
	});
}
function tbxProduct_onblur(){
	var product = document.getElementById("tbxProduct").value;
	document.getElementById("tbxProductName").value="";
	var name;
	db.transaction(function(tx){
		tx.executeSql('SELECT * FROM person where code=?', [product],
		function(tx, rs){
			name = rs.rows.item(0).name;
			document.getElementById("tbxProductName").value = name;
		});
	});
}
function tbxNum_onblur(){
	var num, price;
	if (isNaN(parseInt(document.getElementById("tbxNum").value)))
		document.getElementById("tbxNum").value="0";
	num = document.getElementById("tbxNum").value;
	if (parseInt(document.getElementById("tbxNum").value)!=num)
		document.getElementById("tbxNum").value="0";
	num = parseInt(num);
	price = parseFloat(document.getElementById("tbxNum").value);
	document.getElementById("tbxMoney").value = num * price;
}
function tbxPrice_onblur(){
    var num, price;
    num = parseInt(document.getElementById("tbxNum").value);
    price = document.getElementById("tbxPrice").value;
    if (isNaN(parseFloat(price)))
    	document.getElementById("tbxPrice").value="0";
    price = parseFloat(price);
    document.getElementById("tbxMoney").value=num*price;
}
function btnSearchGoods_onClick(){
	var rc, w;
	rc = window.showModalDialog('SearchGoods.html', '', 'dialogHeight: 720px; dialogWidth: 700px; scroll: no');
	if (rc==null)
		return;
	document.all.item("tbxGoodsCode").value=rc;
}
function btnSearchBrand_onclick(){
	var rc, w;
	rc = window.showModalDialog('SearchBrand.html', '', 'dialogHeight: 720px; dialogWidth: 700px; scroll: no');
	if(rc==null)
		return;
	document.all.item("tbxBrand").value = rc;
	tbxBrand_onblur();
}
function btnSearchPerson_onclick(){
	var rc, w;
	rc = window.showModalDialog('SearchPerson.html', '', 'dialogHeight: 720px; dialogWidth: 700px; scroll: no');
	if (rc==null)
	return;
	document.all.item("tbxPerson").value = rc;
	tbxPerson_onblur(); 
}
function btnSearchProduct_onclick(){
	var rc, w;
	rc = window.showModalDialog('SearchProduct.html', '', 'dialogHeight: 720px; dialogWidth: 700px; scroll: no');
	if(rc==null)
		return;
	document.all.item("tbxProduct").value = rc;
	tvxProduct_onblur();
}
function btnAdd_onclick(){
	data.Code = document.getElementById("tbxCode").value;
	data.Date = document.getElementById("tbxDate").value;
	data.GoodsCode = document.getElementById("tbxGoodsCode").value;
	data.Brand = document.getElementById("tbxBrand").value;
	data.Num = document.getElementById("tbxNum").value;
	data.Price = document.getElementById("tbxPrice").value;
	data.Person = document.getElementById("tbxPerson").value;
	data.Product = document.getElementById("tbxProduct").value;
	db.transaction(function(tx){
		tx.executeSql('CREATE TABLE IF NOT EXISTS orders(code TEXT, data TEXT, goodscode TEXT, 
		brand TEXT, num INTEGER, price FLOAT, person TEXT, product TEXT)', []);
		tx.executeSql('ISERT INTO orders VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
			[data.Code, data.Date, data.GoodsCode, data.Brand, data.Num, data.Price, data.Person, Data.Product],
			function(tx, rs){
				alert("成功保存数据!");
				showAllData(false);
				btnNew_onclick();
			},
			function(tx, error){
				alert(error.source + "::" + error.message);
			});
	});
}
function btnUpdate_onclick(){
	data.Code = document.getElementById("tbxCode").value;
	data.Date = document.getElementById("tbxDate").value;
	data.GoodsCode = document.getElementById("tbxGoodsCode").value;
	data.Brand = document.getElementById("tbxBrand").value;
	data.Num = document.getElementById("tbxNum").value;
	data.Price = document.getElementById("tbxPrice").value;
	data.Person = document.getElementById("tbxPerson").value;
	data.Product = document.getElementById("tbxProduct").value;
	db.transaction(function(tx){
		tx.executeSql('update orders set date=?, goodscode=?, brand=?, num=?, price=?, person=?, product=?, where code=?',
			[date.Date, data.GoodsCode, data.Brand, data.Num, data.Price, data.Person, data.Product, data.Code],
			function(tx, rs){
				alert("成功修复数据!");
				showAllData(false);
			},
			function(tx, error){
				alert(error.source + "::" + error.message);
			});
	});
	btnNew_onclick();
}
function btnDelete_onclick(){
	data.Code = document.getElementById("tbxCode").value;
	db.transaction(function(tx){
		tx.executeSql('delete from orders where code=?', [data.Code], 
			function(tx, rs){
				alert(error.source + "::" + error.message);
			});
	});
	btnNew_onclick();
}
function btnNew_onclick(){
	document.getElementById("form1").reset();
	document.getElementById("tbxCode").removeAttribute("readonly");
	document.getElementById("btnAdd").disabled="";
	document.getElementById("btnUpdate").disabled="disabled";
	document.getElementById("btnDelete").disabled="disabled";
}
function btnClear_onclick(){
	if (document.getElementById("btnAdd").disabled==false)
		document.getElementById("tbxCode").value="";
	document.getElementById("tbxDate").value="";
	document.getElementById("tbxGoodsCode").value="";
	document.getElementById("tbxBrand").value="";
	document.getElementById("tbxNum").value="0";
	document.getElementById("tbxPrice").value="0";
	document.getElementById("tbxMoney").value="0";
	document.getElementById("tbxPerson").value="";
	document.getElementById("tbxPersonName").value="";
	document.getElementById("tbxProduct").value="";
	document.getElementById("tbxProductName").value="";
}
function tr_onclick(tr,i){
	var tempArray1, tempArray2, tempArray3;
	var tc = tr.children;
	tempArray1 = document.getElementById("hiddenBrand").value.split(";");
	tempArray2 = document.getElementById("hiddenPerson").value.split(";");
	tempArray3 = document.getElementById("hiddenProduct").value.split(";");
	document.getElementById("tbxCode").value = tc.item(0).innerHTML;
	document.getElementById("tbxDate").value = tc.item(1).innerHTML;
	document.getElementById("tbxGoodsCode").value = tc.item(2).innerHTML;
	document.getElementById("tbxBrand").value = tempArray1[i];
	document.getElementById("tbxBrandName").value = tc.item(3).innerHTML;
	document.getElementById("tbxNum").value = tc.item(4).innerHTML;
	document.getElementById("tbxPrice").value = tc.item(5).innerHTML;
	document.getElementById("tbxMoney").value = tc.item(6).innerHTML;
	document.getElementById("tbxPerson").value = tempArray2[i];
	document.getElementById("tbxPersonName").value = tc.item(7).innerHTML;
	document.getElementById("tbxProduct").value = tempArray3[i];
	document.getElementById("tbxProductName").value = tc.item(8).innerHTML;
	document.getElementById("tbxCode").setAttribute("readonly", true);
	document.getElementById("btnAdd").disabled = "disabled";
	document.getElementById("btnUpdate").disabled = "";
	document.getElementById("btnDelete").disabled = "";
}
function showAllData(loadPage){
	db.transaction(function(tx){
		tx.executeSql('SELECT orders.*, brand.name as brandName, product.name as productName, person.name as personName
			FROM orders
			inner join brand on orders.brand = brand.code
			inner join person on orders.person = person.code
			inner join product on orders.product = product.code', [],
			function(tx, rs){
                if (!loadPage)
                	removeAllData();
                for(var i = 0; i < rs.rows.length; i++){
                	showData(rs.rows.item(i),i);
                }
			},
			function(tx, error){
				alert(error.source + "::" + error.message);
			});
	});
}
function removeAllData(){
	datatable = document.getElementById("datatable");
	for (var i = 0; i < datatable.childNodes.length-1; i--) {
		datatable.removeChild(datatable.childNodes[i]);
	}
}
function showData(row,i){
	var tr = document.createElement('tr');
	tr.setAttribute("onclick","tr_onclick(this, "+i+")");
	var td1 = document.createElement('td');
	td1.innerHTML = row.code;
	var td2 = document.createElement('td');
	td2.innerHTML = row.date;
	var td3 = document.createElement('td');
	td3.innerHTML = row.goodscode;
	var td4 = document.createElement('td');
	td4.innerHTML = row.brandName;
	var td5 = document.createElement('td');
	td5.innerHTML = row.num;
	var td6 = document.createElement('td');
	td6.innerHTML = row.price;
	var td7 = document.createElement('td');
	td7.innerHTML = parseInt(row.num)*parseFloat(row.price);
	var td8 = document.createElement('td');
	td8.innerHTML = row.personName;
	var td9 = document.createElement('td');
	td9.innerHTML = row.productName;
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tr.appendChild(td6);
	tr.appendChild(td7);
	tr.appendChild(td8);
	tr.appendChild(td9);
	datatable.appendChild(tr);
	if(document.getElementById("hiddenBrand").value!="")
		document.getElementById("hiddenBrand").value+=";";
	document.getElementById("hiddenBrand").value+=row.brand;
	if(document.getElementById("hiddenPerson").value!="")
		document.getElementById("hiddenPerson").value+=";";
	document.getElementById("hiddenBrand").value+=row.person;
	if(document.getElementById("hiddenProduct").value!="")
		document.getElementById("hiddenProduct").value+=";";
	document.getElementById("hiddenProduct").value+=row.product;
}



































/*
	select*delete*update*insert
 * License: http://www.my97.net/dp/license.asp
 *薛超
 */
//声明
var Delete;
var DeleteById;
var InsOrUpd;
var Select;
var Validate;
var Checkbox;
var List;
var Key;
var Value;
var Make;
//获取id
Value=function(value){
	 var id=value.map(function(){
		 return $(this).next().text();
	 }).get().join();
	 return id;
};
Key=function(key){
	var id=key.map(function(){
		return $(this).val();
	}).get().join();
	return id;
};
//部门回显
Select=function(url){
	$.ajax({
		url :url,
		dataType : "json",
		success : function(d) {
			for ( var i = 0; i < d.length; i++) {
				$("select").append(
						"<option value='"+d[i][0]+"' >" + d[i][1]
						+ "</option>");
			}
		},
		error : function() {
			alert("参数有误");
		},
		async:false
	});
};
//添加修改
InsOrUpd=function(url,table,form){	
	$.ajax({
		url :url,
		data :$("form").serialize(),
		dataType : "json",
		type : "post",
		success : function(f) {
			if (f) {
				var i=3;
				var int=setInterval(function(){
					var int=setInterval(function(){
						$.messager.show({
							title : '保存消息',
							msg : '保存成功,'+(i--)+'秒之后将关闭',
							timeout : 1000,
							showType : 'slide'
						});
						if(i==0){
							clearInterval(int);
						}
					}, 1000);
				});
				form.dialog('close');
				table.datagrid('reload');
			} else {
				var int=setInterval(function(){
					$.messager.show({
						title : '保存消息',
						msg : '保存失败,'+(i--)+'秒之后将关闭',
						timeout : 1000,
						showType : 'slide'
					});
					if(i==0){
						clearInterval(int);
					}
				}, 1000);
			}
		},
		error : function() {
			alert("参数有误");
		}
	});
};
DeleteById=function(url,ids,table){
	if (confirm("您确定要删除此数据吗,此操作不可恢复")) {
		$.ajax({
			url :url,
			data :{id:ids},
			dataType : "json",
			type : "post",
			success : function(f) {
				if (f) {
					var int=setInterval(function(){
						$.messager.show({
							title : '删除消息',
							msg : '删除成功,'+(i--)+'秒之后将关闭',
							timeout : 1000,
							showType : 'slide'
						});
						if(i==0){
							clearInterval(int);
						}
					}, 1000);
					table.datagrid('reload');
				} else {
					var int=setInterval(function(){
						$.messager.show({
							title : '删除消息',
							msg : '删除删除,'+(i--)+'秒之后将关闭',
							timeout : 1000,
							showType : 'slide'
						});
						if(i==0){
							clearInterval(int);
						}
					}, 1000);
				}
			},
			error : function() {
				alert("参数有误");
			}
		});
	}
};
Delete=function(url,table){
	if($(":checked").length>0){
		if (confirm("您确定要删除此数据吗,此操作不可恢复")) {
			InsOrUpd(url,table,null);
		};
	}else{
		alert("至少选择一个");
	}
};
//Validate
Validate=function(url1,url2){
	$("form").validate({
		rules : {
			"s.name": {
				required:true,
				remote : {
					url:url1,
					type:"post",
					dataType:"json"
				}
			}
		},
		messages : {
			"s.name" : {
				remote : "此用户已经注册",
				required : "不能为空哦"
			}
		},
		submitHandler : function() {
			InsOrUpd(url2);
		},
		errorPlacement : function(error, element) {
			element.parent().append(error);
		}
	});
};
Checkbox=function(url,name,js,type){
	$.ajax({
		url : url,
		dataType : "json",
		success : function(d) {
			js.empty();
			js.append(js.prop("title")+"<br/>");
			for ( var i = d.length-1; i >=0 ; i--) {
				js.append(
						"<input type='"+type+"' name='"+name+"' value='"+d[i][0]+"' />"
								 + "<span>"+d[i][1]+"</span>"
								 + "<br/>");
			}
		},
		error : function() {
			alert("参数有误");
		},
		async : false
	});
};
List=function(url,id){
	$.ajax({
		url : url,
		data:{
			id:id
		},
		type:"post",
		dataType : "json",
		success : function(list) {
			for(var i in list){
				$(":checkbox[value='"+list[i]+"']").prop("checked",true);
			}
		},
		error : function() {
			alert("参数有误");
		},
		async : false
	});
};
Make=function(url,id,table){
	if (confirm("您确定要执行此操作吗,此操作不可恢复")) {
		$.ajax({
			url :url,
			data :{id:id},
			dataType : "json",
			type : "post",
			success : function(f) {
				if (f) {
					alert("操作成功");
					table.datagrid('reload');
				} else {
					alert("操作失败");
				}
			},
			error : function() {
				alert("参数有误");
			}
		});
	}
};
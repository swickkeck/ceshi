/*
	select*delete*update*insert*？*/
var list;
$(function(){
	 list=function(data,url,table,form){
		 var d = JSON.parse(data);
		 table.datagrid({
			columns : [  d
			          ] ,
			width : 1000,
			height : 310,
			sortable:true,
			url :url,
			fitColumns : true,
			pagination : true,
			nowrap : false,
			idField : 'id',
			selectOnCheck : false,
			singleSelect : true,
			rownumbers:true,
			autoRowHeight : true,
			pageList : [ 5, 6, 7 ],
			//pageSize :3,
			fit : true,
			toolbar : [ {
				iconCls : "icon-add",
				text : "添加",
				handler : function() {
					form.form("clear");
					form.dialog({
						title : "添加",
					});
					form.dialog('open');
				}
			}, {
				iconCls : "icon-clear",
				text : "删除",
				handler : function() {
	
					form.dialog({
						title : "删除",
					});
					form.dialog('close');
					var rows = table.datagrid("getChecked");
					if (rows.length > 0) {
						var id = ids();
						DeleteById("delete.do", id,table);
					} else {
						alert("请至少选择一个");
					}
				}
			}, {
				iconCls : "icon-edit",
				text : "修改",
				handler : function() {
					form.form("clear");
					var row = table.datagrid("getSelected");
					if (row != null) {
						form.dialog({
							title : "修改",
						});
						form.form("load", row);
						form.dialog('open');
					} else {
						alert("请选择对象");
					}
				}
			} ]
		});
	};
	$("[name='datea']").calendar({
		current : new Date()
	});
	
});
/*var data = '[{"checkbox":"true","field" :"id","title" : "ID","width" : "100"},'
	+ '{"field" : "name","title" : "名字","width" : "100"},'
	+ '{"field" : "cname","title" : "种类","width" : "100"},'
	+ '{"field" : "aname","title" : "区域","width" : "200"},'
	+ '{"field" : "dname","title" : "分布范围","width" : "200"},'
	+ '{"field" : "address","title" : "地址","width" : "200"},'
	+ '{"field" : "datea","title" : "统计时间","width" : "200"}]';*/
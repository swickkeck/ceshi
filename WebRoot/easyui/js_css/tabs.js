$(function() {
	$(".easyui-linkbutton").click(function() {
		var f = $("#tab").tabs("exists", $(this).text());
		if (!f) {
			$("#tab").tabs("add", {
				href : $(this).prop("id"),
				title : $(this).text(),
				closable : true,
				tools : [ {
					iconCls : 'icon-mini-refresh',
					handler : function() {
						$("#dg").datagrid("reload");
					}
				} ]
			});
		} else {
			$("#tab").tabs("select", $(this).text());
		}
	});
	$('#suo').searchbox({
		prompt:"请输入...",
		searcher : function(name) {
			table.datagrid("reload",{
				name:name
			});				
		}
	});
});
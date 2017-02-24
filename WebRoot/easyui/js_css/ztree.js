var zNodes;
var Xtree=function(url,id,div){
		$.ajax({
			url : url,
			data:{id:id},
			type:"post",
			dataType : "json",
			success : function(data) {
				zNodes = data;
			},
			error : function() {
				alert();
			},
			async:false
		});
		var setting = {
				check:{
					enable : true,
				},
				data : {
					key : {
						name : "name",
						url : "href"
					},
					simpleData : {
						enable : true,
						idKey:"id",
						pIdKey : "pid"
					}
				},
				callback : {
					onClick : zTreeOnClick
				}
			};
		 function zTreeOnClick(event, treeId, treeNode) {
			var flag = $('#tab').tabs('exists', treeNode.name);
			if (flag) {
				$('#tab').tabs('select', treeNode.name);
			} else {
				if (treeNode.url != null) {
					$('#tab').tabs('add', {
						title : treeNode.name,
						closable : true,
						href : treeNode.url
					});
				}
			}
		}; 
	$.fn.zTree.init(div, setting, zNodes);
		
};
var check = function(id, node) {
	for ( var i in node) {
		if (id == node[i].id) {
			node[i].checked = true;
		}
		check(id, node[i].children);
	}
};
//Xtree("course.do", $("#treeDemo"));
//递归<div id="treeDemo" class="ztree"></div>
/*var tr = $.fn.zTree.getZTreeObj("treeDemo");
var nodes = tr.getNodes();
for ( var i = 1; i < 10; i++) {
	check(i++, nodes);
}
$(":button").click(function() {
	var t = tr.getCheckedNodes(true);
	for ( var i in t) {
		alert(t[i].name);
	}
});*/
/*
 * 案例
 */
/*$("[name='选课']").live("click", function() {
	Xtree("course.do", $("#treeDemo"));
    tr = $.fn.zTree.getZTreeObj("treeDemo");
	var nodes = tr.getNodes();
	$("form").dialog({
		title : "修改",
	});
	$("form").dialog('open');
	$.ajax({
		url : "choose.do",
		data : {
			id : $(this).prop("id")
		},
		dataType : "json",
		type : "post",
		success : function(f) {
			for ( var i = 0; i < f.length; i++) {
				check(f[i].cid, nodes);
			}
		},
		async : false
	});

});
$(":button").click(function() {
	var t = tr.getCheckedNodes(true);
	for ( var i in t) {
		alert(t[i].name);
	}
});*/
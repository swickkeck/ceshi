<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="easyui/demo/demo.css" type="text/css"></link><link
	rel="stylesheet" href="easyui/themes/icon.css" type="text/css"></link><link
	rel="stylesheet" href="easyui/themes/default/easyui.css"
	type="text/css"></link>
<script type="text/javascript" src="easyui/js_css/jquery-1.8.2.min.js"></script><script
	type="text/javascript" src="easyui/js_css/jquery.easyui.min.js"></script><script
	type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
<link rel="stylesheet" href="ztree/css/zTreeStyle/zTreeStyle.css"
	type="text/css"></link>
<script type="text/javascript" src="ztree/js/jquery.ztree.core.js"></script>
<script type="text/javascript" src="easyui/js_css/ztree.js"></script>
</head>
<script type="text/javascript">
	$(function() {
		Xtree("user/power.do", "0", $("#treeDemo"));
	});
</script>
<body class="easyui-layout">
	<div data-options="region:'west',title:'West',split:true"
		style="width:200px;">
		<div class="ztree" id="treeDemo"></div>
	</div>
	<div data-options="region:'center',title:'center title'"
		style="padding:5px;background:#eee;">
		<div id="tab" class="easyui-tabs" data-options="title:'首页',fit:true">
			<div title="Tab1" data-options="title:'首页',fit:true"></div>
		</div>
	</div>
</body>
</html>
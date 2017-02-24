<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<script type="text/javascript" src="easyui/js_css/tool.js"></script>
	<script type="text/javascript" src="easyui/js_css/query.js"></script>
	<script type="text/javascript">
		$(function() {
			var data = '[{"field" :"rid","title" : "角色编号","width" : "100"},'
					+ '{"field" : "rname","title" : "角色名称","width" : "100"},'
					+ '{"field" : "pname","title" : "所有权限","width" : "200"}]';
			list(data, "role/list.do", $("#qx"), $("#role"));
			$("[value='修改']").click(function() {
				InsOrUpd("role/insertOrUpdate.do",$("#qx"), $("#role"));
			});
			$('#ctree').combotree({
				url : 'role/power.do?id=0',
				required : true,
				multiple : true
			});
		});
	</script>
	<table id="qx"></table>
	<form style="display: none" id="role">
		<input name="rid" style="display: none" /><br /> 职务:<input
			name="rname" style="width: 150px;" class="easyui-textbox" /> <br />
		<br /> 职务权限:<input id="ctree" class="easyui-combotree" name="pid"
			style="width: 150px;" /> <br /> <input class="easyui-linkbutton"
			type="button" value="修改" /> <input class="easyui-linkbutton"
			type="reset" value="清空" />
	</form>
</body>
</html>
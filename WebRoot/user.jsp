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
			var data = '[{"field" :"id","title" : "用户编号","width" : "100"},'
					+ '{"field" : "name","title" : "用户名称","width" : "100"},'
					+ '{"field" : "password","title" : "用户密码","width" : "100"},'
					+ '{"field" : "rname","title" : "真实名称","width" : "200"},'
					+ '{"field" : "role_name","title" : "所有职务","width" : "200"}]';
			list(data, "user/list.do", $("#dg"), $("#user"));
			//职务
			$('#cc').combobox({
				url : 'user/role.do',
				multiple : true,
				valueField : 'rid',
				textField : 'rname'
			});
			$("[value='保存']").click(function() {
				InsOrUpd("user/insertOrUpdate.do", $("#dg"), $("#user"));
			});
		});
	</script>
	<table id="dg"></table>
	<form style="display: none" id="user">
		<input name="id" style="display: none" /><br /> 姓名:<input
			name="name" style="width: 150px;" class="easyui-textbox" /> <br />
		密码:<input name="password" style="width: 150px;" class="easyui-textbox" />
		<br /> 真实:<input name="rname" style="width: 150px;"
			class="easyui-textbox" /> <br /> 职务:<input id="cc" name="rid"
			style="width: 150px;" class="easyui-textbox" /> <br /> <input
			class="easyui-linkbutton" type="button" value="保存" /> <input
			class="easyui-linkbutton" type="reset" value="清空" />
	</form>
</body>
</html>
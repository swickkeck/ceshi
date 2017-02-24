var Show;
var Box;
var Span;
$(function() {
			 $("#up").click(function() {
				$("#upload").ajaxSubmit({
					url : "upload.do",
					type : "post",
					dataType : "json",
					success : function(data) {
						alert(data);
					}
				});
			}); 
			var flag = true;
			$("#up").click(function() {
				//$.messager.progress();	// 显示进度条
				$('#upload').form('submit', {
					onSubmit : function() {
						/* var isValid = $(this).form('validate');
						if (!isValid) {
							$.messager.progress('close'); // 如果表单是无效的则隐藏进度条
						}
						return isValid; // 返回false终止表单提交 */
						if (!flag) {
							alert("不能重复提交啊");
						}
						return flag;
					},
					success : function(f) {
						if (f) {
							flag = false;
						}
						$.messager.progress('close'); // 如果提交成功则隐藏进度条
					}
				});
			});
		 Box=function(box,sp,name){
				box.combobox({
					required : true,
					multiple : true,
					editable:false
				});
				var v = "";
				var s = "";
				sp.appendTo(box.combobox('panel'));
				sp.find("[name='"+name+"']").click(
						function() {
							Show(box,name);
						});
		};
		Show=function(box,name){
			box.combobox('setValue',"").combobox('setText', "");
			v = Key($(":checked[name='"+name+"']"));
			s = Value($(":checked[name='"+name+"']"));
			box.combobox('setValue', v).combobox('setText', s);
					//.combobox('hidePanel');
		};
});
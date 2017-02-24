package com.user.controller;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.user.entity.Role;
import com.user.service.RoleService;
import com.user.utils.EUTreeNode;
import com.user.utils.PageEasyUI;

@Controller
@RequestMapping("role")
public class RoleController {
	@Autowired
	private RoleService us;
	@RequestMapping("list")
	@ResponseBody
	public Map map(){
		return PageEasyUI.getEasyMap(us.list(), 0);
	}
	@RequestMapping("insertOrUpdate")
	@ResponseBody
	public boolean insertOrUpdate(Role r,String[] pid){
		return us.insertOrUpdate(r,pid);
	}
	@RequestMapping("power")
	@ResponseBody
	public List<EUTreeNode> power(@RequestParam(value="id",defaultValue="0") String id){
		return us.power(id);
	}
}

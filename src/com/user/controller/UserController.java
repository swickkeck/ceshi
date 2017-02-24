package com.user.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.user.entity.Power;
import com.user.entity.Role;
import com.user.entity.User;
import com.user.service.UserService;
import com.user.utils.PageEasyUI;

@Controller
@RequestMapping("user")
public class UserController {
	@Autowired
	private UserService us;
	@RequestMapping("list")
	@ResponseBody
	public Map map(){
		return PageEasyUI.getEasyMap(us.list(), 0);
	}
	@RequestMapping("power")
	@ResponseBody
	public List<Power> power(@RequestParam("id") String id){
		return us.power();
	}
	@RequestMapping("role")
	@ResponseBody
	public List<Role> role(){
		return us.role();
	}
	@RequestMapping("insertOrUpdate")
	@ResponseBody
	public boolean insertOrUpdate(User u,String[] rid){
		System.out.println(Arrays.toString(rid));
		return us.insertOrUpdate(u,rid);
	}
}

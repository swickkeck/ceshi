package com.user.entity;

import java.util.List;

import net.sf.json.JSONArray;

public class User {
	private String id;
	private String name;
	private String rname;
	private String password;
	private String role_name="";
	private List<Role> roles;
	private JSONArray rid;
	
	public JSONArray getRid() {
		rid = new JSONArray();
		if(roles!=null&&roles.size()>0){
			for (Role r : roles) {
				rid.add(r.getRid());
			}
		}
		System.out.println(rid.toString());
		return rid;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRname() {
		return rname;
	}
	public void setRname(String rname) {
		this.rname = rname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole_name() {
		if(roles!=null&&roles.size()>0){
			for (Role r : roles) {
				role_name+=","+r.getRname();
			}
		}
		return role_name.length()>0?role_name.substring(1):role_name;
	}
	public List<Role> getRoles() {
		return roles;
	}
	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}
	
}

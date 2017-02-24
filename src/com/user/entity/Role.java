package com.user.entity;

import java.util.List;

import net.sf.json.JSONArray;

public class Role {
	private String rid;
	private String rname;
	private String pname="";
	private List<Power> powers;
	private JSONArray pid;
	
	public JSONArray getPid() {
		pid =new JSONArray();
		if(powers!=null&&powers.size()>0){
			for (Power p : powers) {
				pid.add(p.getId());
			}
		}
		return pid;
	}
	public String getRid() {
		return rid;
	}
	public void setRid(String rid) {
		this.rid = rid;
	}
	public String getRname() {
		return rname;
	}
	public void setRname(String rname) {
		this.rname = rname;
	}
	public String getPname() {
		if (powers!=null&&powers.size()>0) {
			for (Power p : powers) {
				pname+=","+p.getName();
			}
		}
		return  pname.length()>0?pname.substring(1):pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public List<Power> getPowers() {
		return powers;
	}
	public void setPowers(List<Power> powers) {
		this.powers = powers;
	}
	
	
	
}

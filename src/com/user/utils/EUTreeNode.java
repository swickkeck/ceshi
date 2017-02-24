package com.user.utils;

import java.util.List;


public class EUTreeNode {
	private String text;
	private String id;
	private String state;
	private List<EUTreeNode> children;
	
	public List<EUTreeNode> getChildren() {
		return children;
	}
	public void setChildren(List<EUTreeNode> children) {
		this.children = children;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	
}

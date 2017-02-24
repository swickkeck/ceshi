package com.user.utils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PageEasyUI {
	public static Map getMap(int page,int rows,String name) {
		Map map=new HashMap();
		map.put("rows",rows);
		map.put("page", (page-1)*rows);
		map.put("name",name);
		return map;
	}
	public static Map getEasyMap(List list,int listCount) {
		Map map=new HashMap();
		map.put("rows",list);
		map.put("total", listCount);
		return map;
	}
}

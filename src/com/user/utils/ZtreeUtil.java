package com.user.utils;

import java.lang.reflect.Method;
import java.util.List;

public class ZtreeUtil {
	public static List getZtreeList(List list, String[] ids) throws Exception {
		for (int i = 0; i < ids.length; i++) {
			for (Object obj : list) {
				Class<? extends Object> clazz = obj.getClass();
				Method rmethod = clazz.getDeclaredMethod("getId");
				Object value = rmethod.invoke(obj);
				if (value.toString().equals(ids[i])) {
					System.out.println(value);
					Method method = clazz.getDeclaredMethod("setChecked",
							boolean.class);
					method.invoke(obj, true);
				}
			}
		}
		return list;
	}
}

package com.user.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.dao.UserDao;
import com.user.entity.Role;
import com.user.entity.User;

@Service
public class UserService {
	@Autowired
	private UserDao ud;

	public List list() {
		return ud.list();
	}

	public List power() {
		List power = ud.power();
		return power;
	}

	public List<Role> role() {
		return ud.role();
	}

	public boolean insertOrUpdate(User u, String[] rid) {
		if (u.getId() != null && !u.getId().equals("")) {
			return update(u, rid);
		} else {
			return insert(u, rid);
		}
	}

	private boolean insert(User u, String[] rid) {
		int i = ud.insert(u);
		if (i > 0) {
			Map map = new HashMap();
			map.put("id", u.getId());
			List list=new ArrayList();
			for (String r : rid) {
				list.add(r);
			}
			map.put("list", list);
			return ud.insertRole(map) > 0;
		}
		return false;
	}

	private boolean update(User u, String[] rid) {
		// É¾³ý
		int i = ud.delete(u.getId());
		// ÐÞ¸Ä
		i = ud.update(u);
		// Ôö¼Ó
		Map map = new HashMap();
		map.put("id", u.getId());
		map.put("list", rid);
		return ud.insertRole(map) > 0;
	}

}

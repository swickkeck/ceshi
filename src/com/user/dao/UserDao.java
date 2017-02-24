package com.user.dao;

import java.util.List;
import java.util.Map;

import com.user.entity.Role;
import com.user.entity.User;

public interface UserDao {

	List list();

	List power();

	List<Role> role();

	int insert(User u);

	int insertRole(Map map);

	int delete(String id);

	int update(User u);

}

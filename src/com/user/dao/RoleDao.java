package com.user.dao;

import java.util.List;
import java.util.Map;

import com.user.entity.Power;
import com.user.entity.Role;

public interface RoleDao {

	List list();

	int insert(Role r);

	int insertRole(Map map);

	int delete(String id);

	int update(Role r);

	List<Power> power(String id);

}

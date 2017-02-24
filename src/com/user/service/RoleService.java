package com.user.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.user.dao.RoleDao;
import com.user.entity.Power;
import com.user.entity.Role;
import com.user.utils.EUTreeNode;
@Service
public class RoleService {
	@Autowired
	private RoleDao ud;

	public List list() {
		return ud.list();
	}

	public boolean insertOrUpdate(Role r, String[] pid) {
		if (r.getRid() != null && !r.getRid().equals("")) {
			return update(r, pid);
		} else {
			return insert(r, pid);
		}
	}

	private boolean insert(Role r, String[] pid) {
		int i = ud.insert(r);
		if (i > 0) {
			Map map = new HashMap();
			map.put("rid", r.getRid());
			map.put("list", pid);
			return ud.insertRole(map) > 0;
		}
		return false;
	}

	private boolean update(Role r, String[] pid) {
		// 删除
		int i = ud.delete(r.getRid());
		// 修改
		i = ud.update(r);
		// 增加
		Map map = new HashMap();
		map.put("rid", r.getRid());
		map.put("list", pid);
		return ud.insertRole(map) > 0;
	}
	public List<EUTreeNode> power(String id) {
		return getChildren(id);
	}
	//递归生成tree
	private List<EUTreeNode> getChildren(String id) {
		List<Power> list = ud.power(id);
		List<EUTreeNode> resultList = new ArrayList();
		for (Power p : list) {
			EUTreeNode node = new EUTreeNode();
			node.setId(p.getId());
			node.setText(p.getName());
			node.setChildren(getChildren(p.getId()));
			resultList.add(node);
		}
		return resultList;
	}

}

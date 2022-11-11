---
sidebar_position: 3
---

# 项目访问控制

## 人员管理

![project user management](/img/project/project-user-management.png)

### 发送邀请

你可以通过创建邀请方式建立用户项目关联

1. 点击 **项目** 菜单进入项目管理页
2. 点击项目树中你需要进行管理的项目
3. 点击右侧顶部 **ACCESS CONTROL** 标签，切换到账户/角色面板
4. 点击 **INVITE** 按钮
5. 填写受邀人 **邮件地址** ，并选择 **用户角色**

    ![project user invite form](/img/project/project-user-invite-form.png)

    > *如果角色下拉选择框中没有角色信息，需要先手动创建角色具体参照 **角色管理/创建角色**

6. 点击 **CONFIRM** 按钮

操作成功后，Raedius会向该邮箱地址发送一份邀请邮件并附带接受邀请的链接地址，受邀人通过点击邮件中的邀请链接建立与项目关联，如果该受邀人尚未登录/注册 Raeius, 在完成注册后会自动建立关联，在登录后需要手动确认。

### 创建用户

手动填写用户信息，创建用户项目关联。

1. 点击 **项目** 菜单进入项目管理页
2. 点击项目树中你需要进行管理的项目
3. 点击右侧顶部 **ACCESS CONTROL** 标签，切换到账户/角色面板
4. 点击 **CREATE** 按钮
5. 在弹框中填写用户信息

    ![project user create form](/img/project/project-user-create-form.png)

    > *如果角色下拉选择框中没有角色信息，需要先手动创建角色具体参照 **角色管理/创建角色**
    >
    > *如果你不希望该用户登录到raedius，你可以通过取消 **ALL SIGN IN** 复选框，禁用该用户登录功能

6. 点击 **CONFIRM** 按钮

### 移除用户

移除用户，此操作仅删除账户与项目管理并不会对账户进行删除操作。

![project user remove confirm](/img/project/project-user-remove.png)

1. 点击 **项目** 菜单进入项目管理页
2. 点击项目树中你需要进行管理的项目
3. 点击右侧顶部 **ACCESS CONTROL** 标签，切换到账户/角色面板
4. 点击 **DELETE** 按钮
5. 点击确认弹框 **CONFIRM** 按钮

    ![project user remove confirm](/img/project/project-user-remove-confirm.png)

## 角色管理

Raedius使用基于RBAC的角色权限管理模型，你可以在这里定义角色，并授予角色相应的资源访问权限。

![project role management](/img/project/project-role-management.png)

### 创建角色

1. 点击 **项目** 菜单进入项目管理页
2. 点击项目树中你需要进行管理的项目
3. 点击右侧顶部 **ACCESS CONTROL** 标签，切换到账户/角色面板
4. 点击 **ROLE** 切换到角色管理面板
5. 点击 **ROLE** 按钮
6. 在弹出框表单内填写角色名称以及角色描述信息

    ![project role create](/img/project/project-role-form.png)

7. 点击 **CONFIRM** 创建角色

### 角色编辑

1. 点击 **项目** 菜单进入项目管理页
2. 点击项目树中你需要进行管理的项目
3. 点击右侧顶部 **ACCESS CONTROL** 标签，切换到账户/角色面板
4. 点击 **ROLE** 切换到角色管理面板
5. 点击 **EDIT** 按钮
6. 在弹出框表单内修改角色基础信息

    ![project role edit](/img/project/project-role-edit-form.png)

7. 点击 **CONFIRM** 保存

### 角色授权

1. 点击 **项目** 菜单进入项目管理页
2. 点击项目树中你需要进行管理的项目
3. 点击右侧顶部 **ACCESS CONTROL** 标签，切换到账户/角色面板
4. 点击 **ROLE** 切换到角色管理面板
5. 点击 **PERMISSION** 按钮
6. 在弹出抽屉勾选角色权限

    ![project role permission](/img/project/project-role-permission.png)

7. 点击 **SAVE** 保存角色权限

### 删除角色

1. 点击 **项目** 菜单进入项目管理页
2. 点击项目树中你需要进行管理的项目
3. 点击右侧顶部 **ACCESS CONTROL** 标签，切换到账户/角色面板
4. 点击 **ROLE** 切换到角色管理面板
5. 点击 **DELETE** 按钮
6. 在弹出框表单内修改角色基础信息

    ![project role delete](/img/project/project-role-remove-confirm.png)

7. 点击 **CONFIRM** 删除角色
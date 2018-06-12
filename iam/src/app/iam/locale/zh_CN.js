/*eslint-disable*/
const docServer = 'http://choerodon.io/zh/docs';
const pageDetail = {

  // menusetting
  // home
  "global.menusetting.title": "平台\"{name}\"的菜单配置",
  "global.menusetting.description" : "菜单是左侧导航栏。菜单配置包括您对菜单名称、图标、层级关系、顺序的配置。菜单的类型分目录和菜单两种。",
  "global.menusetting.link": `${docServer}/user-guide/system-configuration/platform/menu_configuration/`,
  // create
  "global.menusetting.create.title": "在平台\"{name}\"中创建目录",
  "global.menusetting.create.description": "请在下面输入目录名称、编码，选择目录图标创建目录。您创建的目录为自设目录，自设目录可以修改、删除。而平台内置的目录为预置目录，您不能创建、修改、删除预置目录。",
  "global.menusetting.create.link": `${docServer}/user-guide/system-configuration/platform/menu_configuration/`,
  // modify
  "global.menusetting.modify.title": "对目录\"{name}\"进行修改",
  "global.menusetting.modify.description": "您可以在此修改目录名称、图标。",
  "global.menusetting.modify.link": `${docServer}/user-guide/system-configuration/platform/menu_configuration/`,
  // detail
  "global.menusetting.detail.title": "查看菜单\"{name}\"详情",
  "global.menusetting.detail.description": "您可以在此查看菜单的名称、编码、层级、所属预置目录、权限。菜单是平台内置的，您不能创建、修改、删除菜单。",
  "global.menusetting.detail.link": `${docServer}/user-guide/system-configuration/platform/menu_configuration/`,

};
const zh_CN = {
  "user.preferences": "用户首选项",
  "signOut": "安全退出",
  "choose": "请选择",
  "new":"新增",
  "confirm.delete.tip":"当你点击删除后，该条数据将被永久删除，不可恢复!",
  "yes":"是",
  "no":"否",
  "save":"保存",
  "close":"删除",
  "type":"类型",
  "member":"成员",
  "role":"角色",
  "stop":"停止",
  "restart":"重启",
  "upgrade":"升级",

  //form
  "required":"该字段是必输的",
  "form.create":"创建",
  "form.update":"修改",
  "form.cancel":"取消",
  "form.return":"返回",
  "form.edit.fail":"更新失败",
  "form.edit.success":"更新成功",

  //client
  "client.id":"客户端ID",
  "client.name":"客户端名称",
  "client.detail":"客户端详情",
  "client.authorizedNumber":"授权类型数",
  "client.authorizedGrantTypes":"授权类型",
  "client.authorizedGrantTypes.select":"请选择授权类型",
  "client.title":"客户端管理",
  "client.create":"创建客户端",
  "client.edit":"编辑客户端",
  "client.secret":"密钥",
  "client.accessTokenValidity":"访问授权超时",
  "client.refreshTokenValidity":"授权超时",
  "client.webServerRedirectUri":"重定向地址",
  "client.additionalInformation":"附加信息",
  "client.tokenType": '授权类型',

  //passwordPolicy
  "policy.title":"密码策略",
  "policy.name":"名称",
  "policy.lock":"开启密码输错锁定",
  "policy.passwordCheck":"开启密码检查",
  "policy.lockedTime":"密码输错锁定时间（秒）",
  "policy.maxErrorTimes":"最大输错次数",
  "policy.create":"创建",
  "policy.update":"更新密码策略",
  "policy.deviceOffline":"下线其他设备",
  "policy.passwordMinLength":"最小密码长度",
  "policy.uppercaseCount":"最少大写字母数",
  "policy.specialCharCount":"最少特殊字符数",
  "policy.maxRecentPassword":"最大近期密码数",
  "policy.passwordExpire":"密码失效时长（秒）",
  "policy.maxCheckNumber":"输错次数",
  "policy.lowercaseCount": "最少小写字母数",
  "policy.regular": "密码规则",


  //user
  "user.password.update":"修改密码",
  "user.password.origin":"原始密码",
  "user.password.origin.required":"原始密码是必须的",
  "user.password.new":"新密码",
  "user.password.new.required":"新密码是必须的",
  "user.password.confirm":"确认密码",
  "user.password.required":"密码是必须的",

  // ldap
  "ldap.name":"名称",
  "ldap.serverAddress":"服务器地址",
  "ldap.encryption":"加密方式",
  "ldap.baseDn":"基础 DN",
  "ldap.ldapAttributeName":"LDAP 属性名",
  "ldap.status":"状态",
  "ldap.enable":"启用",
  "ldap.unenable":"未启用",
  "ldap.description":"描述",
  "ldap.operations":"操作",
  "ldap.edit":"编辑",
  "ldap.LDAP":"LDAP 管理",
  "ldap.createLDAP":"创建 LDAP",
  "ldap.refresh":"刷新",
  "ldap.nameExist":"该名称已经存在了",
  "ldap.create":"创建",
  "ldap.cancel":"取消",
  "ldap.save":"保存",
  "ldap.updateLDAP":"更新 LDAP",
  "ldap.fieldRequired":"该字段是必输的",

  //organization
  "organization.id":"组织ID",
  "organization.title":"组织管理",
  "organization.name":"组织名字",
  "organization.idTip":"组织ID不能为空！",
  "organization.nameTip":"组织名字不能为空",
  "organization.editWarn":"组织名字和之前相同",

  //service
  "service.id":"ID",
  "service.code":"服务编码",
  "service.name":"服务名称",
  "service.describe":"描述",
  "service.organization":"服务管理",
  "service.refresh":"刷新",

  // token
  "token.clientName":"设备名称",
  "token.loginCounter":"创建时间",
  "token.lastLogin":"上次登录",
  "token.token":"授权管理",
  "token.name":"名称",
  "token.description":"描述",
  "token.timeout":"过期时间",
  "token.value":"值",
  "token.create":"创建 Token",
  //role
  "role.title":"角色管理",
  "role.name":"名称",
  "role.level":"角色级别",
  "role.description":"描述",
  "role.action":"操作",
  "role.edit":"编辑",
  "role.updateRole":"编辑角色",
  "role.delete":"删除",
  "role.organization":"组织",
  "role.project":"项目",
  "role.resource":"资源",
  "role.warn":"角色级别是必须的",
  "role.serviceName":"服务名称",
  "role.createSuccess": "创建成功",
  "role.createFail": "创建失败",
  "role.createRole": "创建角色",
  "role.nameRole": "请输入角色名",
  "role.instruction": "说明",
  "role.enterIns": "输入说明",
  "role.addPermission": "添加权限",
  "role.chosePermission": "请选择权限",
  "role.orgLevel": "组织层",
  "role.gloLevel": "global层",
  "role.proLevel": "项目层",
  "role.filterPermission": "过滤权限",
  "role.AllServer": "所有服务",
  "role.AllType": "所有类型",
  "role.permissionAlready": "已选择权限",
  "role.editable": "是否可编辑",
  "role.enable": "是否启用",
  "role.create": "创建",
  "role.getInfoError": "获取角色信息失败",
  "role.EnterRoleName": "请输入角色名",

  //project
  "project.id":"项目标识",
  "project.title":"项目管理",
  "project.create":"创建项目",
  "project.edit":"编辑项目",
  "project.name":"项目名称",
  "project.code":"项目编码",

  //user
  "user.userName":"用户名",
  "user.detail":"用户详情",
  "user.email":"邮箱",
  "user.emailInvalid":"邮箱格式不合法，请输入正确的邮箱！",
  "user.fieldRequired":"该字段是必输的！",
  "user.language":"语言",
  "user.timeZone":"时区",
  "user.source":"认证来源",
  "user.ldap":"LDAP 用户",
  "user.noLdap":"非LDAP用户",
  "user.statue":"状态",
  "user.statue.enable":"启用",
  "user.statue.disable":"未启用",
  "user.locked":"是否锁住",
  "user.locked.ok":"锁住",
  "user.locked.no":"未锁住",
  "user.addtionInfo":"附加信息",
  "user":"用户管理",
  "user.create":"创建用户",
  "user.organization":"组织名称",
  "user.password":"密码",
  "user.edit":"编辑用户",
  "user.userInfo":"个人信息",

  //organizationMember

  "organizationMemberRole.type":"类型",
  "organizationMemberRole.member":"成员",
  "organizationMemberRole.user":"用户",
  "organizationMemberRole.organization":"组织",
  "organizationMemberRole.role":"角色",
  "organizationMemberRole.operate":"操作",
  "organizationMemberRole.cancel":"删除",
  "organizationMemberRole.MemberRoleOrganization":"成员角色管理",
  "organizationMemberRole.add":"添加",
  "organizationMemberRole.lookMethod":"查看方式",
  "organizationMemberRole.refresh":"刷新",
  "organizationMemberRole.save":"保存",
  "organizationMemberRole.sureDelete": "确认删除?",
  "organizationMemberRole.deleteMessage": "当你点击删除后,该条数据将被永久删除,不可恢复!",
  "organizationMemberRole.successDelete": "删除成功",
  "organizationMemberRole.failDelete": "删除失败",
  "organizationMemberRole.failAdd": "添加失败",

  //projectMemberRole

  "projectMemberRole.type":"类型",
  "projectMemberRole.member":"成员",
  "projectMemberRole.user":"用户",
  "projectMemberRole.organization":"组织",
  "projectMemberRole.role":"角色",
  "projectMemberRole.operate":"操作",
  "projectMemberRole.cancel":"删除",
  "projectMemberRole.MemberRoleOrganization":"成员角色管理",
  "projectMemberRole.add":"添加",
  "projectMemberRole.lookMethod":"查看方式",
  "projectMemberRole.refresh":"刷新",

  // Permission
  'permission.name': '名称',
  'permission.detail': '权限详情',

  //菜单配置
  'menu.createDir': '创建自设目录',

  "learnmore": "了解更多",
  "signout": "安全退出",
  "select": "选择",
  "return": "返回",
  "filtertable": "过滤表",
  "ok": "确定",

// operation
  "operation": "操作",
  "add": "添加",
  "addnew": "新增",
  "create": "创建",
  "edit": "编辑",
  "modify": "修改",
  "delete": "删除",
  "remove": "移除",
  "confirm.delete": "确认删除",
  "cancel": "取消",
  "refresh": "刷新",
  "detail": "详情",
  "enable": "启用",
  "disable": "停用",

// status
// success
  "operation.success": "操作成功",
  "create.success": "创建成功",
  "modify.success": "修改成功",
  "save.success": "保存成功",
  "delete.success": "删除成功",
  "remove.success": "移除成功",
  "enable.success": "启用成功",
  "disable.success": "停用成功",
// error
  "operation.error": "操作失败",
  "create.error": "创建失败",
  "modify.error": "修改失败",
  "save.error": "保存失败",
  "delete.error": "删除失败",
  "remove.error": "移除失败",
  "enabled.error": "启用失败",
  "disable.error": "停用失败",

  //组织管理
  "global.organization.header.title": "组织管理",
  "global.organization.create": "创建组织",
  "global.organization.title": "平台\"{name}\"的组织管理",
  "global.organization.description": "组织是项目的上一级。通过组织您可以管理项目、用户。您可以创建组织，创建后平台默认您是这个组织的组织管理员。",
  "global.organization.name": "组织名称",
  "global.organization.code": "组织编码",
  "global.organization.status": "启用状态",
  "global.organization.enable": "启用",
  "global.organization.disable": "停用",
  "global.organization.modify": "修改组织",
  "global.organization.modify.title": "对组织\"{name}\"进行修改",
  "global.organization.modify.description": "您可以在此修改组织名称",
  "global.organization.create.title": "在平台\"{name}\"中创建组织",
  "global.organization.create.description": "请在下面输入组织编码、组织名称创建组织。组织编码在全平台是唯一的，组织创建后，不能修改组织编码。",
  "global.organization.onlymsg": "组织编码已存在，请输入其他组织编码",
  "global.organization.coderequiredmsg": "请输入组织编码",
  "global.organization.codemaxmsg": "组织编码不能超过15个字符",
  "global.organization.codepatternmsg": '编码只能由小写字母、数字、"-"组成，且以小写字母开头，不能以"-"结尾',
  "global.organization.namerequiredmsg": "请输入组织名称",

  //  菜单配置
  "global.menusetting.header.title": "菜单配置",
  "global.menusetting.create": "创建自设目录",
  "global.menusetting.global": "平台",
  "global.menusetting.org": "组织",
  "global.menusetting.pro": "项目",
  "global.menusetting.personcenter": "个人中心",
  "global.menusetting.directory": "目录/菜单",
  "global.menusetting.icon": "图标",
  "global.menusetting.code": "编码",
  "global.menusetting.belong": "所属预设目录",
  "global.menusetting.type": "类型",
  "global.menusetting.create.org": "创建目录",
  "global.menusetting.directory.name": "目录名称",
  "global.menusetting.directory.code": "目录编码",
  "global.menusetting.icon.require": "请选择一个图标",
  "global.menusetting.directory.name.require":"请输入目录名称",
  "global.menusetting.directory.code.require": "请输入目录编码",
  "global.menusetting.directory.code.pattern": '编码只能由小写字母、数字、"-"组成，且以小写字母开头，不能以"-"结尾',
  "global.menusetting.directory.code.onlymsg": "目录编码已存在，请输入其他目录编码",
  "global.menusetting.modify.org": "修改目录",
  "global.menusetting.delete.success": "删除成功，请点击保存",
  "global.menusetting.delete.owntitle": "删除自设目录",
  "global.menusetting.delete.owncontent": "确认删除自设目录\"{name}\"吗?",
  "global.menusetting.create.success": "创建目录成功，请点击保存",
  "global.menusetting.modify.success": "修改目录成功，请点击保存",
  "global.menusetting.detail": "查看详情",
  "global.menusetting.menu.name": "菜单名称",
  "global.menusetting.menu.code": "菜单编码",
  "global.menusetting.menu.level": "菜单层级",
  "global.menusetting.belong.root": "所属根目录",
  "global.menusetting.menu.withoutpermission": "此菜单无对应权限",
  "global.menusetting.menu.permission": "菜单所具有权限:",

  // 角色管理

  // page
  ...pageDetail,

};
export default zh_CN;  

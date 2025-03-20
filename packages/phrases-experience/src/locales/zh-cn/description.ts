const description = {
  email: '邮箱',
  phone_number: '手机号',
  username: '用户名',
  reminder: '提示',
  not_found: '404 页面不存在',
  agree_with_terms: '我已阅读并同意 ',
  agree_with_terms_modal: '请先同意 <link></link> 以继续',
  terms_of_use: '使用条款',
  sign_in: '登录',
  privacy_policy: '隐私政策',
  create_account: '创建帐号',
  or: '或',
  and: '和',
  enter_passcode: '验证码已经发送至你的{{ address }} {{target}}',
  passcode_sent: '验证码已经发送',
  resend_after_seconds: '还没收到？ <span>{{seconds}}</span> 秒后重发',
  resend_passcode: '还没收到？ <a>重发验证码</a>',
  create_account_id_exists: '{{type}}为 {{value}} 的帐号已存在，你要登录吗？',
  link_account_id_exists: ' {{type}}为 {{value}} 的账号已注册，你要绑定至这个账号吗？',
  sign_in_id_does_not_exist: '{{type}}为 {{value}} 的帐号不存在，你要创建一个新帐号吗？',
  sign_in_id_does_not_exist_alert: '{{type}}为 {{value}} 的帐号不存在。',
  create_account_id_exists_alert: '{{type}} {{value}} 已绑定其他账号。请尝试其他{{type}}。',
  social_identity_exist: ' {{type}} {{value}} 已绑定其他账号。请尝试其他{{type}}',
  bind_account_title: '绑定或注册帐号',
  social_create_account: '你可以注册一个新的账号。',
  social_link_email: '你可以绑定其他邮箱',
  social_link_phone: '你可以绑定其他手机号',
  social_link_email_or_phone: '你可以绑定其他邮箱或手机号',
  social_bind_with_existing: '我们发现一个已注册的相关帐户，您可以直接链接它。',
  skip_social_linking: '跳过链接现有帐户？',
  reset_password: '忘记密码',
  reset_password_description: '输入{{types, list(type: disjunction;)}}，获取验证码以重设密码。',
  new_password: '新密码',
  set_password: '设置密码',
  password_changed: '已重置密码！',
  no_account: '还没有账号？',
  have_account: ' 已有账号？',
  enter_password: '输入密码',
  enter_password_for: '输入{{method}} {{value}} 对应的密码进行登录',
  enter_username: '设置用户名',
  enter_username_description: '用户名可以用来进行登录。用户名仅可以包含字母、数字和下划线。',
  link_email: '绑定邮箱',
  link_phone: '绑定手机',
  link_email_or_phone: '绑定邮箱或手机号',
  link_email_description: '绑定邮箱以保障你的账号安全',
  link_phone_description: '绑定手机号以保障你的账号安全',
  link_email_or_phone_description: '绑定邮箱或手机号以保障你的账号安全',
  continue_with_more_information: '为保障你的账号安全，需要你补充以下信息。',
  create_your_account: '注册你的账号',
  sign_in_to_your_account: '登录你的账号',
  no_region_code_found: '没有找到区域码',
  verify_email: '验证你的邮箱',
  verify_phone: '验证你的手机号',
  password_requirements: '密码 {{items, list}}。',
  password_requirement: {
    length_one: '至少应有 {{count}} 个字符',
    length_two: '至少应有 {{count}} 个字符',
    length_few: '至少应有 {{count}} 个字符',
    length_many: '至少应有 {{count}} 个字符',
    length_other: '至少应有 {{count}} 个字符',
    character_types_one: '至少应包含大写字母、小写字母、数字和符号中的 {{count}} 种',
    character_types_two: '至少应包含大写字母、小写字母、数字和符号中的 {{count}} 种',
    character_types_few: '至少应包含大写字母、小写字母、数字和符号中的 {{count}} 种',
    character_types_many: '至少应包含大写字母、小写字母、数字和符号中的 {{count}} 种',
    character_types_other: '至少应包含大写字母、小写字母、数字和符号中的 {{count}} 种',
  },
  use: '使用',
  single_sign_on_email_form: '输入你的企业电子邮件地址',
  single_sign_on_connectors_list:
    '你的企业已为电子邮件账户 {{email}} 启用了单点登录。你可以继续使用以下SSO提供商进行登录。',
  single_sign_on_enabled: '该帐户已启用单点登录',
  authorize_title: '授权给 {{name}}',
  request_permission: '{{name}} 需要权限：',
  grant_organization_access: '授予组织访问权限：',
  authorize_personal_data_usage: '你将授权该应用使用你的以下个人数据：',
  authorize_organization_access: '授权访问特定组织：',
  user_scopes: '用户个人信息',
  organization_scopes: '组织权限',
  authorize_agreement: `你将同意授权给 {{name}} <link></link>.`,
  authorize_agreement_with_redirect: `你将同意授权给 {{name}} <link></link>，然后你将被重定向到 {{uri}}。`,
  not_you: '不是你本人吗？',
  user_id: '用户 ID: {{id}}',
  redirect_to: '你将被重定向到 {{name}}。',
  auto_agreement: '继续即表示您同意<link></link>。',
  identifier_sign_in_description: '输入您的{{types, list(type: disjunction;)}}以登录。',
  all_sign_in_options: '所有登录选项',
  identifier_register_description: '输入您的{{types, list(type: disjunction;)}}以创建新账户。',
  all_account_creation_options: '所有账户创建选项',
  back_to_sign_in: '返回登录',
  support_email: '支持邮箱：<link></link>',
  support_website: '支持网站：<link></link>',
};

export default Object.freeze(description);

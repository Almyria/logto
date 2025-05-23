const security = {
  page_title: '安全',
  title: '安全',
  subtitle: '配置高级防护以抵御复杂攻击。',
  bot_protection: {
    title: '机器人防护',
    description: '为注册、登录和密码恢复启用 CAPTCHA，以阻止自动化威胁。',
    captcha: {
      title: '验证码',
      placeholder: '选择一个验证码提供商并设置集成。',
      add: '添加验证码',
    },
    settings: '设置',
    captcha_required_flows: '验证码必需流程',
    sign_up: '注册',
    sign_in: '登录',
    forgot_password: '忘记密码',
  },
  create_captcha: {
    setup_captcha: '设置验证码',
  },
  captcha_providers: {
    recaptcha_enterprise: {
      name: '企业版 reCAPTCHA',
      description:
        '谷歌的企业级验证码解决方案，提供高级威胁检测和详细的安全分析，以保护你的网站免受欺诈活动的侵害。',
    },
    turnstile: {
      name: 'Cloudflare Turnstile',
      description:
        'Cloudflare 的智能验证码替代方案，提供不干扰的机器人防护，同时确保无视觉拼图的无缝用户体验。',
    },
  },
  captcha_details: {
    back_to_security: '返回安全',
    page_title: '验证码详情',
    check_readme: '查看 README',
    options_change_captcha: '更改验证码提供商',
    connection: '连接',
    description: '配置你的验证码连接。',
    site_key: '站点密钥',
    secret_key: '秘密密钥',
    project_id: '项目 ID',
    deletion_description: '你确定要删除此验证码提供商吗？',
    captcha_deleted: '验证码提供商删除成功',
    setup_captcha: '设置验证码',
  },
};

export default Object.freeze(security);

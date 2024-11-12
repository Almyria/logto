const description = {
  email: 'البريد الإلكتروني',
  phone_number: 'رقم الهاتف',
  username: 'اسم المستخدم',
  reminder: 'تذكير',
  not_found: '404 غير موجود',
  agree_with_terms: 'لقد قرأت وأوافق على ',
  agree_with_terms_modal: 'للمتابعة، يرجى الموافقة على <link></link>.',
  terms_of_use: 'شروط الاستخدام',
  sign_in: 'تسجيل الدخول',
  privacy_policy: 'سياسة الخصوصية',
  create_account: 'إنشاء حساب',
  or: 'أو',
  and: 'و',
  enter_passcode: 'تم إرسال رمز التحقق إلى {{address}} {{target}} الخاص بك',
  passcode_sent: 'تم إعادة إرسال رمز التحقق',
  resend_after_seconds: 'لم تستلمه بعد؟ إعادة إرسال بعد <span>{{seconds}}</span> ثانية',
  resend_passcode: 'لم تستلمه بعد؟ <a>إعادة إرسال رمز التحقق</a>',
  create_account_id_exists: 'الحساب بنوع {{type}} {{value}} موجود بالفعل، هل ترغب في تسجيل الدخول؟',
  link_account_id_exists: 'الحساب بنوع {{type}} {{value}} موجود بالفعل. هل ترغب في ربطه؟',
  sign_in_id_does_not_exist:
    'الحساب بنوع {{type}} {{value}} غير موجود، هل ترغب في إنشاء حساب جديد؟',
  sign_in_id_does_not_exist_alert: 'الحساب بنوع {{type}} {{value}} غير موجود.',
  create_account_id_exists_alert:
    'الحساب بنوع {{type}} {{value}} مرتبط بحساب آخر. يرجى المحاولة باستخدام {{type}} آخر.',
  social_identity_exist:
    'الـ {{type}} {{value}} مرتبط بحساب آخر. يرجى المحاولة باستخدام {{type}} آخر.',
  bind_account_title: 'ربط أو إنشاء حساب',
  social_create_account: 'يمكنك إنشاء حساب جديد.',
  social_link_email: 'يمكنك ربط بريد إلكتروني آخر',
  social_link_phone: 'يمكنك ربط رقم هاتف آخر',
  social_link_email_or_phone: 'يمكنك ربط بريد إلكتروني أو رقم هاتف آخر',
  social_bind_with_existing: 'لقد وجدنا حسابًا ذا صلة تم تسجيله، ويمكنك ربطه مباشرة.',
  skip_social_linking: 'تخطي ربط الحساب الحالي؟',
  reset_password: 'إعادة تعيين كلمة المرور',
  reset_password_description:
    'أدخل {{types, list(type: disjunction;)}} المرتبطة بحسابك، وسنرسل لك رمز التحقق لإعادة تعيين كلمة المرور.',
  new_password: 'كلمة المرور الجديدة',
  set_password: 'تعيين كلمة المرور',
  password_changed: 'تم تغيير كلمة المرور',
  no_account: 'لا يوجد حساب بعد؟ ',
  have_account: 'هل لديك حساب بالفعل؟',
  enter_password: 'أدخل كلمة المرور',
  enter_password_for: 'تسجيل الدخول باستخدام كلمة المرور إلى {{method}} {{value}}',
  enter_username: 'تعيين اسم المستخدم',
  enter_username_description:
    'اسم المستخدم هو بديل لتسجيل الدخول. يجب أن يحتوي اسم المستخدم فقط على الأحرف والأرقام وشرطات السفل.',
  link_email: 'ربط البريد الإلكتروني',
  link_phone: 'ربط الهاتف',
  link_email_or_phone: 'ربط البريد الإلكتروني أو الهاتف',
  link_email_description: 'لزيادة الأمان، يرجى ربط بريدك الإلكتروني بالحساب.',
  link_phone_description: 'لزيادة الأمان، يرجى ربط هاتفك بالحساب.',
  link_email_or_phone_description: 'لزيادة الأمان، يرجى ربط بريدك الإلكتروني أو هاتفك بالحساب.',
  continue_with_more_information: 'لزيادة الأمان، يرجى استكمال تفاصيل الحساب أدناه.',
  create_your_account: 'إنشاء حسابك',
  sign_in_to_your_account: 'تسجيل الدخول إلى حسابك',
  no_region_code_found: 'لم يتم العثور على رمز المنطقة',
  verify_email: 'تحقق من بريدك الإلكتروني',
  verify_phone: 'تحقق من رقم هاتفك',
  password_requirements: 'متطلبات كلمة المرور {{items, list}}.',
  password_requirement: {
    length_one: 'يتطلب حرف واحد على الأقل',
    length_other: 'يتطلب {{count}} أحرف على الأقل',
    character_types_one:
      'يجب أن يحتوي على حرف واحد على الأقل من الأحرف الكبيرة والصغيرة والأرقام والرموز',
    character_types_other:
      'يجب أن يحتوي على {{count}} أنواع على الأقل من الأحرف الكبيرة والصغيرة والأرقام والرموز',
  },
  use: 'استخدام',
  single_sign_on_email_form: 'أدخل عنوان بريدك الإلكتروني الخاص بالشركة',
  single_sign_on_connectors_list:
    'لقد قامت الشركة بتمكين تسجيل الدخول الموحد لحساب البريد الإلكتروني {{email}}. يمكنك الاستمرار في تسجيل الدخول باستخدام موفرات SSO التالية.',
  single_sign_on_enabled: 'تم تمكين تسجيل الدخول الموحد لهذا الحساب',
  authorize_title: 'السماح لـ {{name}}',
  request_permission: '{{name}} يطلب الوصول إلى:',
  grant_organization_access: 'منح الوصول إلى المؤسسة:',
  authorize_personal_data_usage: 'السماح باستخدام البيانات الشخصية الخاصة بك:',
  authorize_organization_access: 'السماح بالوصول إلى المؤسسة المحددة:',
  user_scopes: 'بيانات المستخدم الشخصية',
  organization_scopes: 'الوصول إلى المؤسسة',
  authorize_agreement: `بالسماح بالوصول، فإنك توافق على <link></link> لـ {{name}}.`,
  authorize_agreement_with_redirect: `بالسماح بالوصول، فإنك توافق على <link></link> لـ {{name}}، وسيتم توجيهك إلى {{uri}}.`,
  not_you: 'ليس أنت؟',
  user_id: 'معرف المستخدم: {{id}}',
  redirect_to: 'سيتم توجيهك إلى {{name}}.',
  auto_agreement: 'من خلال المتابعة، فإنك توافق على <link></link>.',
  /** UNTRANSLATED */
  identifier_sign_in_description: 'Enter you {{types, list(type: disjunction;)}} to sign in.',
  /** UNTRANSLATED */
  all_sign_in_options: 'All sign-in options',
  /** UNTRANSLATED */
  identifier_register_description:
    'Enter you {{types, list(type: disjunction;)}} to create a new account.',
  /** UNTRANSLATED */
  all_account_creation_options: 'All account creation options',
  /** UNTRANSLATED */
  back_to_sign_in: 'Back to sign in',
  /** UNTRANSLATED */
  support_email: 'Support email: <link></link>',
  /** UNTRANSLATED */
  support_website: 'Support website: <link></link>',
};

export default Object.freeze(description);

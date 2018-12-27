Page({
  data: {
    formID: null
  },
  submit: function(e) {
    var form_id = e.detail.formId;
    console.log(form_id);
    this.setData({
      formID: form_id
    });
    // 下一步:
    // 现在拿到了 form_id 就应该发给后台了
    // 后台可以把 form_id 存起来，或者马上发送服务通知，具体取决于你的业务需求
  }
});

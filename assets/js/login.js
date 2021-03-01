$(function () {
    $('#link-reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#link-login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
        $.ajax({
            type: "post",
            url: "/api/reguser",
            data: data,
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                console.log(123);
                layer.msg('注册成功，请登录！')
                // 模拟人的点击行为
                $('#link-login').click()
            }
        })
    });
    $('#form-login').on('sunmit', function () {
        $.ajax({
            type: "post",
            url: "/api/login",
            data: "data",
            dataType: "dataType",
            success: function (response) {
                
            }
        });
    })

})


$(function () {
    // 调用获取用户信息
    getUserinfo()
    var layer = layui.layer
    // 点击退出按钮
    $('#btnLogout').on('click', function () {
        layer.confirm('确定退出登录？', { icon: 3, title: '提示' },
            function (index) {
                // 清空token
                localStorage.removeItem('token')
                // 返回login
                location.href = '/login.html'
                layer.close(index)
            })
    })
})



// 定义函数获取用户信息
function getUserinfo() {
    $.ajax({
        type: "get",
        url: "/my/userinfo",
        headers: {
            Authorization: localStorage.getItem('token' || '')
        },
        success: function (res) {
            console.log(res);
            if (res.status !== 0) {
                return layer.msg('获取用户信息失败！')
            }
            // 调用渲染用户头像
            renderAvatar(res.data)
        },
    });
}
// 定义函数渲染用户名头像
function renderAvatar(user) {
    // 用户名可以使昵称或者用户名
    var name = user.nickname || user.username
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    if (user.user_pic !== null) {
        $('.layui-nav-img').attr('src', user.user_pic).show()
        $('.text-avatar').hide()
    } else {
        $('.layui-nav-img').hide()
        $('.text-avatar').html(name[0].toUpperCase()).show()
    }
}
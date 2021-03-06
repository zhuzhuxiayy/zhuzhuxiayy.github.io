module.exports = function(app) {
    // 浏览器拦截请求地址  重定向
    app.get('/User', function(req, res) {
        var use = req.session.user;
        // 后端判断登录数据是否存在
        if( use ){
        	// 已登录 使用 home.jade模板文件
        	res.render('home',{
        		username: use.name
        	})
        }else{
        	// login.jade
        	res.render('login')
        }
    });
};

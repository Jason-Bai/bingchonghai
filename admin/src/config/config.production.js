let configs = {
    open: {
        domain: 'http://mc.audienx.com',
        oAuth: {
            url: 'http://open.admaster.com.cn',
            clientId: 'c2b5516d507c14128dfa',
            clientSecret: 'e5c445664e1c31a45b8bca5c4085ab1b20c2f33b',
            redirectUri: 'http://mc.audienx.com/auth/open'
        }
    },
    apiRoot: '/api_v1',
    navs: [{
        name: '首页',
        icon: 'home',
        path: '/admin'
    }, {
        name: '用户管理',
        icon: 'user',
        path: '/admin/users'
    }, {
        name: '分类管理',
        icon: 'group',
        path: '/admin/categories'
    }],
    dateFormat: 'YYYY-MM-DD',
    timeFormat: 'YYYY-MM-DD HH:mm:ss',
    AdminLTE: {
        sidebarToggleSelector: "[data-toggle='offcanvas']",
        treeSelector: '.sidebar',
        sidebarPushMenu: true,
        sidebarSlimScroll: true,
        navbarMenuSlimscroll: true,
        navbarMenuSlimscrollWidth: "3px",
        navbarMenuHeight: "200px",
        screenSizes: {
            xs: 480,
            sm: 768,
            md: 992,
            lg: 1200
        }
    }
}


export default configs

let configs = {
    open: {
        domain: 'http://dev.datacenter.com',
        oAuth: {
            url: 'http://dev.open.admaster.co',
            clientId: '1d7a8b0c18047e245c0d',
            clientSecret: '75a7b6c0c377dff4695cc94b9e4f628c33a4f795',
            redirectUri: 'http://dev.datacenter.com/auth/open'
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

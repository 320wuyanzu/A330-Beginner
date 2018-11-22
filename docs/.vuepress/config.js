module.exports = {
    head: [
        ['link', { rel: 'stylesheet', href: '/font.css' }]
    ],
    base: '/A330-Beginner/',
    title: '入门篇',
    description: 'A330机型介绍',
    themeConfig: {
        lastUpdated: '最后一次修改',
        nav: [
            { text: '我的个人主页', link: 'https://320wuyanzu.github.io' },
            { text: '入门篇', link: '/' },
            { text: '初级篇', link: 'https://320wuyanzu.github.io/404' },
            { text: '中级篇', link: 'https://320wuyanzu.github.io/404' },
            { text: '高级篇', link: 'https://320wuyanzu.github.io/404' },
        ],
        sidebarDepth: 2,
        sidebar: sidebar_group()
    }
}


/**
 * 折叠式侧边栏
 */
function sidebar_group() {
    let ATA21 = {
        title: 'ATA21-空调系统',
        children: ['/ATA21/']
    };
    let ATA22 = {
        title: 'ATA22-Auto Flight',
        children: []
    };
    let ATA23 = {
        title: 'ATA23-Communications',
        children: []
    };
    let ATA24 = {
        title: 'ATA24-Electrical Power',
        children: []
    };
    let ATA25 = {
        title: 'ATA25-Equipment/Furnishings',
        children: []
    };
    let ATA26 = {
        title: 'ATA26-Fire Protection',
        children: []
    };
    let ATA27 = {
        title: 'ATA27-Flight Controls',
        children: []
    };
    let ATA28 = {
        title: 'ATA28-Fuel',
        children: []
    };
    let ATA29 = {
        title: 'ATA29-Hydraulic Power',
        children: []
    };
    let ATA30 = {
        title: 'ATA30-Ice/Rain Protection',
        children: []
    };
    let ATA31 = {
        title: 'ATA31-Indicating/Recording',
        children: ['/ATA31/']
    };
    let ATA32 = {
        title: 'ATA32-Landing Gear',
        children: []
    };
    let ATA33 = {
        title: 'ATA33-Lights',
        children: []
    };
    let ATA34 = {
        title: 'ATA34-Navigation',
        children: []
    };
    let ATA35 = {
        title: 'ATA35-Oxygen',
        children: []
    };
    let ATA36 = {
        title: 'ATA36-Pneumatic',
        children: ['/ATA36/', './ATA36/00', './ATA36/11', './ATA36/12', './ATA36/14', './ATA36/20']
    };
    let ATA38 = {
        title: 'ATA38-Water/Waste',
        children: []
    };
    let ATA46 = {
        title: 'ATA46-Information Systems',
        children: []
    };
    let ATA47 = {
        title: 'ATA47-Inert Gas System',
        children: []
    };
    let ATA49 = {
        title: 'ATA49-APU',
        children: []
    };
    let ATA51 = {
        title: 'ATA51-Structures',
        children: []
    };

    let ATA52 ={
        title: '52-门结构',
        children: ['/ATA52/']
    };
    let ATA53 ={
        title: '53-机身结构',
        children: ['/ATA53/','/ATA53/1','/ATA53/2','/ATA53/3','/ATA53/4','/ATA53/5']
    };
    let ATA71 = {
        title: 'ATA71-Power Plant(CFM56)',
        children: ['/ATA71/', '/ATA71/72/', '/ATA71/73/', '/ATA71/74/','/ATA71/75/','/ATA71/76/','/ATA71/77/','/ATA71/78/','/ATA71/79/','/ATA71/80/']
    };
    return [
        //ATA21,
        //ATA22,
        //ATA23,
        //ATA24,
        //ATA25,
        //ATA26,
        //ATA27,
        //ATA28,
        //ATA29,
        //ATA30,
        //ATA31,
        //ATA32,
        //ATA33,
        //ATA34,
        //ATA35,
        //ATA36,
        //ATA38,
        //ATA46,
        //ATA47,
        //ATA49,
        //ATA51,
        ATA52,
        ATA53,
        //ATA71
    ]
}
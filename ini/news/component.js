module.exports = {
    component: 'Page',
    children: [{
        component: 'Card',
        children: [{
            component: 'Row',
            children: [{
                component: 'Col',
                children: [{
                    component: 'Label',
                    props: {
                        text: '这是一个新闻页面'
                    }
                }, {
                    component: 'Button',
                    props: {
                        text: '可编程按钮',
                        __events: {
                            onClick: [{
                                action: 'Script',
                                value: `() => alert('test')`
                            }]
                        }
                    }
                }]
            }]
        }]
    }]
}
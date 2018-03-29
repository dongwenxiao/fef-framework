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
                        text: '商品名:'
                    }
                }, {
                    component: 'Input',
                    props: {
                        value: '',
                        __events: {
                            onChange: [{
                                action: 'Script',
                                value: `({event, value, state}) => { state.GoodsAdd.goodsName = value }`
                            }]
                        }
                    }
                }]
            }, {
                component: 'Col',
                children: [{
                    component: 'Label',
                    props: {
                        text: '商品图片:'
                    }
                }, {
                    component: 'Input',
                    props: {
                        value: '',
                        __events: {
                            onChange: [{
                                action: 'Script',
                                value: `({event, value, state}) => {  }`
                            }]
                        }
                    }
                }]
            }, {
                component: 'Col',
                children: [{
                        component: 'Button',
                        props: {
                            text: '添加',
                            __events: {
                                onClick: [{
                                    action: 'Fetch',
                                    value: 'GetGoodsList'
                                }]
                            }
                        }
                    },
                    {
                        component: 'Button',
                        props: {
                            text: '返回',
                            __events: {
                                onClick: [{
                                    action: 'Redirect',
                                    value: '/Goods'
                                }]
                            }
                        }
                    }
                ]
            }]
        }]
    }]
}
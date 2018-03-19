module.exports = {
    component: 'Page',
    children: [
        {
            component: 'Card',
            children: [
                {
                    component: 'Row',
                    children: [
                        {
                            component: 'Col',
                            children: [
                                {
                                    component: 'Label',
                                    props: {
                                        text: '商品名:'
                                    }
                                },
                                {
                                    component: 'Input',
                                    props: {
                                        value: '',
                                        __events: {
                                            onChange: [
                                                {
                                                    action: 'ChangeState',
                                                    value: `({event, value, state}) => { state.goods.filter_goodsName = value }`
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            component: 'Col',
                            children: [
                                {
                                    component: 'Label',
                                    props: {
                                        text: '商品ID:'
                                    }
                                },
                                {
                                    component: 'Input',
                                    props: {
                                        value: '',
                                        __events: {
                                            onChange: [
                                                {
                                                    action: 'ChangeState',
                                                    value: `({event, value, state}) => { state.goods.filter_goodsID = value }`
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            component: 'Col',
                            children: [
                                {
                                    component: 'Button',
                                    props: {
                                        text: '查询',
                                        __events: {
                                            onClick: [
                                                { 
                                                    action: 'Custom',
                                                    value: 'GetGoodsList'
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    component: 'Button',
                                    props: {
                                        text: '重置',
                                        __events: {
                                            onClick: [
                                                {
                                                    action: 'ChangeState',
                                                    value: ` ({state}) => { state.goods = {} } `
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    component: 'Row',
                    children: [
                        {
                            component: 'Col',
                            children: [
                                {
                                    component: 'Button',
                                    props: {
                                        text: 'test',
                                        __events: {
                                            onClick: [
                                                { 
                                                    action: 'Script',
                                                    value: '() => {alert(1)}'
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
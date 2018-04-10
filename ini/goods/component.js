module.exports = {
    component: 'Page',
    props: {
        __events: {
            onWillMount: [/* {
                action: 'Fetch',
                value: 'GetGoodsList'
            } */],
            onDidMount: [],
            onUnMount: []
        }
    },
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
                            value: {
                                type: 'bind',
                                value: 'state.Goods.filterGoodsName'
                            },
                            __events: {
                                onChange: [{
                                    action: 'Script',
                                    value: `({event, value, state}) => { state.Goods.filterGoodsName = value }`
                                }]
                            }
                        }
                    }]
                }, {
                    component: 'Col',
                    children: [{
                        component: 'Label',
                        props: {
                            text: '商品ID:'
                        }
                    }, {
                        component: 'Input',
                        props: {
                            value: {
                                type: 'bind',
                                value: 'state.Goods.filterGoodsID'
                            },
                            __events: {
                                onChange: [{
                                    action: 'Script',
                                    value: `({event, value, state}) => { state.Goods.filterGoodsID = value }`
                                }]
                            }
                        }
                    }]
                }, {
                    component: 'Col',
                    children: [{
                            component: 'Button',
                            props: {
                                text: '查询',
                                __events: {
                                    onClick: [{
                                        action: 'Fetch',
                                        value: 'GetGoodsList'
                                    }/* , {
                                        action: 'Script',
                                        value: `({event, value, state}) => { alert('done') }`
                                    } */]
                                }
                            }
                        },
                        {
                            component: 'Button',
                            props: {
                                text: '重置',
                                __events: {
                                    onClick: [{
                                        action: 'Script',
                                        // value: ` ({state}) => { state.reset('Goods') } `
                                        value: ` ({state}) => { state.Goods.filterGoodsID = '';state.Goods.filterGoodsName = '' } `
                                    }]
                                }
                            }
                        }
                    ]
                }]
            }, {
                component: 'Row',
                children: [{
                    component: 'Col',
                    children: [{
                        component: 'Button',
                        props: {
                            text: 'test',
                            __events: {
                                onClick: [{
                                    action: 'Script',
                                    value: `({state}) => {state.Goods.filterGoodsName = 'kkk'}`
                                }]
                            }
                        }
                    }]
                }]
            }]
        },
        /* {
            component: 'Card',
            children: [
                {
                    component: 'Row',
                    children: [
                        {
                            component: 'Col',
                            children: [
                                {
                                    component: 'TagSelect',
                                    props: {
                                        tags: 'bind:state.goods.brandList',
                                        value: [0], // 默认值:全部
                                        __events: {
                                            onClick: [
                                                {
                                                    action: 'ChangeState',
                                                    value: ` ({value, state}) => { state.goods.filter_goodsBrand = value.join('|') } `
                                                },
                                                { action: 'GetGoodsList' }
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
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
                                    component: 'TagSelect',
                                    props: {
                                        tags: 'bind:state.goods.categoryList',
                                        value: [0], // 默认值:全部
                                        __events: {
                                            onClick: [
                                                {
                                                    action: 'ChangeState',
                                                    value: ` ({value, state}) => { state.goods.filter_goodsCategory = value.join('|') } `
                                                },
                                                { action: 'GetGoodsList' }
                                            ]
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }, */
        {
            component: 'Card',
            children: [{
                component: 'Row',
                children: [{
                    component: 'Button',
                    props: {
                        text: '+ 添加',
                        __events: {
                            onClick: [{
                                action: 'Redirect',
                                value: '/GoodsAdd'
                            }]
                        }
                    }
                }]
            }]
        }, {
            component: 'Card',
            children: [{
                component: 'Row',
                children: [{
                    component: 'Table',
                    props: {
                        /* value: [], */
                        dataSource: {
                            type: 'bind',
                            value: 'state.Goods.goodsList'
                        },
                        columnsObj: {
                            type: 'object',
                            value: [{
                                title: 'ID',
                                key: 'id',
                                render: [{
                                    component: 'String',
                                    props: `({value}) => ({value: '# ' + value})`
                                }]
                            }, {
                                title: '姓名',
                                key: 'name',
                                render: [{
                                    component: 'String',
                                    props: `({value}) => ({value})`
                                }]
                            }, {
                                title: '图片',
                                key: 'img',
                                render: [{
                                    component: 'Image',
                                    props: `({value}) => ({style: { width: '80px' }, src: value})`
                                }]
                            }, {
                                title: '电话',
                                key: 'tel',
                                render: [{
                                    component: 'String',
                                    // props: `({value, state}) => ({value: state.dict.goods_brand.find(item => item.id === value).name})` // 借助state.dict.brandList
                                    props: `({value, state}) => ({value: '+' + value})` // 借助state.dict.brandList
                                }]
                            }, {
                                title: '操作',
                                key: 'goods_opt',
                                render: [{
                                    component: 'Link',
                                    props: `({ value, row }) => ({ text: '查看', href: '/goods/view/' + row['id'] })`
                                }, {
                                    component: 'Link',
                                    props: `({value, row}) => ({ text: '编辑', href: '/goods/edit/' + row['id'] })`
                                }]
                            }]
                        },
                        __events: {
                            // pageChange: [{
                            //     action: 'ChangeState',
                            //     value: ` ({value, state}) => { state.goods.GoodsIndex = value } `
                            // }, { action: 'GetGoodsList' }],
                            // pageSizeChange: [{
                            //     action: 'ChangeState',
                            //     value: ` ({value, state}) => { state.goods.GoodsSize = value } `
                            // }, {
                            //     action: 'Custom',
                            //     value: 'GetGoodsList'
                            // }]
                        }
                    }
                }]
            }]
        }
    ]
}
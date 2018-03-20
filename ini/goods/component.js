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
                                                    action: 'Script',
                                                    value: `({event, value, state}) => { state.GoodsPage.filterGoodsName = value }`
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
            children: [
                {
                    component: 'Row',
                    children: [
                        {
                            component: 'Button',
                            props: {
                                text: '+ 添加',
                                __events: {
                                    onClick: [
                                        {
                                            action: 'Redirect',
                                            value: '/goods/add'
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
            component: 'Card',
            children: [
                {
                    component: 'Row',
                    children: [
                        {
                            component: 'Table',
                            props: {
                                value: [],
                                dataSource: 'bind:state.GoodsPage.goodsList',
                                columns: [
                                    {
                                        title: 'ID',
                                        key: 'goods_id',
                                        render: [
                                            {
                                                component: 'String',
                                                props: `({value}) => ({value: '#' + value})`
                                            }
                                        ]
                                    },
                                    {
                                        title: '商品名称',
                                        key: 'goods_name',
                                        render: [
                                            {
                                                component: 'String',
                                                props:`({value}) => ({value})`
                                            }
                                        ]
                                    },
                                    {
                                        title: '商品图片',
                                        key: 'img_url',
                                        render: [
                                            {
                                                component: 'Image',
                                                props: `({value}) => ({styles: { width: '80px' }, src: value})`
                                            }
                                        ]
                                    },
                                    {
                                        title: '品牌名',
                                        key: 'brand_name',
                                        render: [
                                            {
                                                component: 'String',
                                                props: `({value, state}) => ({value: state.dict.goods_brand.find(item => item.id === value).name})` // 借助state.dict.brandList
                                            }
                                        ]
                                    },
                                    {
                                        title: '操作',
                                        key: 'goods_opt',
                                        render: [
                                            {
                                                component: 'Link',
                                                props: `({ value, row }) => ({ text: '查看', href: '/goods/view/' + row['goods_id'] })`
                                            },
                                            {
                                                component: 'Link',
                                                props: `({value, row}) => ({ text: '编辑', href: '/goods/edit/' + row['goods_id'] })`
                                            }
                                        ]
                                    }
                                ]
                            },
                            __events: {
                                pageChange: [
                                    {
                                        action: 'ChangeState',
                                        value: ` ({value, state}) => { state.goods.goodsPageIndex = value } `
                                    },
                                    { action: 'GetGoodsList' }
                                ],
                                pageSizeChange: [
                                    {
                                        action: 'ChangeState',
                                        value: ` ({value, state}) => { state.goods.goodsPageSize = value } `
                                    },
                                    { 
                                        action: 'Custom',
                                        value: 'GetGoodsList'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },
    ]
}
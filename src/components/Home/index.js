/*
   Home 容器组件的子组件，信息展示
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewMember from './NewMember';
import MemberList from './MemberList';
import Label from '../Label'
import Button from '../antd/Button'
import styles from './home.less';

const proxyState = {}

export default class HomeCom extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // this.props.getMemberList();
    }
    render() {
        const { homeState, changeInputInfo, postNewInfo } = this.props;
        const { memberList, inputInfo } = homeState;

        return (
            <div id="home-container" className={styles.bg}>

                <Label>oooooooo</Label>

                <Button
                    size="small"
                    text="这是一个按钮"
                    loading={true}
                    __events={{
                        onClick: ((handler, proxyState) => {
                            return ({ event, value }) => {
                                handler({ event, value, state: proxyState })
                            }
                        })(
                            // 判断用户自定义处理 或 全局action处理
                            ({ event, value, state }) => {
                                // globalActions['GetGoodsList']();
                                alert(1)
                            },
                            proxyState
                        )
                    }} >bbbbbbbbb</Button>

                <NewMember inputInfo={inputInfo} changeInputInfo={changeInputInfo} postNewInfo={postNewInfo} />
                <MemberList memberList={memberList} />
                {/* location 对象可以有 search 但是 query 取消了 */}
                <Link to={{ pathname: '/test', search: '?name=homename', state: { mold: 'add' } }} className="home-link">
                    点击跳转到 test page sasas
            </Link>
            </div>
        );
    }
}

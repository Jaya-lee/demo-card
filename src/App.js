import React from 'react'
import Card from './Card.js'
class App extends React.Component{
    constructor(){
        super();
        this.state={
            data:[
                {index:1,title:'如何理解 redux 的单向数据流？',date:'2017.04.22'},
                {index:2,title:'如何用 Webpack+Babel 来编译 ES6 ?',date:'2017.04.23'},
                {index:3,title:'ES6 模块的两种导出方式是什么？',date:'2017.04.28'},
                {index:4,title:'ES6 的箭头函数对 this 处理有什么好处？',date:'2017.05.01'},
                {index:5,title:'什么是 Ajax ？',date:'2017.05.02'}
            ],
            value:''
        }
    }
    handleChange(){
        this.setState({
            value:this.input.value
        })
    }
    render(){
        let newData= this.state.value ?
          this.state.data.filter( item =>
            item.title.includes(this.state.value)
          )
          : this.state.data
        // 搜索部分的样式
        let styles={
            div:{
                background:'#CD5C5C',
                opacity:'0.9',
                paddingTop:'200px',
                paddingBottom:'30px',
                marginBottom:'40px',
                justifyContent:'center',
                display:'flex',
                flexGrow:'1'

            },
            input:{
                border:'0',
                outline:'0',
                width:'350px',
                paddingLeft:'10px',
                paddingRight:'10px',
                height:'35px',
                fontSize:'16px',
                marginRight:'6px'

            },
            button:{
                border:'0',
                outline:'0',
                width:'50px',
                height:'35px',
                background:'lightBlue',
                borderRadius:'3px'

            }
        }
        return(
            <div style={{width:'100%'}}>
                {/* search部分 */}
                <div style={styles.div}>
                    <input style={styles.input}     onChange={this.handleChange.bind(this)}
                    ref={input => this.input=input}/>
                    <button style={styles.button}>搜索</button>
                </div>
                {/*card部分*/}
                {
                    newData.map( item =>
                        // <Card key={item.index} index={item.index} title={item.title} date={item.date} />
                        <Card key={item.index} {...item}/>
                    )
                }
                {/* <CardArr data={this.state.data} /> */}
                {/* 把数据装在数组里传给子组件 */}

            </div>

        )
    }
}
export default App;

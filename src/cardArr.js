import React from 'react'

class CardArr extends React.Component{
    constructor(){
        super(),
        this.state={

        }
    }
    render(){
        let {data} =this.props //取出data属性的值
        let styles={
            root:{
                width:'400px',
                height:'40px',
                display:'flex',
                marginBottom:'20px',
                alignItems:'center',
                background:'#fcfcfc'
            },
            index:{
                width:'80px',
                lineHeight:'40px',
                textAlign:'center',
                background:'lightBlue',
                color:'#fff',
                fontSize:'20px',
                marginRight:'15px'
            }
        }
        let cards=data.map(item =>
            <div style={styles.root} key='item'>
                <div style={styles.index}>{this.index}</div>
                <h3 style={{color:'#666',fontSize:'16px',marginRight:'10px'}}>{this.title}</h3>
                <h5 style={{color:'#999',fontSize:'12px'}}>{this.date}</h5>
            </div>
        )
        return(
            <div>
                {cards}
            </div>

        )
    }
}
CardArr.defaultProps={
    index:0,
    title:'默认标题',
    date:'2017.5.01'
}
export default CardArr;

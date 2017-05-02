import React from 'react'

class Card extends React.Component{
    render(){
        let styles={
            root:{
                width:'800px',
                height:'60px',
                display:'flex',
                margin:'0 auto',
                marginBottom:'20px',
                alignItems:'center',
                boxShadow:'2px 2px 7px #ccc'
            },
            index:{
                width:'100px',
                lineHeight:'60px',
                textAlign:'center',
                background:'#CD5C5C',
                color:'#fff',
                fontSize:'20px',
                marginRight:'15px'
            }
        }
        return(
            <div style={styles.root}>
                <div style={styles.index}>{this.props.index}</div>
                <h3 style={{color:'#666',fontSize:'14px',marginRight:'10px'}}>{this.props.title}</h3>
                <h5 style={{color:'#999',fontSize:'12px'}}>{this.props.date}</h5>
            </div>
        )
    }
}
Card.defaultProps={
    index:0,
    title:'默认标题',
    date:'2017.5.01'
}
export default Card;

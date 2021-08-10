import React from "react"
import "./Calculator.css";
class Calculator extends React.Component{
    state={
        flag:false,
        num1:"",
        opr:"",
        num2:"",
        result:0,
     }
render=()=>{
    return(
        <div>
            <h1>{this.state.result}</h1>
            <button onClick={()=>{this.setState({opr:"+"})
          this.setState({flag:true})}}>+</button>
            <button onClick={()=>{this.setState({opr:"-"})
        this.setState({flag:true})}}>-</button>
            <button onClick={()=>{this.setState({opr:"*"})
        this.setState({flag:true})}}>*</button>
            <button onClick={()=>{this.setState({opr:"/"})
        this.setState({flag:true})}}>/</button>
            <hr></hr>
            <button onClick={()=>{
                if(this.state.flag){
                    let num=this.state.num2+"1"
                    this.setState({num2:num})
                }
                else{
                    let num=this.state.num1+"1"
                    this.setState({num1:num})
                }
            }}>1</button>
            <button  onClick={()=>{
                if(this.state.flag){
                    let num=this.state.num2+"2"
                    this.setState({num2:num})
                }
                else{
                    let num=this.state.num1+"2"
                    this.setState({num1:num})
                }
            }}>2</button>
            <button  onClick={()=>{
                if(this.state.flag){
                    let num=this.state.num2+"3"
                    this.setState({num2:num})
                }
                else{
                    let num=this.state.num1+"3"
                    this.setState({num1:num})
                }
            }}>3</button>
            <button  onClick={()=>{
                if(this.state.flag){
                    let num=this.state.num2+"4"
                    this.setState({num2:num})
                }
                else{
                    let num=this.state.num1+"4"
                    this.setState({num1:num})
                }
            }}>4</button>
            <hr></hr>
            <button  onClick={()=>{
                if(this.state.flag){
                    let num=this.state.num2+"5"
                    this.setState({num2:num})
                }
                else{
                    let num=this.state.num1+"5"
                    this.setState({num1:num})
                }
            }}>5</button>
            <button  onClick={()=>{
                if(this.state.flag){
                    let num=this.state.num2+"6"
                    this.setState({num2:num})
                }
                else{
                    let num=this.state.num1+"6"
                    this.setState({num1:num})
                }
            }}>6</button>
            <button  onClick={()=>{
                if(this.state.flag){
                    let num=this.state.num2+"7"
                    this.setState({num2:num})
                }
                else{
                    let num=this.state.num1+"7"
                    this.setState({num1:num})
                }
            }}>7</button>
            <button  onClick={()=>{
                if(this.state.flag){
                    let num=this.state.num2+"8"
                    this.setState({num2:num})
                }
                else{
                    let num=this.state.num1+"8"
                    this.setState({num1:num})
                }
            }}>8</button>
            <hr></hr>
            <button  onClick={()=>{
                if(this.state.flag){
                    let num=this.state.num2+"9"
                    this.setState({num2:num})
                }
                else{
                    let num=this.state.num1+"9"
                    this.setState({num1:num})
                }
            }}>9</button>
            <button  onClick={()=>{
                if(this.state.flag){
                    let num=this.state.num2+"0"
                    this.setState({num2:num})
                }
                else{
                    let num=this.state.num1+"0"
                    this.setState({num1:num})
                }
            }}>0</button>
            <button onClick={()=>{
                let res=eval(this.state.num1+this.state.opr+this.state.num2);
                this.setState({result:res})
            }}>=</button>
            <button onClick={()=>{this.setState({result:0})
            this.setState({num1:""})
             this.setState({num2:""})
             this.setState({opr:""})
             this.setState({flag:false})
        }

        }>C</button>
        </div>
    )
}
}
export default Calculator;
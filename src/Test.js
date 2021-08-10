import React from "react";

class Test extends React.Component
{
  state={
    result:0,
    currInput:""
  }
  
render=()=> {
  
  return (
  <div>
    <h1>{this.state.result}</h1>
    <button onClick={()=>{
     let res=this.state.currInput+"+"
     this.setState({currInput:res})
    }}>+</button>
    <button onClick={()=>{
      let res=this.state.currInput+"-"
      this.setState({currInput:res})
     
    }}>-</button>
    <button onClick={()=>{
     let res=this.state.currInput+"*"
     this.setState({currInput:res})
    }}>*</button>
    <button onClick={()=>{
    let res=this.state.currInput+"/"
    this.setState({currInput:res})
    }}>/</button>
    <button onClick={()=>{
       let arr=this.state.result.split(" ");
       let ans= Number(arr[0])+arr[1]+Number(arr[2]);
       if(arr[1]=="+"){
         ans=Number(arr[0])+Number(arr[2]);
       }
      else if(arr[1]=="-"){
        ans=Number(arr[0])-Number(arr[2]);
      }
     else if(arr[1]=="*"){
        ans=Number(arr[0])*Number(arr[2]);
      }
       else if(arr[1]=="/"){
        ans=Number(arr[0])/Number(arr[2]);
      }

      this.setState({result:ans,currInput:""})
       
    }}>=</button>
<hr></hr>
    <input type="text"  onChange={(e)=>{this.setState({currInput:e.currentTarget.value})}}
    onKeyDown={(e)=>{
    if(e.key=="Enter"){
      
       this.setState({result:this.state.currInput,currInput:""})
        //  let ans=this.displayResult()
      
      }
  
      
    }}
    value={this.state.currInput}></input>
  </div>
  );
}
}
export default Test;

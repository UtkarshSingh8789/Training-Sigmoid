import React,{Component} from "react";
class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            score:props.initialScore,
            isOnline:false,
            seconds:0
        }
        console.log("constructor called")
    }
    componentDidMount(){
        console.log("Component is mounted")
        this.onlineTimer=setTimeout(()=>{
            this.setState({isOnline:true})
        },2000)
        this.interval=setInterval(()=>{
            this.setState((prevState)=>(
                {
                    seconds:prevState.seconds+1
                }
            ))
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
        clearTimeout(this.onlineTimer)
        console.log("Component will unMount")
    }
    increaseScore=()=>{
        this.setState((prevState)=>(
            {
                score:prevState.score+1
            }
        ))
    }
    render(){
        console.log("component render")
        return (
            <div style={{ border: "2px solid black", padding: "20px", width: "300px" }}>
                <h2>User DashBoard</h2>
                <p><b>Name:</b> {this.props.username}</p>
                <p><b>Status:</b> {this.state.isOnline ? "Online 🟢" : "Offline 🔴"}</p>
                <p><b>Score:</b> {this.state.score}</p>
                <p><b>Active Time:</b> {this.state.seconds}s</p>
                <button onClick={this.increaseScore}>Increase Score</button>
            </div>
        )
    }
}
export default Counter
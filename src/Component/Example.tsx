import * as React from 'react';


export default class Example extends React.Component<any, any>{
    constructor(props: any){
        super(props);

        this.state = {
           array: [1, 2, 3, 4]
        }
    }

    sort(index:number){
        if(index > 0){
            const abs = this.state.array;
            const a = abs[index - 1];

            abs[index - 1] = abs[index];
            abs[index] = a;

            this.setState({
                array : abs
            })
        } else{
            const x = this.state.array;
            x.push(x.shift());

            this.setState({
                array : x
            })
        }
        
    }
    sort2(index:number){
        
    }

    render(){
        return(
            <div>
                {this.state.array.map((element:any, index:number)=> {
                    return (<button className="btn btn-sm btn-primary m-4 p-5" onClick={() => {this.sort(index)}}>{element}</button>)
                })}
                {this.state.array.map((element:any, index:number)=> {
                    return (<button className="btn btn-sm btn-primary m-4 p-5" onClick={() => {this.sort2(index)}}>{element}</button>)
                })}
            </div>
        )
    }
}
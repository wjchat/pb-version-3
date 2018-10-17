'use strict';

const e = React.createElement;

const willPic = './img/facewill.svg';
const benPic = './img/faceben.svg';
const jedPic = './img/facejed.svg';

const will = {
    name: 'Will',
    face: willPic,
    title: 'Co-founder. Lead Developer.'
}
const ben = {
    name: 'Ben',
    face: benPic,
    title: 'Co-founder. Chief Producer.'
}
const jed = {
    name: 'Jed',
    face: jedPic,
    title: 'Head of Design.'
}

class Face extends React.Component{
    componentDidMount(){
        this.checkPosition();
    }
    handleClick = () =>{
        this.props.onClick(this.props.name);
    }
    componentDidUpdate(){
        this.checkPosition();
    }
    checkPosition = () =>{
        if(this.props.position === 'left'){
            TweenMax.to(this.refs.animate, .2,{
                x: '-15%',
                scale: .6,
                zIndex: 0,
                opacity: .5,
                filter: 'grayscale(100%)',
                pointerEvents:'auto',
                ease: 'ease-in-out',
            });
            TweenMax.to(this.refs.text, .2, {
                opacity: 0,
            })
        }        
        if(this.props.position === 'center'){
            TweenMax.to(this.refs.animate, .2,{
                x: '0%',
                scale: 1,
                zIndex: 2,
                opacity: 1,
                filter: 'grayscale(0%)',
                pointerEvents:'none',
                ease: 'ease-in-out',
            });
            TweenMax.to(this.refs.text, .2, {
                opacity: 1,
            })
        }        
        if(this.props.position === 'right'){
            TweenMax.to(this.refs.animate, .2,{
                x: '15%',
                scale: .6,
                zIndex: 0,
                opacity: .5,
                filter: 'grayscale(100%)',
                pointerEvents:'auto',
                ease: 'ease-in-out',
            });
            TweenMax.to(this.refs.text, .2, {
                opacity: 0,
            })
        }
    }

    render(){
        return(
            <face ref = 'animate'>
                <img onClick = {this.handleClick} src={this.props.face} alt={this.props.name}/>
                <h1>{this.props.name}</h1>
                <p ref = 'text'>{this.props.title}</p>
            </face>
        )
    }
}
class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            willPos: 'center',
            benPos: 'right',
            jedPos: 'left',
        }
    }
    handleClick = (face) =>{
        if(face === 'Will'){
            this.setState({
                willPos: 'center',
                benPos: 'right',
                jedPos: 'left',
            })
        }        
        if(face === 'Jed'){
            this.setState({
                willPos: 'right',
                benPos: 'left',
                jedPos: 'center',
            })
        }        
        if(face === 'Ben'){
            this.setState({
                willPos: 'left',
                benPos: 'center',
                jedPos: 'right',
            })
        }
    }
    render(){
        return(
            <container>
                <Face onClick = {this.handleClick} position = {this.state.willPos} face = {will.face} name = {will.name} title = {will.title} />                
                <Face onClick = {this.handleClick} position = {this.state.benPos} face = {ben.face} name = {ben.name} title = {ben.title} />
                <Face onClick = {this.handleClick} position = {this.state.jedPos} face = {jed.face} name = {jed.name} title = {jed.title} />
            <br/>
            </container>
        )
    }
}
const domContainer = document.querySelector('#app');
ReactDOM.render(e(Container), domContainer);

const home = document.querySelector('#home');
home.onclick = function(){
    TweenMax.to(body, .3, {
        opacity: 0,
        onComplete: function(){
            window.location = '/home.html';
        }
    })
}
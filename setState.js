/*in react can't get new value after immediately setState


handleChange: function() {
 if(shares) {
   this.setState({
     error_shares:''
   })
 } 
 if(this.state.error_shares === ''){
  console.log('entered!!')
 }
}

import React from 'react';

class Example extends React.Component {

    constructor(props, context) {
        super(props, context);
        // initial state
        this.state = {
            clicked: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.clicked);   // this will show "true"
    }

    render() {
        return (
            <button 
                onClick={() => {
                    this.setState({clicked: true}); 
                }}
            >
            </button>
        );
    }
 }

 ============================
I would like to ask why my state is not changing when I do an onclick event. 
I've search a while ago that I 
need to bind the onclick function in constructor but still the state is not updating. Here's my code:
 ============================


 import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import BoardAddModal from 'components/board/BoardAddModal.jsx';

import style from 'styles/boarditem.css';

class BoardAdd extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            boardAddModalShow: false
        }

        this.openAddBoardModal = this.openAddBoardModal.bind(this);
    }
    openAddBoardModal(){
        this.setState({ boardAddModalShow: true });
// After setting a new state it still return a false value
        console.log(this.state.boardAddModalShow);

    }

    render() {

        return (
            <Col lg={3}>
                <a href="javascript:;" className={style.boardItemAdd} onClick={this.openAddBoardModal}>
                    <div className={[style.boardItemContainer,style.boardItemGray].join(' ')}>
                        Create New Board
                    </div>
                </a>



            </Col>
        )
    }
}

export default BoardAdd

***************************Explanation*********************


Your state needs some time to mutate, and since console.log(this.state.boardAddModalShow) 
executes before the state mutates, you get the previous value as output. So you need to
 write the console in the callback to the setState function

openAddBoardModal(){
        this.setState({ boardAddModalShow: true }, function () {
             console.log(this.state.boardAddModalShow);
        });

}
setState is asynchronous. It means you can’t call setState on one line and assume 
state has changed on the next.

according to React docs

setState() does not immediately mutate this.state but creates a pending state transition.
 Accessing this.state after calling this method can potentially return the existing value.
  There is no guarantee of synchronous operation of calls to setState and calls 
  may be batched for performance gains.

Why would they make setState async

This is because setState alters the state and causes rerendering. 
This can be an expensive operation and making it synchronous might leave the browser unresponsive.

Thus the setState calls are asynchronous as well as batched for better UI experience and performance













*/
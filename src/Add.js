import React, {Component} from 'react';

class Add extends Component {
    input = React.createRef();
    render() {
        return (
            <div>
                <input type="text" ref={this.input}/>
                <button onClick={() => {
                    let subject = this.input.current.value;
                    this.props.onAdd(subject);
                }}>+
                </button>
            </div>
        );
    }
}

export default Add;
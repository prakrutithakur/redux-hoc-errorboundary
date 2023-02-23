import React from 'react';
import HOC from './HOC';

class CommentsCount extends React.Component {

    render() {
        return (
            <>
                <br />
                <div className='sabcenter' style={{ textAlign: "center" }}>
                    Hello {this.props.username}
                    <br />
                    {this.props.CountNumber}
                </div>
                <button onClick={this.props.handleClick}>Add More comments</button>

            </>
        );

    }
}
const EnhancedComments = HOC(CommentsCount, 10)
export default EnhancedComments;
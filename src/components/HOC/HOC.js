import React, { Component } from 'react';

const HOC = (Component, data) => {
    console.log("data", data);
    return class extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: data,
                name: JSON.stringify(localStorage.getItem("username"))
            }
        }
        handleClick = () => {
            this.setState({
                count: this.state.count + 1,
            })
        }


        render() {
            return (
                <div className='sabcenter'>
                    <Component username={this.state.name} CountNumber={this.state.count} handleClick={this.handleClick} />
                </div>
            );
        }
    };
};

export default HOC;
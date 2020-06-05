import React, { Component } from 'react'

export default class items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vote1: 0,
            vote2: 0,
            vote3: 0,

        }
    }

    onclick = (event) => {

        if (event == "nvotes1") {
            this.setState((state) => ({
                vote1: state.vote1 + 1
            })
            )
        } else if (event == "nvotes2") {
            this.setState((state) => ({
                vote2: state.vote2 + 1
            })
            )

        } else {
            this.setState((state) => ({
                vote3: state.vote3 + 1
            })
            )
        }

    }
    render() {
        return (

            <div className="wrapper">
                <h2>Vote For The Best</h2>
                <div className="item">
                    <a className="nvotes">{this.state.vote1}</a>
                    <a className="textvotes">JS</a>
                    <button type="button" class="test btn btn-outline-success" name="nvotes1" onClick={e => this.onclick(e.target.name)}>Click me</button>
                </div>
                <div className="item">
                    <a className="nvotes">{this.state.vote2}</a>
                    <a className="textvotes">HTML</a>
                    <button type="button" class="btn btn-outline-success" name="nvotes2" onClick={e => this.onclick(e.target.name)} >Click me</button>
                </div>
                <div className="item">
                    <a className="nvotes">{this.state.vote3}</a>
                    <a className="textvotes">CSS</a>
                    <button type="button" class="btn btn-outline-success" name="nvotes3" onClick={e => this.onclick(e.target.name)} >Click me</button>
                </div>

            </div>
        )
    }
}

import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';

import './styles/content-input.css';

const BASE_CLASS_NAME = block('content-input');

export default class ContentInput extends React.Component {
    static CLASS_NAME = BASE_CLASS_NAME;
    static ERROR_MSG_CLASS_NAME = BASE_CLASS_NAME('error-msg');

    constructor(props) {
        super(props);
        this.state = { 
            value: this.props.initialValue,
            lastSubmitValid: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.props.verifyInputOnSubmit(this.state.value)) {
            this.props.handleSubmit(this.state.value);
            this.setState({ lastSubmitValid: true})
        } else {
            this.setState({lastSubmitValid: false });
        }
    }

    render() {
        let renderInvalidInputMsg;
        if (!this.state.lastSubmitValid) {
            renderInvalidInputMsg = (<div className={this.constructor.ERROR_MSG_CLASS_NAME()}>{this.props.invalidSubmitMsg}</div>)
        }
        return (
            <form className={this.constructor.CLASS_NAME()} onSubmit={this.onSubmit}>
                <label>
                    {this.props.inputName + ": "}
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    {renderInvalidInputMsg}
                </label>
            </form>
        );
    }
}

ContentInput.propTypes = {
    currentValue: PropTypes.string,
    handleSubmit: PropTypes.func,
    verifyInputOnSubmit: PropTypes.func,
    invalidSubmitMsg: PropTypes.string,
    inputName: PropTypes.string,
    initialValue: PropTypes.string
}

ContentInput.defaultProps = {
    verifyInputOnSubmit: function(){ return true; },
    invalidSubmitMsg: "Invalid Input",
    initialValue: ""
}
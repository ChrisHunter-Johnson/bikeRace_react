import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showGrowl } from '../actions/actions.jsx'
import { showSuccessMessage } from '../utils/utils.js';
import { showInfoMessage } from '../utils/utils.js';
import { showWarningMessage } from '../utils/utils.js';
import { showErrorMessage } from '../utils/utils.js';
import { Button } from 'primereact/components/button/Button';

export class GrowlTest extends Component {
    constructor() {
        super();
    }

    onShowSuccessMessage = () => {
        showSuccessMessage(this, "System", "I am success growl");
    };

    onShowInfoMessage = () => {
        showInfoMessage(this, "System", "I am info growl");
    };

    onShowWarningMessage = () => {
        showWarningMessage(this, "System", "I am warning growl");
    };

    onShowErrorMessage = () => {
        showErrorMessage(this, "System", "I am error growl");
    };

    render() {
        return (
            <div>
                <div className="bottom-margin-small">
                    <Button label="Show success growl" onClick={this.onShowSuccessMessage} className="ui-button-success" />
                </div>
                <div className="bottom-margin-small">
                    <Button label="Show info growl" onClick={this.onShowInfoMessage} className="ui-button-info" />
                </div>
                <div className="bottom-margin-small">
                    <Button label="Show warning growl" onClick={this.onShowWarningMessage} className="ui-button-warning" />
                </div>
                <div className="bottom-margin-small">
                    <Button label="Show error growl" onClick={this.onShowErrorMessage} className="ui-button-danger" />
                </div>
            </div>
        )
    };
}

const mapDispatchToProps = {
    showGrowl
};

GrowlTest = connect(null, mapDispatchToProps)(GrowlTest)

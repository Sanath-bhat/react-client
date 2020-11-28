import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showFormView, saveCompany, setCompanyName, setCompanyId, setManager } from '../mystore/MyActions';
import { withRouter } from 'react-router-dom';

class AddEdit extends React.Component {

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.saveCompany(this.props);
        this.props.history.push('/');
    }


    onTextInputChange = (event) => {
        switch (event.target.name) {
            case 'companyName':
                this.props.setCompanyName(event.target.value);
                break;

            case 'companyId':
                this.props.setCompanyId(event.target.value);
                break;

            case 'manager':
                this.props.setManager(event.target.value);
                break;

            default:
                break;
        }
    }


    render() {
        return <div className="row">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" className="form-control" name="companyName" placeholder="Enter Company Name"
                            value={this.props.companyName} onChange={this.onTextInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company Id</label>
                        <input type="text" className="form-control" name="companyId" placeholder="Enter Company Id" 
                        value={this.props.companyId} onChange={this.onTextInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Manager</label>
                        <input type="text" className="form-control" name="manager" placeholder="Enter Manager Name" 
                        value={this.props.manager} onChange={this.onTextInputChange}
                        />
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    }
}

const mapStateToPros = (state) => {
    const { companyObject } = state;
    console.log(companyObject);
    return companyObject;
}

const mapDispathToPros = (dispatch) => {
    return bindActionCreators({ saveCompany, showFormView, setCompanyName, setCompanyId, setManager }, dispatch);
}

export default withRouter(connect(mapStateToPros, mapDispathToPros)(AddEdit));
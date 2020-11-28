import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { editCompany, deletCompany } from '../mystore/MyActions'
import { withRouter } from 'react-router-dom';


class ViewAll extends React.Component {


    render() {
        return <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Company Name</th>
                            <th>Company Id</th>
                            <th>Manager</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.companys.map((obj, index) => {
                            return <tr key={obj.id}>
                                <td>{index + 1}</td>
                                <td>{obj.companyName}</td>
                                <td>{obj.companyId}</td>
                                <td>{obj.manager}</td>
                                <td><button className="btn btn-primary" onClick={() => {
                                    this.props.editCompany(obj);
                                    this.props.history.push('/addedit')
                                }}>Update</button> <button className="btn btn-danger" onClick={() => {
                                    this.props.deletCompany(obj);
                                }}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    const { companyObject } = state;
    return companyObject;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({editCompany, deletCompany},dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewAll));
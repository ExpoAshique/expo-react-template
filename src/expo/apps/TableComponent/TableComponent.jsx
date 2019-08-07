import React from 'react'
import {Row, Col, Table, ToastHeader} from 'react-bootstrap'
import {DBCard, PageWrapper} from '../../components';
import { allTableData } from '../../../expo/redux/actions'
import { connect } from 'react-redux'

class TableComponent extends React.Component {
    render() {
        return (
            <PageWrapper>
                <Row>
                <div className="table table-responsive table-bordered table-hover col-md-6 mr-auto">
                <Table>
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                </Table>
                </div>

                <div className="table table-responsive table-bordered table-hover col-md-6">
                <Table>
                        <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                </Table>
                </div>
                </Row>
            </PageWrapper>
        )
    }
}


// export default TableComponent

const mapStateToProps = state => ({
  // tasks: state.task.tasks ? state.task.tasks.results : [],
})

const mapDispatchToProps = dispatch => ({
  allTableData:dispatch(allTableData())
})

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent)
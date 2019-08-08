import React from 'react'
import {Row, Col, Table, ToastHeader, Pagination} from 'react-bootstrap'
import {DBCard, PageWrapper} from '../../components';
import {allTableData} from '../../../expo/redux/actions'
import {connect} from 'react-redux'

class TableComponent extends React.Component {
    state={
        count:null
    }
    async componentDidMount() {
        const td = await this.props.allTableData()
        console.log('In componentDidMount td ',td)
        this.setState({
            count:td.count
        })
    }



    render() {
        const allTableData = this.props.table_data.results;
        console.log("allTableData ", allTableData);
        console.log("count ", this.state.count);

        return (
            <PageWrapper>
                <Row>
                    <div className="table table-responsive table-bordered table-hover col-md-6 mr-auto">
                        <Table>
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col"># ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Doi</th>
                                <th scope="col">Submission Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {allTableData && allTableData.map(item => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.title}</td>
                                    <td>{item.content_type_name}</td>
                                    <td>{item.doi}</td>
                                    {/*<td onClick={() => this.UpdateArticle(item.id)}>Edit</td>*/}
                                </tr>
                            ))}
                            </tbody>
                            <Pagination>
                            </Pagination>
                        </Table>
                    </div>

                    <div className="table table-responsive table-bordered table-hover col-md-6">
                        <Table>
                            <thead className="thead-light">
                            <tr>
                                <th scope="col"># ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Doi</th>
                                <th scope="col">Submission Date</th>
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
    // tasks: state.task.tasks ? state.task.tasks.results : []
    table_data: state.allTableData ? state.allTableData : []
})

const mapDispatchToProps = dispatch => ({
    allTableData: () => dispatch(allTableData())
})

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent)
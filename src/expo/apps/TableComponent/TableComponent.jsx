import React from 'react'
import { Row, Table } from 'react-bootstrap'
import { PageWrapper } from '../../components'
import { allTableData } from '../../../expo/redux/actions'
import { connect } from 'react-redux'
import { DataTable } from '../../components/common'

class TableComponent extends React.Component {
  state = {
    count: null,
    data: null,
  }

  async componentDidMount() {
    this.getallTableData()
  }

  getallTableData = async (pageNum = 1, page = 10) => {
    await this.props.allTableData({ pageNum: pageNum, pageSize: page })

    this.setState({
      data: this.props.table_data.results,
      count: this.props.table_data.count,
    })
  }
  pageChange = pageNumber => {
    this.allTableData(pageNumber)
  }
  onEditArticle = id => {
    this.props.history.push('/articles/edit-article/' + id)
  }
  onDeleteArticle = id => {
    if (id) {
      this.setState({
        deleteConfirm: true,
        articleId: id,
      })
    }
  }
  onViewArticle = () => {}
  onDeleteOaDealHander = async () => {
    // const articleId = this.state.articleId;
    // this.setState({
    //     waitingMsg: "Deleting..."
    // })
    // const article = await this.props.deleteOaDeal(articleId);
    // let data = this.state.data;
    // let newData = data
    // .filter(function(element) {
    //     return element.id !== articleId;
    // });
    // this.setState({
    //     waitingMsg: null,
    //     oAdealId: null,
    //     deleteConfirm: false,
    //     deleteStatus: article.status,
    //     data:newData
    // })
  }
  onCancel = () => {
    this.setState({
      deleteConfirm: false,
      articleId: null,
      waitingMsg: null,
      deleteStatus: null,
    })
  }

  render() {
    const heading = ['ID', 'Title', 'DOI', 'Submission Date']

    return (
      <PageWrapper>
        <Row>
          <div className="table table-responsive table-bordered table-hover col-md-6 mr-auto">
            {/*<Table>*/}
            {/*<thead className="thead-dark">*/}
            {/*<tr>*/}
            {/*<th scope="col"># ID</th>*/}
            {/*<th scope="col">Title</th>*/}
            {/*<th scope="col">Doi</th>*/}
            {/*<th scope="col">Submission Date</th>*/}
            {/*</tr>*/}
            {/*</thead>*/}
            {/*<tbody>*/}
            {/*{allTableData && allTableData.map(item => (*/}
            {/*<tr key={item.id}>*/}
            {/*<th scope="row">{item.id}</th>*/}
            {/*<td>{item.title}</td>*/}
            {/*<td>{item.content_type_name}</td>*/}
            {/*<td>{item.doi}</td>*/}
            {/*</tr>*/}
            {/*))}*/}
            {/*</tbody>*/}
            {/*</Table>*/}

            {this.state.data && (
              <DataTable
                heading={heading}
                data={this.state.data}
                onEdit={this.onEditArticle}
                onDelete={this.onDeleteArticle}
                onView={this.onViewArticle}
                count={this.state.count}
                pageChange={this.pageChange}
                pageSize={10}
              />
            )}
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
  table_data: state.allTableData ? state.allTableData : [],
})

const mapDispatchToProps = dispatch => ({
  allTableData: payload => dispatch(allTableData(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent)

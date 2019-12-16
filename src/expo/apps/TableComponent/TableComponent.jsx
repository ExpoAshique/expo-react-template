import React from 'react'
// import { Row, Table, Col } from 'react-bootstrap'
import { PageWrapper } from '../../components'
import { allTableData } from '../../../expo/redux/actions'
import { connect } from 'react-redux'
// import { DataTable } from '../../components/common'
import { Table as AntTable, Card as AntCard } from 'antd'
import moment from 'moment'

class TableComponent extends React.Component {
  state = {
    count: null,
    data: null,
    loading: false,
    page: 1,
    pageSize: 5,
  }

  async componentDidMount() {
    this.getallTableData()
  }

  getallTableData = async (page, pageSize) => {
    this.setState({ loading: true })
    await this.props.allTableData({ page, pageSize })
    this.setState({ loading: false })
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
  handleTableChange = (pagination, filters, sorter) => {
    this.getallTableData(pagination.current, pagination.pageSize)
  }

  render() {
    // const heading = ['ID', 'Title', 'DOI', 'Submission Date']

    const columns = [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: text => <span>{text}</span>,
        width: 150,
      },
      {
        title: 'Article ID',
        dataIndex: 'article_id',
        key: 'article_id',
        width: 80,
      },
      {
        title: 'Content Type',
        dataIndex: 'content_type_name',
        key: 'content_type_name',
        ellipsis: true,
      },
      {
        title: 'Grant number',
        dataIndex: 'grant_number',
        key: 'grant_number',
        ellipsis: true,
      },
      {
        title: 'Funder name',
        dataIndex: 'funder_name',
        key: 'funder_name',
        ellipsis: true,
      },
      {
        title: 'Approved date',
        dataIndex: 'approved_date',
        key: 'approved_date',
        ellipsis: true,
        render: text =>
          text
            ? moment(text)
                .startOf('hour')
                .fromNow()
            : 'Not approved yet',
      },
    ]

    return (
      <PageWrapper>
        <AntCard bodyStyle={{ padding: 0 }}>
          <AntTable
            columns={columns}
            dataSource={this.props.table_data.results}
            loading={this.state.loading}
            onChange={this.handleTableChange}
            pagination={{
              pageSize: this.state.pageSize,
              total: this.props.table_data.count,
              style: {
                float: 'none',
                textAlign: 'center'
              }
            }}
          />
        </AntCard>

        {/* <Row>
          <div className="table table-responsive table-bordered table-hover col-md-6 mr-auto">
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
        </Row> */}
      </PageWrapper>
    )
  }
}

// export default TableComponent

const mapStateToProps = state => ({
  // tasks: state.task.tasks ? state.task.tasks.results : []
  table_data: state.allTableData ? state.allTableData : {},
})

const mapDispatchToProps = dispatch => ({
  allTableData: payload => dispatch(allTableData(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent)

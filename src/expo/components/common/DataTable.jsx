import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import uuidv1 from 'uuid/v1';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  state = {
    rnd: false,
    isGoing: true,
    checkObj: {}
  }

  componentDidMount() {
    window.$('#datatable').DataTable({
      pageLength: this.props.pageSize || 10,
      paging: false
    });
    let table = window.$('#datatable-buttons').DataTable({
      pageLength: this.props.pageSize || 10,
      buttons: ['copy', 'excel', 'pdf', 'colvis'],
      scrollX: true,
      paging: false,
      bInfo: false
    });
    // //Buttons examples
    table.buttons().container().appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');


  }

  toTitleCase = (str) => {
    return str.replace(/_/g, ' ').charAt(0).toUpperCase() + str.replace(/_/g, ' ').substr(1).toLowerCase();
  }
  onChange = (e) => {
    this.setState((prevState) => {
      Object.assign(prevState.checkObj, { [e.target.name]: e.target.checked })
    })
    this.setState({
      checkObj: this.state.checkObj
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onChangePagination = (pageNumber) => {
    this.props.pageChange(pageNumber);
  }

  render() {
    function numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    let { wrap } = this.props;

    return (
      // dt-responsive for responsive. Will added later
      this.props.heading ?
        <div>
          <table id="datatable-buttons" className={"table table-striped" + (!wrap ? " nowrap" : "")} style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
            <thead className="text-white thead-dark">
              <tr>
                {this.props.heading.map((head, key) => {
                  return <th key={key} style={{ width: wrap && (head === 'title' || head === 'article_title' || head === 'article') ? '35%' : 'auto' }}>{this.toTitleCase(head.replace('_', ' ')).replace(/Vat|Oa/gi, function (x) {
                    return x.toUpperCase();
                  }).replace(/Deposit/gi, "Deposited").replace(/Token id/gi, "Token ID").replace(/Article id/gi, "Article ID").replace(/Currency name/gi, "Currency")}</th>
                })}
                {!this.props.noAction && <th>Action</th>}
                {this.props.checkbox && <th>Select</th>}
              </tr>
            </thead>
            <tfoot className="text-white thead-dark">
              <tr>
                {this.props.heading.map((head, key) => {
                  return <th key={key}>{this.toTitleCase(head.replace('_', ' ')).replace(/Vat|Oa/gi, function (x) {
                    return x.toUpperCase();
                  }).replace(/Deposit/gi, "Deposited").replace(/Token id/gi, "Token ID").replace(/Article id/gi, "Article ID").replace(/Currency name/gi, "Currency")}</th>
                })}
                {!this.props.noAction && <th>Action</th>}
                {this.props.checkbox && <th>Select</th>}

              </tr>
            </tfoot>

            <tbody>
              {this.props.data.map((data, i) => {
                return (
                  <tr key={uuidv1(data.id)}>
                    {this.props.heading.map((head, key) => {
                      if (typeof data[head] !== "object") {
                        if(head==="valid_from" || head==="valid_to" || head==="date" ){
                          return <td key={head}>{ data[head] ? moment(data[head]).format('Do MMM YYYY') : '-' }</td>
                        }else if(head==="amount" || head==="publish_fee" || head==="read_fee" || head==="total"){
                          return <td key={head}>{ data[head] ?  numberWithCommas( parseFloat(data[head]).toFixed(2)) : '-' }</td>
                        }else if(head==="deal_type" || head==="oa_deal" || head==="oa_deal_type" || head==="deal_name" ){
                          if(data[head] ==="pre-payment"){
                            return <td key={head}>{data[head] ? 'Pre-payment' : "-"}</td>
                          }else if(data[head] ==="read & publish"){
                            return <td key={head}>{data[head] ? 'Read & Publish' : "-"}</td>
                          }else if(data[head] ==="credit"){
                            return <td key={head}>{data[head] ? 'Credit' : "-"}</td>
                          }else{
                            return <td key={head}>{data[head] ? data[head] : "-"}</td>
                          }
                        }else{
                          return <td key={head}>{data[head] ? data[head] : "-"}</td>
                        }
                      } else {
                        return (
                          <td key={head}>
                            {data[head]
                              ? JSON.stringify(
                                  data[head],
                                )
                              : '-'}
                          </td>
                        )
                      }
                    })}
                    {!this.props.noAction &&
                      <td>
                      {data.approval_status !== 'approved' && !this.props.isChildOrgList && 
                        <span>
                          <span
                            className="cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              this.props.onDelete && this.props.onDelete(data.id);
                            }}
                            id="deleteBtn"
                            title="Delete"
                          >
                            <i className="mdi mdi-delete"></i>
                          </span> 
                          | 
                          <span
                              className="cursor-pointer"
                              onClick={(e) => {
                                e.preventDefault();
                                this.props.onEdit && this.props.onEdit(data.id, data);
                              }}
                              title="Edit"
                            >
                            <i className="mdi mdi-pen"></i>
                          </span>  
                          |
                        </span> 
                        }
                        <span
                            className="cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              this.props.onView && this.props.onView(data.id, data);
                            }}
                            title="View"
                          >
                          <i className="mdi mdi-eye"></i>
                        </span>
                      </td>}

                    {this.props.checkbox &&
                      <td>
                        <p style={{ textAlign: 'center' }}>
                          <Checkbox
                            checked={this.state.checkObj ? this.state.checkObj['selected' + data.id] : false}
                            disabled={this.state.disabled}
                            name={'selected' + data.id}
                            onChange={this.onChange}
                            ref={'ref' + data.id}
                            value={data.id}
                            onClick={() => {
                              this.props.onSelect && this.props.onSelect(data.id);
                            }}
                          >
                          </Checkbox>
                        </p>
                      </td>
                    }

                  </tr>)
              })}
            </tbody>
          </table>
          {this.props.count && <Pagination
            style={{ marginTop: 10, marginBottom: 20, textAlign: 'center' }}
            onChange={this.onChangePagination}
            pageSize={this.props.pageSize || 10}
            total={this.props.count || undefined}
          />}
        </div> :
        <div className="card">
          <div className="card-body">
            No Data Found
                </div>
        </div>
    )
  }
}

Table.propTypes = {
  heading: PropTypes.array
}

export const DataTable = Table

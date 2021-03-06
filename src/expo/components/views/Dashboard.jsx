import React from 'react'
import { PageWrapper } from '../layout'
import { Row, Col } from 'react-bootstrap'

export const Dashboard = () => {
  return (
    <PageWrapper heading="Dashboard">
      <div className="ml-auto">
        <span>Create</span>
      </div>
      <Row>
        <Col xl={4}>
          <div className="list-group mb-3">
            <div className="list-group-item">
              <div className="d-flex align-items-center py-3">
                <div className="w-50 px-3">
                  <p className="m-0 lead">120334</p>
                  <p className="m-0 text-sm">Commits this month</p>
                </div>
                <div className="w-50 px-3 text-center">
                  <div
                    data-sparkline=""
                    data-bar-color="#23b7e5"
                    data-height="60"
                    data-bar-width="10"
                    data-bar-spacing="6"
                    data-chart-range-min="0"
                    data-values="3,6,7,8,4,5"
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </PageWrapper>
  )
}

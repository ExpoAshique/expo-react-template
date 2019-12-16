import React from 'react'
import { Row } from 'react-bootstrap'
import { DBCard, PageWrapper } from '../../components'

class ProjectDashboard extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Row>
          <DBCard
            heading="Sample Card"
            subheading="Test Sub"
            icon="comment"
            viewText="Sample text"
          />
          <DBCard
            heading="Sample Card"
            subheading="Test Sub"
            icon="comment"
            viewText="Sample text"
          />
          <DBCard
            heading="Sample Card"
            subheading="Test Sub"
            icon="comment"
            viewText="Sample text"
          />
          <DBCard
            heading="Sample Card"
            subheading="Test Sub"
            icon="comment"
            viewText="Sample text"
          />
        </Row>
      </PageWrapper>
    )
  }
}

export default ProjectDashboard

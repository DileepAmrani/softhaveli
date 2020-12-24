import React from "react"
import { createUseStyles } from "react-jss"
import { Container, Row, Col } from "react-grid-system"
const useStyles = createUseStyles({
  header: {},
})
function Header() {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <Container lg>
        <Row>
          <Col sm={6}>
            <span>This Is A Big Hero Headline</span>
            <span>
              Azimuth is the perfect theme for developers, designers and
              entrepreneurs who need a sleek, modern SaaS site.
            </span>
          </Col>
          <Col sm={6}>One of three columns</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header

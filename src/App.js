import 'bootstrap/dist/css/bootstrap.css'
import { Col, Container, Row } from 'reactstrap'
import BuyList from './components/BuyList'
import ItemList from './components/ItemList'

function App() {
  return (
    <Container>
      <Row>
        <Col xs='6'>
          <ItemList />
        </Col>
        <Col xs='6'>
          <BuyList />
        </Col>
      </Row>
    </Container>
  )
}

export default App

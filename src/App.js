import 'bootstrap/dist/css/bootstrap.css'
import { Col, Container, Row } from 'reactstrap'
import BuyList from './components/BuyList'
import ItemList from './components/ItemList'
import MarketStore from './store/MarketStore'

const marketstore = new MarketStore()

function App() {
  // console.log(marketstore)
  return (
    <Container style={{ paddingTop: 30 }}>
      <Row>
        <Col md='6'>
          <ItemList marketstore={marketstore} />
        </Col>
        <Col md='6'>
          <BuyList marketstore={marketstore} />
        </Col>
      </Row>
    </Container>
  )
}

export default App

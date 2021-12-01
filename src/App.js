import 'bootstrap/dist/css/bootstrap.css'
import { Col, Container, Row } from 'reactstrap'
import BuyList from './components/BuyList'
import ItemList from './components/ItemList'
import MarketStore from './store/MarketStore'

const marketstore = new MarketStore()

function App() {
  console.log(marketstore)
  return (
    <Container>
      <Row>
        <Col xs='6'>
          <ItemList marketstore={marketstore} />
        </Col>
        <Col xs='6'>
          <BuyList />
        </Col>
      </Row>
    </Container>
  )
}

export default App

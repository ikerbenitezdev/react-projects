import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button }  from 'react-bootstrap';
import './App.css'
// import { type State, type Action} from './assets/types.d';
import { useStore } from './hooks/useStore'; 
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from './components/Icons';
import { AUTO_LANGUAGE } from './constants';
import { LanguageSelector } from './components/LanguageSelector';


function App() {
  const  { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage} = useStore()
  return (
    
      <Container fluid>
        <h1>Google Translate Clone</h1>
        <Row>
          <Col>
            <LanguageSelector
              type='from'
              value={fromLanguage}
              onChange={setFromLanguage}
            />{fromLanguage}
          </Col>
          <Col>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}><ArrowsIcon/></Button>
      
          </Col>
          <Col>
            <LanguageSelector 
              type='to'
              value={toLanguage}
              onChange={setToLanguage}/>{toLanguage}
          </Col>
        </Row>
        

      </Container>
   
    
  )
}

export default App

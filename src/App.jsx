import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Table from './components/Table'
import Form from './components/Form'

function App() {
  return (
    <>
    <Header />
      <h2 className='text-center mt-5 mb-5 text-primary'>IMC - Índice de Massa Corporal</h2>
      <div className="container">
        <div className="row mt-4 mb-4">
          <div className="col-4">
            <Form />
          </div>
          <div className="col-1">
          <></>
          </div>
          <div className="col-7">
            <Table  />
          </div>
        </div>
      </div>
    </>
  )
}


export default App

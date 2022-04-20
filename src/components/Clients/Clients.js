import Clients from '../../../assets/Clients.png'
import './Clients.css'

const ClientsList = () => {
  return (
    <div>
      <h2>Clients</h2>
      <div>
        <img src={Clients} className="client-container"/>
      </div>
    </div>
  )
}

export default ClientsList;
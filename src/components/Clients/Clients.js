import Clients from '../../../assets/Clients.png'

import './Clients.css'

const ClientsList = () => {
  return (
    <div>
      <h2>Clients</h2>
      <div>
        <img src={Clients} alt="Clients" className="responsive-png"/>
      </div>
    </div>
  )
}

export default ClientsList;
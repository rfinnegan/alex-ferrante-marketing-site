import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    const newContact = (event) => {
      event.target.value = ''
      event.preventDefault()
    }

    
    // how to take this info and not display it on screen
    // add a message to say it was successful after submission
    // express to listen for http requests
    // nodemailer to send it

    return (
      <div>
        <FontAwesomeIcon icon={faInstagramSquare} />
      </div>
    )
  }
  
  export default Contact
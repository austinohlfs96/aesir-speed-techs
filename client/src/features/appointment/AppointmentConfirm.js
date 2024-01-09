import { Modal, Card } from 'semantic-ui-react';
import ConfirmEmail from './ConfirmEmail';
const ConfirmAppt = ({showPaymentModal, handlePaymentModalClose, calculateTotal, appointment, handleItemClick}) => {
  return (
    <Modal open={showPaymentModal} onClose={handlePaymentModalClose}>
        <Modal.Header>Confirm Appointment</Modal.Header>
        <h2 style={{ color: 'red', textAlign: 'center' }}>Please double check all the information below and add you phone number and additonal notes.</h2>
          <Modal.Content>
          <h3>Appointment ID #{appointment.id}</h3>
        <h3>Pick-up: {appointment.pickup_location}</h3>
          <h3>Drop-off: {appointment.dropoff_location}</h3>
          <h3>Pickup date: {appointment.booking_time}</h3>
          <h3>Athlete Services: {appointment.athlete_services.length}</h3>
          <ConfirmEmail appointment={appointment} handlePaymentModalClose={handlePaymentModalClose} handleItemClick={handleItemClick}/>
          </Modal.Content>
        </Modal>
  )
}

export default ConfirmAppt;
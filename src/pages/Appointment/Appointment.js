import Footer from "../../components/Footer/Footer";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="content">
      <div className="appointmentContent">
        <div className="appointmentCalendar">Calendar</div>
        <div className="appointmentText">
          <p className="appointmentTitle">Make an appointment</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <p>
            <b>Check appointment availability on calendar ...</b>
          </p>
          <button className="appointmentButton">BOOK APPOINTMENT NOW!</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Appointment;

import PatientBox from "../../Components/PatientBox/PatientBox";
import { icon } from "../../External/design";

const Patients = () => {
  const patientBoxHeaders = [
    'Tag',
    'Patient Full Name',
    'Coverage',
    'To See',
    'Specialty',
    'Room',
    'Clinic',
    'Since',
    'Booked By'
  ];

  const patient = {
    pid: '001',
    img: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1700674233/blog-header-3_dab7lb.webp',
    name: 'Osei Andrews',
    coverage: 'Private',
    toSee: 'Doctor',
    specialty: 'Emergency Consultation (Adult)',
    room: 'Emergency Room',
    clinic: 'Emergency Clinic',
    since: '03-05-23 10:45 AM',
    bookedBy: 'Dr. Omar Rodriguez'
  }

  return (
    <section className="wrapper">
      <header className="titleBox">
        <strong>Patients</strong>

        <form>
          <legend>Register Patient</legend>
        </form>
      </header>

      <section className="filterBox">
        <div>
          {icon('search')}
          <input type="text" value="" placeholder="search For Patient" />
        </div>

        <select>
          <option value="">All Departments</option>
        </select>

        <legend>
          {icon('sort')}
          <span>Filter</span>
        </legend>

        <legend>
          {icon('event')}
          <span>Date</span>
        </legend>
      </section>

      <PatientBox props={{dataType : 'patient', headerType : 1, patientBoxHeaders, patient}} />

    </section>
  );
}

export default Patients;
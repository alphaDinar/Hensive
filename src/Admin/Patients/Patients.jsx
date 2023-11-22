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

      <PatientBox props={{patientBoxHeaders, headerType : 1}} />

    </section>
  );
}

export default Patients;
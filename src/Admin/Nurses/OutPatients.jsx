import PatientBox from "../../Components/PatientBox/PatientBox";
import { icon } from "../../External/design";

const OutPatients = () => {
  const patientBoxHeaders = [
    'ID',
    "Patient's Details",
    'Gender',
    'Age',
    'Marital Status',
    'Date Admitted',
    'Bed Number',
  ];

  const patient = {
    pid: '001',
    img: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1700674233/blog-header-3_dab7lb.webp',
    name: 'Osei Andrews',
    gender : 'Male',
    age: '32',
    maritalStatus: 'Single',
    dateAdmitted : '23rd March, 2023',
    bedNumber : 'N003'
  }

  return ( 
    <section className="wrapper">
      <header className="titleBox">
        <strong>OPD</strong>

        <form>
          <legend>Register Patient</legend>
          <select>
            <option value="">Requisition</option>
          </select>
        </form>
      </header>

      <section className="filterBox">
        <div>
          {icon('search')}
          <input type="text" value="" placeholder="search For Patient" />
        </div>
      </section>

      <PatientBox props={{dataType : 'outPatient', headerType : 2, patientBoxHeaders, patient}} />

    </section>
   );
}
 
export default OutPatients;
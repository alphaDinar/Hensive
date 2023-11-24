import { useEffect, useState } from 'react';
import styles from './patientBox.module.css';
import { icon } from '../../External/design';
import { Link } from 'react-router-dom';

const PatientBox = ({ props }) => {
  const { dataType } = props;
  const { headerType } = props;
  const { patientBoxHeaders } = props;
  const { patient } = props;

  const [headerStyle, setHeaderStyle] = useState(null);

  useEffect(() => {
    if (headerType === 1) {
      setHeaderStyle(styles.headerStyle1)
    } else if (headerType == 2) {
      setHeaderStyle(styles.headerStyle2)
    }else if (headerType == 3) {
      setHeaderStyle(styles.headerStyle3)
    }
  }, [headerType])


  const profile = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1700674233/blog-header-3_dab7lb.webp';

  return (
    <>
      <section className={styles.patientBox}>
        <header className={headerStyle}>
          {patientBoxHeaders.map((el) => (
            <strong>{el}</strong>
          ))}
        </header>
        {dataType === 'patient' &&
          Array(5).fill().map((el) => (
            <li className={headerStyle}>
              <span>{patient.pid}</span>
              <p>
                <img src={patient.img} />
                <span>{patient.name}</span>
              </p>
              <span>{patient.coverage}</span>
              <span>{patient.toSee}</span>
              <span>{patient.specialty}</span>
              <span>{patient.room}</span>
              <span>{patient.clinic}</span>
              <article>
                <span>03-05-2023</span>
                <small style={{ color: 'salmon' }}>10:30 AM</small>
              </article>
              <span>{patient.bookedBy}</span>
            </li>
          ))
        }

        {dataType === 'outPatient' &&
          Array(5).fill().map((el) => (
            <li className={headerStyle}>
              <span>{patient.pid}</span>
              <p>
                <img src={patient.img} />
                <span>{patient.name}</span>
              </p>
              <span>{patient.gender}</span>
              <span>{patient.age}</span>
              <span>{patient.maritalStatus}</span>
              <span>{patient.dateAdmitted}</span>
              <span>{patient.bedNumber}</span>
            </li>
          ))
        }

        {dataType === 'consultation' &&
          Array(5).fill().map((el) => (
            <li className={headerStyle}>
              <span>{patient.pid}</span>
              <p>
                <img src={patient.img} />
                <span>{patient.name}</span>
              </p>
              <span>{patient.dob}</span>
              <span>{patient.phoneNumber}</span>
              <span>{patient.lastAttended}</span>
              <Link>{icon('visibility')}</Link>
            </li>
          ))
        }

        {dataType === 'doctorDashboard' &&
          Array(5).fill().map((el) => (
            <li className={headerStyle}>
              <span>{patient.pid}</span>
              <p>
                <img src={patient.img} />
                <span>{patient.name}</span>
              </p>
              <span>{patient.gender}</span>
              <span>{patient.time}</span>
              <span>{patient.priority}</span>
              <Link>{icon('visibility')}</Link>
            </li>
          ))
        }
      </section>

      <nav className={styles.patientBoxNav}>
        <legend className='flipBox'>{icon('double_arrow')} Prev</legend>
        <p>
          <small>1</small>
          <small>2</small>
          <small>3</small>
        </p>
        <legend>Next {icon('double_arrow')}</legend>
      </nav>
    </>
  );
}

export default PatientBox;
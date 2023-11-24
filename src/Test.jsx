const Test = () => {
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
    <section>
      <table>
        {Array(5).fill().map((el) => (
          <tr>
            <td>{patient.pid}</td>
            <td>
              <img src={patient.img} />
              <span>{patient.name}</span>
            </td>
            <td>{patient.coverage}</td>
            <td>{patient.toSee}</td>
            <td>{patient.specialty}</td>
            <td>{patient.room}</td>
            <td>{patient.clinic}</td>
            <td>
              <span>03-05-2023</span>
              <small style={{ color: 'salmon' }}>10:30 AM</small>
            </td>
            <td>{patient.bookedBy}</td>
          </tr>
        ))}
      </table>
    </section>
  );
}

export default Test;
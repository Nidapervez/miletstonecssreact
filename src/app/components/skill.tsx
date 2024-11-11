"use client"

const Skill = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Skills</h1>
      <div style={styles.skill}>
        <ul>
          <li>
            <h3>HTML</h3><p>90%</p>
            <span style={styles.bar}><span style={styles.html}></span></span>
          </li>
          <li>
            <h3>CSS</h3><p>100%</p>
            <span style={styles.bar}><span style={styles.css}></span></span>
          </li>
          <li>
            <h3>PHP</h3><p>70%</p>
            <span style={styles.bar}><span style={styles.php}></span></span>
          </li>
          <li>
            <h3>JavaScript</h3><p>80%</p>
            <span style={styles.bar}><span style={styles.javascript}></span></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#fff',
    color: '#333',
  },
  title: {
    textAlign: 'center',
    margin: '20px 0',
    color: '#FB374D',
  },
  skill: {
    width: '500px',
    margin: '60px auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    boxShadow: '0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22)',
  },
  bar: {
    backgroundColor: '#ddd',
    width: '100%',
    display: 'block',
    height: '20px',
    border: '2px solid rgba(0, 0, 0, .3)',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(.25, .7, .25, 1)',
  },
  html: {
    width: '90%',
    background: 'linear-gradient(135deg, rgba(236, 0, 140, 1) 0%, rgba(252, 103, 103, 1) 100%)',
  },
  css: {
    width: '100%',
    background: 'linear-gradient(135deg, rgba(236, 0, 140, 1) 0%, rgba(252, 103, 103, 1) 100%)',
  },
  php: {
    width: '70%',
    background: 'linear-gradient(135deg, rgba(236, 0, 140, 1) 0%, rgba(252, 103, 103, 1) 100%)',
  },
  javascript: {
    width: '80%',
    background: 'linear-gradient(135deg, rgba(236, 0, 140, 1) 0%, rgba(252, 103, 103, 1) 100%)',
  },
};

export default Skill;

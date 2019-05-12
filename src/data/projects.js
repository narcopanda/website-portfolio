import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
//import project3 from '../assets/project3.png';

const PROJECTS = [
  {
    id: 1,
    title: 'Quizzical',
    description: 'Built a CRUD web app with a REACT frontend, a node js backend and a MYSQL database, all hosted on heroku.',
    link: 'https://github.com/narcopanda/Quzzical',
    image: project1
  },
  {
    id: 2,
    title: 'Assembler',
    description: 'Built an assembler in Scala for a custom assembly language that takes in input and parses the instruction into binary.',
    link: 'https://github.com/narcopanda',
    image: project2

  },
  {
    id: 3,
    title: 'PhoneBook',
    description: 'Built a Java application using the spring framework that interacts with a MySQL database hosted on a AWS RDS.',
    link: 'https://github.com/narcopanda/Projects/tree/master/Java/mysqlJPA-demo/mysqlJPA-demo',
    image: project2
  }
]

export default PROJECTS

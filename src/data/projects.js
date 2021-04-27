import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const PROJECTS = [
    {
        id: 1,
        title: 'Example SpringBoot Application',
        description: 'A Gradle project using Apache Kafka with SpringBoot',
        link: 'https://github.com/ikoinaris/library',
        image: project1
    },
    {
        id: 2,
        title: 'MEAN Application',
        description: 'Project based on MEAN Stack (Angular, NodeJS, Express and MongoDB)',
        link: 'https://github.com/ikoinaris/MEANProject',
        image: project2
    },
    {
        id: 3,
        title: 'Hotel Application',
        description: 'This Project has been created using Spring Boot and MongoDb.',
        link: 'https://github.com/ikoinaris/Hotel-Project',
        image: project3
    }
];

export default PROJECTS;
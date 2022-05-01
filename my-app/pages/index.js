import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cathedral_of_Albi_-_Nave_and_Organ_-_7029.jpg',
    adress: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup'
  },{
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cathedral_of_Albi_-_Nave_and_Organ_-_7029.jpg',
    adress: 'Some address 6, 125345 Some City',
    description: 'This is a second meetup'
  },

]

function HomePage() {
  return <Layout> <MeetupList meetups={DUMMY_MEETUPS } /></Layout>
}

export default HomePage;
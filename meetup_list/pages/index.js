import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'Art Meetup',
        image: 'https://www.hyderabadtourism.travel/images/tourist-places/kbr-national-park-hyderabad/kbr-national-park-hyderabad-india-tourism-history.jpg',
        address: 'kbr park,KBR Park Peripheral Jogging Track, Kasu Brahmananda Reddy National Park, Jubilee Hills, Hyderabad, Telangana 500096'

    },
    {
        id: 'm2',
        title: 'Dance Meetup',
        image: 'https://secure-content.meetupstatic.com/images/classic-events/520943031/676x380.jpg',
        address: 'Remedy Hospital Ln, above Apollo pharmacy, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072'
    }
]

const HomePage = (props) =>{
    return(
        <MeetupList  meetups={props.meetups}/>
    )
}

// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

// export function getStaticProps() {
//     return {
//         props : {
//             meetups : DUMMY_MEETUPS
//         },
//         revalidate: 1
//     }
// }

export async function getStaticProps(){
       
        const client = await MongoClient.connect('mongodb+srv://naresh:iUd1FPyU8XVm6FEJ@cluster0.ni40gei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const meetupsCollection = db.collection('meetups')

        const meetups = await meetupsCollection.find().toArray();

        client.close();

        return{
            
            props: {
                meetups: meetups.map(meetup => ({
                    title: meetup.data.title,
                    image: meetup.data.image,
                    address: meetup.data.address,
                    description: meetup.data.description,
                    id: meetup._id.toString()
                }))
            },
            revalidate: 1
        }

}

export default HomePage;
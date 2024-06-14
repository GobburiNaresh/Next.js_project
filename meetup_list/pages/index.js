import MeetupList from '../components/meetups/MeetupList';


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

const HomePage = () =>{
    return(
        <MeetupList  meetups={DUMMY_MEETUPS}/>
    )
}

export default HomePage;
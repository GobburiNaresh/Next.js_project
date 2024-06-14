import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
    function addMeetupHandler(meetupData){
        console.log(meetupData)
    }

    return(
        <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
    )
    
}

export default NewMeetupPage;
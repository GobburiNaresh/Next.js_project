import {useRouter} from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const router = useRouter();
    async function addMeetupHandler(meetupData){
        console.log(meetupData);
        const response = await fetch('/api/meetups',{
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);

        router.push('/');
        
    }

    return(
        <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
    )
    
}

export default NewMeetupPage;
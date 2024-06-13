import Link from 'next/link';

const AboutUs = () => {
    const details = [
        { id: '1', name: 'Yash' },
        { id: '2', name: 'Vaibhav' },
        { id: '3', name: 'Suresh' }
    ];

    return (
        <div>
            <h1>Developers</h1>
            <ul>
                {details.map(dev => (
                    <li key={dev.id}>
                        <Link href={`/aboutus/${dev.id}`}>{dev.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AboutUs;

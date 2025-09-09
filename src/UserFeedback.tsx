import { useState } from 'react';

function UserFeedback() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState ("");
    const [submitted, setSubmitted] = useState(false);
    const [sentName, setSentName] = useState("");
    const [sentMessage, setSentMessage] = useState("");

        const handleSend = () => {
            if (name.trim() === "" || message.trim() === "") { //trim poistaa edestä ja takaa välilyönnit, jotta niitä ei luettaisi merkkijonoksi ja tarkastaminen helpompaa.
                // === taas katsoo onko tekstikenttä tosiaan tyhjä eli täysin yhtäsuuri kuin "".
                alert("Täytä molemmat kentät ennen lähettämistä.");
                return;
            }
            setSentName(name);
            setSentMessage(message);
            setSubmitted(true);
            setName("");
            setMessage("");
        };
	
	return (
		<div>
		    <h2>Anna palautetta</h2>
            <label>Nimi: </label>
			<input type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Nimi'/>
            <br />
            <br />
            <label>Vietikenttä: </label>
            <textarea
             id="message"
             value={message}
             onChange={e => setMessage(e.target.value)}
             rows={4}
             placeholder='Kirjoita palautteesi tähän.'
             ></textarea>
             <br />
                <button onClick={handleSend}>Lähetä</button>
                {submitted && (
                    <div>
                        <h3>Palautteesi:</h3>
                        <p><strong>Nimi:</strong> {sentName}</p>
                        <p><strong>Viesti:</strong> {sentMessage}</p>
                    </div>
                )}
		</div>
	);
}

export default UserFeedback;

import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Form = () => {
    const [toName, setToName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("")
    const formRef = useRef();

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmitButton = (e) => {
        e.preventDefault();
        setIsLoading(true)

        emailjs.sendForm("service_ceokqdo", "template_lc2j1qd", formRef.current, "544pD2BdKIuLpCCQQ")
        .then((result) => {
            setIsLoading(false)
            setToName("")
            setEmail("")
            setMessage("")
            setSubject("")
            alert("Email sent successfully")
            console.log("Email sent", result.text);
        }, (error) => {
            setIsLoading(false)
            console.log("Failed", error.text);
        });

    };

    return ( 
        <>
        <div className="wrapper">
        <form className="email-form" ref={formRef}onSubmit={handleSubmitButton}>
            <h1>Email your buddy!</h1>
            
            <label htmlFor="to_name">To Name:</label>
            <input 
                type="text" 
                name="to_name" 
                placeholder="Recipient's Name" 
                required
                onChange={(e) => setToName(e.target.value)}
                value={toName}
            />

            <label htmlFor="subject">Subject:</label>
            <input 
                type="text" 
                name="subject" 
                placeholder="Email's Subject" 
                required
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
            />

            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                name="to_email" 
                placeholder="example@example.com" 
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label htmlFor="message">Your message:</label>
            <input 
                type="text" 
                name="message"
                placeholder="Hi there !" 
                required
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />
            
            <button type="submit">Send</button>

            {isLoading && <div><h1> Loading...</h1></div>} 
        </form>
        </div>
        </>
    );
};

export default Form;

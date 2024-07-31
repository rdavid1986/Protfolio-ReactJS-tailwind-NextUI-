import React from 'react';
import { Input, Textarea } from "@nextui-org/react";
import emailjs from 'emailjs-com';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'default_service';
        const templateID = 'template_ixd09d8';
        const userID = 'sOWzkIQ9WHtq8vya6';

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log("Message sent:", result.text);
                alert('Message sent successfully');
            }, (error) => {
                console.log("Error:", error.text);
                alert('There was an error sending the message.');
            });
    };

    return (
        <section className="h-screen flex flex-col items-center justify-center flex-grow h-full  sm:w-[80%]">
            <h1 className="text-customGray text-4xl mb-9 mt-9 text-center">I look forward to your message</h1>

            <form onSubmit={handleSubmit} className="flex flex-col sm:w-1/4 gap-4">
                <Input
                    type="text"
                    name="fullName"
                    variant="bordered"
                    label="Full Name or enterprise"
                    style={{ color: 'gray', backgroundColor: 'black' }}
                />

                <Input
                    type="email"
                    name="email"
                    required
                    variant="bordered"
                    label="Email"
                    style={{ color: 'gray', backgroundColor: 'black' }}
                />

                <Input
                    type="phone"
                    name="phone"
                    variant="bordered"
                    label="Phone Number"
                    style={{ color: 'gray', backgroundColor: 'black' }}
                />

                <Textarea
                    name="message"
                    label="Your message"
                    required
                    variant="bordered"
                    placeholder="Enter your message"
                    disableAnimation
                    disableAutosize
                    classNames={{ base: "max-w-md", input: "resize-y min-h-[40px] text-gray-500" }}
                />
                <button
                    type="submit"
                    id="submitButton"
                    className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md"
                >
                    Submit
                </button>
            </form>
        </section>
    );

};

export default Contact;

import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();

    const handleMessage = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const newMessage = { name, email, message};

       //  console.log(newMessage);

       // send data to the server

    //    fetch('/api/contact', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newMessage)
    //     })
    //  .then(response => response.json())

        toast.success("Message Received Successfully");
        navigate('/');
    }
    return (
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <form onSubmit={handleMessage} action="#">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="w-full">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium ">Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Name" required></input>
                            </div>
                            <div className="w-full">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium ">Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Email" required></input>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium ">Message</label>
                                <textarea id="message" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Message" required></textarea>
                            </div>
                            
                        </div>
                        <div className="form-control mt-6 p-0">
                            <button type='submit' className="btn bg-green-500 text-white">Send Message</button>
                        </div>
                    </form>
        </div>
    );
};

export default Contact;
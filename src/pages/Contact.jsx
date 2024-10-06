import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form and set errors if any
    };

    return (
        <section>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            {errors.message && <span>{errors.message}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
        </section>
    );
};

export default Contact;
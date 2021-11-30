import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorSubmitting, setErrorSubmitting] = useState(false);

  const notBlank = (field) => {
    return field !== '';
  }

  const submittable = () => {
    return notBlank(name) && notBlank(phone) && notBlank(email) && notBlank(question);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!submittable()) {
      return;
    }

    const formData = {
      name,
      phone,
      email,
      question,
    };

    try {
      const emailResp = await fetch('api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await emailResp.json();
      console.log('result: ', result);
      
      setSubmitted(true);
      setName('');
      setPhone('');
      setEmail('');
      setQuestion('');
    } catch (err) {
      setErrorSubmitting(true);
    }
  }

  return (
    <>
      {submitted && (
        <h4 className="success">Thank you!<br />We'll get back to you shortly.</h4>
      )}
      {!submitted && (
        <form className="form" onSubmit={handleSubmit}>
        <div className="form__row">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        
        <div className="form__row">
          <label htmlFor="phone">Phone*</label>
          <input
            type="phone"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>

        <div className="form__row">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="form__row">
          <label htmlFor="question">Question*</label>
          <textarea
            id="question"
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
          />
        </div>

        <div className="form__row">
          {errorSubmitting && (
            <p>Sorry, there was an error submitting your form.</p>
          )}
          <button
            className="btn btn--primary"
            disabled={!submittable()}
            type="submit"
            aria-label="Submit form"
          >
            Submit
          </button>
        </div>
      </form>
      )}
    </>
  );
}

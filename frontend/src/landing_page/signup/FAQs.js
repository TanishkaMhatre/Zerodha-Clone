import React, { useState } from 'react';

const faqs = [
    {
        question: "What is a Zerodha account?",
        answer: "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally."
    },
    {
        question: "What documents are required to open a demat account?",
        answer: "You need a PAN card, Aadhaar card, bank proof (cancelled cheque or bank statement), and a passport-size photograph."
    },
    {
        question: "Is Zerodha account opening free?",
        answer: "No, Zerodha charges a one-time account opening fee. However, there are no brokerage charges for equity delivery trades."
    },
    {
        question: "Are there any maintenance charges for a demat account?",
        answer: "Yes, there is an annual maintenance charge (AMC) for maintaining a demat account."
    },
    {
        question: "Can I open a demat account without a bank account?",
        answer: "No, a bank account is required to link for transactions and fund transfers."
    }
];

function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="container mt-5 px-3 py-4">
            <h2 className="mb-4 text-center">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="mb-4 p-3 rounded shadow-sm"
                    style={{ backgroundColor: '#f8f9fa' }}
                >
                    <h5
                        className="fw-bold d-flex justify-content-between align-items-center mb-2"
                        onClick={() => toggleFAQ(index)}
                        style={{ cursor: 'pointer' }}
                    >
                        {faq.question}
                        <span style={{ fontSize: '1.2rem' }}>
                            {openIndex === index ? '˄' : '˅'}
                        </span>
                    </h5>
                    {openIndex === index && (
                        <p className="text-muted mt-2">{faq.answer}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FAQs;

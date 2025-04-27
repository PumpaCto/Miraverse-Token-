import React from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is Miraverse Token?",
      answer: "Miraverse Token is the gateway to a universe where anime, gaming, and blockchain merge into a new digital frontier."
    },
    {
      question: "Where can I buy Miraverse Token?",
      answer: "Soon on major DEXs. Stay tuned for updates on our website and official social media!"
    },
    {
      question: "What is the vision of Miraverse?",
      answer: "To build a decentralized anime-based open world where players create, explore, and earn real value."
    },
    {
      question: "Will there be NFTs in Miraverse?",
      answer: "Yes! NFT collections featuring unique characters, items, and lands are part of our future roadmap."
    },
    {
      question: "How can I join the community?",
      answer: "Follow us on Telegram and Twitter to stay updated and be part of the Miraverse movement!"
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8 animate-fade-in">
        Frequently Asked Questions
      </h1>
      <div className="max-w-4xl w-full space-y-6 animate-fade-in-delay">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-cyan-400 rounded-lg p-4 shadow-lg hover:bg-gray-800 transition">
            <h2 className="text-xl font-bold mb-2 text-yellow-400">{faq.question}</h2>
            <p className="text-white">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

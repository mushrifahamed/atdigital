import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer vitae nulla faucibus nisl."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc elit egestas fermentum."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-poppins text-center text-bluish-purple mb-8">Frequently asked questions</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-[846px]">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden"
                >
                  <div
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
                  >
                    <h3 className={`text-lg font-medium ${openIndex === index ? "text-bluish-purple" : "text-black"}`}>
                      {faq.question}
                    </h3>
                    <span className={`text-2xl ${openIndex === index ? "text-bluish-purple" : "text-black"}`}>
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="p-4 text-gray-700 bg-gray-50">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

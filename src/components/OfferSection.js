import React from "react";

const OfferSection = () => {
  const offerings = [
    {
      title: "Health AI",
      description:
        "Transforming healthcare with AI-powered diagnostics and personalized treatment plans for better patient outcomes.",
    },
    {
      title: "Climate AI",
      description:
        "Empowering environmental decision-making with real-time climate data and AI-driven insights.",
    },
    {
      title: "Habits AI",
      description:"Leveraging AI to understand behavior patterns and suggest actionable steps for positive change.",
    },
  ];

  return (
    <section className="offerings-section">
      <h2>Our Offerings</h2>
      <div className="offerings-container">
        {offerings.map((offering, index) => (
          <div className="offering-card" key={index}>
            <h3>{offering.title}</h3>
            <p>{offering.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;

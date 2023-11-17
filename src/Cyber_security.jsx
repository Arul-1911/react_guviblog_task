import React from 'react';

const cardData = [{ id: 1, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp', 
text: 'What Is Hacking? Types of Hacking & More',
desc: 'Have you ever wondered what hacking is all about? It’s a big deal in today’s',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/what-is-hacking/" },

{ id: 2, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2020/11/cyber-security-e1614342903477.png', 
text: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
desc: 'Cybersecurity & Ethical hacking and have been key in making sure that your data online',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/" },

{ id: 3, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif', 
text: 'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
desc: 'Look around today, you will witness that we are more reliant on technology and devices',
comments:"17 November 2023  No Comments" ,
link:"https://www.guvi.in/blog/what-is-cybersecurity/"},

{ id: 4, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png', 
text: '8 Different Types of Cybersecurity and Threats Involved',
desc: 'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/types-of-cybersecurity/" },

{ id: 5, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif', 
text: 'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
desc: 'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/coding-for-cybersecurity/" },

{ id: 6, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact.jpg', 
text: 'Top 7 Cyber Security Attacks in Real Life',
desc: 'Cyber security attacks are the type of actions that are designed to destroy, steal, modify,',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/cyber-security-attacks-in-real-life/" }]







const Cyber_security = () => {
    return (
        <div className="row mx-auto">
          <div className="row justify-content-center mt-3">
    
            {cardData.map((card) => (
              <div key={card.id} className="col-md-4 mt-3">
                <div className="card">
                  <img className="card-img-top" src={card.imageUrl} alt={`Card ${card.id} image cap`} />
                  <div className="card-body">
                    <h3 className="card-text">{card.text}</h3>
                    <p>{card.desc}</p>
                    <a href={card.link} className='readmore'>Readmore..</a>
                    <hr/>
                    <p className='comment'>{card.comments}</p>
                  </div>
                </div>
              </div>
            ))}
    
          </div>
        </div>
      );
};

export default Cyber_security;

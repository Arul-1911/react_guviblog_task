import React from 'react';

const cardData = [
    { id: 1, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp', 
    text: 'Top Ways to Assess Soft Skills in Full Stack Developers in 2023',
    desc: 'When you’re hiring a full-stack developer, what are the most important things you look for?',
    comments:"17 November 2023  No Comments",
    link:"https://www.guvi.in/blog/assessing-soft-skills-in-full-stack-developers/" },
  
    { id: 2, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp', 
    text: 'Top Differences: Full Stack Developer vs Software Engineer 2023',
    desc: 'A Full Stack Developer is a tech all-rounder. They work on both the front and',
    comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/full-stack-developer-vs-software-engineer/" },
  
    { id: 3, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp', 
    text: 'Horizontal vs Vertical Scaling for Efficient System Design',
    desc: 'In the world of system design, envision a digital skyscraper – a multifaceted structure built',
    comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/horizontal-vs-vertical-scaling/" },
  
    { id: 4, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp', 
    text: 'Best Books to Learn Full-Stack Development',
    desc: 'Are you interested in becoming a full-stack developer but not sure where to start? In',
    comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/best-books-to-learn-full-stack-development/" },
  
  
    { id: 5, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp', 
    text: 'Top 10 Product-Based Companies for Full-Stack Developers [2023]',
    desc: 'In the dynamic landscape of technology, full-stack developers are the architects of the digital world,',
    comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/product-based-companies-for-full-stack-developers/" },
  
    { id: 6, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp', 
    text: '7 Best Full-Stack Development Online Courses [2023]',
    desc: 'Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand',
    comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/best-full-stack-development-online-courses/" },

  //datascience

  { id: 7, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp', 
  text: 'Impact of Certification Programs on Hiring Data Scientists',
  desc: 'Data scientists are the creators behind transforming the raw data into edible data insights. These',
  comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/certification-impact-on-hiring-data-scientists/" },

  { id: 8, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp', 
  text: 'Top Product-Based Companies for Data Science Freshers',
  desc: 'In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing',
  comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/product-based-companies-for-data-science-freshers/" },


  { id: 9, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp', 
  text: 'What is the Difference between Data Science and Data Engineering?',
  desc: 'India has been making some serious waves in the world of data. Just like the',
  comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/difference-between-data-science-and-data-engineering/" },

  { id: 10, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-10-Data-Science-Tools.jpg', 
  text: 'Top 10 Data Science Tools in 2023',
  desc: 'Data Science is an in-demand profession and will continue growing in the coming years. From',
  comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/data-science-tools/" },

  { id: 11, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp', 
  text: 'Best Data Science Books to Learn 2023',
  desc: 'Today, we’re going to talk about something really cool: data science. It’s all about using',
  comments:"17 November 2023  No Comments" ,
link:"https://www.guvi.in/blog/data-science-books-to-learn/"},


  { id: 12, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp', 
  text: 'Top Product-Based Companies for Data Scientists in 2023',
  desc: 'We all know about the kind of buzz surrounding data science right now, it is',
  comments:"17 November 2023  No Comments" ,
link:"https://www.guvi.in/blog/top-product-based-companies-for-data-scientists/"},

  //end of data science

  { id: 13, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp', 
text: 'What Is Hacking? Types of Hacking & More',
desc: 'Have you ever wondered what hacking is all about? It’s a big deal in today’s',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/what-is-hacking/" },

{ id: 14, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png', 
text: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
desc: 'Cybersecurity & Ethical hacking and have been key in making sure that your data online',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/" },

{ id: 15, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif', 
text: 'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
desc: 'Look around today, you will witness that we are more reliant on technology and devices',
comments:"17 November 2023  No Comments" ,
link:"https://www.guvi.in/blog/what-is-cybersecurity/"},

{ id: 16, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png', 
text: '8 Different Types of Cybersecurity and Threats Involved',
desc: 'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/types-of-cybersecurity/" },

{ id: 17, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif', 
text: 'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
desc: 'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/coding-for-cybersecurity/" },

{ id: 18, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact.jpg', 
text: 'Top 7 Cyber Security Attacks in Real Life',
desc: 'Cyber security attacks are the type of actions that are designed to destroy, steal, modify,',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/cyber-security-attacks-in-real-life/" },

  //end of cyber security

  { id: 19, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp', 
  text: 'Best 11 Product-Based Companies for Product Managers in India ',
  desc: 'Who is a product manager? What are the best product-based companies for product managers in',
  comments:"17 November 2023  No Comments",
  link:"https://www.guvi.in/blog/product-based-companies-for-product-managers/" },
  
  { id: 20, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp', 
  text: 'Top 13 Product Based Companies for AI Freshers',
  desc: 'Artificial intelligence (AI) has revolutionized various industries, and the demand for AI professionals is at',
  comments:"17 November 2023  No Comments",
  link:"https://www.guvi.in/blog/product-based-companies-for-ai-freshers/" },
  
  { id: 21, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-based-Companies-for-UIUX-Designers.webp', 
  text: 'Top 8 Product-based Companies for UI/UX Designers [Freshers]',
  desc: 'As product-based companies continually innovate and strive to stay ahead of the competition, they seek',
  comments:"17 November 2023  No Comments",
  link:"https://www.guvi.in/blog/product-based-companies-for-ui-ux-designers-freshers/" },
  
  { id: 22, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Product-Based-Companies-for-Game-Developers.webp', 
  text: 'Best Product-Based Companies for Game Developers in 2023',
  desc:'The world of game development has been booming in recent years as the importance of',
  comments:"17 November 2023  No Comments",
  link:"https://www.guvi.in/blog/product-based-companies-for-game-developers/" },
  
  { id: 23, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Software-Developer-vs-Software-Engineer.jpg', 
  text: 'Software Developer vs Software Engineer: Who is More Important in 2023?',
  desc: 'In the tech world, two roles play an important role in deciding our digital life,',
  comments:"17 November 2023  No Comments",
  link:"https://www.guvi.in/blog/software-developer-vs-software-engineer/" },
  
  { id: 24, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-Product-Based-Companies-for-AI-Engineers.png', 
  text: 'Best Product-Based Companies for AI Engineers in 2023',
  desc: 'There was a time when AI was the future. Well, it has now become our',
  comments:"17 November 2023  No Comments",
  link:"https://www.guvi.in/blog/top-product-based-companies-for-ai-engineers/" }
  
];

const All = () => {
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

export default All;

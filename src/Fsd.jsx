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
link:"https://www.guvi.in/blog/best-full-stack-development-online-courses/" }
]


const Fsd = () => {
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

export default Fsd;
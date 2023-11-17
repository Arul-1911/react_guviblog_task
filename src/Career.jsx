import React from 'react';


const cardData = [{ id: 1, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp', 
text: 'Best 11 Product-Based Companies for Product Managers in India ',
desc: 'Who is a product manager? What are the best product-based companies for product managers in',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/product-based-companies-for-product-managers/" },

{ id: 2, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp', 
text: 'Top 13 Product Based Companies for AI Freshers',
desc: 'Artificial intelligence (AI) has revolutionized various industries, and the demand for AI professionals is at',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/product-based-companies-for-ai-freshers/" },

{ id: 3, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-based-Companies-for-UIUX-Designers.webp', 
text: 'Top 8 Product-based Companies for UI/UX Designers [Freshers]',
desc: 'As product-based companies continually innovate and strive to stay ahead of the competition, they seek',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/product-based-companies-for-ui-ux-designers-freshers/" },

{ id: 4, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Product-Based-Companies-for-Game-Developers.webp', 
text: 'Best Product-Based Companies for Game Developers in 2023',
desc:'The world of game development has been booming in recent years as the importance of',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/product-based-companies-for-game-developers/" },

{ id: 5, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Software-Developer-vs-Software-Engineer.jpg', 
text: 'Software Developer vs Software Engineer: Who is More Important in 2023?',
desc: 'In the tech world, two roles play an important role in deciding our digital life,',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/software-developer-vs-software-engineer/" },

{ id: 6, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-Product-Based-Companies-for-AI-Engineers.png', 
text: 'Best Product-Based Companies for AI Engineers in 2023',
desc: 'There was a time when AI was the future. Well, it has now become our',
comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/top-product-based-companies-for-ai-engineers/" }]


const Career = () => {
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

export default Career;
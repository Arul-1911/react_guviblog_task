import React from 'react';


const cardData = [{ id: 1, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp', 
  text: 'Impact of Certification Programs on Hiring Data Scientists',
  desc: 'Data scientists are the creators behind transforming the raw data into edible data insights. These',
  comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/certification-impact-on-hiring-data-scientists/" },

  { id: 2, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp', 
  text: 'Top Product-Based Companies for Data Science Freshers',
  desc: 'In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing',
  comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/product-based-companies-for-data-science-freshers/" },


  { id: 3, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp', 
  text: 'What is the Difference between Data Science and Data Engineering?',
  desc: 'India has been making some serious waves in the world of data. Just like the',
  comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/difference-between-data-science-and-data-engineering/" },

  { id: 4, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-10-Data-Science-Tools.jpg', 
  text: 'Top 10 Data Science Tools in 2023',
  desc: 'Data Science is an in-demand profession and will continue growing in the coming years. From',
  comments:"17 November 2023  No Comments",
link:"https://www.guvi.in/blog/data-science-tools/" },

  { id: 5, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp', 
  text: 'Best Data Science Books to Learn 2023',
  desc: 'Today, we’re going to talk about something really cool: data science. It’s all about using',
  comments:"17 November 2023  No Comments" ,
link:"https://www.guvi.in/blog/data-science-books-to-learn/"},


  { id: 6, imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp', 
  text: 'Top Product-Based Companies for Data Scientists in 2023',
  desc: 'We all know about the kind of buzz surrounding data science right now, it is',
  comments:"17 November 2023  No Comments" ,
link:"https://www.guvi.in/blog/top-product-based-companies-for-data-scientists/"}
]





const Data_science = () => {
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

export default Data_science;
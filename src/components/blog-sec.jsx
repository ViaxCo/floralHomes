import React from "react";

const BlogPlate = ({ tag, header, img }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{tag}</h5>
          <p className="card-text">{header}</p>
          <a href="#" className="btn" style={{ color: "#fff" }}>
            View more
          </a>
        </div>
      </div>
    </>
  );
};

const BlogSection = () => {
  const blogData = [
    {
      tag: "Property Verification & Authentication",
      header:
        "Re: Demolition of Kayetoro Community, Ibeju-Lekki, Lagos on the 8th of February 2021, the truth you must know.",
      img:
        "https://www.florahomesgc.com/upload/blog/602cdf7db24ea7.59995845.jpg",
    },
    {
      tag: "Property Documentation",
      header: "Lagos Set To Go Digital in Land Related Services Come 2021",
      img:
        "https://www.florahomesgc.com/upload/blog/5fd4a384829d92.42261354.jpg",
    },
    {
      tag: "Real Estate Investment",
      header: "Real Estate Investment",
      img:
        "https://www.florahomesgc.com/upload/blog/5f7dda5c951ad1.47043899.jpg",
    },
  ];
  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-md-12">
          <p className="h6 text-branding text-center">BLOGS</p>
          <p className="h2 text-center">Eye-Opening Contents</p>
        </div>
      </div>
      <div className="row">
        {
            blogData.map(data => <div className='col-md-3 mx-auto'>
                <BlogPlate header={data.header} tag={data.tag} img={data.img} />
            </div>)
        }
      </div>
    </div>
  );
};

export default BlogSection;

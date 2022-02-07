import React from "react";

const CarCard = ( {carData} ) => {
  //   console.log(carData);

  return (
    <>
      <section className="main-card--cointainer">
        {carData.map((curElem) => {
          const { id, name, brand, image,price, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                  <img src={image} alt="images" className="card-media" />
                    <span className="card-author subtle"> {brand}</span>
                    <h2 className="card-title"> {name} </h2>
                    <h3 className="card-price">Price: {price}</h3>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default CarCard;
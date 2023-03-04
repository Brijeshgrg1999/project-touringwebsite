import Title from "./title";
import { tours } from "../data";

function Tours() {
    return (  

    <section className="section" id="tours">
<Title title="Feature" subtitle="TOURS"/>
  

    <div className="section-center featured-center">

      {tours.map((tour)=>{

        const{id ,image ,  date , title , text  ,location, subtext , price} = tour


        return(

      <article className="tour-card" key={id}>
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <h4>{title}</h4>
        <p>
         {text}
        </p>
        <div className="tour-footer">
          <p>
            <span><i className='fas fa-map'></i></span> {location}
          </p>
          <p>{subtext}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
 )


      })}

    </div>
  </section>
    );
}

export default Tours;
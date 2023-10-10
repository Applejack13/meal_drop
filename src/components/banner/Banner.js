import "../banner/banner.css"
import table from "../../images/Table3.png"
import spagetti from "../../images/Spaghetti3.png"
import lady1 from "../../images/lady 1.png"
import lady2 from "../../images/Lady2 1.png"
import cognac from "../../images/Cognac.png"
import mojito from "../../images/Mojito.png"

function Banner() {
  return (
    <div className="Banner">
      <h2>
        <span>Hungry?</span> Find your next meal
      </h2>
      <button>See all restaurants</button>
      <div className="images">
        <img src={table} alt="table_img" className="table" />
        <img src={spagetti} alt="spagetti_img" className="spaghetti" />
        <img src={lady1} alt="lady1_img" className="lady1" />
        <img src={lady2} alt="lady2_img" className="lady2" />
        <img src={cognac} alt="cognac_img" className="cognac" />
        <img src={mojito} alt="mojito_img" className="mojito" />
      </div>
    </div>
  )
}

export default Banner

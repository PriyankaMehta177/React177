import { CDN_URL } from "./utils/constant";

 export const Restrauent =(props) =>{
    const {restData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating

    } = restData  ?.info;
    return(
        <div className ="rest">
            <img alt = "food" className="cards" src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}*</h4>
            </div>
        
    )
} 

export default Restrauent;
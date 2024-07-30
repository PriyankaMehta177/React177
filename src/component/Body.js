import Restrauent from "./Restrauent";
import resList from "./utils/mock_data";
import { useEffect, useState } from "react";


const Body =()=>{
    const [listOfRest ,setlistOfRest] = useState(resList)

    useEffect(()=> {fetchData()},[]);

 const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6322145&lng=77.42671990000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
   setlistOfRest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants )

 }
    return(
        <div className="body">
         <div className="search">
         <h1>Search</h1>
         <button className="topRating" onClick={()=> {

          const filterList =  listOfRest.filter((res) =>res.info.avgRating >4);
          setlistOfRest(filterList);
            }} >
           FilterOut
         </button>
         </div>
         <div className="rest-container">
             {/* <Restrauent 
            restData ={resObj[0]}
           />
            <Restrauent 
            restData ={resObj[1]}
           /> */}
           {
            listOfRest.map((rest) =>( <Restrauent  key={rest.info.id}  restData={rest}/>))
           } 
         </div>
         
        </div>
    )
}

export default Body;
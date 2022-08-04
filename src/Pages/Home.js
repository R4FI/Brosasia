import React, { useEffect, useState } from 'react';
import Sweetpagination from 'sweetpagination';
import Data from './Data';
import './Home.css';
const Home = () => {
    const [services,setServices] = useState([]);
    const [currentPageData, setCurrentPageData] = useState(new Array([]).fill(20));
    const [input,setInput] = useState('');
    useEffect (()=>{
        fetch ('../data.json')
        .then(res=>res.json())
        .then(data => setServices(data));
           },[]);         
    return (
        <div>
           {/* Input field */}
           <div className="mt-5 search">
            <input onChange={e=>{setInput(e.target.value)}} type="text" placeholder="search"/>
           </div>
                      <div className="row g-4 mt-2 p-5">
                     {  
                        currentPageData.filter((val) => {
                              if(input ==""){
                                        return val

                              }
                              else if(val.name.toString().toLowerCase().includes(input.toString().toLowerCase())){
                                    return val
                              }
                        }).map(service=>  
                        <Data service={service}>
                            </Data>)
                         }
                         </div>
                        
                         <div className="paggination">
  
       <Sweetpagination 
        currentPageData={setCurrentPageData}
        dataPerPage={20}
        getData={services}
        navigation={true}
        getStyle={'style-1'}

      /> 
                     </div>       
                         
        </div>
    );
};

export default Home;
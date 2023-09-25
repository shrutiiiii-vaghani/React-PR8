import React, { useEffect, useState } from 'react';
import './App.css';
import Data from './Data';
import 'bootstrap/dist/css/bootstrap.min.css';

 
function App() {
  const [list, setList] = useState('all');
  const[search,setSearch]=useState("");
  const[filter,setFilter]=useState([]);

  useEffect(() => {
    const filteredData = list === 'all' ? Data : Data.filter(item => item.type === list);
  
    let namesearch = filteredData.filter((item)=>{
      return  item.name.toLowerCase().includes(search.toLowerCase())
    });
    setFilter(namesearch);
  }, [list, search]);


  // const filteredData = list === null ? Data : Data.filter(item => item.type === list);

  return (
    <body className='bg'>
       <div class="w-100 d-flex">
      <nav class="sidebar w-10" style={{ position: 'fixed', top: 0 }}>
        <img src='Images/hotstar-logo.svg' style={{marginBottom:"70px",marginTop:"10px",marginLeft:'8px',width:"100px"}}/>
        <a href="#"><i class="bi bi-person-circle" style={{fontSize:"23px"}}></i></a>
        <a href="#"><i class="bi bi-search" style={{fontSize:"23px"}}></i></a>
        <a href="#"><i class="bi bi-house-fill" style={{fontSize:"23px"}}></i></a>
        <a href="#"><i class="bi bi-tv-fill" style={{fontSize:"23px"}}></i></a>
        <a href="#"><i class="bi bi-pip-fill" style={{fontSize:"23px"}}></i></a>
        <a href="#"><i class="bi bi-dribbble" style={{fontSize:"23px"}}></i></a>

      
      </nav>
      <main class="w-90">
        
       <div className="container">
    
      <img src="Images/banner.webp" width="125%" height="650px"/>
      <div className="d-flex justify-content-center mb-3 ">
          <button onClick={() => setList('all')} className="btn me-2 ms-5" style={{backgroundColor:"black",color:"white",border:'1px solid white'}}>All</button>
         
            <button onClick={() => setList('Serial')} className="btn me-2" style= {{backgroundColor:"#black",color:"white",border:'1px solid white'}}>Serial</button>
            <button onClick={() => setList('hollywood')} className="btn me-2" style={{backgroundColor:"#black",color:"white",border:'1px solid white'}}>Hollywood</button>
            <button onClick={() => setList('geogrphy')} className="btn me-2" style={{backgroundColor:"#black",color:"white",border:'1px solid white'}}>Geography</button>
            <button onClick={() => setList('biopic')} className="btn me-2" style={{backgroundColor:"#black",color:"white",border:'1px solid white'}}>Biopic</button>
            <button onClick={() => setList('action')} className="btn me-2" style={{backgroundColor:"#black",color:"white",border:'1px solid white'}}>Action</button>
            <button onClick={() => setList('drama')} className="btn me-2" style={{backgroundColor:"#black",color:"white",border:'1px solid white'}}>Drama</button>
            <button onClick={() => setList('crime')} className="btn me-2" style={{backgroundColor:"#black",color:"white",border:'1px solid white'}}>Crime</button>
            <button onClick={() => setList('bollywood')} className="btn me-2" style={{backgroundColor:"#black",color:"white",border:'1px solid white'}}>Bollywood</button>
            <button onClick={() => setList('horror')} className="btn me-2" style={{backgroundColor:"#black",color:"white",border:'1px solid white'}}>Horror</button>
            <button onClick={() => setList('comedy')} className="btn me-2" style={{backgroundColor:"#black",color:"white",border:'1px solid white'}}>Comedy</button>
            <button onClick={() => setList('thriller')} className="btn me-2" style={{backgroundColor:"#black",color:"white",border:'1px solid white'}}>Thriller</button>
             <button onClick={() => setList('latest')} className="btn me-2" style={{backgroundColor:"#black",color:"white",border:'1px solid white'}}>Latest</button>
      </div>
      <center>
      <i class="bi bi-search" style={{fontSize:"17px",color:"#8f98b2",padding:"8px 20px",backgroundColor:"black",border:"2px solid #4b5166",borderRight:"none"}}></i>
           <input type="text" placeholder='Movies, shows and more' onChange={(e) => setSearch(e.target.value)} style={{backgroundColor:"black",border:"2px solid #4b5166",color:"#8f98b2",padding:"8px 24px 6px 20px"}} className='hover'/>
      </center>


      <div className="row">
        {filter.map((v) => {
          const { name, desc, price, image } = v;
          return (        
          <div key={name} className="col-md-3 mb-3">   
          <div className="m-3 w-100" >
              <div className="w-30">
                  <img src={image} alt={name}  style={{width:"250px",height:"350px",objectFit:"cover",marginLeft: "24px",borderRadius:'10px'}}/>
              </div>
              {/* <div style={{textAlign:"center", paddingTop:"10px"}}>
              <h5 className="card-title" style={{color:"white"}}>{name}</h5>
              <p className="card-text" style={{color:"white"}}>{desc}</p>
              <a href="#" className="btn btn-two" style={{color:"white"}}>{price}</a> */}
              {/* </div> */}
           </div>
            </div>
          );
        })}
      </div>
    </div>
    </main>
    </div>
    </body>
  );
}

export default App;
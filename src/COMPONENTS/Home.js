import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Home.css";
import Navbar from "./Navbar";
import { Ucontext } from "./Usercontext";

const Home = () => {
  
  let context2 = useContext(Ucontext);
  let navigate = useNavigate();

  const capture_event = (event) => {
  
     if(event.target.id === 'bt-1'){
      let title_of_card =
      event.target.parentNode.parentNode.previousElementSibling
        .previousElementSibling.innerText;

     let src =
      event.target.parentNode.parentNode.previousElementSibling.firstChild.src;

    let desc =
      event.target.parentNode.parentNode.nextElementSibling.firstChild
        .innerText;
  
    let obj = { title: title_of_card, url: src, desc: desc};

   
    context2.setReaddata([obj]);
   
      
     }
    //  if(event.target.id === 'del'){
  };

  const deleteBlog=(index)=>{
    let temp = context2.card_data;
    temp.splice(index,1);
    context2.setCard_data([...context2.card_data]);
  }

 const editBlog = (event,index) =>{
  
  let title = event.target.parentNode.parentNode.firstChild.firstChild.innerText;
  let desc = event.target.parentNode.previousElementSibling.firstChild.innerText;
  let src = event.target.parentNode.parentNode.firstChild.nextElementSibling.firstChild.src;

  let obj1 = {"src":src,"title":title,"desc":desc}
  context2.setEdit_data([obj1])



  //  let temp = context2.card_data;
  //  temp.splice(index,1,obj1);
  //  context2.setCard_data([...temp]);


  //  console.log(context2.card_data);

   
   navigate('/CreateBlog');

 }

  return (
    <>
      <Navbar />

      <div className="home">
        <h1>Trending Blogs</h1>
        <div className="blog-card">
          <div>
            <div id="1">
              <h1>heading-1 HAI</h1>
            </div>

            <div id="2">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/01/1f/1c/81/ootacamund.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </div>

            <div id="3">
              <Link to="/readSection" id="read-more">
                <button id="bt-1">Read More</button>
              </Link>
            </div>

            <div id="4" style={{ display: "none" }}>
              <p>
                lasklddfjlkskldjssjklddfkl;asklfjklasklfjklasjklfklasjkljsdlkjflksjklfjklsjflkjsdlfjlksdjd
              </p>
            </div>
          </div>

          <div>
            <div>
              <h1>heading-1</h1>
            </div>
            <div>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/01/1f/1c/81/ootacamund.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </div>

            <div>
              <Link to="/readSection" id="read-more">
                <button id="bt-2">Read More</button>
              </Link>
            </div>

            <div id="4" style={{ display: "none" }}>
              <p>
                lasklddfjlkskldjssjklddfkl;asklfjklasklfjklasjklfklasjkljsdlkjflksjklfjklsjflkjsdlfjlksdjd
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1>heading-1</h1>
            </div>
            <div>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/01/1f/1c/81/ootacamund.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </div>

            <div>
              <Link to="/readSection" id="read-more">
                <button id="bt-3">Read More</button>
              </Link>
            </div>

            <div id="4" style={{ display: "none" }}>
              <p>
                lasklddfjlkskldjssjklddfkl;asklfjklasklfjklasjklfklasjkljsdlkjflksjklfjklsjflkjsdlfjlksdjd
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1>heading-1</h1>
            </div>
            <div>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/01/1f/1c/81/ootacamund.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </div>

            <div>
              <Link to="/readSection" id="read-more">
                <button id="bt-4">Read More</button>
              </Link>
            </div>

            <div id="4" style={{ display: "none" }}>
              <p>
                lasklddfjlkskldjssjklddfkl;asklfjklasklfjklasjklfklasjkljsdlkjflksjklfjklsjflkjsdlfjlksdjd
              </p>
            </div>
          </div>
{/* ................. Dynamic rendering................................. */}

          {context2.card_data.map((val,index) => {
            return (
              <>
                <div >
                  <div>
                    <h1>{val.title}</h1>
                  </div>

                  <div>
                    <img src={val.url} alt="" width="100%" height="100%" />
                  </div>

                  <div>
                    <Link to="/readSection" id="read-more">
                      <button id="bt-1">Read More</button>
                    </Link>
                  </div>

                  <div id="4" style={{ display: "none" }} >
                    <p>{val.desc}</p>
                  </div>

                  <div id="test">
                    <button id='del' onClick={()=>deleteBlog(index)}>delete</button> &emsp; &emsp;&emsp; &emsp;
                    <button id="edit" onClick={(event)=>editBlog(event,index)}>edit</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;

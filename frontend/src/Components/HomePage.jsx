import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import ParentContext from "../ParentContext";
import "../Components/Css files/HomePage.css"

function HomePage() {
  const { parentData } = useContext(ParentContext)
  const history = useHistory();
  const startsearch = () => history.push("/RegisterParent");
  const fornanies = () => history.push("/ForNannies");
  const forparent = () => history.push("/ForParents");
  const offers = () => history.push("/SearchNannies")

  return (

    <div className="part1">

      <div className="image">
        {/* <img src="https://previews.123rf.com/images/stokkete/stokkete1410/stokkete141000543/32580531-mother-and-son-drawing-and-enjoying-time-together-in-the-living-room-.jpg"></img> */}
      </div>
      <h1 id="title">Supporting Families with Trusted &amp; Vetted Child Care</h1>
      <div className="partone">
        <p id="exceptional" className="sub-title">Exceptional Nannies for Exceptional Families.</p>
        <div className="btn-up">
          <button id="btn-parent" onClick={forparent}>For Parents</button>
          <button id="btn-nanny" onClick={fornanies}>For Nannies</button>
        </div>
      </div>
      {
        parentData.parent ? (
          <button className="btn" onClick={offers}>Nannies Offers</button>
        ) : <></>
      }

      <div className="part2" >
        <div className="">
          <img id="imageCentreA" src="https://d2rgzcku886wi.cloudfront.net/images/little-girl-reading-a-book_v3.jpg" ></img>
        </div>
        <h2 id="unique">A Unique Blend of Nannies and Education</h2>
        <p className="sub-title">About Our Nanny Agency</p>
        <p id="We-paragraph">We believe that the early years of life are the most developmentally important for intellectual, social, and emotional health.
        So when we meet with nanny applicants, we’re tirelessly searching for those who share our core values and believe that every moment spent
        with children is an opportunity to show love, support, patience, and understanding. Our emphasis on smart and engaged child care, transparent and open communication,
        and 365 day a year parent and nanny support sets us apart from other nanny agencies. If you’re serious about finding a nanny, let us help. We’ll take care of the
          time-consuming logistics and help you focus on what matters most for your family.</p>
        <button className="btn" onClick={startsearch}>Start Your Search</button>
      </div>

      <div >
        <img id="imageCentreB" src="https://previews.123rf.com/images/stokkete/stokkete1409/stokkete140900173/31526941-mother-and-son-drawing-and-enjoying-time-together-in-the-living-room-.jpg"></img>
      </div>
      <h3 id="tittleWeParagraph">Our Nanny Placement Process</h3>
      <div className="WeParagraph" >
        <p><span className="rouge">We interview</span> and thoroughly screen hundreds of nannies each year so full-time nannies, part-time nannies, and private educators are at the ready when you need them.</p>
        <p><span className="rouge">We get to know you</span>, your family story, and your values, so we can use our industry expertise to recommend nannies based on your unique needs.</p>
        <p><span className="rouge">We guide you</span> through the entire hiring process, from job description to nanny interviews and finalizing a nanny-family contract that allows you to move forward with confidence.</p>

        <p><span className="rouge">We provide you</span> with industry leading resources on nanny tax compliance, having a nanny during COVID-19, and the overall child care market as it develops and evolves.</p>
        <p><span className="rouge">We give you</span> back the one resource that families are always short on: time.</p>
      </div>
      <div className="part3" >
        <div >
          <img className="imageMiddle" src="https://d2rgzcku886wi.cloudfront.net/images/new-york-nanny-in-park.jpg"></img>

          <p id="family-title">For families</p>

          <h4 id="datenight">Date night? Tickets to Hamilton? Looking for a full time or part time nanny? </h4>
        </div>
        <button className="btn" onClick={startsearch}>Get Started</button>


        <div className="">
          <img id="imageLast" src="https://www.newmenjoscomplex.com/wp-content/uploads/2019/12/What-makes-a-good-nanny.jpg"></img>
        </div>
        <p id="titletobenanny">FOR NANNIES</p>
        <h4 id="to-be-a-nanny">Do you have what it takes to be a Nanny?</h4>
        <button className="btn">Apply Now</button>
      </div>
    </div>



  );

}
export default HomePage;

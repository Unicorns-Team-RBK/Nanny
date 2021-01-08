import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import ParentContext from "../ParentContext";

function HomePage() {
  const {parentData} = useContext(ParentContext)
const history = useHistory();
const startsearch = () => history.push("/RegisterParent");
const fornanies = () => history.push("/ForNannies");
const forparent = () => history.push("/ForParents");
const offers = () => history.push("/SearchNannies")

    return (
    <div>
        <div className="part1">
        <div class="image">
          {/* <img src="https://previews.123rf.com/images/stokkete/stokkete1410/stokkete141000543/32580531-mother-and-son-drawing-and-enjoying-time-together-in-the-living-room-.jpg"></img> */}
        </div>
        <h1>Supporting Families with Trusted &amp; Vetted Child Care</h1>
				<p className="sub-title">Exceptional Nannies for Exceptional Families.</p>
        <button className="btn" onClick={forparent}>For Parents</button>
        <button className="btn" onClick={fornanies}>For Nannies</button>
        </div>

        {
          parentData.parent ? (
            <button onClick={offers}>Nannies Offers</button>
          ) : <></>
        }

			<div className="part2" >
        <div class="image">
          <img src="https://d2rgzcku886wi.cloudfront.net/images/little-girl-reading-a-book_v3.jpg"></img>
        </div>
				<h2>A Unique Blend of Nannies and Education</h2>
				<p className="sub-title">About Our Nanny Agency</p>
				<p>We believe that the early years of life are the most developmentally important for intellectual, social, and emotional health. 
          So when we meet with nanny applicants, we’re tirelessly searching for those who share our core values and believe that every moment spent 
          with children is an opportunity to show love, support, patience, and understanding. Our emphasis on smart and engaged child care, transparent and open communication, 
          and 365 day a year parent and nanny support sets us apart from other nanny agencies. If you’re serious about finding a nanny, let us help. We’ll take care of the 
          time-consuming logistics and help you focus on what matters most for your family.</p>
				<button className="btn" onClick={startsearch}>Start Your Search</button>
			</div> 
      <div className="part3" >
          <div class="image">
              <img src="https://previews.123rf.com/images/stokkete/stokkete1409/stokkete140900173/31526941-mother-and-son-drawing-and-enjoying-time-together-in-the-living-room-.jpg"></img>
          </div>
        <h3>Our Nanny Placement Process</h3>
        <p><span className="rouge">We interview</span> and thoroughly screen hundreds of nannies each year so full-time nannies, part-time nannies, and private educators are at the ready when you need them.</p>
				<p><span className="rouge">We get to know you</span>, your family story, and your values, so we can use our industry expertise to recommend nannies based on your unique needs.</p>
				<p><span className="rouge">We guide you</span> through the entire hiring process, from job description to nanny interviews and finalizing a nanny-family contract that allows you to move forward with confidence.</p>

				<p><span className="rouge">We provide you</span> with industry leading resources on nanny tax compliance, having a nanny during COVID-19, and the overall child care market as it develops and evolves.</p>
				<p><span className="rouge">We give you</span> back the one resource that families are always short on: time.</p>
      </div>
      <div className="part3" >
          <div class="image">
            <img src="https://d2rgzcku886wi.cloudfront.net/images/new-york-nanny-in-park.jpg"></img>
          </div>
          <p >for families</p>
					<h4>Date night? Tickets to Hamilton? Looking for a full time or part time nanny? </h4>
          <button>Get Started</button>


          <div class="image">
            <img src="https://d2rgzcku886wi.cloudfront.net/images/index-sitters.jpg"></img>
          </div>
          <p>FOR NANNIES</p>
					<h4>Do you have what it takes to be a Nanny?</h4>
          <button className="btn">Apply Now</button>
      </div>
  </div>

    
    
    );
  
  }
export default HomePage;


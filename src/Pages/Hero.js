import React from 'react';
import '../App.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slideImages from '../data'
//import { Player } from 'video-react';
import YouTube from '../Video';
import logo from '../../src/Images/Salz Logo.jpg'
import video1 from '../../src/Images/rebecca-e1498234731154.jpg'
import video2 from '../../src/Images/jay shetty-image.jpg'
import Navbar from '../Components/Navbar';

//import rebecca from '../src/Video/All about the GoldenScepter.mp4'
//import video3 from '../src/Images/Precious.jpg'
//import icon from '../src/Images/download.png'

const spanStyle = {
  padding: '',
  background: '',
  color: '#000000',
  display: 'flex',
  marginLeft: '30%',
  marginBottom: '20%'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '25%',
  height: '400px',
  marginLeft: '10%',
  marginTop: '5%',
  borderRedius: '5%'
}






const Hero = () => {


  return (
    <>
     
<Navbar />
      <div className='background2  '>

        <div className='text-white'>
          <h2 className='back py-5 my-5'> ALL ABOUT DIFFERENT PODCAST<br />WATCH & DISCOVER <br /> #SALz PODCAST</h2>
        </div>
      </div>


      <div className=' bg-creamwhite '>


        <div className='container d-md-flex d-block col-md-12 col-12      '>

          <div className='col-md-6 col-12 my-md-5'>


            {/*<source src={vid} />*/}
            <img src={video1} alt='' className='video1' />


            <h2>Rebecca Enonchong</h2>
            <YouTube
              data={{ link: "https://www.youtube.com/embed/yG1FVdeaSDU" }}
            />


          </div>

          <div className='col-md-6 col-12  my-md-5 py-md-3 font1'>
            <p>Rebecca Enonchong is a Cameroonian-born technology entrepreneur and the founder and CEO of AppsTech. She is best known for her work promoting technology in Africa. In this talk, she takes the audience through her journey and the experiences that prepared her and shares her tips on how to successfully break through the African tech landscape as a woman.</p>
          </div>
        </div>

        <div className='container d-md-flex d-block col-md-12 col-12 py-md-0 py-5'>

          <div className='col-md-6 col-12 font1 my-md-5'>
            <p>
              Jay Shetty is an internet personality, storyteller, podcast host, purpose coach and former monk who is making wisdom go viral. © Jay Shetty Privacy Policy Terms.
            </p>
          </div>

          <div className='col-md-6 col-12 mx-md-5'>
            <img src={video2} alt='' className='img-fluid video2' />
            <h2>Jay Shetty</h2>
            <YouTube
              data={{ link: "https://www.youtube.com/embed/6qZDZiscquo" }}
            />

          </div>
        </div>

      </div>


      <div className='bg-pitch'>
        <div className="slide-container bg-white1 container my-5">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}  >
                <span style={spanStyle}>{slideImage.caption}
                  </span>
                  
                
                </div>
                <div className='mr' >
                <YouTube
                    data={{ link: slideImage.link }}    />
                </div>
              </div>
              
            ))}
          </Slide>
        </div>

        <h2 className='back'>Access Popular Podcast Sites</h2>

        <div className='py-5'>

          <div>
            <a href='https://www.apple.com/apple-podcasts/'> <h2 className='subscribe '> Subscribe to Apple Podcasts </h2> </a>
          </div>

          <div>
            <a href='https://open.spotify.com/'> <h2 className='subscribe'> Subscribe to Spotify</h2> </a>
          </div>

          <div>
            <a href='https://podcasts.google.com/'> <h2 className='subscribe'>Subscribe to Google Podcasts</h2> </a>
          </div>

          <div>
            <a href='https://www.buzzsprout.com/?gclid=Cj0KCQjwwtWgBhDhARIsAEMcxeC1qrcTxp0WBFrJvsqWFB6lNzBq9T3n_vcoYZ3y4vk_StJcDRt-DPoaAvy0EALw_wcB'><h2 className='subscribe'>Subscribe to Stitcher</h2></a>
          </div>

          <div>
            <a href='https://www.iheart.com/podcast/'> <h2 className='subscribe'>Subscribe to iHeartradio</h2></a>
          </div>
        </div>
      </div>


      <div className='bg-darkblue  text-white d-md-flex d-block col-md-12 col-12'>

        <div className='container-fluid col-md-3 col-12 my-md-5 '>
          <img src={logo} alt='' className='img-fluid logo2' />
          <p className='my-md-3'>Proffesional podcast you should discover and grow yourself</p>
        </div>

        <div className='col-md-3 col-12'>
          <h2 className='para my-5'> <b> Platform </b></h2>
          <div className='my-3'><p>Features</p>
            <p>Private Podcasts</p>
            <p>Network Hosting </p>
            <p>Pricing</p>
            <p>Help & Support</p>
            <p>Feedback & Suggestions</p>
            <p>Service Status</p> </div>
        </div>

        <div className='col-md-3 col-12'>
          <h2 className='para my-5'><b>Service</b></h2>
          <p className='my-3'> Podcast Production</p>
          <p> Podcast Studio Hire</p>
          <p> For Agencies</p>
          <p> Request a Quote</p>
        </div>

        <div className='col-md-3 col-12'>
          <h2 className='para my-5'><b> Resources</b></h2>
          <p className='my-3'> How To Start A Podcast</p>
          <p> Our Blog </p>
          <p> Our Podcasts </p>
          <p> Free Music </p>
          <p> MatchMaker.fm </p>
        </div>

      </div>


    </>




  );
}

export default Hero;


//<h2>  <a href='https://youtu.be/yG1FVdeaSDU'> <img src={icon} alt='' className='icon' /> </a> Play </h2>

//<a href='https://youtu.be/zXzeUeq3RIE'> <img src={video7} alt='' className='video2'/> </a>

//<a href='AUD-20230303-WA0001.m4a'> <img src={video5} alt='' className='video2'/> </a>

//<a href='https://youtu.be/TISMidxdZoc'> <img src={video4} alt='' className='video2'/> </a>

//<a href='https://youtu.be/bZBbX8hDGiw'> <img src={video3} alt='' className='video2'/> </a>

//<a href='https://youtu.be/ElHddYBudss'> <img src={video2} alt='' className='video2' /></a>



/*<div className='bg-white'>
        <div className=''>
          <h2 align='center'> <img src={video3} alt='' className='img-fluid video3 my-5' /> </h2>
        </div>
      </div>*/

import './App.css';

import Intro from './components/Intro';
import Card from './components/Card';
import Logo from './assests/revenue.png';
import Icon from './assests/people.png';
import Photo from './assests/delivery.png';
import Capture from './assests/brand visibility.png';
import Description from './components/Description';
import Footer from './components/Footer';
import Faq from './components/Faq';





function App() {
  return (
    <>
       <Intro />
        <div className='flex' style={{justifyContent:"space-evenly"}}>
         <Card image={Logo} title="Increase your revenue" />
         <Card image={Icon} title="Reach out to a large customer base" />
         <Card image={Photo} title="Access to the large delivery fleet" />
         <Card image={Capture} title="Increase your brand visibility" />
       </div>
       
       <div className='steps'>      
       <h1 className='steps-h1'> Get started in three easy steps  </h1>
       <div className='step-elem'>
       <div className='step-1'>
        <h2>Sign Up </h2>
        <p> Start with providing your <br/> restaurant business details</p>
       </div>
       <div className='steps-h2'>
        <h2 className='steps-h2'> Set up </h2>
        <p> Then upload all the required <br /> documents </p>
       </div>

       <div>
         <h2 > Sell </h2>
         <p> Go live and start getting orders </p>

       </div>
       </div>
       </div> 

      
       <div>
       <Description />
</div>

<div>
 <h1 style={{padding:"4rem"}}>Question ?</h1>
<Faq />
</div>
    

<div>
  <Footer />
</div>
  

  



      
        
      


      
    </>
  );
}

export default App;

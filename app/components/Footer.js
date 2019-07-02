import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component{
    render(){
        return(<div className="footer-page">
<footer>
 <div className="container">
   <div className="row">
   
            <div className="col-md-4 col-sm-6 col-xs-12">
              <span className="logo"><img className="image-footer" width='350' height='350' src="https://sosanhnhat.com/wp-content/uploads/2018/01/so-sanh-hellochao-vs-tienganh123.jpg"/></span>
            </div>
            
            <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="menu">
                     <span>Menu</span>    
                     <li>
                        <a href="#">Home</a>
                        <span>Ha Noi, Viet Nam</span>
                      </li>
                           
                      <li>
                         <a href="#">About</a>
                         <span>HaoNguyenTrong.com</span>
                      </li>
                           
                      <li>
                        <a href="#">Blog</a>
                        <span>HaoNguyenTrong@blog.com</span>
                      </li>
                           
                      <li>
                         <a href="#">Gallery </a>
                         <span>So 11, Hai Ba Trung, Ha Noi</span>
                      </li>
                 </ul>
            </div>
       
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="address">
                    <span>Contact</span>       
                    <li>
                       <i className="fa fa-phone" aria-hidden="true"></i> <a href="#">Phone</a>
                       <span>0123456789</span>
                    </li>
                    <li>
                       <i className="fa fa-map-marker" aria-hidden="true"></i> <a href="#">Adress</a>
                       <span>HA Noi, Viet Nam</span>
                    </li> 
                    <li>
                       <i className="fa fa-envelope" aria-hidden="true"></i> <a href="#">Email</a>
                       <span>HaoNguyenTrong@gmail.com</span>
                    </li> 
               </ul>
           </div>
       
       
       </div> 
    </div>
</footer>
</div>)
    }
}

module.exports = Footer;
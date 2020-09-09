import React from 'react'
import Button from 'elements /Button'
import IconText from './IconText'
export default function Footer() {
    return (

       <footer >
           <div className="container">
           <div className="row">
               <div className="col-3" style={{width: 350}}>
                   <IconText/>
                   <p className="brand-tagline">
                   We kaboom your beauty holliday
                    instantly and memorable
                   </p>
                   </div>
                   <div className="col-auto mr-5">
                       <h6 className="mt-2">For Beginner</h6>
                       <ul className="list-group list-group-flush">
                           <li className="list-group-item">
                               <Button type="link" href="/register/">New Account</Button>
                           </li>
                           <li className="list-group-item">
                               <Button type="link" href="/properties/">Start Booking a Room </Button>
                           </li>
                           <li className="list-group-item">
                               <Button type="link" href="/payment/">Use Payments</Button>
                           </li>
                       </ul>
                   </div>
                   <div className="col-2 mr-5">
                   <h6 className="mt-2">Explore Us</h6>
                       <ul className="list-group list-group-flush">
                           <li className="list-group-item">
                               <Button type="link" href="/career">Our Careers</Button>
                           </li>
                           <li className="list-group-item">
                               <Button type="link" href="/privacy">Privacy</Button>
                           </li>
                           <li className="list-group-item">
                               <Button type="link" href="/terms">Terms & Conditions</Button>
                           </li>
                       </ul>
                   </div>
                   <div className="col-3">
                       <h6 className="mt-2">Conect Us</h6>
                       <ul className="list-group list-group-flush">
                           <li className="list-group-item">
                               <Button isExternal type="link" href="mailto:support@staycation.id">support@staycation.id</Button>
                           </li>
                           <li className="list-group-item">
                               <Button isExternal type="link" href="tel:+622125881998">021-2588-1998</Button>
                           </li>
                           <li className="list-group-item">
                              <span>Staycation, Brebes, Jawa Tengah</span>
                           </li>
                       </ul>

                    </div>
                   </div>

               
               <div className="row">
                   <div className="col text-center copyrights">
                   Copyright 2020 • All rights reserved • Staycation
                   </div>
               </div>
           
               </div>
       </footer>
    )
}


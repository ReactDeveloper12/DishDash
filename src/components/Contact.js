const Contact = () => {
    return (
        <div className="contact_form_inner">
            <div className="contact_field">
                <h3>Contatc Us</h3>
                <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                <input type="text" className="form-control" placeholder="Name" />
                <input type="text" className="form-control" placeholder="Email" />
                <textarea className="form-control" placeholder="Message"></textarea>
                <button className="contact_form_submit">Send</button>
            </div>

            <div className="contact_info_sec">
                <h4>Contact Info</h4>
                <div className="contact-det">
                    <i className="fas fa-headset"></i>
                    <span>+91 7053 199909</span>
                </div>
                <div className="contact-det">
                    <i className="fas fa-envelope-open-text"></i>
                    <span>info@DishDash.com</span>
                </div>
                <div className="contact-det">
                    <i className="fas fa-map-marked-alt"></i>
                    <span>1000+ Delivery partners and 65+ Service city across India</span>
                </div>
            
            </div>

        </div>
        
    )
}

export default Contact
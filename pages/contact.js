// const { default: Layout } = require("../components/Layout")
import Link from "next/link"
import Layout from "../components/Layout"


const contact = () => {

  const  handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
    const  handleSubmit = async (event) => {
        event.preventDefault();
      
       
      };


    return (
        <Layout>
            <section className="section__contact">
                <div className="contact">
                    <div className="contact__information">
                        <div className="contact__heading">
                            CONTACT INFORMATION
                        </div>
                        <div className="contact__context">
                            If you would like to talk to us about your order or you have a question, please get in touch. Fill in our contact form and we’ll get right back to you.
                            Whether you’re looking to discuss a new fashion project or simply say hello, we’d love to hear from you.
                        </div>
                        
                        <div className="contact__details">
                            phone <span>0200000000</span>
                        </div>

                        <div className="contact__details">
                            email <span>iguyra@iguyra.com</span>
                        </div>
                    </div>
                    <div className="contact__heading">
                            CONTACT US <span>we reply within minutes</span>
                        </div>
                    <form className="form" onSubmit={handleSubmit} action="">

            <div className="form__group">
            <label className="form__label" htmlFor="email">
                                name
                                 
                </label> 
                <input
                className="form__input"
                name="email"
                type="text"
                id="email"
                onChange={handleChange}
                value=""
              />            
            </div>
                        
            
                        
             <div className="form__group">
            <label className="form__label" htmlFor="email">
              email
              <input
                className="form__input"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
                value=""
                                />
                                
                            </label> 
                            <label className="form__label" htmlFor="phone">
              phone
              <input
                className="form__input"
                name="phone"
                type="number"
                id="phone"
                onChange={handleChange}
                value=""
              />
                            </label> 

                <label className="form__label" htmlFor="message">
              message
              <input
                className="form__input"
                name="message"
                type="text"
                id="message"
                onChange={handleChange}
                value=""
              />
                </label>            
                        </div>
           

            <button   className="form__button">submit</button>

          </form>
                </div>                
            </section>
        </Layout>
    )
}

export default contact
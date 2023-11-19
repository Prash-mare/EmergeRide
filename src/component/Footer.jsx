import { AiOutlineArrowUp, AiOutlineSend } from 'react-icons/ai';
import styled from 'styled-components';
import  toast from "react-hot-toast";
import {Link} from 'react-router-dom';
const Footer = () => {
  const ToastMessage=(event)=>{
    event.preventDefault();
    toast.success('Email Received', {
        duration: 4000,
        position: 'top-center',
        style: {
          border: '1px solid white',
          padding: '16px',
          color: 'green',
        },
      });
  }
  return (
    <FooterWrapper>
      <div className='footer-top'>
        <div className='footer-content text-black d-grid container'>
          <div className='footer-item'>
            <a href="#" className='navbar-brand text-black text-uppercase no-wrap d-block'>
              Emerge<span>Ride</span>
            </a>
            <div>
            <a href='#'>
            <button className='input-group-btn d-inline-flex align-items-center justify-content-center'>
                  Scroll up for more<AiOutlineArrowUp size = { 18 } />
                </button>
            </a>
            </div>
          </div>

          <div className='footer-item'>
            <h5 className='footer-item-title text-uppercase'>quick links</h5>
            <ul className='footer-item-links'>
              <li><a href="/book" className='text-black'>Book Now</a></li>
              <li><a href="/services" className='text-black'>Services</a></li>
              <li><a href="#" className='text-black'>Social Network</a></li>
              <li><a href="#" className='text-black'>Community</a></li>
            </ul>
          </div>

          <div className='footer-item'>
            <h5 className='footer-item-title text-uppercase'>Supports</h5>
            <ul className='footer-item-links'>
              <li><a href="#" className='text-black'>Setting & Privacy</a></li>
              <li><a href="#" className='text-black'>Help & Support</a></li>
              <li><a href="#" className='text-black'>About us</a></li>
              <li><a href="#" className='text-black'>Our News</a></li>
            </ul>
          </div>

          <div className='footer-item'>
            <h5 className='footer-item-title text-uppercase'>newsletter</h5>
            <p className='para-text'>Subscribe our newsletter to get our latest update & news.</p>

            <form className='newsletter-form'>
              <div className='input-group d-flex align-items-stretch'>
                <input type="email" className="input-group-field" placeholder = "Your email address" />
                <button onClick={ToastMessage} className='input-group-btn bg-color d-inline-flex align-items-center justify-content-center'>
                  <AiOutlineSend size = { 18 } />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='container d-flex flex-column text-center'>
          <p className='footer-bottom-text text-color'>Copyright &copy;2023 EmergeRide - All rights reserved.</p>
          <ul className='footer-bottom-links d-flex justif-content-center'>
            <li><a href="#" className='text-black'>Home</a></li>
            <li><a href="#" className='text-black'>Help Center</a></li>
            <li><a href="#" className='text-black'>Contact</a></li>
            <li><Link to="/terms" className="text-black">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer;

const FooterWrapper = styled.footer`
  .footer-top{
    background-color: white;
    padding: 78px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .footer-content{
    row-gap: 24px;
  }

  .navbar-brand{
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 18px;

    span{
      color: #fc2361;
    }
  }

  .footer-item{
    text-align: center;

    .para-text{
      max-width: 380px;
      margin-right: auto;
      margin-left: auto;
      color: black;
    }
  }

  .footer-item-links{
    li{
      margin: 6px 0;

      a{
        color: black;

        &:hover{
          color: rgba(0, 0, 0, 0.437);
          text-decoration: underline;
        }
      }
    }
  }

  .footer-item-title{
    margin-bottom: 12px;
    font-size: 20px;
    letter-spacing: 0.03em;
    font-weight: 700;
  }

  .newsletter-form{
    margin-top: 18px;

    .input-group{
      height: 48px;
      max-width: 284px;
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      transition: all 300ms ease-in-out;

      :has(.input-group-field:focus){
        box-shadow: rgba(238, 66, 3, 0.2) 0px 7px 29px 0px;
      }

      &-field{
        background: white;
        font-size: 0.8em;
        padding-left: 22px;
        padding-right: 22px;
        border: 1px solid rgba(133, 136, 140, 0.4);
      box-shadow: rgba(76, 79, 82, 0.2) 15px 3px 30px 30px;
        color: black;
        flex: 1;

        &::placeholder{
          color: black;
          font-size: 1em;
          opacity: 0.8;
        }
      }

      &-btn{
        color: #0C0A24;
        width: 48px;

        &:hover{
          transform: scale(1.1);
        }
      }
    }
  }

  .text-color{
    color: #fc2361;
  }

  .bg-color{
    background-color: #fc2361;
  }

  .footer-bottom{
    background: white;
    padding: 20px 0;
    &-text{
      font-weight: 500;
    }

    li{
      margin-left: 18px;
    }

    &-links{
      margin-top: 12px;
    }
  }

  @media screen and (min-width: 768px){
    .footer-content{
      grid-template-columns: repeat(2, 1fr);
      column-gap: 32px;

      .footer-item{
        text-align: left;

        .para-text{
          margin-left: 0;
        }
      }

      .input-group{
        margin-left: 0;
      }
    }

    .footer-bottom{
      & > .container{
        flex-direction: #fff;
        justify-content: space-between;
      }

      li{
        margin-left: 32px;
      }
      &-links{
          margin-top: 0;
        }
    }
  }

  @media screen and (min-width: 992px){
    flex-direction: row;
    text-align: center;

    .footer-bottom-links{
      justify-content: center;
    }
  }

  @media screen and (min-width: 1200px){
    .footer-content{
      grid-template-columns: 3fr 2fr 2fr 3fr;
    }
  }
`;
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';
import TicketIcon from '../../resources/images/icons/ticket.png';




class Discount extends Component {

  state={
    discountStart:0,
    discountEnd:30
  }

  porcentage=()=>{
    const{discountStart,discountEnd} = this.state;
    if(discountStart<discountEnd)
    {
      this.setState({
        discountStart: discountStart+1
      })
    }
  }

  componentDidUpdate(){

    setTimeout(()=>{this.porcentage()},30);

  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
          onReveal={()=>this.porcentage()}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
              <div className="discount_description">
                  <h3>Purchase tickets before 20th JUNE</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur provident, quas blanditiis vitae fuga necessitatibus! Numquam culpa, iusto ipsa error, placeat, soluta nam ea tempore qui vitae iure non omnis!</p>
                    <MyButton
                      text="Purchase Tickets"
                      link="http://www.google.com"
                      variant="contained"
                      size="small"
                      styles={
                        {
                          background:'#ffa800',
                          color:'#ffffff'
                        }
                      }
                      ticketIcon={TicketIcon}
                    />
              </div>
          </Slide>
        </div>
      </div>
    )
  }
}
export default Discount;

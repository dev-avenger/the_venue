import React, { Component } from 'react';
import TicketIcon from '../../resources/images/icons/ticket.png';
import MyButton from '../utils/MyButton';



class Pricing extends Component {
  state={
    prices:[100,150,250],
    positions:['Balcony','Medium','Star'],
    desc:[
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking",
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in"
    ],
    linkto:['http://sales/b','http://sales/m','http://sales/s']
  }
  showBoxes = ()=>(
      this.state.prices.map((box,i) =>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>{this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
              </div>
              <div className="pricing_description">
                {this.state.desc[i]}
              </div>
              <div className="pricing_buttons">
                <MyButton
                  text="Purchase"
                  link={this.state.linkto[i]}
                  variant="contained"
                  size="small"
                  styles={
                    {
                      background: '#ffa800',
                      color: '#ffffff'
                    }
                  }
                  ticketIcon={TicketIcon}
                />
              </div>
            </div>
          </div>        
        
        
        )

  )
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
              {this.showBoxes()}
          </div>
        </div>
        
      </div>
    )
  }
}

export default Pricing;
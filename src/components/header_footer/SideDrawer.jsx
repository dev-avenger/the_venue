import React from 'react';
import {scroller} from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideDrawer = (props) => {
  const {open,ontoggleDrawer}= props;

  const scrollToElement = (element) => {
    scroller.scrollTo(element,{
      duration:1000,
      delay:100,
      smooth:true,
      offset:-100
    })
    ontoggleDrawer(false);
  }
  return (
    <Drawer anchor="right" open={open} onClose={()=>ontoggleDrawer(false)}>
      <List component="nav">
          <ListItem button onClick={()=> scrollToElement("eventStarts")}> 
            Event starts in
          </ListItem>
          <ListItem button onClick={()=> scrollToElement("venueNFO")}> 
            Venue NFO
          </ListItem> 
          <ListItem button onClick={()=> scrollToElement("highlights")}> 
            Highlights
          </ListItem> 
          <ListItem button onClick={()=> scrollToElement("pricing")}> 
            Pricing
          </ListItem>
          <ListItem button onClick={()=> scrollToElement("location")}> 
            Location
          </ListItem>   

      </List>
      
    </Drawer>
  )
}
export default  SideDrawer;
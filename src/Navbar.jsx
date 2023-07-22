import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Mail, Pets, Notifications } from '@mui/icons-material';
import profile from "./Banupriya-modified.png";



const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between", 
})

const Search = styled("div")(({
  backgroundColor:"gray",
  padding:"0 10px",
  borderRadius: "3px",
  width:"40%"
  
}))

const UserBox = styled(Box)(({
  display:"none",
  alignItems:"center",
  gap:"10px",
  
}))

const Icons = styled(Box) ({display:"flex" , gap:"20px", alignItems:"center", marginRight:"30px"})

const Navbar = () => {
  
const [open, setOpen] = useState(false);

  return (  
    <AppBar position="sticky">
        <StyledToolbar>   
            <Typography variant="h6" sx={{display:{xs: "none", sm:"block"}}} > TIME PASS </Typography>
            <Pets sx={{display:{xs:"block",sm:"none" }}} />
            <Search > <InputBase placeholder='Search...' /></Search>
            <Icons sx={{display:{xs: "none", sm:"flex"}}} >
            <Badge badgeContent={10} color="error">
            <Mail/>
            </Badge>
            <Badge badgeContent={2} color="error">
            <Notifications/>
            </Badge>
            
            <Avatar sx={{width:30, height:30}} src={profile}  onClick={e => setOpen(true)} />
            </Icons>
            <UserBox sx={{display:{xs:"flex", sm:"none"} }} onClick={e=>setOpen(true)}>
            <Avatar sx={{width:30, height:30}}  src={profile} />
            <Typography variant="span" >Banupriya</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open ={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
                      
    </AppBar>
  )
}

export default Navbar;
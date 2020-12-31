import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from "@material-ui/core";
import SidebarOption from './SidebarOption';
import './Sidebar.css';


function Sidebar(){
    return(
        <div className="sidebar">
            <TwitterIcon className="sidebar_twitterIcon"/>    
            <SidebarOption active text="Home" Icon={HomeIcon}/>
            <SidebarOption text="Explorar" Icon={SearchIcon}/>
            <SidebarOption text="Notificaciones" Icon={NotificationsIcon}/>
            <SidebarOption text="Mensajes" Icon={MessageIcon}/>
            <SidebarOption text="Marcadores" Icon={BookmarkBorderIcon}/>
            <SidebarOption text="Listas" Icon={ListAltIcon}/>
            <SidebarOption text="Perfiles" Icon={PersonIcon}/>
            <SidebarOption text="Más" Icon={MoreHorizIcon}/>

            {/* {Button -> Tweet} */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

        </div>
    )

}

export default Sidebar;
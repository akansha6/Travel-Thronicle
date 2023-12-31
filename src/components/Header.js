import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {

    const [showSearch, setShowSearch] = useState(false);
    console.log(showSearch);

    return ( <
        div className = 'sticky top-0 z-10 flex flex-col' >
        <
        div className = 'flex items-center sticky z-10 w-full top-0 bg-white p-2 pb-3 drop-shadow-md' >

        { /* -----when user clicks image it redirect it to home page------- */ } <
        Link to = "/" >
        <
        div className = 'cursor-pointer' > { /* here displaying the larger image log only when medium screen come, else displaying the lower one image of travel which is a smaller logo for mobile size */ } <
        img className = 'h-20 hidden md:block'
        src = "https://img.freepik.com/free-vector/detailed-travel-logo_23-2148627268.jpg?w=2000"
        alt = "logo" / >

        <
        /div> <
        /Link>

        { /* the search container part */ } { /* making two div, one for taking whole width,and other one inside this to remains in middle */ } <
        div className = 'flex flex-1 justify-center items-center' >
        <
        Link to = "/search" >

        <
        div className = 'border shadow-md cursor-pointer  border-gray-400 pl-2 rounded-3xl justify-center items-center'
        onClick = {
            () => setShowSearch(!showSearch) } >
        <
        input className = 'text-sm p-1 h-7 cursor-pointer bg-white pl-2 focus:outline-none'
        type = "text"
        disabled placeholder = 'click to explore' / >
        <
        IconButton > < SearchIcon className = '' / > < /IconButton>    <
        /div>

        <
        /Link> <
        /div>



        { /* show this div only when md screen comes */ } <
        div className = 'hidden md:flex flex space-x-1 items-center p-1 ml-1' >
        <
        p className = 'cursor-pointer p-2 rounded-xl hidden md:block font-Poppins text-xs hover:bg-gray-100 font-bold' > Become a host < /p>

        <
        IconButton > < LanguageIcon / > < /IconButton> <
        IconButton > < ExpandMoreIcon className = '' / > < /IconButton> <
        IconButton > < Avatar className = 'scale-100' / > < /IconButton> <
        /div>

        <
        /div>

        <
        div className = 'absolute bottom-0' >
        <
        h1 > hey there < /h1> { /* {showSearch && </>} */ } <
        /div>

        <
        /div>

    )
}

export default Header
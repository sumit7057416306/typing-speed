import React from 'react'
import Select from 'react-select';
import { themeOptions } from '../Utils/ThemeOptions';
import { useTheme } from '../Context/ThemeContest';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { Link } from '@mui/material';

function Footer() {

  const { settheme, theme,defaultTheme } = useTheme();
  const handleChange = (e) => {

    settheme(e.value);
    localStorage.setItem("theme", JSON.stringify(e.value));
  }
  return (
    <div className='footer'>
      <div className="left">
        <div className="links">
          <Link className='space' href="https://github.com/RohitRai07/Typing-Test" underline="none" color="inherit">
            <GitHubIcon fontSize="large" />
          </Link>
          <Link className='space' href="https://www.linkedin.com/in/rohit-rai-237415133" underline="none" color="inherit">
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link className='space' href="https://www.facebook.com/people/Rohit-Rai/pfbid02DFfWF6qzgbjx6pZTc8JSvF4UyU2RcFUGEBbJy6sQUoBk3tk9CyDkwgi6pHca7C3Dl/?mibextid=ZbWKwL" underline="none" color="inherit">
            <FacebookIcon fontSize="large" />
          </Link>
          <Link className='space' href="https://www.instagram.com/ro.hittman/" underline="none" color="inherit">
            <InstagramIcon fontSize="large" />
          </Link>
          <Link className='space' href="https://docs.google.com/document/d/1upPBwrr-vpqZRg6kG9rYj811qlq2GjeOeeUB0vTVdrU/edit#" underline="none" color="inherit">
            <DocumentScannerIcon fontSize="large" />
          </Link>
        </div>
      </div>
      <div className="center">
        <p>Copyright ©️ 2023 <b>Rohit Rai</b> </p>
      </div>
      <div className="right">
        <div className="themebtn">
          <Select
            onChange={handleChange}
            options={themeOptions}
            defaultValue={{ label: defaultTheme.label, value: defaultTheme }}
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: theme.background,
                color: theme.textColor,
              }),
              menu: (styles) => ({
                ...styles,
                backgroundColor: theme.background,
              }),
              option: (styles, { isFocused }) => {
                return {
                  ...styles,
                  backgroundColor: !isFocused ? theme.background : theme.textColor,
                  cursor: "pointer"
                }
              },
              singleValue: styles => ({...styles, color: theme.title}),
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
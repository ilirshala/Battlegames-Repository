import React from "react";
import "../../Styles/Shared/FooterApps.scss";
import facebook from "../../Assets/facebook.webp";
import instagram from "../../Assets/instagram.webp";
import discord from "../../Assets/discord.webp";
import twitch from "../../Assets/twitch.webp";
import reddit from "../../Assets/reddit.webp";

function FooterApps() {
  return (
    <div className='footerApps'>
      <div className='footer__app'>
        <div className='app'>
          <img src={facebook} alt='' />
          <h5>Facebook</h5>
        </div>
      </div>
      <div className='footer__app'>
        <div className='app'>
          <img src={instagram} alt='' />
          <h5>Instagram</h5>
        </div>
      </div>
      <div className='footer__app'>
        <div className='app'>
          <img src={discord} alt='' />
          <h5>Discord</h5>
        </div>
      </div>
      <div className='footer__app'>
        <div className='app'>
          <img src={twitch} alt='' />
          <h5>Twitch</h5>
        </div>
      </div>
      <div className='footer__app'>
        <div className='app'>
          <img src={reddit} alt='' />
          <h5>Reddit</h5>
        </div>
      </div>
    </div>
  );
}

export default FooterApps;

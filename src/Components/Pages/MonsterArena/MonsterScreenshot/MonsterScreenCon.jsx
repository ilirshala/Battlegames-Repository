import React, { useState } from "react";
import "../../../../Styles/Pages/MonsterArena/MonsterScreenshot/MonsterScreenCon.scss";
import Modal from "react-awesome-modal";
import FullscreenOutlinedIcon from "@material-ui/icons/FullscreenOutlined";
import Carousel from "react-elastic-carousel";
import screenshot1 from "../../../../Assets/screenshot1.webp";
import screenshot2 from "../../../../Assets/screenshot2.webp";
import screenshot3 from "../../../../Assets/screenshot3.webp";
import screenshot4 from "../../../../Assets/screenshot4.webp";
import screenshot5 from "../../../../Assets/screenshot5.webp";
import screenshot6 from "../../../../Assets/screenshot6.webp";
import screenshot7 from "../../../../Assets/screenshot7.webp";
import screenshot8 from "../../../../Assets/screenshot8.webp";
import screenshot9 from "../../../../Assets/screenshot9.webp";
import screenshot10 from "../../../../Assets/screenshot10.webp";
import screenshot11 from "../../../../Assets/screenshot11.webp";

function MonsterScreenCon() {
  const [open, setOpen] = useState(false);

  //This open Modal
  const openModal = () => {
    setOpen(!open);
  };

  //This close modal
  const closeModal = () => {
    setOpen(!open);
  };

  //These are breakpoints for carousel
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 1 },
    { width: 1150, itemsToShow: 1, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 1, itemsToScroll: 1 },
    { width: 1750, itemsToShow: 1, itemsToScroll: 1 },
  ];

  return (
    <div className='monsterScreenCon'>
      <div className='homeSecond__line'></div>
      <h1>Game Screens</h1>
      <div className='monsterScreen__firstRow'>
        <div className='screenshot1'>
          <div className='screenshot1__bg'>
            <FullscreenOutlinedIcon onClick={closeModal} />
          </div>
        </div>
        <div className='screenshot2'>
          <div className='screenshot1__bg'>
            <FullscreenOutlinedIcon onClick={closeModal} />
          </div>
        </div>
        <div className='screenshot3'>
          <div className='screenshot1__bg'>
            <FullscreenOutlinedIcon onClick={closeModal} />
          </div>
        </div>
      </div>
      <div className='monsterScreen__firstRow'>
        <div className='screenshot4'>
          <div className='screenshot1__bg'>
            <FullscreenOutlinedIcon onClick={closeModal} />
          </div>
        </div>
        <div className='screenshot5'>
          <div className='screenshot1__bg'>
            <FullscreenOutlinedIcon onClick={closeModal} />
          </div>
        </div>
        <div className='screenshot6'>
          <div className='screenshot1__bg'>
            <FullscreenOutlinedIcon onClick={closeModal} />
          </div>
        </div>
      </div>
      <div className='monsterScreen__secondRow'>
        <div className='screenshot7'>
          <div className='screenshot1__bg'>
            <FullscreenOutlinedIcon onClick={closeModal} />
          </div>
        </div>
        <div className='monsterScreen__cols'>
          <div className='monsterScreen__col'>
            <div className='screenshot8'>
              <div className='screenshot1__bg'>
                <FullscreenOutlinedIcon onClick={closeModal} />
              </div>
            </div>
            <div className='screenshot9'>
              <div className='screenshot1__bg'>
                <FullscreenOutlinedIcon onClick={closeModal} />
              </div>
            </div>
          </div>
          <div className='monsterScreen__col'>
            <div className='screenshot10'>
              <div className='screenshot1__bg'>
                <FullscreenOutlinedIcon onClick={closeModal} />
              </div>
            </div>
            <div className='screenshot11'>
              <div className='screenshot1__bg'>
                <FullscreenOutlinedIcon onClick={closeModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        visible={open}
        width='80%'
        height='90%'
        effect='fadeInUp'
        onClickAway={closeModal}
        style={{ background: "transparent" }}>
        <div className='modalCarousel'>
          <Carousel breakPoints={breakPoints}>
            <img src={screenshot1} alt='' />
            <img src={screenshot2} alt='' />
            <img src={screenshot3} alt='' />
            <img src={screenshot4} alt='' />
            <img src={screenshot5} alt='' />
            <img src={screenshot6} alt='' />
            <img src={screenshot7} alt='' />
            <img src={screenshot8} alt='' />
            <img src={screenshot9} alt='' />
            <img src={screenshot10} alt='' />
            <img src={screenshot11} alt='' />
          </Carousel>
        </div>
      </Modal>
    </div>
  );
}

export default MonsterScreenCon;

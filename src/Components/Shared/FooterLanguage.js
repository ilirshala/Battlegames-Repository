import React, { useState } from "react";
import "../../Styles/Shared/FooterLanguage.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function FooterLanguage() {
  const english = (
    <div className='selectedLang'>
      <h5>English</h5>

      <ExpandLessIcon />
    </div>
  );
  const albanian = (
    <div className='selectedAlbania'>
      <h5>Albania</h5>
      <ExpandLessIcon />
    </div>
  );
  const german = (
    <div className='selectedGerman'>
      <h5>German</h5>

      <ExpandLessIcon />
    </div>
  );
  const french = (
    <div className='selectedFrench'>
      <h5>French</h5>

      <ExpandLessIcon />
    </div>
  );
  const italian = (
    <div className='selectedItalian'>
      <h5>Italian</h5>

      <ExpandLessIcon />
    </div>
  );
  const chinese = (
    <div className='selectedChinesse'>
      <h5>Chinesse</h5>

      <ExpandLessIcon />
    </div>
  );
  const russian = (
    <div className='selectedRussian'>
      <h5>Russian</h5>

      <ExpandLessIcon />
    </div>
  );
  const japan = (
    <div className='selectedJapan'>
      <h5>Japan</h5>

      <ExpandLessIcon />
    </div>
  );
  const serbian = (
    <div className='selectedSerbian'>
      <h5>Serbian</h5>

      <ExpandLessIcon />
    </div>
  );
  const [lang, setLang] = useState(english);
  return (
    <div className='footerLanguageSecond'>
      <div className='footerlangMenu'>
        <ul className='langList'>
          <li onClick={() => setLang(english)} className='en'>
            English
          </li>
          <li onClick={() => setLang(albanian)} className='al'>
            Albanian
          </li>
          <li onClick={() => setLang(german)} className='de'>
            German
          </li>
          <li onClick={() => setLang(french)} className='fr'>
            French
          </li>
          <li onClick={() => setLang(italian)} className='it'>
            Italian
          </li>
          <li onClick={() => setLang(russian)} className='ru'>
            Russian
          </li>
          <li onClick={() => setLang(chinese)} className='ch'>
            Chinesse
          </li>
          <li onClick={() => setLang(japan)} className='jp'>
            Japanese
          </li>
          <li onClick={() => setLang(serbian)} className='sr'>
            Serbian
          </li>
        </ul>
        {lang}
      </div>
    </div>
  );
}

export default FooterLanguage;

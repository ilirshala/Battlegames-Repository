import React from "react";
import "../../../Styles/Pages/BlogArticle/Article.scss";
import firstArticleImg from "../../../Assets/firstArticleImg.webp";
import firstArticleImg2 from "../../../Assets/firstArticleImg2.webp";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";

function Article() {
  return (
    <div className='article'>
      <p>
        The core game-play loop sees players taking on quests to kill, or
        capture, a variety of larger than life creatures for the purpose of
        making better equipment. This is all done under the guise of studying
        the monsters for a research commission. While a simple premise, Battle
        Games has managed to perfect a formula that makes what is ostensibly a
        never-ending series of fetch quests into one of the most enthralling
        action role-playing games I’ve played in years.{" "}
      </p>
      <br />
      <p>
        One of the biggest strengths of Monster Arena: World is the weapons. The
        game features fourteen types of weapons which have unique play styles.
        Slowly mastering what situations call for which attack is engrossing,
        and with so many weapons available players can spend hundreds of hours
        fine tuning their abilities. Each weapon feels different enough that
        learning all the subtle details can provide an additional avenue for
        player engagement beyond simply grinding for better gear. With how
        formulaic the game-play loop of World is, having depth to master makes
        what would be a pedestrian experience into a highly engaging one.
      </p>
      <br />
      <img src={firstArticleImg} alt='' />
      <br />
      <p>
        Mastering weapons isn’t the only thing players will spend time doing, as
        many of the monsters also feel just as unique. There is a range of
        attacks and behaviors that players will need to study in order to best
        each new challenge. Simply running in head first while spamming buttons
        will result in a swift death, which is doubly true with the later game
        monsters. Observing your foe to learn when and where to strike, similar
        to mastering weapons, makes the combat element of Monster Arena: World
        feel thoughtful.
      </p>
      <br />
      <p>
        The depth of combat is further enhanced by the environment design in
        World. Each of the game’s maps have a variety of zones divided up by
        corridors that seamlessly flow together. The more familiar you becomes
        with each zone, the better you’ll be able to fight within it. Vertical
        space is used effectively across the map providing several vantage
        points for aerial attacks against your foe. Further, certain areas
        contain traps, like precariously perched boulders, that a careful hunter
        can utilize for additional damage. The combination of the map design,
        weapons, and monsters all create an engaging experience across the whole
        of Monster Fight.
      </p>
      <img src={firstArticleImg2} alt='' />
      <p>
        The other major strength of Monster Arena: World comes from gear
        progression. Each weapon type has different upgrade options that players
        can utilize as they discover which types of strategies they prefer.
        Additionally, each piece of equipment has skill points that go toward
        activating passive boosts such as greater attack power, resistances, or
        reduced stamina consumption. Each point invested will improve your
        proficiency with the skill up to a set threshold, so mixing gear to best
        compliment a particular strategy can be as enthralling as hunting the
        monsters for the necessary parts.
      </p>
      <hr />
      <div>
        <h3>Share This: </h3>
        <h3>
          <ChatBubbleRoundedIcon /> Comments (0)
        </h3>
      </div>
      <div className='socialMediaRoow'>
        <div className='socialCol'>
          <FacebookIcon />
        </div>
        <div className='socialCol'>
          <TwitterIcon />
        </div>
        <div className='socialCol'>
          <SettingsEthernetIcon />
        </div>
      </div>
    </div>
  );
}

export default Article;

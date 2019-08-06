import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

export default function Body() {
  return (
    <div className="bodySection">
      <div className="bodySideOne">
        <section>
          <div className="bodyLink">
            <h3 className="body-blue-title">
              About Fragle | Isaiah Francois's website
            </h3>
            <p className="body-green-links">www.fragle.com.com/about</p>
          </div>
          <p className="body-description">
            Thinking ahead is what i do best. Creating a resume can be a simple
            task, but why not make it creative in the process ...
          </p>
        </section>
        <section>
          <div className="bodyLink">
            <h3 className="body-blue-title">Personal Info | Isaiah Francois</h3>
            <p className="body-green-links">www.learnaboutme.com/isaiah</p>
          </div>
          <p className="body-description">
            <FaPhone /> (352)-989-3703 | <FaMailBulk /> francoiscoding@yahoo.com
            | Portfolio : https://francois-isaiah.netlify.com/
          </p>
        </section>
        <section>
          <div className="bodyLink">
            <a
              href="https://lambdaschool.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="body-blue-title">Education | Isaiah Francois</h3>
            </a>
            <p className="body-green-links">https://lambdaschool.com/</p>
          </div>
          <p className="body-description">
            Attended Lambda School Full Stack Web Development program. Here I
            learned HTML, CSS, JavaScript, React, Node, and Express.
          </p>
        </section>
        <section>
          <div className="bodyLink">
            <a
              href="https://github.com/FrancoisCoding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="body-blue-title">
                Technologies/Languages | Isaiah Francois
              </h3>
            </a>
            <p className="body-green-links">
              https://github.com/FrancoisCoding
            </p>
          </div>
          <p className="body-description">
            HTML | CSS | JavaScript | Bootstrap | React | Python | Node |
            Express | C# | Ruby | Unity Engine
          </p>
        </section>
      </div>
      <div className="bodySideTwo">
        <section>
          <h1>Projects</h1>
          <div>
            <a
              href="https://francois-game-center.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Francois-Games Center</h3>
            </a>
            <ul>
              <li className="bullets">
                Created gaming platform where users can find latest news and
                info on video games | Technologies Used: React, CSS, HTML,
                JavaScript, Bootstrap
              </li>
            </ul>
          </div>
          <div>
            <a
              href="https://francoiscoding.itch.io/mathgame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Math Game</h3>
            </a>
            <ul>
              <li className="bullets">
                Created math game to help students test there skills with
                multiplication, addition, and subtraction | Technologies Used:
                CSS, HTML, JavaScript
              </li>
            </ul>
          </div>
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=saneFreakyGaming.KnifeRunifeRun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Knife Run</h3>
            </a>
            <ul>
              <li className="bullets">Created the music soundtrack </li>
              <li className="bullets">
                Made the game natively on pc and ported to Android |
                Technologies Used: C#, Unity Engine
              </li>
            </ul>
          </div>
          <div>
            <a
              href="https://secret-recipes.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Secret Family Recipe Cookbook</h3>
            </a>
            <ul>
              <li className="bullets">Integrated Search functionality</li>
              <li className="bullets">
                Added ability to add recipes, and edit recipes
              </li>
              <li className="bullets">
                Created pages with loading transition | Technologies Used:
                React, CSS, HTML, JavaScript, Bootstrap
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

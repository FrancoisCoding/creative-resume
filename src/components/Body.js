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
            Thinking ahead is what I do best. Creating a resume can be a simple
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
              <p className="body-green-links">https://lambdaschool.com/</p>
            </a>
          </div>
          <p className="body-description">
            Attended Lambda School Full Stack Web Development program. Lambda
            School is a 9+ month Computer Science & Software Engineering Academy
            that provides an immersive hands-on curriculum with a focus on
            computer science, and fullstack web development. Students in this
            program... -Approach all coding challenges using pair programming.
            -Utilize agile software development and Git workflow on all
            projects. -Gain hands-on experience with client and server testing,
            -Design original user experiences across a range of web and mobile
            platforms, from ideation, to wireframing, to final product.
            -Complete all curriculum course work including: React, Redux, Node,
            Express, MongoDB, and Jest. -Write production-ready code using
            ReactJS, Redux, and CSS on the frontend and NodeJS and Express on
            the backend to build single page applications.
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
              <p className="body-green-links">
                https://github.com/FrancoisCoding
              </p>
            </a>
          </div>
          <p className="body-description">
            HTML | CSS | JavaScript | Bootstrap | React | Python | Node |
            Express | C# | Ruby | Unity Engine
          </p>
        </section>
        <section>
          <div className="bodyLink">
            <a
              href="https://www.linkedin.com/in/isaiah-francois-56a5b4188"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="body-blue-title">
                Isaiah Francois - Lambda School - Orlando, Florida Area |
                LinkedIn
              </h3>
              <p className="body-green-links">
                https://www.linkedin.com/in/isaiah-francois-56a5b4188
              </p>
            </a>
          </div>
          <p className="body-description">
            View Isaiah Francois' profile on LinkedIn, the world's largest
            professional community. Isaiah's education is listed on their
            profile. See the complete profile on ...
          </p>
        </section>
        <section>
          <div className="bodyLink">
            <a
              href="https://twitter.com/FrancoisCoding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="body-blue-title">
                Isaiah Francois (@FrancoisCoding) | Twitter
              </h3>
              <p className="body-green-links">
                https://twitter.com/FrancoisCoding
              </p>
            </a>
          </div>
          <p className="body-description">
            The latest Tweets from Isaiah Francois (@FrancoisCoding).{" "}
            <span role="img" aria-label="Brain">
              🧠
            </span>
            Developer | @lambdaschool | “Any fool can write code that a computer
            can understand.
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

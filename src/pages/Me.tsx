import * as React from "react";
import { Card } from "../components/Card";
import "./Me.css";
import { Socials } from "../components/Socials";

export const Me = () => (
  <div>
    <Card className="Card-padding-large">
      <div className='uk-container uk-text-center'>
      <h1>Full-stack JavaScript/TypeScript developer</h1>
      <Socials />
      </div>
    </Card>
    <Card className="Card-padding-large">
      <div className='uk-container uk-text-center'>
      <p>
        Hi, I'm Serge. I write code for a living. I also&nbsp;
        <a href="https://gitlab.com/priestine" target="_blank">
          participate in open source
        </a>
        . I do a lot of other things but you're probably not here for them.
      </p>
      <p>
        I design, build, operate and sometimes rescue full-stack web apps. I
        prefer working remotely and I'm good at coding that way but I can
        relocate if you need me that much in your office.
      </p>
      <p>
        I've been a developer for quite some time. I've worked for&nbsp;
        <a href="https://hyperauto.ru" target="_blank">
          commerce sites
        </a>
        &nbsp; and&nbsp;
        <a
          href="https://en.wikipedia.org/wiki/Non-disclosure_agreement"
          target="_blank"
        >
          startups
        </a>
        &nbsp;both in-office and remotely. I have experience setting up servers
        and CI/CD and developing with JavaScript and TypeScript. I am also
        capable of Java, Python and Go but I don't find them that pleasing. On
        the client side, I prefer React and Vue. I also managed a team of
        developers, mentored a couple of startups and CTOed one.
      </p>
      </div>
    </Card>
    <Card className="Card-padding-large">
      <div className="skills uk-container uk-width-large uk-text-center">
        <h3>Skills</h3>
        <span className="uk-badge">TypeScript</span>
        <span className="uk-badge">Node.js</span>
        <span className="uk-badge">Vue.js</span>
        <span className="uk-badge">React</span>
        <span className="uk-badge">Docker</span>
        <span className="uk-badge">Git</span>
        <span className="uk-badge">Project Management</span>
        <span className="uk-badge">Team Leading</span>
        <span className="uk-badge">MongoDB</span>
        <span className="uk-badge">Redis</span>
        <span className="uk-badge">PostgreSQL/MySQL</span>
        <span className="uk-badge">Lua</span>
        <span className="uk-badge">Go</span>
        <span className="uk-badge">Python</span>
        <span className="uk-badge">Java</span>
      </div>
    </Card>
  </div>
);

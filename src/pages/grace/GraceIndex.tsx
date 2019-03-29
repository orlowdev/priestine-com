import { Card } from "../../components/Card";
import React from "react";
import { SyntaxBox } from "../../components/SyntaxBox";

export interface TutorialPageProps {
  language: string;
  handleLanguageSwitch: () => any;
}

export const GraceIndex = ({
  language,
  handleLanguageSwitch
}: TutorialPageProps) => (
  <div>
    {/*TODO: NavBar Mobile View*/}

    <header className="App-header">
      <Card className="Card-padding-large">
        <div className="uk-text-center">
          <h1 className="uk-text-bold">
            Grace{" "}
            <a href="https://gitlab.com/priestine/grace" target="_blank">
              <i data-uk-icon="icon: git-branch; ratio: 1.5" />
            </a>
          </h1>
          <p>A library for building backend services.</p>
        </div>
        {/*<p>*/}
        {/*<button className="uk-button uk-button-danger uk-margin-small-right">*/}
        {/*Get Started*/}
        {/*</button>*/}
        {/*<button className="uk-button uk-button-primary">*/}
        {/*Take the Tutorial*/}
        {/*</button>*/}
        {/*</p>*/}
      </Card>
    </header>

    <Card className="Card-padding-large">
      <div className="uk-container uk-child-width-1-3@s" data-uk-grid>
        <div>
          <h3>Declarative</h3>
          <p>
            Design blocks of execution logic, compose them together, assign the
            declaration to the route and you're done.
          </p>
          <p>Declarative code makes it easier to understand, test and debug.</p>
        </div>
        <div>
          <h3>Middleware-Based</h3>
          <p>
            Simply compose reusable building blocks called middleware or
            higher-order building blocks called pipelines, reuse them across the
            codebase.
          </p>
          <p>
            Grace is compatible with both class-based and function middleware so
            it is up to you which approach suits you best.
          </p>
        </div>
        <div>
          <h3>Pure Node.js</h3>
          <p>
            Grace doesn't amend Node.js objects in any way. Every middleware
            receives pure Node.js request and response objects. Unlike other
            libraries (or frameworks), Grace doesn't make changes to these
            objects and supplies you with <em>intermediate</em> object for your
            data to pass along.
          </p>
        </div>
      </div>
    </Card>

    <Card className="Card-padding-large">
      <h2>The Middleware</h2>
      <p>
        Each middleware is provided with <code>context</code> which is an object
        that contains:
      </p>
      <ul>
        <li>
          <em>request</em> - Node.js IncomingMessage
        </li>
        <li>
          <em>response</em> - Node.js ServerResponse
        </li>
        <li>
          <em>intermediate</em> - An object designed for passing the data to the
          next middleware
        </li>
        <li>
          <em>error</em> - Optional error object
        </li>
      </ul>

      <h3>Function</h3>
      <p>
        Grace function middleware accepts the <code>context</code> object as a
        parameter:
      </p>

      <SyntaxBox language={language} switchLanguage={handleLanguageSwitch}>
        {language === "javascript"
          ? `const HelloWorld = ({ response }) => {
  response.end('<h1>Hello World</h1>');
}`
          : `const HelloWorld = ({ response }: HttpContextInterface): void => {
  response.end('<h1>Hello World</h1>');
}`}
      </SyntaxBox>

      <h3>Class-based</h3>
      <p>
        Grace class-based middleware accepts the <code>context</code> object as
        a parameter of the required <strong>process</strong> method:
      </p>

      <SyntaxBox language={language} switchLanguage={handleLanguageSwitch}>
        {language === "javascript"
          ? `class Greeter {
  static say(phrase) {
   return new Greeter(phrase);
  }

  constructor(phrase) {
    this.phrase = phrase;
  }

  process({ response }) {
    response.end(this.phrase);
  }
}`
          : `class Greeter implements MiddlewareInterface {
  public static say(phase: string): Greeter {
    return new Greeter(phrase);
  }

  public constructor(private phrase: string) {}

  public process({ response }: HttpContextInterface) {
    response.end(this.phrase);
  }
}`}
      </SyntaxBox>
    </Card>
  </div>
);

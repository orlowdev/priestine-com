import { Card } from "../../components/Card";
import React from "react";
import { SyntaxBox } from "../../components/SyntaxBox";

export const SemanticsIndex = () => (
  <div>
    <header className="App-header">
      <Card className="Card-padding-large">
        <div className="uk-text-center">
          <h1 className="uk-text-bold">
            Semantics{" "}
            <a href="https://gitlab.com/priestine/semantics" target="_blank">
              <i data-uk-icon="icon: git-branch; ratio: 1.5" />
            </a>
          </h1>
          <p>
            Automatic version bumping for Gitlab projects, compliant with{" "}
            <a href="https://semver.org" target="_blank">
              SemVer
            </a>{" "}
            and{" "}
            <a href="https://www.conventionalcommits.org/" target="_blank">
              Conventional Commits
            </a>
            .
          </p>
        </div>
      </Card>

      <Card className="Card-padding-large">
        <div className="uk-container uk-child-width-1-3@s" data-uk-grid>
          <div>
            <h3>Any Language</h3>
            <p>Semantics is programming language. All it needs is git.</p>
            <p>
              It takes the list of commits, deduces the version to be updated
              to, and publishes a new tag to the repository with all the changes
              assigned as a changelog.
            </p>
          </div>
          <div>
            <h3>Any CI Tool</h3>
            <p>
              Semantics is available as a Docker image. All you need to do is
              pull it with the CI of your choice and pass it the code.
            </p>
            <p>
              Alternatively, you can globally install @priestine/semantics and
              run it as a shell script with <em>priestine-semantics</em>
            </p>
          </div>
          <div>
            <h3>Configurable</h3>
            <p>
              Semantics can be configured in many ways including custom version
              prefixes and postfixes (e.g. <q>v1.2.3-beta</q>), changelog output
              setup and support for on-premise Gitlab instances.
            </p>
            <p>
              Check out the changelog Semantics produces&nbsp;
              <a
                href="https://gitlab.com/priestine/semantics/tags"
                target="_blank"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </Card>

      <Card className="Card-padding-large">
        <h3>Example setup with Gitlab CI</h3>
        <SyntaxBox language="yaml">
          {`# .gitab-ci.yml

versioning:
  stage: deploy
  image: priestine/semantics:latest
  script:
  - priestine-semantics --private-token={GITLAB_ACCESS_TOKEN}
  only:
  - master
`}
        </SyntaxBox>
      </Card>
    </header>
  </div>
);

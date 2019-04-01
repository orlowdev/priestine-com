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
    </header>

    <Card className="Card-padding-large">
      <div className="uk-container uk-child-width-1-3@s" data-uk-grid>
        <div>
          <h3>Any Language</h3>
          <p>Semantics is programming language. All it needs is git.</p>
          <p>
            It takes the list of commits, deduces the version to be updated to,
            and publishes a new tag to the repository with all the changes
            assigned as a changelog.
          </p>
        </div>
        <div>
          <h3>Any CI Tool</h3>
          <p>
            Semantics is available as a Docker image. All you need to do is pull
            it with the CI of your choice and pass it the code.
          </p>
          <p>
            Alternatively, you can globally install @priestine/semantics and run
            it as a shell script with <em>priestine-semantics</em>
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
      <p>
        To use <em>@priestine/semantics</em> tag publishing, you need to issue a
        Gitlab Access Token, assign it to an environment variable and then pass
        it to the script.
      </p>
      <ol>
        <li>
          Go to the{" "}
          <a
            href="https://gitlab.com/profile/personal_access_tokens"
            target="_blank"
          >
            tokens page
          </a>
        </li>
        <li>
          In the <strong>Name</strong> field provide something viable, e.g.{" "}
          <em>Version Bumping</em>
        </li>
        <li>
          In the <strong>scopes</strong> section check the <em>api</em> checkbox
        </li>
        <li>
          Press the <strong>Create personal access token</strong> button
        </li>
        <li>
          You'll get your newly created access token inside{" "}
          <em>Your New Personal Access Token</em> input
        </li>
        <li>
          Copy it and put as a new environment variable. You can name it the way
          you like but be sure to reference it correctly in the Gitlab CI YAML
          file. For the example below, the variable should be named{" "}
          <code>GITLAB_ACCESS_TOKEN</code>. Read more about environment
          variables in{" "}
          <a
            href="https://docs.gitlab.com/ee/ci/environments.html"
            target="_blank"
          >
            Gitlab docs
          </a>
        </li>
      </ol>
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
    <Card className="Card-padding-large">
      <h3>CLI args</h3>
      <p>
        You can customise the behaviour of <em>priestine-semantics</em> command
        by providing CLI args and flags just like you provide the private token
        in the previous section code snippet.
      </p>
      <SyntaxBox language="bash">
        {`priestine-semantics --private-token={GITLAB_ACCESS_TOKEN} --prefix=v --fix-or-feat
`}
      </SyntaxBox>
      <h4>Supported args</h4>
      <ul>
        <li>
          <code>--private-token=%VALUE%</code> - private token for publishing
          tags to Gitlab
        </li>
        <li>
          <code>
            --custom-domain=https://%ON_PREMISE_GITLAB_SOMEWHERE%/api/v4
          </code>{" "}
          - use given URL for publishing instead of Cloud Gitlab.&nbsp;
          <strong>IMPORTANT NOTE</strong>: always specify the version of the API
          of your self-hosted Gitlab. This is done to allow support for Gitlab
          APIs of older versions <em>although they have never been tested</em>
        </li>
        <li>
          <code>--prefix=%VALUE%</code> - string to be prepended to the issued
          version, e.g. <strong>v</strong>1.0.0
        </li>
        <li>
          <code>--postfix=%VALUE%</code> - string to be appended to the issued
          version, e.g. 1.0.0<strong>-beta</strong>
        </li>
      </ul>
      <h4>Supported flags</h4>
      <ul>
        <li>
          <code>--no-chore</code> - exclude <strong>chore</strong>-type commits
          from release notes
        </li>
        <li>
          <code>--no-style</code> - exclude <strong>style</strong>-type commits
          from release notes
        </li>
        <li>
          <code>--no-refactor</code> - exclude <strong>refactor</strong>-type
          commits from release notes
        </li>
        <li>
          <code>--no-docs</code> - exclude <strong>docs</strong>-type commits
          from release notes
        </li>
        <li>
          <code>--no-perf</code> - exclude <strong>perf</strong>-type commits
          from release notes
        </li>
        <li>
          <code>--no-test</code> - exclude <strong>test</strong>-type commits
          from release notes
        </li>
        <li>
          <code>--no-ci</code> - exclude <strong>ci</strong>-type commits from
          release notes
        </li>
        <li>
          <code>--no-build</code> - exclude <strong>build</strong>-type commits
          from release notes
        </li>
        <li>
          <code>--no-fix</code> - exclude <strong>fix</strong>-type commits from
          release notes
        </li>
        <li>
          <code>--no-feat</code> - exclude <strong>feat</strong>-type commits
          from release notes
        </li>
        <li>
          <code>--no-bc</code> - exclude <strong>BREAKING CHANGES</strong>{" "}
          section from release notes
        </li>
        <li>
          <code>--fix-or-feat</code> - only include{" "}
          <strong>fix, feat and BREAKING CHANGES</strong> sections to release
          notes
        </li>
      </ul>
    </Card>
    <Card>
      <h3>Badge</h3>
      <p>
        Let people know that your package is published using{" "}
        <em>@priestine/semantics</em> by including the badge in your readme:
      </p>
      <SyntaxBox language="markdown">
        {`[![versioning: semantics](https://img.shields.io/badge/versioning-semantics-912e5c.svg)](https://gitlab.com/priestine/semantics)`}
      </SyntaxBox>
    </Card>
  </div>
);

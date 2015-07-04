# react-component-template
Base for React Components

## Reason

[![Circle CI](https://circleci.com/gh/nkbt/react-component-template.svg?style=svg)](https://circleci.com/gh/nkbt/react-component-template)
[![Coverage Status](https://coveralls.io/repos/nkbt/react-component-template/badge.svg?branch=master)](https://coveralls.io/r/nkbt/react-component-template?branch=master)
[![Dependency Status](https://david-dm.org/nkbt/react-component-template.svg)](https://david-dm.org/nkbt/react-component-template)
[![devDependency Status](https://david-dm.org/nkbt/react-component-template/dev-status.svg)](https://david-dm.org/nkbt/react-component-template#info=devDependencies)

Developing and publishing multiple React components requires a lot of work to keep them all at the same code, ops, best-practices level. Most of configs are often copy-pasted. If one project updated, for exapmle, .eslintrc, other projects should follow to keep codebase consistent. Having growing number of components leads to a more diverged codebase that is exponentially harder to manage.


## Contents

- React module boilerpate dependencies and scripts
- .gitignore and .npmignore
- CircleCI config
- ESLint config - Nik Butenko
- Empty React component
- Example
- Tests and coverage


## Usage

1. Add as remote

  ```sh
  git remote add template git@github.com:nkbt/react-component-template.git
  ```

2. Merge to existing repo

  ```sh
  git merge --no-ff template/master
  ```

3. Fix conflicts
4. If update needed, repeat

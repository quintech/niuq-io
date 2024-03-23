# News Validation Platform (Niuq) Front-End 2022/08/08
*Back-End is Niuq-Api project on the same server*
## Libabraries used

+ Framework:  [React](https://reactjs.org/)
+ Framework:  [Laravel](https://laravel.com/)
+ CSS:  [React-Bootstrap](https://react-bootstrap.github.io/)
+ CSS:  [React-mdBootstrap](https://mdbootstrap.com/docs/b5/react/getting-started/installation/)
+ Icons:  [React-icons](https://react-icons.github.io/react-icons/)
+ date Component:  [React-Rainbow-Components](https://react-rainbow.io/)
+ React Cache Component: [React-Redux](https://redux.js.org/introduction/installation)
+ React-Google Login: [React - Google One Tap Login](https://www.npmjs.com/package/react-google-one-tap-login)
+ React-Front-End-Route: [React-Router](https://v5.reactrouter.com/web/guides/quick-start)
+ React-Share: [React-Share](https://www.npmjs.com/package/react-share)

## How to Install

Download packages for the front-end libararies
```javascript
yarn install
OR
npm install

```

Download required Laravel libarary
```javascript
composer install
```

Start the project
```
1. Copy .envExample and rename it to .env

2. Execute the command:  php artisan key:generate

3. Execute the command:  mix watch (Have to execute this before starting the project to interpret the changed codes.)

4. Use XAMPP OR MAMP chooses project folder at Public
```

Laravel Cache Issue:
```
php artisan opt:clear
```

## React + Laravel Collaboration Guidelines

### Introduction:

Not yet updated

<br>  

*The specifications of this project can still be discussed and improved as needed.*

#### Notes:

[Naming Convention]:
> Files and directories should be in uppercase => Use the kebab case naming method  
> Methods and variables => Use the camel case naming method  
> Classes => Use the Pascal case naming method  
> Constants => All uppercase

1. The app.css file in the public folder is for Bootstrap CSS.

<br>

2. Shared components must be placed in the resources/js/components folder.
   `Here, components refer to shared screens. The entry point for shared screens must be named index.jsx. The logic should be added in a subfolder under that component.`

<br>

3. Global CSS styles should be placed in styles.css.

<br>

## Other Considerations

1. The React-Router package version used is V5, not the newer V6 (V5 has more resources available).

## Release Rules
1. Release rules:
    1. Master branch is used for the main server. Collaborators should create new branches and merge them into master.
    2. Before each release, fetch the latest version (shared components) and then release.
    3. The main branch for Quiehe is develop.
    4. Test branch: main
    5. Refer to the directory structure.

## Main Directory Structure

- public
    - css (Bootstrap and global CSS)
        - app.css (Bootstrap V5.0.0)
        - style.css (Custom CSS)
    - images (Location for images used in the Niuq project)
    - js (Generated static files after executing Laravel webpack.mix.js. Do not modify unless necessary)

- resources
    - js (JS files used in the project)
        - components (Shared screens)
        - share (Shared variables or components without screens)
        - page (Individual screens)
        - app.jsx (Initial entry point)
        - AuthenticatedRoute.js (Controls frontend routing for React-routes)
        - react-routes (Controls frontend routing and screen display)
    - lang (Language files)
    - views (Laravel views)

- routes (Laravel route settings. Use React-Route for everything except API routes)

## Git Commit Guidelines
The status can be one of the following:
1. feat: Add/modify functionality (feature).
2. del: Remove functionality or files.
3. fix: Fix a bug (bug fix).
4. docs: Documentation.
5. style: Formatting (changes that do not affect the code's functionality, such as white-space, formatting, missing semi colons, etc.).
6. refactor: Refactor code (neither adding features nor fixing bugs).
7. perf: Improve performance (code changes that improve performance).
8. test: Add tests (when adding missing tests).
9. chore: Changes to build processes or auxiliary tools (maintenance).
10. revert: Revert a previous commit, e.g., revert: type(scope): subject (Revert version: xxxx).
11. tmp: Temporary, used for synchronizing unfinished code between different computers.

The format of the git commit message should be as follows:

"Status" (required, choose the most appropriate status from the above list): "Subject" (required, a brief description of the commit, not exceeding 50 characters, without a period at the end)

## Branch Explanation
master: Branch for production, used for automatic deployment

develop: Branch for local development and testing

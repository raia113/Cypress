
CONSTRUCTS Explained
- describe: its like test suite
- it: its like test case
- functions wraps the it block - remember
- visit: its like a get to the URL
these constructs are mocha and chai framework related
code format: shift+alt+f


Running CYPRESS tests via command line
- Running a single test: .\node_modules\.bin\cypress open  //this will open test runner 
- Running a single test: .\node_modules\.bin\cypress run --spec '.\cypress\integration\Aayush''s Tests\firstTest.js'
- Running on a browser: .\node_modules\.bin\cypress run --spec '.\cypress\integration\Aayush''s Tests\firstTest.js' --browser firefox

project structure explained
- Node modules: gets created when npm install is run
- Integration: would have test cases
- Support: would have common methods
- Fixtures: would have test data as we dont hard code test data onto a system
-cypress.json: stores overrides for default configuration
 
Locaters(need only four methods and any element can be handled)
- Cypress only supports CSS Selectors
    - id: #idname
    - classname: .classname 
        - tagname.classname
    - Any attribute (type, class, placeholder)
        - tagname[attribute=value] e.g. input[type='search']
    - Parent to child traversing(Traverse using tagnames): tagname tagname e.g. form input
- How to confirm from console if you have the locaters pinned
    - $('input[type="search"]')

- How to merge branch to master
  git remote -v
  git branch updating-cypress-tests-part1 //creating a branch
  git checkout updating-cypress-tests-part1
  git status
  git branch
  git checkout master
  git merge updating-cypress-tests-part1

OR use Git pull

   continuing with mandatory and technical trainings 

Configure scripts to use the cypress runs, just run "npm run headmode"
 "scripts": {
    "test": "node_modules\\.bin\\cypress run",
    "headmode":"npm run test --headed"
refer to command line arguments cypress io for help/more info

Selecting elements
cy
  .get('h1') // select by tag
  .get('.square') // select by class
  .get('#circle') // select by id
  .get('[shape="triangle"]'); // select by attribute
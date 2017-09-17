Webpack installed to automate testing.

lodash installed.

node-security check
concurrent testinng --npm run-all

Use npm scripts for automation:
  better than taskrunners like grunt and gulp
    no need for seperate plugin (for linting)
    less points for failure = simpler debugging
    better docs
    easier to configure and learn makes for better collaboration across a team

include libraries like "chalk" for coloration in pre/post hooks

dev web server options:
  http-server
  live-server
  *express*
  browsersync will sync the app across different devices and browsers in order to see how it renders and functions in different settings

  sharing work-in-progress:
    punches hole in firewall so that clients can test
      localtunnel - expose localhost via url (anyone with url can access app)
      ngrok - more secure
    push static files up to a server
      "now"
      surge--only hosts static files

performance strategies:
  continuous integration


WP style-loader and css-loader
WP file-loader for png

inline-source-map for debugging

file-system for importing html as text
mocha, chai, jsdom, cheerio, PhantomJS

testingn alongside :
  easier importing
  clear visibility
  convenience
  less redundancy in file structure
  easier to change architecture

automated testing for less friction

centralize API calls
  1 place to configure all calls
    -urls, response types
    -handle preloader logic
      kkep track of all asyc calls in process
    -strandardize error handling
    -single seam for mocking API

improvements:

linting
  enforece consistency
  avoid mistakes
  should be automated during build process
    one place to check ofr errors
    standardized integration for developers
    part of continuous integratoin
transpiling


for integration testing with external resources, use selenium.

selective polyfilling 

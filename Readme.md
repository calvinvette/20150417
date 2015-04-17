# Commands to get the project working

```
npm install
bower install
gulp clean
gulp build
gulp unit-test
```

# Notes

Note in the eclipse/ folder there are some external launch configs for starting up http-server and the "gulp webserver" target.
Also in the .externalToolBuilders/ folder there are those builders I mentioned to integrate Gulp builds into your project builders
If you import this folder directly as an Eclipse project they should already be set up to use all of them.

# Still to fix:

package.json has some missing elements I haven't isolated - "npm install" may not be enough just yet.
The CustomerForm.test.js now executes (and the karma.conf.js produces a junit-readable test-results.xml for JUnit View in Eclipse)
but currently doesn't test properly - there's an issue with $scope not being passed properly.

Notes for typings:

given the typings in the online course:

cat typings.js
{
  "globalDependencies": {
    "core-js": "registry:dt/core-js#0.0.0+20160725163759",
    "jasmine": "registry:dt/jasmine#2.2.0+20160621224255",
    "node": "registry:dt/node#6.0.0+20160818175514"
  }
}

./node_modules/typings/dist/bin.js list      
typings WARN deprecated 2016-08-31: "registry:dt/node#6.0.0+20160818175514" is deprecated (updated, replaced or removed)

├── core-js (global)
├── jasmine (global)
└── node (global)

=> I add to update node typings


./node_modules/typings/dist/bin.js search --global node
Viewing 20 of 245

NAME                          SOURCE HOMEPAGE                                           DESCRIPTION VERSIONS UPDATED                 
analytics-node                dt     https://segment.com/docs/libraries/node/                       1        2016-03-17T12:06:54.000Z
[...]
node                          dt     http://nodejs.org/                                             5        2016-08-31T02:11:19.000Z
node                          env                                                                   6        2016-09-02T02:22:31.000Z
[...]

or better

./node_modules/typings/dist/bin.js info env~node --versions
TAG                   VERSION DESCRIPTION COMPILER LOCATION                                                            UPDATED                 
6.0.0+20160902022231  6.0.0                        github:types/env-node/6#30804787ed04e4d475046ef0335bef502f492da0    2016-09-02T02:22:31.000Z
4.0.0+20160902022231  4.0.0                        github:types/env-node/4#30804787ed04e4d475046ef0335bef502f492da0    2016-09-02T02:22:31.000Z
0.12.0+20160902022231 0.12.0                       github:types/env-node/0.12#30804787ed04e4d475046ef0335bef502f492da0 2016-09-02T02:22:31.000Z
0.11.0+20160902022231 0.11.0                       github:types/env-node/0.11#30804787ed04e4d475046ef0335bef502f492da0 2016-09-02T02:22:31.000Z
0.10.0+20160902022231 0.10.0                       github:types/env-node/0.10#30804787ed04e4d475046ef0335bef502f492da0 2016-09-02T02:22:31.000Z
0.8.0+20160902022231  0.8.0                        github:types/env-node/0.8#30804787ed04e4d475046ef0335bef502f492da0  2016-09-02T02:22:31.000Z

From the docs:

# Install typings from a particular source (use `<source>~<name>` or `--source <source>`). 
typings install env~atom --global --save
typings install bluebird --source npm --save

=>

./node_modules/typings/dist/bin.js install env~node --global --save

Reference package.json

Refer to the doc https://angular.io/docs/ts/latest/quickstart.html

Note that some dependencies (rxjs...) may have specific (beta ;) versions needed as requirements

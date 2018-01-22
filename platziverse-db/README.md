# platziverse-db

## Usage

``` js
const setupDatabase = require('platziverse-db')

setupDatabase(config).then(db => {
    
    /* EMC2016 */
    const { Agent, Metric } = db

    /* Traditional Code: */
    
    /*
    const Agent = db.Agent
    const Metric = db.Metric
    */

}).catch(err => console.log.error(err))
```
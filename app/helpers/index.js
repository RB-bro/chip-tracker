const hyper = require('react-hyperscript-helpers')
const row = (children) =>
  typeof children == 'string' 
    ?  hyper.div @ {className:"row"}, [children]
    :  hyper.div @ {className:"row"}, children

const column = (children) => 
  typeof children == 'string' 
    ?  hyper.div @ {className:"u-max-width three columns"}, [children]
    :  hyper.div @ {className:"u-max-width three columns"}, children

Object.assign @ exports
  , hyper
  , {row, column}

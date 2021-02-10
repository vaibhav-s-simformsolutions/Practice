const jwt = require('jsonwebtoken');

token = jwt.sign({_id : 'vaibhav'},'thisismykey');
console.log(token);

const isvalid = jwt.verify(token,'thisismykey');
console.log(isvalid);
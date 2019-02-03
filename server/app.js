const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

//allow cross-origin requests

app.use(cors());

//connect to mLab DB
mongoose.connect('mongodb://david:secret123@ds135574.mlab.com:35574/grq-test');
mongoose.connection.once('open', () => {
   console.log('connected to mLab, user: david, password: secret123')
});

//handel all GraphQL requests
app.use('/graphql', graphqlHTTP({
   schema: schema,
   graphiql: true
}));

//Server
app.listen(4000, (req, res) => {
   console.log('listening for requests on port: 4000')
});

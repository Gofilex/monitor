// make the cache of required modules available to code e.g. wrapped by Meteor
// that can't reach the native require method
module.exports = require.cache;

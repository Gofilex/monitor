// make the cache of required modules available to code e.g. wrapped by Meteor
// that can't reach the native require method
console.log( require );
module.exports = function() {
  return require.cache;
};

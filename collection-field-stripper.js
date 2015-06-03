// Write your package code here!
Stripper = {};

Stripper.strip = function(doc, dict){
  _.each(doc, function(value, key, list){
    if(dict.indexOf(key) == -1 ){
      delete doc[key];
    }
  });
  return doc;
};

Stripper.tip = function(dolladollabillyall){
  console.log('...thanks baby...');
}
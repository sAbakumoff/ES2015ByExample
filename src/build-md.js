var request = require('request');
var Promise = require('promise');
var data = require('./data/template-literals.json'), groupData = {};

function get_lines(file_url, line_num){
  var slice_len = 2;
  var startLine = Math.max(0, line_num - slice_len - 1), endLine = startLine + slice_len * 2;
  return new Promise(function(resolve, reject){
    request.get(file_url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(body.split('\n').slice(startLine, endLine).join('\n'));
        }
        else{
          reject(error || response.statusCode);
        }
    });
  });
}

var promises = [];

data.forEach(function(dataItem){
  if(!groupData.hasOwnProperty(dataItem.repo)){
    groupData[dataItem.repo] = [];
  }
  groupData[dataItem.repo].push(dataItem);
  var resolver = get_lines(dataItem.content_url, +dataItem.line_number);
  resolver.then(function(content){
      dataItem.content = content;
  });
  promises.push(resolver);
});

Promise.all(promises).then(function(){
  Object.keys(groupData).forEach(function(key){
    console.log(`# ${key}`);
    groupData[key].forEach(function(sample){
      console.log(`[${sample.file_name}](${sample.preview_url})`);
      console.log('```javascript');
      console.log('// This is the slice of code, visit the link above to review the full source ');
      console.log(sample.content);
      console.log('```')
    });
  })
})

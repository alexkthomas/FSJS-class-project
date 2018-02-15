
function getFiles() {
  return $.ajax('/api/file')
    .then(res => {
      console.log("Results from getFiles()", res);
      return res;
    })
    .fail(err => {
      console.error("Error in getFiles()", err);
      throw err;
    });
}

function refreshFileList() {
  const template = $('#list-template').html();
  const compiledTemplate = Handlebars.compile(template);

  getFiles()
    .then(bob => {
      const data = {files: bob};
      const html = compiledTemplate(data);
      console.log('our html', html);
      $('#list-container').html(html);
    })
}


refreshFileList();
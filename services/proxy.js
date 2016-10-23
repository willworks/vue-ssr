var fetchDoubanApi = function() {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          var response;
          try {
            response = JSON.parse(xhr.responseText);
          } catch (e) {
            reject(e);
          }
          if (response) {
            resolve(response, xhr.status, xhr);
          }
        } else {
          reject(xhr);
        }
      }
    };
    xhr.open('GET', 'https://api.douban.com/v2/user/aisk', true);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.send(data);
  });
};

(async function() {
  try {
    let result = await fetchDoubanApi();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
})();
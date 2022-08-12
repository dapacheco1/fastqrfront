const Post = (url, data,header) =>{
    let id = 0;
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: header,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        id = data.data;
        console.log(data);
      });
};

export {Post};
// let response = fetch("https://storageforstatejson.herokuapp.com/router/output");

// console.log(response);
fetch("https://storageforstatejson.herokuapp.com/router/output")
  .then(function (response) {
    response.json().then(function (data) {
      // data[0].jsontable.map((ele) => {
      //   `hello! ${ele.word}`;
      // });
      let obj = JSON.parse(data[0].jsontable);
      console.log(obj);
      obj.map((ele) => {
        console.log(ele.word);
        console.log(ele.year);
        console.log(ele.frequency);
        console.log(ele.classification);
      });
    });
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });
// // var xmlHttp = new XMLHttpRequest();

// // const hi = xmlHttp.open(
// //   "GET",
// //   "https://storageforstatejson.herokuapp.com/router/output",
// //   true
// // );

// // console.log(hi);

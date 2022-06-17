let changeColor = (myThis) => {
  // debugger;
  // console.log(myThis.id);

  let myBody = document.querySelector("body");
  let myColor = myThis.id;

  console.log(myColor);

  myBody.style.backgroundColor = myColor;
};

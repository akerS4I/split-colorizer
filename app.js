const main = document.querySelector("main");
const input = document.querySelector(".input");

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    let arr = e.target.value.split(' ', 2);
    console.log(arr);
    main.style.cssText = `background-color:${arr[0]};`;
    input.style.cssText = `border-radius:${arr[1]}px;`;
  }
});

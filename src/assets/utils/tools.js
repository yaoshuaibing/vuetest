export let fn= ()=> {
  console.log('wo diwa');
  if (window.key === 1) {
    console.log(123);
    fn = () => { alert(11111) }
  } else {
    fn = () => {
      console.log(355);
      alert(2222)
    }
  }
}
export let fn1 = () => {
 alert(2222)
}

setTimeout(() => {
  fn = () => { alert(3333)}
},10000)
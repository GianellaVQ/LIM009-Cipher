window.cipher = {
  encode: (pass, offset) => {
    let newPass = '';
    for (let i = 0; i < pass.length; i++) {
      let numAsci = pass[i].charCodeAt();
      let numRecorrido = (((numAsci - 65) + offset) % 26 + 65);
      let letterAsci = String.fromCharCode(numRecorrido);
      newPass += letterAsci;
      resultEncode.textContent = newPass;
      // console.log(newPass); 
    }
    return newPass;
  },
  decode: (pass,offset) => {
    let newPass = '';
    for (let i = 0; i < pass.length; i++) {
      let numAsci = pass[i].charCodeAt();
      let numRecorrido = (((numAsci - 65) - offset + 26)% 26 + 65);
      let letterAsci = String.fromCharCode(numRecorrido);
      newPass += letterAsci;
      resultDecode.textContent = newPass;
      // console.log(newPass); 
  }
  return newPass;
},
}

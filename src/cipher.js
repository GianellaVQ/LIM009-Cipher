window.cipher = {
  encode: (passEn, offsetEn) => {
    let newPassEncode = '';
    for (let i = 0; i < passEn.length; i++) {
      let numAsci = passEn[i].charCodeAt();
      let numRecorrido = (((numAsci - 65) + offsetEn) % 26 + 65 ); 
      let letterAsci = String.fromCharCode(numRecorrido);
      newPassEncode += letterAsci;
    }
    return newPassEncode;
  },

  decode: (passDe,offsetDe) => {
    let newPassDecode = '';
    for (let i = 0; i < passDe.length; i++) {
      let numAsci = passDe[i].charCodeAt();
      let numRecorrido = (((numAsci - 65) - offsetDe)%26 );
      numRecorrido = numRecorrido < 0 ? (numRecorrido + 90)+1 : numRecorrido +65
      let letterAsci = String.fromCharCode(numRecorrido);
      newPassDecode += letterAsci;   
  }
  return newPassDecode;
}
};

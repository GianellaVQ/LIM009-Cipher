window.cipher = {
  encode: (pass, offset) => {
    let newPass = '';
    for (let i = 0; i < pass.length; i++) {
      let indice = pass[i].charCodeAt();
      let numAsci = (((indice - 65) + offset) % 26 + 65);
      let letterAsci = String.fromCharCode(numAsci);
      newPass += letterAsci;
      resultBox.textContent = newPass;
      console.log(newPass); 
    }
  },
  decode: () => {
    /* Acá va tu código */
  }
};

let formEncode = document.getElementById('form-encode'),
pass = document.getElementById('pass'),
offset = document.getElementById('offset'),
resultBox = document.getElementById('result');

formEncode.addEventListener('submit', e =>{
    e.preventDefault();
    pass = e.target.pass.value;
    offset = parseInt(e.target.offset.value);
    // console.log(pass, offset); // comprobando que si me captura correctamente los datos
    cipher.encode(pass, offset);
    // resultBox.textContent = pass;
    
});
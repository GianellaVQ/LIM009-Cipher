let divWelcome = document.getElementById('div-welcome'),
divEncode = document.getElementById('div-encode'),
divDecode = document.getElementById('div-decode'),
formEncode = document.getElementById('form-encode'),
formDecode = document.getElementById('form-decode'),
passEn = document.getElementById('passEn'),
offsetEn = document.getElementById('offsetEn'),
passDe = document.getElementById('passDe'),
offsetDe = document.getElementById('offsetDe'),
btnEncode = document.getElementById('btn-encode'),
btnDecode = document.getElementById('btn-decode'),
resultDecode = document.getElementById('result-decode'),
resultEncode  = document.getElementById('result-encode');

btnDecode.addEventListener('click', e => {
    e.preventDefault()
    divWelcome.style.display='none'
    divDecode.style.display='block'
});

btnEncode.addEventListener('click', e => {
    e.preventDefault()
    divEncode.style.display='block'
    divWelcome.style.display='none'
});

formEncode.addEventListener('submit', e =>{
    e.preventDefault();
    passEn = e.target.passEn.value;
    offsetEn = parseInt(e.target.offsetEn.value);
    let result = cipher.encode(passEn, offsetEn);
    resultEncode.textContent = result;
}
);

formDecode.addEventListener('submit', e=>{
    e.preventDefault();
    passDe = e.target.passDe.value;
    offsetDe = parseInt(e.target.offsetDe.value);
    let result = cipher.decode(passDe, offsetDe);
    resultDecode.textContent = result;
});

let divWelcome = document.getElementById('div-welcome'),
formElection = document.getElementById('form-election'),
divEncode = document.getElementById('div-encode'),
divDecode = document.getElementById('div-decode'),
encode = document.getElementById('btn-encode'),
decode = document.getElementById('btn-decode'),
formEncode = document.getElementById('form-encode'),
formDecode = document.getElementById('form-decode'),
pass = document.getElementById('pass'),
offset = document.getElementById('offset'),
resultEncode = document.getElementById('result-encode'),
resultDecode = document.getElementById('result-decode');

const election = election => {
    divWelcome.style.display='none'
    if (election == 1) {
        divEncode.style.display='block'
    } else {
        divDecode.style.display='block'
    }
}

formEncode.addEventListener('submit', e =>{
    e.preventDefault();
    pass = e.target.pass.value;
    offset = parseInt(e.target.offset.value);
    cipher.encode(pass, offset)
});

formDecode.addEventListener('submit', e=>{
    e.preventDefault();
    pass = e.target.pass.value;
    offset = parseInt(e.target.offset.value);
    cipher.decode(pass, offset)
});
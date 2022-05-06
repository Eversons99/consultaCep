async function validateCep(){
    const cep = document.getElementById('CEP').value
    console.log(`CEP ${cep.length} inserido `)

    if(cep.length < 8 || cep.length > 8) return alert('O CEP precisa ter 8 digitos') 

    let getCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    getCep = await getCep.json()

    console.log(getCep)
    printResult(getCep)
}

function printResult(getCep) {
    const response = getCep

    const rua = document.getElementById('rua')
    const bairro = document.getElementById('bairro')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')

    const showRua = document.createElement('td')
    const showBairro = document.createElement('td')
    const showCidade = document.createElement('td')
    const showEstado = document.createElement('td')

    showRua.textContent = response.logradouro
    showBairro.textContent =  response.bairro
    showCidade.textContent =  response.localidade
    showEstado.textContent =  response.uf

    rua.append(showRua)
    bairro.append(showBairro)
    cidade.append(showCidade)
    estado.append(showEstado)

    const myBtnDisable = document.getElementById('myBtn')
    myBtnDisable.disabled = true

    document.querySelector('.response').style.display = 'flex' 
    document.querySelector('.container2').style.display = 'none'
}
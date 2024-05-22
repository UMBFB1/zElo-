alert("Isto é um site teste")

document.getElementById('loading1').addEventListener('click',function(){
    window.location.href= 'loadingCuidador'
})

document.getElementById('loading2').addEventListener('click', function(){
    window.location.href= 'cuidador';
})

const botao = document.getElementById('loading2').addEventListener('click', function(){
    if(botao == this.click){
        window.location.href = 'loadingCuidador'
    }
})
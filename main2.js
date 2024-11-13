function Calculadora(){
    this.display = document.querySelector('.display')

    this.iniciar = () => {
        this.clickBotoes()
    }

    this.clickBotoes = () => {
        document.addEventListener('click', (e) => {
            let el = e.target; 
            if(el.classList.contains('btn-num')) this.mostra(el)
            if(el.classList.contains('btn-clear')) this.clear()
            if(el.classList.contains('btn-del')) this.del()
            if(el.classList.contains('btn-eq')) this.equals()
        })
    }

    this.mostra = (elemento) => {
        const valor = elemento.innerText
        this.display.value += valor
    }

    this.clear = () => {
        this.display.value = ''
    }

    this.del = () => {
        this.display.value = this.display.value.slice(0,-1)
    }

    this.equals = () => {
        try{
            const conta = eval(this.display.value)
            if(!conta){
                alert('Conta inválida!')
                return
            }
            else{
                this.display.value = conta
            }
        }
        catch(e){
            alert('Conta inválida!')
            return
        }
    }

}

const calculadora = new Calculadora()
calculadora.iniciar()
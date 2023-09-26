const pantalla = document.querySelector('.pantalla');
const boton = document.querySelectorAll('.btn');

boton.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const botonApretado = btn.textContent;
        // console.log(btn.textContent);

        if (btn.id === 'c') {
            pantalla.textContent = '0';
            return;
        }

        if (btn.id === 'borrar') {
            if (pantalla.textContent.length === 1 || pantalla.textContent === 'Error!') {
                pantalla.textContent = '0';
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
            return;
        }

        if (btn.id === 'igual') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = 'Error!'
            }
            return;
        }

        if (pantalla.textContent === '0' || pantalla.textContent === 'Error!') {
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;
        }
       
    })
})
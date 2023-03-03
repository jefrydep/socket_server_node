console.log('hellowerod');


const lbOnline = document.querySelector('#online')
const lbOffline = document.querySelector('#offline')
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();
socket.on('connect',()=>{
    console.log('Conectado')
    lbOffline.style.display= 'none';
    lbOnline.style.display= '';
})
socket.on('disconnect',()=>{
    console.log('Desconectado del servidor')
    lbOnline.style.display= 'none';
    lbOffline.style.display= '';
}) 

btnEnviar.addEventListener('click',()=>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id:'12334',
        fecha:new Date().getTime()
    }
    console.log(mensaje)
    // para emitir eventos con el socket
    socket.emit('enviar-mensaje',payload,(id)=>{
        console.log('desde el server',id)
    });
})
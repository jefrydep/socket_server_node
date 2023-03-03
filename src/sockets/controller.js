

const socketController = (socket)=>{
    console.log('Cliente Conectado')
    socket.on('disconnect',()=>{
        console.log('Cliente desconectado')

    })

    socket.on('enviar-mensaje',(payload,callback)=>{
        const id= 12212;
        callback(id);
        socket.broadcast.emit('enviar-mensaje',payload)
    })

}
module.exports={
    socketController
}
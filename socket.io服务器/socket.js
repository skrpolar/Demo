let express = require('express')
let server = require('http').Server(express)
let io = require('socket.io')(server)

server.listen(5000, () => {
    console.log('5000...')
})

let Hall = function() {
    this.people = 0
}

let people = []

let left = []

for(let i = 0; i < 30; i ++) {
    people.push(i)
}

io.on('connection', socket => {
    console.log('someone connected')
    left.push(people.shift())
    socket.emit('userInfo', 'No.' + people[0])
    // io.emit('serverSend', `No.${people[0]} coming`)

    socket.on('disconnect', socket => {
        people.push(left.shift())
        console.log('someone disconnected')
    })

    socket.on('broadcast', req => {
        console.log(req)
        io.emit('serverSend', req) // 广播信息
    })
})
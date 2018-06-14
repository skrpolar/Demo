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

let onlineNum = 0

for(let i = 1; i < 30; i ++) {
    people.push(i)
}

io.on('connection', socket => {
    onlineNum ++

    socket.name = 'No.' + people[0] // 获得当前可用最靠前名字
    socket.emit('userInfo', {
        userName: 'No.' + people[0],
        onlineNum
    })

    people.shift()

    socket.broadcast.emit('DATA', {
      userName: socket.name,
      message: `System Info: ${socket.name} coming`,
      onlineNum
    })

    console.log(`${socket.name} connected`)
    // io.emit('serverSend', `No.${people[0]} coming`)

    socket.on('disconnect', () => {
        onlineNum --
        people.push(socket.name.substring(3, socket.name.length))
        people.sort((x, y) => { // 返还名字资源并排序
            return x - y
        })
        socket.broadcast.emit('DATA', {
            userName: socket.name,
            message: `System Info: ${socket.name} is leaving`,
            onlineNum
        })
        console.log(`${socket.name} disconnected`)
    })

    socket.on('broadcast', req => {
        console.log(req)
        io.emit('serverSend', req) // 广播信息
    })
})
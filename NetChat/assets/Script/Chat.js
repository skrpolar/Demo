cc.Class({
    extends: cc.Component,

    properties: {
        m_userInput: cc.Node,
        m_userInfomation: cc.Node
    },

    userName: null,
    socket: null,

    onLoad () {
        this.socket = io.connect('localhost:5000')
        this.socket.on('userInfo', req => {
            this.userName = req
        })

        this.socket.on('serverSend', req => {
            if (req.userName !== this.userName) {
                let newChat = new cc.Node()
                let chatNode = newChat.addComponent(cc.Label)
                let {userName, userInput} = req
                chatNode.string = `${userName} say: ${userInput}`
                newChat.parent = this.m_userInfomation
                let iNode = this.m_userInfomation

                newChat.setPosition
                (
                    -(iNode.width/2 - newChat.width/2),
                    iNode.height/2 - newChat.height/2 - 50 * iNode.children.length
                )
            }
        })
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    onKeyDown(evt) {
        if (evt.keyCode === 13) {
            let userInput = this.m_userInput.getComponent(cc.EditBox).string
            let userName = this.userName
            if (userInput !== '') {
                let newChat = new cc.Node()
                let chatNode = newChat.addComponent(cc.Label)
                chatNode.string = `${this.userName} say: ${userInput}`
                newChat.parent = this.m_userInfomation
                let iNode = this.m_userInfomation

                newChat.setPosition
                (
                    -(iNode.width/2 - newChat.width/2),
                    iNode.height/2 - newChat.height/2 - 50 * iNode.children.length
                )

                this.socket.emit('broadcast', {userName, userInput})
            }
        }
    },

    start () {

    },

    // update (dt) {},
});

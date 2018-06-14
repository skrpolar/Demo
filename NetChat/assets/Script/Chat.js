cc.Class({
    extends: cc.Component,

    properties: {
        m_userInput: cc.Node,
        m_userInfomation: cc.Node,
        m_onlineNum: cc.Node
    },

    userName: null,
    socket: null,

    onLoad () {
        this.socket = io.connect('localhost:5000')
        this.socket.on('userInfo', req => {
            this.userName = req.userName
            let onlineNum = this.m_onlineNum.getComponent(cc.Label)
            onlineNum.string = req.onlineNum
            this.refreshMessage(`Welcome to NetChat! Your Name is "${this.userName}".`)
        })

        this.socket.on('DATA', req => {
            let onlineNum = this.m_onlineNum.getComponent(cc.Label)
            onlineNum.string = req.onlineNum
            if (req.userName !== this.userName) {
                this.refreshMessage(req.message)
            }
        })

        this.socket.on('serverSend', req => {
            let {userName, userInput, type} = req
            console.log(req)
            if (userName !== this.userName) {
                this.refreshMessage(`${userName} say: ${userInput}`)
            }
        })
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },

    refreshMessage(str) {
        let newChat = new cc.Node()
        let chatNode = newChat.addComponent(cc.Label)
        chatNode.string = str
        newChat.parent = this.m_userInfomation
        let iNode = this.m_userInfomation

        newChat.setPosition
        (
            -(iNode.width/2 - newChat.width/2 - 50),
            iNode.height/2 - newChat.height/2 - 50 * iNode.children.length
        )
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
                    -(iNode.width/2 - newChat.width/2 - 50),
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

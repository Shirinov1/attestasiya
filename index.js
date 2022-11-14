class Message {
   constructor(userName, textMessage){
     this.userName = userName;
     this.sendTime = this.gettime();
     this.textMessage = textMessage;
   }
   gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

toString() {
    console.log(`${this.time} ${this.author}: ${this.text}`)
  }


}
class Messenger {
     arr = [];
     show_history(){
    this.arr.map(a=> {
    console.log(a.toString())})
    }
    send(userName, textMessage){
        let b = new Message(userName, textMessage)
        this.arr.push(b)
    }
}
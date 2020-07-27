class mobile  {
    constructor() {
        //các thuộc tính có giá trị mặc đinh được người dung nhập vào,còn nếu không thi là tham số được thêm vào từ constrctor
        this.battery = 100;
        this.messInput =[];
        this.messOutput = [];
        this.messWrite = '';
        this.status = true;

    }
   checkTurnOn() {
        if(this.status) {
            alert("điện thoại đang bật");
        } else {
            alert("diện thoại đang tắt")
        }
        this.battery--;
   }
   TurnOn() {
        this.status = true;
       this.battery--;
   }
   charge() {
        while (this.battery < 100) {
            this.battery ++;
        }
       this.battery--;
   }
   writeMessage(_message) {
        this.messOutput = _message;
       this.battery--;
   }
   send (_phone,_message) {
        this.messOutput.push(_message);
        _phone.messInput.push(_message);
       this.battery--;
   }
   viewMessRecive() {
        return this.messInput;
        this.battery--;
   }
   viewMessSent() {
        return this.messOutput;
       this.battery--;
   }



}
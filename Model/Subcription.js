class Subscription{

    constructor(id, email, date ){
        this._id = id;
        this._email = email;
        this._date = date;
    }

    get email(){
        return this._email;
    }

    set email(email){    
        this._email=email;
    }
}


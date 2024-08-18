class Toy {
    constructor(id, name, price, size, image){
        this._id = id;
        this._name = name;
        this._price = price;
        this._size =size;
        this._image = image;

    }
    get name(){
        return this._name;
    }
    get price(){
        return this._price;
    }
    get size(){
        return this._size;
    }
    get image(){
        return this._image;
    }
}
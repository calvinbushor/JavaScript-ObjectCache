function ObjectSize(obj) {
    this.size = 0;
    this.count(obj);
}

ObjectSize.prototype.count = function(obj) {
    for ( var key in obj ) {
        if ( obj.hasOwnProperty(key) ) {
            this.size++;
        }
    }
    
    return this.size;
}
function vector(x,y){
    this.x = x;
    this.y = y;
}

vector.prototype.add = function(other){
    this.x = this.x+other.x;
    this.y = this.y+other.y
}

vector.prototype.sub = function(other){
    this.x = this.x-other.x;
    this.y = this.y-other.y
}

vector.prototype.multScaler = function(a){
    this.x = this.x*a;
    this.y = this.y*a;
}

vector.prototype.multVector = function(other){
    this.x = this.x*other.x;
    this.y = this.y*other.y;
}

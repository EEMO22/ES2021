// array to Stack

let Stack = function() {
  this.top = null;
  this.size = 0;
}

let Node = function(data){
  this.data = data;
  this.previous = null;
};

Stack.prototype.push = function(data) {
  let node = new Node(data);

  node.previous = this.top;
  this.top = node;
  this.size += 1;
  return this.top;
};

Stack.prototype.pop = function() {
  temp = this.top;
  this.top = this.top.previous;
  this.size -= 1;
  return temp;
};
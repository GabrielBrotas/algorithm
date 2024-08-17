// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
    // todo
    const result = [];
    const stack = [ root ];
    let smallerValue = root.val;
    
    while(stack.length > 0) {
      const currentNode = stack.pop();
  
      if(currentNode.val < smallerValue) smallerValue = currentNode.val
  
      if(currentNode.left) stack.push(currentNode.left)
      if(currentNode.right) stack.push(currentNode.right)
  
    }
  
    return smallerValue;
  };
  
  
  

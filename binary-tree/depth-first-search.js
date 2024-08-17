/*
    class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    }

    https://structy.net/problems/depth-first-values
*/

const depthFirstValues = (root) => {
    if (root == null) return [];
    
    const result = [];
    const stack = [ root ];
    
    while(stack.length > 0) {
      const currentNode = stack.pop();  
      result.push(currentNode.val);
      if(currentNode.right) stack.push(currentNode.right);
      if(currentNode.left) stack.push(currentNode.left);
    }
    
    return result;
  };
  

  const depthFirstValues_Recursive = (root) => {
    // todo
    if (root == null) return [];
    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);
    
    return [root.val, ...leftValues, ...rightValues];
  };
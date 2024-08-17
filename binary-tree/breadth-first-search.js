const breadthFirstValues = (root) => {
    // todo
    if(root == null) return [];
    
    const result = [];
    const queue = [ root ];
    
    while(queue.length > 0) {
      const currentNode = queue.shift();
      
      result.push(currentNode.val);
      
      if(currentNode.left) queue.push(currentNode.left)
      if(currentNode.right) queue.push(currentNode.right)
  
    }
    
    return result;
  };
  

  
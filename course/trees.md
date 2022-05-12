
Level 0: 2^0 = 1;
Level 1: 2^1 = 2;
Level 2: 2^2 = 4; // we will interate with 4 nodes
Level 3: 2^3 = 8; // we will interate with 8 nodes

**How to find the number of nodes in a tree** 
Number of nodes = 2^h - 1
-h= height
-(- 1)= because the first top is one
---
            (n)
      (n)         (n)
   (n)   (n)   (n)   (n)

h = 3
2^3 = 8 - 1 = 7 nodes
log nodes = height/steps
---

-lookup O(log N)
-insert O(log N)
-delete O(log N)

**Binary Search Tree** - allow us to search efficiently
They are great to compare things and search things.
Ex:

            (100)
      (33)          (105)    
   (9)    (37)  (104)    (144)

in this scenario if we keep going right the numbers are higher than the current node
if we keep going keep to the left is decreasing.

A node can have only 2 childs
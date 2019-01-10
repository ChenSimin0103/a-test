// 二叉树节点定义
function Node(num){
	this.val = num
	this.left= null
	this.right = null
}

// 生成二叉树：1-2 1-3 2-6 3-4 3-5 
var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
var node5 = new Node(5)
var node6 = new Node(6)
var node7 = new Node(7)
node1.left = node2
node1.right = node3
node3.left = node4
node3.right = node5
node2.left = node6
node6.right = node7
// console.log(node1)

// 深度优先搜索（递归实现）
// function depthFirstSearch(node) {
//     function find(node){
//         if(!node) return
//         result.push(node.val)
//         if(node.left) find(node.left)
//         if(node.right) find(node.right)
//     }
//     let result = [node.val]
//     find(node.left)
//     find(node.right)
//     console.log(result);
//     return result
// }
// depthFirstSearch(node1)

// 递归自己
function find(node, result=[]) {
    if(!node) return result
    result.push(node.val)
    if(node.left) find(node.left, result)
    if(node.right) find(node.right, result)
    return result
}
var re = find(node1, [])
console.log(re);

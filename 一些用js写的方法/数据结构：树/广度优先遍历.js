// 二叉树节点定义
function Node(num){
	this.val = num
	this.left= null
	this.right = null
}

// 生成二叉树：1-2 1-3 3-4 3-5
var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
var node5 = new Node(5)
var node6 = new Node(6)
node1.left = node2
node1.right = node3
node3.left = node4
node3.right = node5
node2.left = node6
// console.log(node1)

// 遍历方法
function breadthFirstSearch(node) {
    if(node === null) return 
    let temp = [node]
    let result = []
    while(temp.length > 0) {
        let out = temp.shift()
        result.push(out.val)
        if(out.left) temp.push(out.left)
        if(out.right) temp.push(out.right)
    }
    console.log(result);
    return result
}
breadthFirstSearch(node1)
// 输出结果：[1,2,3,4,5]
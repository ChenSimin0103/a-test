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
node1.left = node2
node1.right = node3
node3.left = node4
node3.right = node5
console.log(node1)
var prord = []
var inord = []
var postord = []

// 先序遍历：左-根-右
function prorder(node){
	if(node === null)
		return node.val
	if(node.left !== null)
		prorder(node.left)
	prord.push(node.val)
	if(node.right !== null)
		prorder(node.right)
	return node.val
}

// 中序遍历：根-左-右
function inorder(node){
	if(node === null)
		return node.val
	inord.push(node.val)
	if(node.left !== null)
		inorder(node.left)
	if(node.right !== null)
		inorder(node.right)
	return node.val
}

// 后序遍历：左-右-根
function postorder(node){
	if(node === null)
		return node.val
	if(node.left !== null)
		postorder(node.left)
	if(node.right !== null)
		postorder(node.right)
	postord.push(node.val)
	return node.val
}

// 测试：
prorder(node1)
inorder(node1)
postorder(node1)
console.log(prord, inord, postord)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// 递归处理 : 找根节点--分左右子树--递归此过程
// preorder: 二叉树的前序遍历；inorder: 二叉树的中序遍历

// 测试用例：preorder = [3,9,20,15,7]，inorder = [9,3,15,20,7]

var buildTree = function(preorder, inorder) {
    if(preorder == null) return null
    var len = preorder.length
    return construct(0,len-1)
    
    // 建树函数: 用于构建单个节点；返回一个节点，在左右子节点处递归
    function construct(start, end) {
        if(start > end){
            return null
			// 最后每个叶子节点都走到了这里
        } else if(start == end) {
            preorder.shift()
            return new TreeNode(inorder[start])
        } else {
            var indexRoot = inorder.indexOf(preorder[0])
            preorder.shift()
            var root = new TreeNode(inorder[indexRoot])
            root.left = construct(start, indexRoot-1)
            root.right = construct(indexRoot+1, end)
            return root
        }
    }
};
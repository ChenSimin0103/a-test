/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// 与105题相同的思路：只不过使用后序遍历替代前序遍历，稍作处理
// 注意对叶子节点的处理方式稍复杂，因与其生成节点及弹出postorder的最后一位 的执行顺序有关系

var buildTree = function(inorder, postorder) {
    if(postorder == null) return null
    var len = postorder.length
    return construct(0,len-1)
    
    function construct(start, end){
        if(start > end){
            return null
        } else if(start == end){
			var len = postorder.length
			var tmp = new TreeNode(postorder[len-1])
			postorder.pop()
            return tmp
        } else {
            var len = postorder.length
            var indexRoot = inorder.indexOf(postorder[len-1])
            postorder.pop()
            var root = new TreeNode(inorder[indexRoot])
            root.right = construct(indexRoot+1, end)
            root.left = construct(start, indexRoot-1)
            return root
        }
    }
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
 
 // �������ͨ�ʽ�����ж�һЩ����������ɣ�s[i][j] = Math.min(s[i-1][j],s[i][j-1]) + grid[i][j]
 // �벻�������ٶȾ�Ȼ����ǰ10%���е㿪��
 // ע��s��������Ҫ��ʼ���ģ���s=[]����ֵ�һάΪ�յ��µڶ�ά�޷���ֵ��s�Ĵ�СԤ�ȶ���ã�����ʹ��s=grid ��û�и�����
 
var minPathSum = function(grid) {
    var height = grid.length, width = grid[0].length;
    var s = grid;
    for(i=0;i<height;i++) {
        for(j=0;j<width;j++) {
            if(i===0 && j===0)
                s[i][j] = grid[i][j]
            else if (i===0)
                s[i][j] = s[i][j-1]+grid[i][j]
            else if (j===0)
                s[i][j] = s[i-1][j]+grid[i][j]
            else
                s[i][j] = Math.min(s[i-1][j],s[i][j-1]) + grid[i][j]
        }
    }
    return s[height-1][width-1]
};
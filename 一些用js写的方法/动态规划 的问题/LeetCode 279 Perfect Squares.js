/**
 * @param {number} n
 * @return {number}
 */
 
 // �������һ�ֽ�ֱ�۵Ķ�̬�滮������������ƽ������Ϊ1����ƽ�������������������ҵ���Сֵ��������ϵ�Ԫ����֮ǰ�������������������
 // ������һ�ָ��߼��Ķ�̬�滮�����������ٶȸ��죬Ҳ��Ƕ������forѭ�����ѵ���������Number��Math�ķ���Ӱ�����ٶȣ���
 
var numSquares = function(n) {
    var record = [0]
    for(i=1;i<=n;i++){
        if(Number.isInteger(Math.sqrt(i))){
            record[i] = 1
        }
        else{
            record[i] = Infinity
            for(j=1;j<=Math.floor(i/2);j++){
                record[i] = Math.min(record[i],record[j]+record[i-j])
            }
        }
    }
    return record[n]
};

// ���죬���Ѷ��ķ���
const numSquares = n => {
    const mins = Array(n + 1).fill(Infinity);
    mins[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            mins[i] = Math.min(mins[i], mins[i - j * j] + 1);
        }
    }
    return mins[mins.length - 1];
};

ʵ��˼·�������¼���Ҫ�㣺
1.Ҫʹ��������������Ҫô�ǿ�Ⱥܴ�Ҫô�Ǹ߶Ⱥܸߣ��ӿ�����������߶���ߣ����ɱ��������п��ܵ����ֵ��
���ô����ߵ��м�ı�������
2. �����Ĺ���������ָ����ָ���ĸ߶��໥�ȸߵĹ��̣�������֮ǰ��ı�ָ����һ��ָ��Ԫ���뵱ǰָ��Ԫ�رȸߣ������������Ǹ߶ȳ�������ָ����ָ�ĸ߶Ȼ���ָ������ 
3. ���ַ���������һ��ƽ�����������������ָ������

var maxArea = function(height) {
	var iL = 0, iR = height.length-1;
    var hL = height[iL], hR = height[iR];
	var area = 0;
	var areaMax = caluArea(iL,iR,hL,hR);
	while(iL < iR){
		// ��߱ƽ�
		if(hL < hR){
			while(iL<iR && hL<=hR){
				iL+=1;
				hL = height[iL];
				area = caluArea(iL,iR,hL,hR);
				areaMax = area>areaMax?area:areaMax;
			}
		}
		// �ұ߱ƽ�
		else{
			while(iL<iR && hL>=hR){
				iR-=1;
				hR = height[iR];
				area = caluArea(iL,iR,hL,hR);
				areaMax = area>areaMax?area:areaMax;
			}
		}
	}
	return areaMax;
};
var caluArea = function(iL,iR,hL,hR){
	return Math.min(hL,hR)*(iR-iL)
};
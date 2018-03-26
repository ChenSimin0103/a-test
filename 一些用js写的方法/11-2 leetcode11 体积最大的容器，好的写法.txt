
实现思路，有以下几个要点：
1.要使得容器的体积最大，要么是宽度很大，要么是高度很高，从宽度最大遍历到高度最高，即可遍历到所有可能的最大值，
采用从两边到中间的遍历方法
2. 遍历的过程是左右指针所指到的高度相互比高的过程（而不是之前想的本指针下一个指向元素与当前指向元素比高），结束条件是高度超过对面指针所指的高度或两指针碰面 
3. 此种方法需左右一起逼近，结束条件是左右指针碰面

var maxArea = function(height) {
	var iL = 0, iR = height.length-1;
    var hL = height[iL], hR = height[iR];
	var area = 0;
	var areaMax = caluArea(iL,iR,hL,hR);
	while(iL < iR){
		// 左边逼近
		if(hL < hR){
			while(iL<iR && hL<=hR){
				iL+=1;
				hL = height[iL];
				area = caluArea(iL,iR,hL,hR);
				areaMax = area>areaMax?area:areaMax;
			}
		}
		// 右边逼近
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
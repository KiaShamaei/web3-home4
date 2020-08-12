var n = prompt('enter the length of yopr fibonachi needs:')
 function fibonachi (n) 
{
  if(n<0){
	 n=prompt('you must choose positive number');
	 fibonachi(n);
  }
  else if  (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonachi(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
var series = fibonachi(n);
alert(series);

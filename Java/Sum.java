package sumpackage;
import java.util.Arrays;
public class Sum{
	String ans="";
	public void getSum(int[] a,int b ){
		loop1: for(int i=0;i<a.length;i++){
			loop2: for (int j=0;j<a.length;j++ ) {
				if (a[i]+a[j]==b) {
					ans+=Integer.toString(a[i]);
					ans+=",";
					ans+=Integer.toString(a[j]);
					break loop1;
					
				}
			}
		}
		if (ans!="") {
			System.out.println(ans);
		}
		else{
			System.out.println("no pair");
		}
		
	}
}
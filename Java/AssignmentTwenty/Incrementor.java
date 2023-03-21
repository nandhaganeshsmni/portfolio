package incremen;
import java.util.Arrays;
public class Incrementor{
		int ans;
	public void getNum(int[] a){
		int j=1;
		for (int i=0;i<a.length;i++ ) {
			a[i]=a[i]+j;
			String d=Integer.toString(a[i]);
			if (d.length()>1) {
				String s=Integer.toString(a[i]);
				s=s.substring(1);
				a[i]=Integer.parseInt(s);
			}
			j++;
		}
		System.out.println(Arrays.toString(a));
	}
}
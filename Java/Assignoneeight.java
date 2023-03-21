import java.util.*;
import java.util.Arrays;

import org.omg.CORBA.DynAnyPackage.Invalid;
class Oneeight{

    void getAnagram(String str,String str1){
        str=str.toLowerCase();
        str1=str1.toLowerCase();
        char[] arr=str.toCharArray();
        char[] arr1=str1.toCharArray();
        Arrays.sort(arr);
        Arrays.sort(arr1);
        System.out.println((new String(arr).equals(new String(arr1)))? true:false);
    }

    void getCaps(String vowel){
        char[] vowelArr=vowel.toCharArray();
        String str="";
        for (int i=0;i<vowelArr.length;i++) {
            if(vowelArr[i]=='a' || vowelArr[i]=='e' || vowelArr[i]=='i' || vowelArr[i]=='o' || vowelArr[i]=='u' || vowelArr[i]=='A' || vowelArr[i]=='E' || vowelArr[i]=='I' || vowelArr[i]=='O' || vowelArr[i]=='U' ){
               str+= Character.toString(vowelArr[i]).toUpperCase();
            }
            else{
                str+=Character.toString(vowelArr[i]);
            }
        }
        System.out.println(str);
    }

    void getSpoonerize(String str){
        String[] arr= str.split(" ");
        System.out.println(arr[1].substring(0, 1)+arr[0].substring(1)+" "+arr[0].substring(0, 1)+arr[1].substring(1));
    }

    void getSpoonerizeNum(){
        String[] num={"1234","4567"};
        for(int i=0;i<num.length;i++){
        try {
            Integer.parseInt(num[i]);
        } catch (Exception e) {
            System.out.println("Invalid array");
        }}
        System.out.println(Integer.parseInt(num[1].substring(0, 1)+num[0].substring(1))-Integer.parseInt(num[0].substring(0, 1)+num[1].substring(1)));
    }




		int firNum,secNum,thiNum,num,numOne,numTwo,length;
	void getfact(String a){
        length=a.length();
		int[] arr=new int[length];
		num=Integer.parseInt(a);
		thiNum=num;
		int sec=1;
		for (int i=0;i<length ;i++ ) {
			numOne=num%10;
			num=num-numOne;
			   num=num/10;
			   for (int j=1;j<=numOne ;j++ ) {
			   	sec*=j*1;
			   	}
			   	
			   	firNum+=sec;

			   	sec=1;
			   }
			   if (thiNum==firNum) {
			   	System.out.println(thiNum+" is a Strong number");
			   }
			   else{
			   	System.out.println(thiNum+" is not a Strong number");
			   }
		}

	}



class Assignoneeight{
public static void main(String[] args){

    Oneeight assign=new Oneeight();
    // assign.getAnagram("toffee","foefet");
    // assign.getCaps("aeiou are vowels");
    // assign.getSpoonerize("not picking");
    // assign.getSpoonerizeNum();
    assign.getfact("145");
}
}
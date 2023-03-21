
class Half{

    void getHalf(int num){
        int ans=0;
        while(num>0){
            ans+=num;
            num=num/2;
        }
        System.out.println(ans);
    }
}

class FilterNumber{

    void getFilter(String str){
        String ans="";
        char[] arr=str.toCharArray();
        for(int i=0;i<arr.length;i++){
            if(arr[i]==('1')||arr[i]==('2')||arr[i]==('3')||arr[i]==('4')||arr[i]==('5')||arr[i]==('6')||arr[i]==('7')||arr[i]==('8')||arr[i]==('9')||arr[i]==('0')){
                ans+=Character.toString(arr[i]); 
        }
    }
    System.out.println(ans);
}
}

class EvenFibonacci{

    void evenFibonacci(int num){
        System.out.println();
        int n1=0;
        int n2=1;
        int n3=0;
        int n4=0;
    
        while(num>n3){
            n3=n1+n2;
            n1=n2;
            n2=n3;
            if(num>n3 && n3%2==0){
               n4+=n3;
            }
        }
        System.out.print(n4);
    }
}

class SumArray{

    void sumArray(int a){
        int[] arr={1,2,3,4,5,6,7};
        int[] b=new int[2];
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr.length;j++){
                if(arr[i]+arr[j]==a){
                    b[0]=arr[i];
                    b[1]=arr[j];
                    System.out.println("["+b[0]+","+b[1]+"]");
                }
            }
        }
        
    }
}

class Assignonefive{
    public static void main(String[] args) {
        // Half obj=new Half();
        // obj.getHalf(25);

        // FilterNumber obj2=new FilterNumber();
        // obj2.getFilter("a1b2chdnhb3d4e5ndhb6jdne7j w8w njdw9 mwj10");

        // EvenFibonacci obj3= new EvenFibonacci();
        // obj3.evenFibonacci(33);

        SumArray obj4= new SumArray();
        obj4.sumArray(6);
    }
}
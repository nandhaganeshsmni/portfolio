import java.util.*;

class Clock{
    int hour,minutes,seconds,set;
    Clock(int a, int b,int c,int d){
        hour=a;
        minutes=b;
        seconds=c;
        set=d;
    }

    /**
     * 
     */
    void getClock(){
        if(set==12){
            System.out.println(hour+"H :"+minutes+"M :"+seconds+"S :");
        }
        else{
            if(hour>12)

            hour=(hour==1)? 13:(hour==2)? 14:(hour==3)? 15:(hour==4)? 16:(hour==5)? 17:(hour==6)? 18:(hour==7)? 19:(hour==8)? 20:(hour==9)? 21:(hour==10)? 22:(hour==11)? 23:24;
            if(hour>12){ System.out.println(hour+"H :"+minutes+"M :"+seconds+"S PM");} 
           else{ System.out.println(hour+"H :"+minutes+"M :"+seconds+"S AM");}
        }
    }
}


class Dayfinder{
      int year,month,date,oddDay,oddmonth,centuries,monthodd,leapyear,normalyear,result;
      String[] day={"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"};
      int[] oddval={3,0,3,2,3,2,3,3,2,3,2};
     
      Dayfinder(int a,int b,int c){
        year=a;
        month=b;
        date=c;
      }

    /**
     * 
     */
    void getDay(){
        result=((month>2 && year%4==0 && year%100!=0) || month>2 && year%400==0)? 1:0;
        year-=1;
        oddDay=year%400;
        oddmonth=oddDay%100;
        centuries=(oddDay-oddmonth==100)? 5:(oddDay-oddmonth==200)? 3:(oddDay-oddmonth==300)? 1:0;
        leapyear=oddmonth/4;
        normalyear=oddmonth-leapyear;
        leapyear=leapyear*2;
        for(int i=0;i<month-1;i++){monthodd+=oddval[i];}
        result+=leapyear+normalyear+monthodd+date+centuries;
        System.out.println( day[result%7]);
        System.out.println("The Next Day:"+day[((result+1)%7)]);
    }
}






 class Assignonesix {
    /**
     * @param args
     */
    public static void main(String[] args) {
        //     int hour=0;
        //     int minutes=0;
        //     int seconds=0;
        //     int set=0;
            int year=0;
            int month=0;
            int date=0;

        // try (Scanner inp = new Scanner(System.in)) {
        //     System.out.println("Enter Hour");
        //          hour=inp.nextInt();
        //     if(hour>=1 && hour<=24){
        //         System.out.println("Enter Minutes");
        //          minutes=inp.nextInt();
        //        if(minutes>=1 && minutes<60){
        //         System.out.println("Enter Seconds");
        //          seconds=inp.nextInt();
        //         if(seconds>=1 && seconds<60){
        //             System.out.println("Enter Railway or Normal time:(24 / 12)");
        //              set=inp.nextInt();
        //         }
        //         else{
        //             System.out.println("Enter valid seconds");
        //         }
        //        }
        //        else{
        //         System.out.println("Enter valid minutes");
        //     }
        //     }
        //     else{
        //         System.out.println("Enter valid hour");
        //     }
        //     final Clock time=new Clock(hour,minutes,seconds,set);
        //     time.getClock();


        // }
    
        System.out.println("Enter year");
        try (Scanner inp = new Scanner(System.in)) {
             year=inp.nextInt();
             System.out.println("Enter month");
             month=inp.nextInt();
             System.out.println("Enter date");
             date=inp.nextInt();
            
             Dayfinder day=new Dayfinder(year,month,date);
             day.getDay();
        }
        
    }
}

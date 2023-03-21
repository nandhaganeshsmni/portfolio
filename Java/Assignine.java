import java.util.*;

 	class Circle extends Shape{
 			double radius,volume;
 		    void getCircle(double a){
 			radius=3.14*a*a;
 			System.out.println("Area of the circle is "+radius);
 		}

 			
 	}

 	class Cylinder extends Circle{

 		    void getCylinder(double m){
 			volume=m*radius;
 			System.out.println("Volume of the cylinder is "+volume);
 		}
 	}



 	class Rect extends Shape{
 			double area,volume;
 		    void getRect(double a,double b){
 			area=a*b;
 			System.out.println("Area of the rectangle is "+area);
 		}

 			void getrec(){
 				System.out.println("This is rectangle shape");
 			}
 	}

 	class Square extends Rect{

 		void getsqu(){
 			System.out.println("Square is a rectangle");
 		}

 	}

 	class Cuboid extends Rect{

 		    void getCuboid(double m){
 			volume=m*area;
 			System.out.println("Volume of the cuboid is "+volume);
 		}
 	}


 	class Member{
 		String name,address;
 		int age;
 		double salary;
 		long phno;
 	}

 	class Employee extends Member{
 		void printSalary(String name,int age,long phno,String address,double salary){
 			System.out.println("Name:"+name+"\n"+"Age:"+age+"\n"+"Phone number:"+phno+"\n"+"Address:"+address+"\n"+"Salary:"+salary);
 		}
 	}                                                                    
 
 		

 	

 	class Manager extends Member{
 		void printSalary(String name,int age,long phno,String address,double salary){
 			System.out.println("Name:"+name+"\n"+"Age:"+age+"\n"+"Phone number:"+phno+"\n"+"Address:"+address+"\n"+"Salary:"+salary);
 		}
 	}                                                                      
 
 		
 	class Shape{

 		void getShape(){
 			System.out.println("This is shape");
 		}
 	}


	class Parent{

		private void getPar(){
			System.out.println("This is parent class");
		}
	}  	

	class Child extends Parent{

		void getchild(){
			System.out.println("This is child class");
		}
	}

 	class Assignine{

	public static void main(String[] args) {

		Cylinder circle=new Cylinder();
		circle.getCircle(4);
		circle.getCylinder(4);

		Cuboid cube=new Cuboid();
		cube.getRect(5,6);
		cube.getCuboid(6);


		Employee emp=new Employee();
		emp.printSalary("Nandha ganesh",20,6383370197L,"Shenkottai",35000);

		Manager manager=new Manager();
		manager.printSalary("Don",35,9876543210L,"Tenkasi",250000);
	
		Square squ=new Square();
		squ.getShape();
		squ.getrec();
		squ.getsqu();

		// Parent parent= new Parent();
		// parent.getPar();
		// Child child=new Child();
		// child.getchild();
		// child.getPar();
	}
 }

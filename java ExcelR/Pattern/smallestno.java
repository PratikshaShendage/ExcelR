class smallestno{
         public static void main(String args[])
		 {
			 int a=21;
			 int b=26;
			 int c=20;
			 
			   int smallest = (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);
			 
			 System.out.println("the smallest number is"+smallest);
		 }
}
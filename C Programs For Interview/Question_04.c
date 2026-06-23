#include <stdio.h>
int main(){
  int num,count=0,sum=0,digit;
  float average;

  printf("Enter a numbers:");
  scanf("%d",&num);

  int temp=num;

  while (temp!=0){
    digit=temp%10;
    sum+=digit;
    count++;
    temp/=10;
  }
  average=(float)sum/count;

  printf("Total digits:%d\n",count);
  printf("Sum of digits:%d\n",sum);
  printf("Average of  digits:%.2f\n",average);
  return 0;
}
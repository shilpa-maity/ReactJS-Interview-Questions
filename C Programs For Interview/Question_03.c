#include <stdio.h>
int main(){
  int num;
  printf("Enter a number:");
  scanf("%d",&num);
  switch(num%2){
    case 0:
      printf("Even\n");
      break;
    case 1:
      printf("Odd\n");
      break;
  }
  return 0;
}
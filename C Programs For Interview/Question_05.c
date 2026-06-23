#include <stdio.h>
#include <string.h>
int main(){
  char str[100],rev[100];
  printf("Enter a string:");
  scanf("%s",str);
  strcpy(rev,str);
  strrev(rev);
  if (strcmp(str,rev)==0)
    printf("String is a palindrom.\n");
  else
    printf("String is not a palindrome.\n");
  
  return 0;
}
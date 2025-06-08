#include <stdio.h>
#include <time.h>

int main(){
  int cycles=1000000000; // 1 billion
  clock_t start, end;
  double duration;
  start=clock();
  for(int i=0; i<cycles; i++){
    //
  }
  end=clock();
  duration=(double)(end - start) / CLOCKS_PER_SEC;
  printf("C looped %d times in %lf secs\n", cycles, duration);
  return 0;
}
#include <iostream>
#include <string>
#include <sstream>
#include <algorithm>
using namespace std;
int main() {
	int a, b;
	int arr[100]={};
	int size = 0;
	int index = 0;
	int tmp=0;
	bool number = false;
	string q = "ab23c4d56e78f9g12h34i5j12k45l67n89m99o1k123p456q567r768s890t67u456v345w234x23y239z";
	char num[10] = {'0','1','2','3','4','5','6','7','8','9'};
	while(q.length()!=0){
		for(int i=0; i<10; i++){
			if(q.at(0)==num[i]){
				number=true;
			}
		}
		if(number){
			arr[index]=stoi(q);
			tmp=arr[index];
			cout << "arr : " << arr[index] << endl;
			cout << "index : " << index << endl;
			while(tmp>0){
				size++;
				tmp/=10;
			}
			q = q.substr(size);
			cout << "str1 : " << q << endl;
			index++;
		}else{	
			q = q.substr(1);
			cout << "str2 : " << q << endl;
		}
		number = false;
		
		size = 0;
	}
	for(int i=0; i<index; i++){
      cout << "arr : " << arr[i] << endl;
 	 }
// 	 int minVal=arr[0];
//   	 int maxVal=arr[0];
//   // 배열 첫번째 값을 최소 최대값으로 설정
  
//   for(int i=0; i<index; i++){
//       minVal = min(minVal,arr[i]);
//       // 최소값과 비교해 더 작으면 최소값에
//       maxVal = max(maxVal,arr[i]);
//       // 최대값과 비교해 더 크면 최대값에 저장
//   }
//    	 cout << "min, max : " << minVal << maxVal << endl;
// 	// for(int k=0; k<sizeof(arr); k++)
// 	//  	cout << "arr : " << arr[k] << endl;
	 
	return 0;
}

#include <iostream>
#include <string>
#include <sstream>
using namespace std;
int main() {
	int a, b;
	int temp[100];
	int size = 0;
	int index = 0;
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
			temp[index]=stoi(q);
			cout << "temp : " << temp[index] << endl;
			while(temp[index]>0){
				size++;
				temp[index]/=10;
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
	// for(int k=0; k<sizeof(temp); k++)
	//  	cout << "temp : " << temp[k] << endl;
	 
	return 0;
}

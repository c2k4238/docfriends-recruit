#include <iostream>
#include <string>
#include <sstream>
using namespace std;
int main() {
	int a, b;
	int temp[50]={};
	int size = 0;
	bool number = false;
	string q = "'c4d56e78f9g12h34i5j12k45l67n89m99o1k123p456q567r768s890t67u456v345w234x23y239z";
	char num[10] = {'0','1','2','3','4','5','6','7','8','9'};
 	temp[0]=stoi(q);


	 for(int k=0; k<sizeof(temp); k++)
	 	cout << "str2 : " << temp[k] << endl;
	 
	return 0;
}

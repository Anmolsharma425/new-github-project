#include<iostream>

namespace n1{
    int age = 12;
};

namespace n2{
    int age = 32;
};

int main(){
    std::cout << "Hello every one here I am changing the value of age from namespace n1" << std::endl;
    n1::age += 13;
    std::cout << n1::age << std::endl;
    return 0;
}
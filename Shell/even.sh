function isEven {

if [ $(( $1%2 )) -eq 0 ]
then echo "$1 is even"
else echo "$1 is odd."
fi
}

isPositive() {

if [ $1 -gt 0 ]
then echo "$1 is positive"
elif [ $1 -lt 0 ] 
then echo "$1 is Negtive"
else echo "$1 is Zero"
fi
}


read -p "Please Enter Your Input: " i

isEven $i
isPositive $i


echo "Hello"

user_name="nekokaito"

echo $user_name

echo "Write Your User Name:"

read client_user

echo "Your user name is: $client_user"

if [ $client_user = "siddiq" ]

then echo "Welcome Admin"
else echo "oho you are not admin"
fi

for i in 1 2 3
do echo $i
done

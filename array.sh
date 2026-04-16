for (( i=2; i<=5; i++ ))
do
  a[i]=$(( a+i ))
done

echo "${a[@]}"
echo "${!a[@]}"
echo "${#a[@]}"

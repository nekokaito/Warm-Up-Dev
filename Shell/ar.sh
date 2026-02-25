for (( i=0; i<5 ; i++ ))
do
  a[i]=$(( i+1 ))
done

echo "value ${a[@]}"
echo "index ${!a[@]}"
echo "total num ${#a[@]}"


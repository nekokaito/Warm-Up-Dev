echo -e
read file

if [ -d $file ]
then 
 echo "$file is folder"
else
 echo "not folder"
fi

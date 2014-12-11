set loc assets/img/covers

for file in $loc/*.{png,jpg,jpeg}
    if test -e $loc/thumbs/100x100_(basename $file)
    else
       echo 'converting:' $file
       convert -format png -thumbnail 100 -strip $file $loc/thumbs/100x100_(basename $file)
    end

    if test -e $loc/thumbs/200x200_(basename $file)
    else
       echo 'converting:' $file
       convert -format png -thumbnail 200 -strip $file $loc/thumbs/200x200_(basename $file)
    end
end
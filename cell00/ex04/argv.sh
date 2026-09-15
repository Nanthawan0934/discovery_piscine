
if [ -z $# ]; then
    echo "No arguments supplied"
else
    for arg in "$@"
        do
            if [ $count -ge 3 ]; then
                break
            fi
            count=$((count + 1))
            echo "$arg"
        done
    fi
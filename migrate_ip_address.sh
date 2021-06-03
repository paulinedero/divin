echo "$(tput bold ; tput setaf 6)#################################################"
echo "$(tput bold ; tput setaf 2) SCRIPT TO STORE IP ADDRESS INTO YOUR MOBILE APP $(tput bold ; tput setaf 6)"
echo "$(tput bold ; tput setaf 6)#################################################$(tput sgr0)"

echo ""


IP_ADDRESS=$(hostname -I | head -n1 | cut -d " " -f1)
echo "$(tput bold ; tput setaf 6) YOUR IP ADDRESS $(tput sgr0)"
echo "$IP_ADDRESS"

echo ""

echo "$(tput bold ; tput setaf 6) INSERTING YOUR IP ADDRESS INSIDE YOUR MOBILE APP .env $(tput sgr0)"
sed -i "s/^REACT_NATIVE_SERVER_URL=.*/REACT_NATIVE_SERVER_URL=http:\/\/$IP_ADDRESS/" ./mobile/.env


echo "$(tput bold ; tput setaf 2) DONE $(tput bold ; tput setaf 6)"

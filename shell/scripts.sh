set -e
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

CMD_LOCALHOST='chain_localhost'
CMD_GOERLI='chain_goerli'
CMD_READ='chain_read'

printf "${RED}Enter Command Type: ${NC}\n"
printf "${GREEN} * chain_localhost${NC}\n"
printf "${GREEN} * chain_goerli${NC}\n"
printf "${GREEN} * chain_read${NC}\n"
read cmd

if [ $cmd != $CMD_LOCALHOST ] && \
  [ $cmd != $CMD_GOERLI ] && \
  [ $cmd != $CMD_READ ]
then
  printf "\n ${RED}INVALID CMD${NC}\n\n"
  exit 1
fi

printf "\n ${GREEN}RUNNING CMD ${BLUE}$cmd${NC}\n\n"
ts-node ./scripts/main.ts $cmd


# Black        0;30     Dark Gray     1;30
# Red          0;31     Light Red     1;31
# Green        0;32     Light Green   1;32
# Brown/Orange 0;33     Yellow        1;33
# Blue         0;34     Light Blue    1;34
# Purple       0;35     Light Purple  1;35
# Cyan         0;36     Light Cyan    1;36
# Light Gray   0;37     White         1;37
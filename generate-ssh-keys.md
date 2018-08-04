# Generate SSH keys on Windows 10

1. Open command line or download Git Bash [here](https://git-scm.com/downloads)
2. It'll default to home folder, don't need to cd to a different location.
3. Enter the command ```ssh-keygen```
4. The default location to store your SSH key at ```/c/Users/{{your_username}}/.ssh/id_rsa.pub```
5. Get the SSH key 
   1. ```cd .ssh```
   2. ```cat id_rsa.pub```

# Generate SSH keys on Ubuntu

1. [How to set up SSH keys on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-1604)

#### Authenticate to Ubuntu Server Using SSH Keys

```ssh username@remote_host```



# Add SSH Keys to GitHub

1. go the **profile settings**
2. select the **SSH and GPG keys** from the **Personal settings**
3. Click the **New SSH key** option on the top right
4. If prompted, confirm your GitHub password




# Dual boot Ubuntu on Windows 10

- Prepare bootable USB driver
  - download [here](https://rufus.akeo.ie/)
- Download Ubuntu Desktop [here](https://www.ubuntu.com/download/desktop)

Refer [this tutorial](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-windows#0) of how to boot ubuntu ISO file into USB drive



Next, partition Windows disk for Ubuntu 

**NOTE: always partition first before install Ubuntu, after installed Ubuntu, don't do any partition including C or others drive  !important**

- [how to make partition on Windows 10](http://www.tomshardware.com/faq/id-2569580/make-partitions-windows.html)

Next, check your PC is UEFI or standard BIOS

- open run apps (Windows key + R) and type this command 

  - ```msinfo32
    msinfo32
    ```

  - check the BIOS mode (UEFI / BIOS)

- follow this guide

  - [BIOS MODE](http://dailylinuxuser.com/2015/11/how-to-install-ubuntu-linux-alongside_8.html)
  - [UEFI MODE](http://dailylinuxuser.com/2015/11/how-to-install-ubuntu-linux-alongside.html)

- [partition disk for root, home and swap area](https://itsfoss.com/install-ubuntu-1404-dual-boot-mode-windows-8-81-uefi/)

- 


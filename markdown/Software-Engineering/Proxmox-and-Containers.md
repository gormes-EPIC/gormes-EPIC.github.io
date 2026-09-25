# Proxmox and Containers

## Your Task

1. Plug in the USB and boot your Levono while pressing `F1` over and over. 

*Note: while navigating the BIOS, use `ENTER` to select or enter menus and `ESC` to go backwards.**
2. Confirm the time and date are correct on the machine under **System Time 7 Date**
3. Under the **Security** tab disable **Secure Boot**
4. Under **Advanced**, **CPU Setup** make sure then **Intel(R) Virtualization Technology** is enabled and **VT-d** is enabled
5. Go to **Exit** to **Save and Exit**

6. Press `F12` to enter the boot menuu as it startes then select **UEFI: KingstonDataTraveler**.
7. Choose the **Graphical** install
8. Hit `TAB` to agree to the terms
9. Hit next past the harddisk selection
10. Enter your country as United States and set the timezone to America/Denver
11. Enter a password and school email address. **Write down a hint for this password and your email on your graphic organizer**.

12. Put in the following:
    - Hostname: `<USERNAME>.prox.local`
    - IP Address: `10.0.<YOUR NUMMBER>.1`/16
    - Gateway: `10.0.0.1`
    - DNS Server: `192.168.104.2`

13. Hit install and wait for it to boot.

14. You can then login with `root` and the password you set by putting `https://10.0.<YOUR NUMBER>.1:8006` in your broswer or accessing it through SSH. You will need to click proceed to unsafe site when it loads in your browswer.
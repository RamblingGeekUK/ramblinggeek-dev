---
title: "Install Windows Terminal on Windows Server 2022"
publishDate: "2023-12-03"
author: Wayne
tags: 
  - "Windows Terminal"
  - "Windows Server 2023"
image: "~/assets/images/WinServwe2022InstallWinTerm.jpg"
excerpt: "Installing Windows Terminal on Windows Server 2022"
---

Windows Server 2022 isn't installed in by default, here are the commands to install.  

Please keep in mind that it won't auto-update.

```Powershell
# Install Prerequisites
Invoke-WebRequest -Uri https://aka.ms/Microsoft.VCLibs.x64.14.00.Desktop.appx -outfile Microsoft.VCLibs.x86.14.00.Desktop.appx
Add-AppxPackage Microsoft.VCLibs.x86.14.00.Desktop.appx
```

```Powershell
# Download Terminal (Change version)
Invoke-WebRequest -Uri https://github.com/microsoft/terminal/releases/download/v1.7.1091.0/Microsoft.WindowsTerminal_1.7.1091.0_8wekyb3d8bbwe.msixbundle -outfile Microsoft.WindowsTerminal_1.7.1091.0_8wekyb3d8bbwe.msixbundle
```

```Powershell
Add-AppxPackage -Path .\Microsoft.WindowsTerminal_1.7.1091.0_8wekyb3d8bbwe.msixbundle
```

[![Installing Windows Terminal on Windows Server 2022](~/assets/images/WinServwe2022InstallWinTerm.jpg)](https://youtu.be/cHDPDjFHBUk?si=PeRTlaX3CZnBMMxb "Installing Windows Terminal on Windows Server 2022")

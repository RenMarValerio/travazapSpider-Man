a@echo off
title ⚠️ ALERTA CRÍTICO! ⚠️
color 4F
cls

:: Fala no alto-falante do PC
powershell -c "Add-Type –TypeDefinition 'using System; using System.Runtime.InteropServices; public class Win { [DllImport(\"user32.dll\")] public static extern int MessageBox(IntPtr h, string m, string c, int type); }' -Name 'Win32' -Namespace Win32; [Win32.Win]::MessageBox(0, 'Seu sistema foi infectado! TODOS OS ARQUIVOS SERÃO DELETADOS!', 'VÍRUS DETECTADO!', 0)"

:: Criar um loop que pisca a tela entre vermelho e preto
echo ALERTA! SEU SISTEMA ESTÁ SENDO FORMATADO...
ping -n 2 127.0.0.1 >nul

:loop
color 0F
ping -n 1 127.0.0.1 >nul
color 4F
ping -n 1 127.0.0.1 >nul
goto loop

:: Criar um arquivo "virus.txt" no TEMP e abrir infinitamente
echo SEU COMPUTADOR FOI HACKEADO! > %temp%\virus.txt
for /L %%i in (1,1,20) do start notepad %temp%\virus.txt

:: Mover o mouse de forma aleatória
powershell -c "$sig = @' using System; using System.Runtime.InteropServices; public class MoveMouse { [DllImport(\"user32.dll\")] public static extern bool SetCursorPos(int X, int Y); } '@; Add-Type -TypeDefinition $sig -PassThru | Out-Null; for ($i=0; $i -lt 20; $i++) { [MoveMouse]::SetCursorPos((Get-Random -Minimum 100 -Maximum 800), (Get-Random -Minimum 100 -Maximum 600)); Start-Sleep -Milliseconds 500 }"

:: Abrir sites assustadores
start https://www.youtube.com/

:: Travar o PC por 10 segundos antes do shutdown
timeout /t 05 /nobreak

:: Mensagem final antes de desligar
msg * "Isso foi apenas uma pegadinha... ou não. 😈"
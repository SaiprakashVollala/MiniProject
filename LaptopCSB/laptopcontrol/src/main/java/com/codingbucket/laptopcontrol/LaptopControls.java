package com.codingbucket.laptopcontrol;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin(origins = {"http://localhost:5173", "http://192.168.110.75:5173"})
@CrossOrigin(origins = "*")

public class LaptopControls {

    @GetMapping("/laptopcontrol/{value}")
    public String executeCommands(@PathVariable String value) {
        String command;

        switch (value) {
            case "mute":
                command = "nircmd.exe mutesysvolume 1";
                break;
            case "unmute":
                command = "nircmd.exe mutesysvolume 0";
                break;
            case "increase":
                command = "nircmd.exe changesysvolume 6553";
                break;
            case "decrease":
                command = "nircmd.exe changesysvolume -6553";
                break;
            case "lock":
                command = "nircmd.exe lockws";
                break;
            case "shutdown":
                command = "nircmd.exe exitwin poweroff";
                break;
            case "restart":
                command = "nircmd.exe exitwin reboot";
                break;
            case "brightness_up":
                command = "nircmd.exe setbrightness 90";
                break;
            case "brightness_down":
                command = "nircmd.exe setbrightness 40";
                break;
            case "sleep":
                command = "C:\\Windows\\System32\\nircmd.exe standby";
                break;

            default:
                return "Invalid Command";
        }

        try {
            Runtime.getRuntime().exec(command);
            return "Success";
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
}

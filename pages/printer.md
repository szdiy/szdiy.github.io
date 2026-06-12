---
layout: page
permalink: printer
---

# 社区众筹 3D 打印机上线记录

在 xiaoxi 的帮助下，社区各位股东一起众筹的 3D 打印机已经上线了。

这台机器是大家一起凑出来、一起维护、一起使用的社区工具。以后如果临时想打印一个外壳、小零件、支架，或者只是验证一个奇怪的想法，就不用总是停留在电脑里的模型文件上了。

目前打印入口在这里：

[https://printer.szdiy.soraharu.com/](https://printer.szdiy.soraharu.com/)

⚠️ **切片配置：**

1. 打印机型号：A2L
2. 打印板类型：纹理 PEI
3. 喷头类型：0.4 mm 标准流量
4. 耗材类型：PLA（暂时支持单色）

![社区众筹的 Bambu Lab A2L 3D 打印机]({{ site.url }}/assets/images/bambu-lab-a2l.jpeg)

使用时有一个地方需要注意：从 MakerWorld 等网站直接下载的 `.3mf` 模型文件，一般不能直接上传打印。需要先用 Bambu Studio 等切片软件完成切片，再上传 `.gcode` 或 `.gcode.3mf` 文件。否则系统会提示：

```text
Only .gcode and .gcode.3mf files can be printed
```

另外友情提醒：白天 9:00 到 19:00 可能会有人在社区办公。如果打印时间较长、噪音较明显，建议尽量避开这个时段。

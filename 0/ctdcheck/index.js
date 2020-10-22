// encoding: utf-8
// 大括号不换行的跟换行的打，变量名首字母大写的跟不大写的打，私有域前面加下划线的跟不加下划线的打

console.log("This is Cytoid Level Checker Ver201022\nMade by BillZhou233");

var lv = {}, err = [], have = [false, false, false, false], ok = false, id_reg = /[a-z0-9_\.\-]/i;

function init()
{
    console.log("init");
    document.getElementById("inptitle").innerText = "* 展开输入框";
    ok = false;
}

function main()
{
    lv = {}, err = [], have = [false, false, false, false];
    try
    {
        lv = JSON.parse(document.getElementById("inp").value);
    }
    catch (error) 
    {
        swal("踢！", "JSON 的语法都能弄错！！1111\n请铲车至 JSON.cn 检查完语法再来校验。", "error", {buttons: "jao"});
        return;
    }
    if ((lv.schema_version === 1) || (lv.schema_version === 2))
    {
        if (id_reg.test(lv.id) && typeof(lv.id) == "string") document.getElementById("cid").value = lv.id;
        else
        {
            document.getElementById("cid").value = "[x] 错误";
            err.push("</br>[x] id 格式错误，应为仅包含字母、数字、点和横线的字符串。");
        }
        if (typeof(lv.version) == "number") document.getElementById("version").value = lv.version;
        else
        {
            document.getElementById("version").value = "[x] 错误";
            err.push("</br>[x] version 读取的值不是数字");
        }
        if (typeof(lv.title) == "string") document.getElementById("title").value = lv.title;
        else
        {
            document.getElementById("title").value = "[x] 错误";
            err.push("</br>[x] title 读取到一个非字符串类型，但期望读取一个字符串。");
        }
        if (typeof(lv.title_localized) == "undefined") document.getElementById("title_localized").value = "[未填写，不显示]";
        else if (typeof(lv.title_localized) == "string") document.getElementById("title_localized").value = lv.title_localized;
        else
        {
            document.getElementById("title_localized").value = "[x] 错误";
            err.push("</br>[x] title_localized 读取到一个非字符串类型，但期望读取一个字符串。");
        }
        if (typeof(lv.artist) == "string") document.getElementById("artist").value = lv.artist;
        else
        {
            document.getElementById("artist").value = "[x] 错误";
            err.push("</br>[x] artist 读取到一个非字符串类型，但期望读取一个字符串。");
        }
        if (typeof(lv.artist_localized) == "undefined") document.getElementById("artist_localized").value = "[未填写，不显示]";
        else if (typeof(lv.artist_localized) == "string") document.getElementById("artist_localized").value = lv.artist_localized;
        else
        {
            document.getElementById("artist_localized").value = "[x] 错误";
            err.push("</br>[x] artist_localized 读取到一个非字符串类型，但期望读取一个字符串。");
        }
        if (typeof(lv.artist_source) == "undefined") document.getElementById("artist_source").value = "[未填写，不显示]";
        else if (typeof(lv.artist_source) == "string") document.getElementById("artist_source").value = lv.artist_source;
        else
        {
            document.getElementById("artist_source").value = "[x] 错误";
            err.push("</br>[x] artist_source 读取到一个非字符串类型，但期望读取一个字符串。");
        }
        if (typeof(lv.illustrator) == "string") document.getElementById("illustrator").value = lv.illustrator;
        else
        {
            document.getElementById("illustrator").value = "[x] 错误";
            err.push("</br>[x] illustrator 读取到一个非字符串类型，但期望读取一个字符串。");
        }
        if (typeof(lv.illustrator_localized) == "undefined") document.getElementById("illustrator_localized").value = "[未填写，不显示]";
        else if (typeof(lv.illustrator_localized) == "string") document.getElementById("illustrator_localized").value = lv.illustrator_localized;
        else
        {
            document.getElementById("illustrator_localized").value = "[x] 错误";
            err.push("</br>[x] illustrator_localized 读取到一个非字符串类型，但期望读取一个字符串。");
        }
        if (typeof(lv.illustrator_source) == "undefined") document.getElementById("illustrator_source").value = "[未填写，不显示]";
        else if (typeof(lv.illustrator_source) == "string") document.getElementById("illustrator_source").value = lv.illustrator_source;
        else
        {
            document.getElementById("illustrator_source").value = "[x] 错误";
            err.push("</br>[x] illustrator_source 读取到一个非字符串类型，但期望读取一个字符串。");
        }
        if (typeof(lv.charter) == "string") document.getElementById("charter").value = lv.charter;
        else
        {
            document.getElementById("charter").value = "[x] 错误";
            err.push("</br>[x] charter 读取到一个非字符串类型，但期望读取一个字符串。");
        }
        if (typeof(lv.music) == "object" && typeof(lv.music.path) == "string") document.getElementById("music").value = lv.music.path;
        else
        {
            document.getElementById("music").value = "[x] 错误";
            err.push("</br>[x] music.path 读取到一个非字符串类型，但期望读取一个字符串。");
        }
        if (typeof(lv.music_preview) == "object" && typeof(lv.music_preview.path) == "string") document.getElementById("music_preview").value = lv.music_preview.path;
        else
        {
            document.getElementById("music_preview").value = "[x] 错误";
            err.push("</br>[x] music_preview.path 读取到一个非字符串类型，但期望读取一个字符串。");
        }
        if (typeof(lv.background) == "object" && typeof(lv.background.path) == "string") document.getElementById("background").value = lv.background.path;
        else
        {
            document.getElementById("background").value = "[x] 错误";
            err.push("</br>[x] background.path 读取到一个非字符串类型，但期望读取一个字符串。");
        }
        if (typeof(lv.charts) == "object" && lv.charts.length)
        {
            for (i = 0; i < lv.charts.length; ++i)
            {
                let diff = 0, prefix = "";
                switch (lv.charts[i].type)
                {
                    case "easy": diff = 1, prefix = "ez-"; break;
                    case "hard": diff = 2, prefix = "hd-"; break;
                    case "extreme": diff = 3, prefix = "ex-"; break;
                }
                if (diff)
                {
                    if (have[diff]) err.push("</br>[x] " + lv.charts[i].type + " 难度发生了重复指派。");
                    else
                    {
                        have[diff] = 1;
                        if (typeof(lv.charts[i].difficulty) == "number") 
                        {
                            document.getElementById(prefix + "diff").value = (lv.charts[i].difficulty <= 0) ? "?" : ((lv.charts[i].difficulty >= 16) ? "15+" : lv.charts[i].difficulty);
                        }
                        else
                        {
                            document.getElementById(prefix + "diff").value = "[x] 错误";
                            err.push("</br>[x] " + lv.charts[i].type + " 难度的 difficulty 读取的值不是数字。");
                        }
                        if (typeof(lv.charts[i].name) == "undefined") document.getElementById(prefix + "name").value = "[未填写，显示预设]";
                        else if (typeof(lv.charts[i].name) == "string") document.getElementById(prefix + "name").value = lv.charts[i].name;
                        else
                        {
                            document.getElementById(prefix + "name").value = "[x] 错误";
                            err.push("</br>[x] " + lv.charts[i].type + " 难度的 name 读取到一个非字符串类型，但期望读取一个字符串。");
                        }
                        if (typeof(lv.charts[i].path) == "string") document.getElementById(prefix + "chart").value = lv.charts[i].path;
                        else
                        {
                            document.getElementById(prefix + "chart").value = "[x] 错误";
                            err.push("</br>[x] " + lv.charts[i].type + " 难度的 path 读取到一个非字符串类型，但期望读取一个字符串。");
                        }
                        if (typeof(lv.charts[i].music_override) == "undefined") document.getElementById(prefix + "music").value = "[未填写，使用全局]";
                        else if (typeof(lv.charts[i].music_override) == "object" && typeof(lv.charts[i].music_override.path) == "string") document.getElementById(prefix + "music").value = lv.charts[i].music_override.path;
                        else
                        {
                            document.getElementById(prefix + "music").value = "[x] 错误";
                            err.push("</br>[x] " + lv.charts[i].type + " 难度的 music_override.path 读取到一个非字符串类型，但期望读取一个字符串。");
                        }
                        if (typeof(lv.charts[i].storyboard) == "undefined") document.getElementById(prefix + "storyboard").value = "[未填写，不适用特效]";
                        else if (typeof(lv.charts[i].storyboard) == "object" && typeof(lv.charts[i].storyboard.path) == "string") document.getElementById(prefix + "storyboard").value = lv.charts[i].storyboard.path;
                        else
                        {
                            document.getElementById(prefix + "storyboard").value = "[x] 错误";
                            err.push("</br>[x] " + lv.charts[i].type + " 难度的 storyboard.path 读取到一个非字符串类型，但期望读取一个字符串。");
                        }
                    }
                }
                else err.push("</br>[x] charts[" + i + "].type 读取到的值不是 \"easy\", \"hard\", \"extreme\" 中的值。");
            }
        }
        else err.push("</br>[x] 未设置谱面列表。");
    }
    else err.push("</br>[x] schema_version 需要填写 1 或 2。");
    if (!err.length) { ok = true; document.getElementById("inptitle").innerText = "展开输入框"; toastr.success('啊wee改哈鞥嫦娥我刚不疤痕处哈维楚王嗡阿格王朔！！1111');}
    else toastr.warning('则不呢就美丽了');
    var serr = "错误计数: " + err.length;
    if (lv.schema_version === 1) err.push("</br>[!] 警告：schema_version 填写了 1，这意味着谱面使用 C1 格式，且游戏中显示的难度会经过一层转换，与读取结果不同。");
    for (i = 0; i < err.length; ++i) serr += err[i];
    document.getElementById("err").innerHTML = serr;
}

function idcheck()
{
    if (ok)
    {
        var req = new XMLHttpRequest();
        req.open("GET", "https://api.cytoid.cn/levels/" + lv.id, true);
        req.onreadystatechange = function()
        {
            if (req.readyState == 4)
            {
                if (req.status == 404) toastr.success('这他妈牛逼力111');
                else toastr.warning('我草我这个键盘的1是不是坏了');
            }
        }
        req.send();
    }
    else swal("这个杯子是拿来喝水的吗", "请先检查格式至无错误再执行此操作。", "warning", {buttons: "jao"});
}

function compress()
{
    if (ok)
    {
        swal({
            title: "注意！",
            text: "压缩后会覆盖输入框中内容，铲车？",
            icon: "info",
            buttons: ["贵阳", "铲车"],
            dangerMode: true,
        }).then((willdo) =>
        {
            if (willdo) 
            {
                var s = JSON.stringify(lv);
                document.getElementById("inp").value = s;
                toastr.success('成功上市');
            }
        });
    }
    else swal("这个杯子是拿来喝水的吗", "请先检查格式至无错误再执行此操作。", "warning", {buttons: "jao"});
}
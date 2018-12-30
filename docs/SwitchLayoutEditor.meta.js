Bridge.assembly("SwitchLayoutEditor", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = ["System","SwitchLayoutEditor","System.Collections.Generic"];
    $m("SwitchLayoutEditor.App", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void},{"a":2,"n":"PatchExists","is":true,"t":8,"pi":[{"n":"defaultPatches","pt":$n[1].Patches,"ps":0},{"n":"patches","pt":$n[2].List$1(SwitchLayoutEditor.Patches),"ps":1}],"sn":"PatchExists","rt":$n[0].Int32,"p":[$n[1].Patches,$n[2].List$1(SwitchLayoutEditor.Patches)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"SetDefaultsByFile","is":true,"t":8,"pi":[{"n":"RdtBase","pt":$n[1].LayoutFiles,"ps":0},{"n":"name","pt":$n[0].String,"ps":1}],"sn":"SetDefaultsByFile","rt":$n[0].Void,"p":[$n[1].LayoutFiles,$n[0].String]},{"a":2,"n":"StartEditor","is":true,"t":8,"pi":[{"n":"patch","pt":$n[2].List$1(SwitchLayoutEditor.Patches),"ps":0}],"sn":"StartEditor","rt":$n[0].Void,"p":[$n[2].List$1(SwitchLayoutEditor.Patches)]},{"a":2,"n":"UploadJSON","is":true,"t":8,"pi":[{"n":"arr","pt":Uint8Array,"ps":0},{"n":"fileName","pt":$n[0].String,"ps":1}],"sn":"UploadJSON","rt":$n[0].Void,"p":[Uint8Array,$n[0].String]},{"a":2,"n":"UploadLayoutBtn","is":true,"t":8,"sn":"UploadLayoutBtn","rt":$n[0].Void},{"a":2,"n":"UploadSZS","is":true,"t":8,"pi":[{"n":"arr","pt":Uint8Array,"ps":0},{"n":"fileName","pt":$n[0].String,"ps":1}],"sn":"UploadSZS","rt":$n[0].Void,"p":[Uint8Array,$n[0].String]},{"a":2,"n":"UploadSZSBtn","is":true,"t":8,"sn":"UploadSZSBtn","rt":$n[0].Void},{"a":2,"n":"getFileByName","is":true,"t":8,"pi":[{"n":"layout","pt":$n[1].Layout,"ps":0},{"n":"fileName","pt":$n[0].String,"ps":1}],"sn":"getFileByName","rt":$n[1].LayoutFiles,"p":[$n[1].Layout,$n[0].String]}]}; }, $n);
    $m("SwitchLayoutEditor.Layout", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("Files")],"a":2,"n":"Files","t":16,"rt":$n[2].List$1(SwitchLayoutEditor.LayoutFiles),"g":{"a":2,"n":"get_Files","t":8,"rt":$n[2].List$1(SwitchLayoutEditor.LayoutFiles),"fg":"Files"},"s":{"a":2,"n":"set_Files","t":8,"p":[$n[2].List$1(SwitchLayoutEditor.LayoutFiles)],"rt":$n[0].Void,"fs":"Files"},"fn":"Files"}]}; }, $n);
    $m("SwitchLayoutEditor.LayoutFiles", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("FileName")],"a":2,"n":"FileName","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_FileName","t":8,"rt":$n[0].String,"fg":"FileName"},"s":{"a":2,"n":"set_FileName","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"FileName"},"fn":"FileName"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("Patches")],"a":2,"n":"Patches","t":16,"rt":$n[2].List$1(SwitchLayoutEditor.Patches),"g":{"a":2,"n":"get_Patches","t":8,"rt":$n[2].List$1(SwitchLayoutEditor.Patches),"fg":"Patches"},"s":{"a":2,"n":"set_Patches","t":8,"p":[$n[2].List$1(SwitchLayoutEditor.Patches)],"rt":$n[0].Void,"fs":"Patches"},"fn":"Patches"}]}; }, $n);
    $m("SwitchLayoutEditor.Patches", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("PaneName")],"a":2,"n":"PaneName","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_PaneName","t":8,"rt":$n[0].String,"fg":"PaneName"},"s":{"a":2,"n":"set_PaneName","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"PaneName"},"fn":"PaneName"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("Parent")],"a":2,"n":"ParentName","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_ParentName","t":8,"rt":$n[0].String,"fg":"ParentName"},"s":{"a":2,"n":"set_ParentName","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"ParentName"},"fn":"ParentName"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("Position")],"a":2,"n":"Position","t":16,"rt":$n[1].PanePosition,"g":{"a":2,"n":"get_Position","t":8,"rt":$n[1].PanePosition,"fg":"Position"},"s":{"a":2,"n":"set_Position","t":8,"p":[$n[1].PanePosition],"rt":$n[0].Void,"fs":"Position"},"fn":"Position"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("Scale")],"a":2,"n":"Scale","t":16,"rt":$n[1].PaneScale,"g":{"a":2,"n":"get_Scale","t":8,"rt":$n[1].PaneScale,"fg":"Scale"},"s":{"a":2,"n":"set_Scale","t":8,"p":[$n[1].PaneScale],"rt":$n[0].Void,"fs":"Scale"},"fn":"Scale"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("Size")],"a":2,"n":"Size","t":16,"rt":$n[1].PaneSize,"g":{"a":2,"n":"get_Size","t":8,"rt":$n[1].PaneSize,"fg":"Size"},"s":{"a":2,"n":"set_Size","t":8,"p":[$n[1].PaneSize],"rt":$n[0].Void,"fs":"Size"},"fn":"Size"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("Visible")],"a":2,"n":"Visible","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Visible","t":8,"rt":$n[0].Boolean,"fg":"Visible","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_Visible","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"Visible"},"fn":"Visible"}]}; }, $n);
    $m("SwitchLayoutEditor.PanePosition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("X")],"a":2,"n":"X","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_X","t":8,"rt":$n[0].String,"fg":"X"},"s":{"a":2,"n":"set_X","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"X"},"fn":"X"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("Y")],"a":2,"n":"Y","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Y","t":8,"rt":$n[0].String,"fg":"Y"},"s":{"a":2,"n":"set_Y","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"Y"},"fn":"Y"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("Z")],"a":2,"n":"Z","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Z","t":8,"rt":$n[0].String,"fg":"Z"},"s":{"a":2,"n":"set_Z","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"Z"},"fn":"Z"}]}; }, $n);
    $m("SwitchLayoutEditor.PaneScale", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("X")],"a":2,"n":"X","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_X","t":8,"rt":$n[0].String,"fg":"X"},"s":{"a":2,"n":"set_X","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"X"},"fn":"X"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("Y")],"a":2,"n":"Y","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Y","t":8,"rt":$n[0].String,"fg":"Y"},"s":{"a":2,"n":"set_Y","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"Y"},"fn":"Y"}]}; }, $n);
    $m("SwitchLayoutEditor.PaneSize", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("X")],"a":2,"n":"X","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_X","t":8,"rt":$n[0].String,"fg":"X"},"s":{"a":2,"n":"set_X","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"X"},"fn":"X"},{"at":[new Newtonsoft.Json.JsonPropertyAttribute.$ctor1("Y")],"a":2,"n":"Y","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Y","t":8,"rt":$n[0].String,"fg":"Y"},"s":{"a":2,"n":"set_Y","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"Y"},"fn":"Y"}]}; }, $n);
});

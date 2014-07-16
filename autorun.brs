Sub Main()
	DoCanonicalInit()

	url$ = "file:///index.html#?format=face%3Dclock.jpg%3Br%3D70%25"

    mp = CreateObject("roMessagePort")

	htmlWidget = CreateHtmlWidget(mp, url$)

	HandleHtmlWidgetEvents(mp, htmlWidget)

End Sub
Sub DoCanonicalInit()

	' set DWS on device
	dwsAA = CreateObject("roAssociativeArray")
	dwsAA["port"] = "80"
	nc = CreateObject("roNetworkConfiguration", 0)
	if type(nc) <> "roNetworkConfiguration" then
		nc = CreateObject("roNetworkConfiguration", 1)
	endif
	if type(nc) = "roNetworkConfiguration" then
		nc.SetupDWS(dwsAA)
		nc.Apply()
	endif

End Sub
'''''''''''''''''''''''''''
Function CreateHtmlWidget(mp as Object, url$ as String)
    vm=CreateObject("roVideoMode")
	vm.setMode("auto")
    width=vm.GetResX()
    height=vm.GetResY()
    rect=CreateObject("roRectangle", 0, 0, width, height)
	htmlWidget = CreateObject("roHtmlWidget", rect)
	htmlWidget.EnableSecurity(false)
	htmlWidget.EnableJavascript(true)
	htmlWidget.SetUrl(url$)
	htmlWidget.StartInspectorServer(2999)
	htmlWidget.AllowJavaScriptUrls({ all: "*" })
	htmlWidget.setPort(mp)
	return htmlWidget
End Function
'''''''''''''''''''''''''''
Sub HandleHtmlWidgetEvents(mp as Object, htmlWidget as Object)

    while true
	    ev = wait(0, mp)
        if type(ev) = "roHtmlWidgetEvent" then
            eventData = ev.GetData()
            if type(eventData) = "roAssociativeArray" and type(eventData.reason) = "roString" then
                if eventData.reason = "load-error" then
                        print "HTML load error: "; eventData.message
                    stop
                else if eventData.reason = "load-finished" then
                    print "=== BS: Received load-finished from brightscript, sending message to javascript"
                    ' Got html loaded message from webkit, let JS know in case it needs to know.
                    htmlWidget.PostJSMessage({msgtype:"load-finished"})
                else if eventData.reason = "message" then
                    if eventData.message.type = "load-finished" then
                    print "=== BS: Received load-finished from javascript, showing HTML now"
                        htmlWidget.Show()
                    endif
                endif
            else
                print "Unknown eventData: "; type(eventData)
                stop
            endif
        else
            print "Unknown event: "; type(ev)
            stop
        end if
    endwhile

End Sub


Sub Main()
	rect=CreateObject("roRectangle", 0, 0, 1920, 1080)
	htmlWidget = CreateObject("roHtmlWidget", rect)
	htmlWidget.EnableSecurity(false)
	htmlWidget.SetUrl("file:/index.html")
	htmlWidget.EnableJavascript(true)
	htmlWidget.Show()
	while true
		' Do nothing
	end while
End Sub

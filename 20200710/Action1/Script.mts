Browser("Browser").ClearCache
Browser("Browser").Navigate "https://www.bestbuy.com/" @@ hightlight id_;_459820_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Maximize
Browser("Browser").Sync

'Traditional OR
Browser("Browser").Page("Best Buy | Official Online").WebButton("Products").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Best Buy | Official Online").WebButton("Computers & Tablets").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Browser").Page("Best Buy | Official Online").WebButton("Wi-Fi & Networking").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Browser").Page("Best Buy | Official Online").Link("Routers").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Browser").Sync
Browser("Browser").Page("Routers, Wireless Routers").Link("Fastest").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Sync

'AI
Browser("Browser").Navigate "https://www.bestbuy.com/" @@ hightlight id_;_459820_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Sync
AIUtil.SetContext Browser("Browser")
AIUtil.FindTextBlock("Products").Click
AIUtil.FindTextBlock("Computers & Tablets").Click
AIUtil.FindTextBlock("Wi-Fi & Networking").Click
AIUtil.FindTextBlock("Routers").Click
Browser("Browser").Sync
AIUtil.FindTextBlock("Fastest").Click
Browser("Browser").Sync

Browser("Browser").Close

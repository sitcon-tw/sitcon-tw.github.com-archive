SITCON - Students' Information Technology Conference (學生計算機年會)
=====================================================================

<http://sitcon.org> 的網站程式碼主體

主體架構
--------

* [javascripts](./sitcon-tw.github.com/tree/master/javascripts) -- JavaScript程式碼
* [images](./sitcon-tw.github.com/tree/master/images) -- 所有的圖型檔
* [stylesheets](./sitcon-tw.github.com/tree/master/stylesheets) -- Production用的CSS資料夾(這個會被覆蓋sass的資料)
* [sass](./sitcon-tw.github.com/tree/master/sass) -- 開發階段用的[Syntactically Awesome Stylesheets][SASS]資料夾

如何協做？
----------

歡迎大家來做網頁！但是要注意自己修改的東西不要存在[stylesheets](./sitcon-tw.github.com/tree/master/stylesheets)裡面喔！
因為在那個資料夾內的東西都會在sass編譯的時候覆蓋掉！那麼要怎麼建立環境呢？

### 事前準備工作

首先，您需要 `ruby` 和 `compass` 還有 `zurb-foundation` 的相關環境

### 準備環境

由於各位的開發環境不盡相同，這裡分為幾個部分來做為環境建置的解說：

#### Mac OS X

首先，您需要有MacPort，之後僅要按照下列步驟完成即可開始使用

    sudo port -v selfupdate
    sudo port -v install ruby
    sudo gem update --system
    sudo gem install compass -V
    sudo gem install zurb-foundation -V

在完成上列步驟之後，您就可以開始使用了！

#### Linux/Ubuntu

待補

#### Linux/Fedora/Other

待補

#### Windows

待補


### 環境弄好了之後如何開始使用？

您可以在此使用用 `compass compile` 來處理修改好的sass！
例如：

    cd sitcon.org
    compass compile

如果是要準備push上來的，就麻煩使用 `compass compile --output-style compressed --no-line-comments` 這個指令
這樣給大家所瀏覽的網頁才不會檔案特別龐大需要載入很久喔！


貢獻
----

這份說明文件的初版是由 **腹黒い茶 <<m50gbmb@gmail.com>>**　所完成的，所有的內容皆可以由任何人修改並且重新發佈


[SASS]: http://sass-lang.com
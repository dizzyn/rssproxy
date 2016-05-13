exports.template = `

<div>
    <h4>Filtrace</h4>
    Testovaci retezce: <a href="?words=mauricius">mauricius</a>,
    <a href="?words=maledivy">maledivy</a>,
    <a href="?words=seychely">seychely</a>,
    <a href="?words=mauricius,all inclusive">mauricius,all inclusive</a>,
    <a href="?words=řecko">řecko</a>
    ...<br/><br/>
    <form>
      <label>Vlastni slovo: (vice slov oddel carkou) <input name="words"/> </label> <input type="submit" value="odeslat"\><br/>
    </form>
</div>

<div>
    <h4>Vlozte kod do stranky:</h4>
    <code>
        &lt;script><br/>
            &nbsp;var filter="<%=words%>";<br/>
        &lt;/script><br/><br/>

        &lt;script
        type="text/javascript"
        src="http://snippet.svatba-v-zahranici.eu/snippet.js">&lt;/script>

    </code>
</div>

<div>
    <h4>Dalsi mozne konfigurace</h4>
    <code>
    &nbsp;var maxCount=10; //Pocet zobrazenych polozek (default 20)<br/>
    &nbsp;var columnCount=3; //Pocet sloupcu (default 2)<br/>
    </code>
</div>

<div>
    <h4>Nahled:</h4>
    <script type="text/javascript">
        var filter = "<%=words%>";
        var columnCount = 1;
        var maxCount = 20;
    </script>
    <script
        type="text/javascript"
        src="<%=(NODE_ENV=="production"?"http://snippet.svatba-v-zahranici.eu/snippet.js":"http://localhost:8080/snippet.js")%>"></script>
</div>


`;

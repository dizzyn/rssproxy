exports.template = `

<div>
    <h4>Filtrace</h4>
    Testovac� retezce: <a href="http://127.0.0.1:8000/?words=mauricius">mauricius</a>,
    <a href="http://127.0.0.1:8000/?words=maledivy">maledivy</a>,
    <a href="http://127.0.0.1:8000/?words=seychely">seychely</a>,
    <a href="http://127.0.0.1:8000/?words=mauricius,all inclusive">mauricius,all inclusive</a>,
    <a href="http://127.0.0.1:8000/?words=recko">recko</a>
    ...<br/><br/>
    <form>
      <label>Vlastn� slovo: (v�ce slov oddel c�rkou) <input name="words" id="filter"/> </label> <input type="submit" value="odeslat"\><br/>
    </form>
</div>

<div>
    <h4>Vlo� k�d do str�nky:</h4>
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
    <h4>Dal�� mo�n� konfigurace</h4>
    <code>
    &nbsp;var maxCount=10; //Pocet zobrazen�ch polo�ek (default 20)<br/>
    &nbsp;var columns=2; //Pocet sloupcu (default 2)<br/>
    </code>
</div>

<div>
    <h4>N�hled:</h4>
    <script type="text/javascript">
        var filter = "<%=words%>";
    </script>
    <script
        type="text/javascript"
        src="<%=(NODE_ENV=="production"?"http://snippet.svatba-v-zahranici.eu/snippet.js":"http://localhost:8080/snippet.js")%>"></script>
</div>


`;

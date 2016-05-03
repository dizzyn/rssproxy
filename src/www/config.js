exports.template = `
<!-- div>
    <h4>Konfigurace</h4>
    <label>Filtruj slova: (odděl čárkou)<input id="filter"/></label><br/>
    <label>Počet: (odděl čárkou)<input id="count"/></label><br/>
</div -->

<div>
    <h4>Vlož kód do stránky:</h4>
    <code>
        &lt;script><br/>
            &nbsp;var maxCount=10;<br/>
            &nbsp;var filter="dominikánská";<br/>
        &lt;/script><br/><br/>

        &lt;script
        type="text/javascript"
        src="http://rssproxy-prostor.rhcloud.com/snippet.js">&lt;/script>

    </code>
</div>

<div>
    <h4>Náhled:</h4>
    <script type="text/javascript">
        var maxCount = 10;
        var filter = "dominikánská";
    </script>
    <script
        type="text/javascript"
        src="http://rssproxy-prostor.rhcloud.com/snippet.js"></script>
</div>

`;

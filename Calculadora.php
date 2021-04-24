<?php require_once './header.php'; ?>

<!-- Caja Principal-->
<div id="principal">

    <div class="cal">
    <div id="caja">

        <div class="Salida">
            <input type="text" id="resultado" class="display" placeholder="0">
        </div>
        <button name="clicked-number">1</button>
        <button name="clicked-number">2</button>
        <button name="clicked-number">3</button>
        <button name="clicked-operation">+</button>
        <button name="clicked-number">4</button>
        <button name="clicked-number">5</button>
        <button name="clicked-number">6</button>
        <button name="clicked-operation">-</button>
        <button name="clicked-number">7</button>
        <button name="clicked-number">8</button>
        <button name="clicked-number">9</button>
        <button name="clicked-operation">/</button>
        <button name="clicked-clear">C</button>
        <button name="clicked-number">0</button>
        <button name="clicked-result">=</button>
        <button name="clicked-operation">x</button>
    </div>
    <script src="./Calcu.js"> </script>
</div>

</div> <!-- FIN DE PRINCIPAL  -->


<?php require_once './footer.php'; ?>
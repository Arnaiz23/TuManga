import React from "react";

export default function RecoverPassword(){
    return (
        <div class="centerLog">
            <div class="containerCenter">
                <div class="containerRecover">
                    <header>
                        <span></span><span></span><span></span>
                    </header>
                    <main>
                        <h2>Recuperar la contraseña</h2>
                        <form>
                            <div class="inputRecover">
                                <label for="newPassword">Nueva Contraseña</label>
                                <input type="password" id="newPassword" />
                            </div>
                            <div class="inputRecover">
                                <label for="repeatPassword">Repetir Contraseña</label>
                                <input type="password" id="repeatPassword" />
                            </div>
                            <button class="btn btn-success">Enviar</button>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    )
}
import React from "react";

export default function FilterProducts() {
    return (
        <div class="containersFilters">
                <div class="containerFilter">
                    <header>Tipos</header>
                    <div class="lineFilter"></div>
                    <div class="optionFilter">
                        <input type="checkbox" id="" class="checkboxFilter" />
                        <p>Novela ligera</p>
                    </div>
                    <div class="optionFilter">
                        <input type="checkbox" id="" class="checkboxFilter" />
                        <p>Novela ligera</p>
                    </div>
                </div>
                <div class="containerFilter">
                    <header>Categorias</header>
                    <div class="lineFilter"></div>
                    <div class="optionFilter">
                        <input type="checkbox" id="" class="checkboxFilter" />
                        <p>Isekai</p>
                    </div>
                    <div class="optionFilter">
                        <input type="checkbox" id="" class="checkboxFilter" />
                        <p>Spokon</p>
                    </div>
                    <div class="optionFilter">
                        <input type="checkbox" id="" class="checkboxFilter" />
                        <p>Mechas</p>
                    </div>
                    <div class="optionFilter">
                        <input type="checkbox" id="" class="checkboxFilter" />
                        <p>Shojo</p>
                    </div>
                    <div class="optionFilter">
                        <input type="checkbox" id="" class="checkboxFilter" />
                        <p>Ecchi</p>
                    </div>
                    <div class="optionFilter">
                        <input type="checkbox" id="" class="checkboxFilter" />
                        <p>Romance</p>
                    </div>
                </div>
            </div>
    )
}
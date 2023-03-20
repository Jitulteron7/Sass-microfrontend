<template>
  <div class="dashboad">
    <div class="top">
      <div>
        <span>Total catch:</span>
        {{ pokemons.length }}
      </div>
      <div>
        <span>Total exp:</span>
        {{ getEXP(pokemons) }}
      </div>
    </div>

    <div class="all-catches">
      <Card v-for="(pokemon, index) in pokemons" style="width: 25em">
        <template #header>
          <img alt="user header" :src="getImageURL(pokemon)" />
        </template>
        <template #title> {{ capitalizeFirstLetter(pokemon.name) }}</template>

        <template #content>
          <h3 style="margin: 5px 0">Abilities</h3>
          <div style="display: grid; grid-template-columns: 50% 50%">
            <div v-for="(a, i) in pokemon?.abilities">
              {{ a.ability.name }}
            </div>
          </div>
          <h3 style="margin: 5px 0">Moves</h3>
          <div style="display: grid; grid-template-columns: 50% 50%">
            <div v-for="(m, i) in getMoves(pokemon.moves)">
              {{ m }}
            </div>
          </div>

          <div style="margin: 5px 0">
            <span style="font-weight: 700; font-size: 1.1rem">Height </span>:
            {{ pokemon.height }}
          </div>
          <div style="margin: 5px 0">
            <span style="font-weight: 700; font-size: 1.1rem">Weight </span>:
            {{ pokemon.weight }}
          </div>
          <div style="margin: 5px 0">
            <span style="font-weight: 700; font-size: 1.1rem">Exp </span>:
            {{ pokemon.base_experience }}
          </div>
        </template>
        <template #footer>
          <Button label="View" @click="show(true)" />
          <Button label="Remove" @click="remove(pokemon)" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
// import Dialog from "./Dialog.vue";

import Button from "primevue/button";
import Card from "primevue/card";

export default {
  components: {
    Button,
    Card,
  },
  data() {
    return {
      pokemons: JSON.parse(localStorage.getItem("catches")),
      showIt: false,
    };
  },
  methods: {
    getEXP(pokemons) {
      let exp = 0;
      for (let i = 0; i < pokemons.length; i++) {
        exp += pokemons[i].base_experience;
      }
      return exp;
    },
    capitalizeFirstLetter(string) {
      return string?.charAt(0).toUpperCase() + string?.slice(1);
    },
    getImageURL(pokemon) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    },
    getMoves(moves) {
      let m = [];
      for (let i = 0; i < 2; i++) {
        m.push(this.capitalizeFirstLetter(moves[i].move.name));
      }

      return m;
    },
    show() {
      this.showIt = !this.showIt;
    },
    remove(pokemon) {
      let data = JSON.parse(localStorage.getItem("catches"));

      data = data.filter((d) => d.no != pokemon.no);
      localStorage.setItem("catches", JSON.stringify(data));
      this.pokemons = data;
    },
  },
};
</script>

<style scoped>
.all-catches {
  padding: 2% 10%;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 20px;
}
</style>

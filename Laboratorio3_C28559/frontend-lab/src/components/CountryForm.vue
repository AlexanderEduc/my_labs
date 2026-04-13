<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="card p-4 shadow" style="max-width: 400px; width: 100%">
            <h3 class="text-center">Formulario de creación de países</h3>

            <form @submit.prevent="saveCountry">
                <div class="form-group">
                    <label for="name">Nombre:</label>
                    <input
                        v-model="formData.Name"
                        type="text"
                        id="name"
                        class="form-control"
                        required
                    />
                </div>

                <div class="form-group">
                    <label for="continente">Continente:</label>
                    <select
                        v-model="formData.Continent"
                        id="continente"
                        class="form-control"
                        required
                    >
                        <option value="" disabled>Seleccione un continente</option>
                        <option>África</option>
                        <option>Asia</option>
                        <option>Europa</option>
                        <option>América</option>
                        <option>Oceanía</option>
                        <option>Antártida</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="idioma">Idioma:</label>
                    <input
                        v-model="formData.Language"
                        type="text"
                        id="idioma"
                        class="form-control"
                        required
                    />
                </div>

                <div class="mt-3">
                    <button type="submit" class="btn btn-success btn-block">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            formData: { 
                Name: "", 
                Continent: "", 
                Language: "",
            },
        };
    },
    methods: {
        async saveCountry() {
            try {
                console.log("Datos a guardar:", this.formData);

                const response = await axios.post("http://localhost:5050/api/country", {
                    name: this.formData.Name,
                    continent: this.formData.Continent,
                    language: this.formData.Language,
                });

                console.log("Respuesta POST:", response.data);
                window.location.href = "/";
            } catch (error) {
                console.log("Error al guardar país:", error);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
</style>

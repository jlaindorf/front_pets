<template>
    <h1>Minhas Tarefas</h1>
    <form @submit.prevent="handleAddItem">
        <input type="text" placeholder="Digite sua tarefa" v-model="description">
        <button type="submit">Cadastrar</button>
    </form>
    <ol>
        <li v-for="item in list" :key="item">
            {{item}}
        </li>
    </ol>
</template>
<script>
export default {
    data() {
        return {
            description: '',
            list: []
        }
    },
    methods: {
        handleAddItem() {
            this.list = [...this.list, this.description]
            this.description =''
        }
    }

}
</script>
<style scoped>
input {
    border: 1px solid #000;
    background-color: #ccc;
    margin:20px;
}
</style>
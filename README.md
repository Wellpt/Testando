## Documentação da API

#### Instalação das dependencias necessarios

```http
  Npm install
```
#### Para iniciar o serviço:

```http
  Npm start
```
#### Para cadastrar usuario:

```http
  POST /
```
#### Exemplo:

```http
{
    "name": "Usuario",
    "email": "Usuario@empresa.com",
    "password": "password"
}
```

| Parâmetro   | Tipo       | Descrição  |
| :---------- | :--------- | :--------- |
| `name` | `string` | **Obrigatório**
| `email` | `string` | **Obrigatório**
| `password` | `string` | **Obrigatório**


#### Para fazer o login usuario:

```http
  POST /login
```
```http
{
    "email": "Usuario@empresa.com",
    "password": "password"
}
```
| Parâmetro   | Tipo       | Descrição  |
| :---------- | :--------- | :--------- |
| `email` | `string` | **Obrigatório**
| `password` | `string` | **Obrigatório**

#### Para fazer o login usuario:

```http
  POST /id
```
```http

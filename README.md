# Hospital-Appointment-Scheduling

![NPM](https://img.shields.io/npm/l/react)

Aplicação web fullstack para agendamento de consultas médicas, a API foi implementada seguindo o padrão REST e a arquitetura em camadas (controllers, services e repositories).

[https://workshop-springboot3-mongodb-production-f924.up.railway.app](https://workshop-springboot3-mongodb-production.up.railway.app/)

# Tecnologias utilizadas:

### Back-End:
- Spring Framework 🍃 
  - Spring Web 
  - Spring Data JPA
  - Spring Security 
- Maven 🪶
- PostgreSQL 🐘 
- JWT Token 🪙
- Docker 🐋
### Front-End:
- Next.ts
  - React Hook Form + Zod 
  - Axios
- Tailwind CSS 
- Material UI
### Deploy:
  - AWS RDS (Banco de dados)
  - Render (Back-end)
  - Vercel (Front-end)
  
# Funcionalidades:

O sistema possui uma página inicial (/) que resume seu propósito e permite aos usuários navegarem, por meio dos botões, para as páginas de login, cadastro e mensagens para os admnistradores.

---

![image](https://github.com/silvvh/Hospital-Appointment-Scheduling/assets/116448381/f28247f3-2d2a-4280-a8bf-b035937344cd)

---


## Contato 

Neste endpoint, que não requer autenticação, os usuários podem deixar mensagens de feedback, as quais serão acessíveis somente aos admnistradores.

---

![image](https://github.com/silvvh/Hospital-Appointment-Scheduling/assets/116448381/1027a00e-903d-4c74-9e52-88b20edaf515)

---


## Cadastro 
Na página de cadastro, é permitido ao usuário a criação de uma conta na role de paciente, por outro lado, médicos apenas podem ser cadastrados por administradores. Caso o preenchimento dos campos ocorra conforme os requisitos, o formulário é alterado para uma mensagem de feedback indicando a criação bem sucedida da conta.

---

![image](https://github.com/silvvh/Hospital-Appointment-Scheduling/assets/116448381/071dabbc-40f2-4c81-aa46-d273ad18740c)

---


## Login

Ao inserir as credenciais de login, o sistema realiza a verificação no lado do servidor, e em caso de sucesso, o token retornado pela API é persistido no contexto de autenticação e o usuário é redirecionado para o dashboard equivalante à sua role.

---

![image](https://github.com/silvvh/Hospital-Appointment-Scheduling/assets/116448381/b7a15723-229c-4750-bef2-0aa7e37b151b)


---

## Dashboard (Paciente):

A autenticação como paciente permite ao usuário realizar as operações de marcar consulta, cancelar consultas ativas e visualizar o próprio histórico. Conta padrão:
dummy@gmail.com |
123456

---

![image](https://github.com/silvvh/Hospital-Appointment-Scheduling/assets/116448381/b1607511-3f17-45ee-881b-c56d4ac12086)

---

### Agendar consulta:

Ao paciente é permitido agendar consultas nos horários e dias válidos, ao escolher a especialização, a lista de médicos é atualizada, exibindo de modo paginado os médicos associados à especialização requerida.

---

![image](https://github.com/silvvh/Hospital-Appointment-Scheduling/assets/116448381/25760e49-28c0-46da-aa59-36f3eeb686d1)

---

### Visualizar histórico de consultas:

Nessa operação os pacientes podem visualizar os dados das consultas ativas, canceladas e finalizadas, além disso, podem cancelar consultas a depender do seu status (apenas ativas). A exibição é paginada e limitada a poucos registros, o número da página é controlado pelos arrows buttons.

---

![image](https://github.com/silvvh/Hospital-Appointment-Scheduling/assets/116448381/d6e92707-e0da-4da1-bc00-a621229eb27f)

---

## Dashboard (Médico)

A autenticação como médico permite a visualização do próprio histórico de consultas e a operação de cancelar consultas ativas. Conta padrão: john@email.com | 123456

---

![image](https://github.com/silvvh/Hospital-Appointment-Scheduling/assets/116448381/3f44aca0-579e-4bd7-ac7a-3743bbdbd746)

---

## Dashboard (Admin)

A autenticação como administrador do sistema permite a realização das operações de criar, deletar (caso não possua consultas ativas) e visualizar médicos, além disso, o admin tem acesso aos pacientes cadastrados, pode visualizar consultas detalhadamente e a lista de mensagens.
Conta padrão: admin@email.com | 123456

---

![image](https://github.com/silvvh/Hospital-Appointment-Scheduling/assets/116448381/a7ddaf89-4e91-40dd-9429-1855a03b1d7a)

---

### Visualizar médicos

A lista dos médicos cadastrados no sistema é exibida de forma paginada, além disso, o admnistrador pode excluí-los desde que não possuam consultas ativas, o que permite manter a integridade do banco de dados.

---

![image](https://github.com/silvvh/Hospital-Appointment-Scheduling/assets/116448381/de2c5c65-44d7-4c6f-b1a2-d48ff4a1b94b)
![image](https://github.com/silvvh/Hospital-Appointment-Scheduling/assets/116448381/85e0b30a-61c1-4ce2-be95-19192e2e9e76)

---

### Visualizar pacientes

Exibição paginada dos principais dados dos pacientes cadastrados no sistema, além disso, é possível realizar uma operação de busca por email de um paciente.

---

![image](https://github.com/silvvh/Hospital-Appointment-Scheduling/assets/116448381/2de5afe9-e014-4e4e-bb1e-0a273ed43d42)

---

### Cadastrar médico

Ao admnistrador é permitida a operação de cadastrar um novo médico no sistema, quando as validações dos campos do formulário é bem sucedida e ocorre a submissão, é exibida uma mensagem de feedback.

---

![image](https://github.com/silvvh/Hospital-Appointment-Scheduling/assets/116448381/34b8474b-cb63-4f6b-8d53-1e6a3e21ad9d)

--- 

### Visualizar consultas em detalhes

Listagem paginada de todas as consultas existentes no sistema, exibindo dados dos pacientes e dos médicos associados a elas.

---

![image](https://github.com/silvvh/Hospital-Appointment-Scheduling/assets/116448381/9cae9fa5-cd06-415c-95f2-be60f76758cf)

---

# Autor:

Victor Hugo Brito Silva

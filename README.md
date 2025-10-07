# 🏥 Clinic Backend

Backend application for a **clinic management system**.  
Built with **NestJS** and **PostgreSQL**, responsible for **authentication**, **business rules**, and **database integration**.

---

Aplicação **backend** para um **sistema de gestão de clínica**.  
Desenvolvida com **NestJS** e **PostgreSQL**, responsável por **autenticação**, **regras de negócio** e **integração com o banco de dados**.

## 🚀 Technologies

- [NestJS](https://nestjs.com/) (v11+)
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Swagger API Documentation

How to Run Locally
# Clone the repository
git clone https://github.com/your-org/clinic-backend.git
cd clinic-backend

# Install dependencies
npm install
## 🐳 Database with Docker

To standardize environments among all developers, the **PostgreSQL** database runs inside a **Docker container**, ensuring identical setup for everyone.

### 🧱 1. Create a `docker-compose.yml` file in the project root:
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    container_name: clinicdb
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: clinicdb
    ports:
      - "5432:5432"
    volumes:
      - clinic_data:/var/lib/postgresql/data
    networks:
      - clinic_network

volumes:
  clinic_data:

networks:
  clinic_network:
    driver: bridge
### 🚀 2. Start the database container

Run the command below to start PostgreSQL in the background:

```bash
docker compose up -d

Check if the container is running:
```bash
docker ps
⚙️ 3. Configure environment variables

Create a .env file in the project root with the following content:
# Server configuration
PORT=3000

# PostgreSQL Database (Docker)
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/clinicdb"

# JWT Secret Key
JWT_SECRET="clinica_super_secret_key_123"

# Environment
NODE_ENV=development
🧠 4. Apply Prisma migrations

Once the container is running, create the database tables:
npx prisma migrate dev
To view the database:
npx prisma studio
Access: http://localhost:5555
🧩 5. Start the Backend
npm run start:dev
API will be available at:
👉 http://localhost:3000
💡 6. Stop or restart the database
Stop:
docker compose down
Restart:
docker compose restart
✅ Benefits of Using Docker

Identical environments across all developers

Avoids “works on my machine” problems

Isolated and persistent database

Full setup with just one command:
docker compose up -d
🧭 Project Structure
src/
 ├── application/
 ├── domain/
 ├── infrastructure/
 ├── main.ts
 ├── prisma/
 └── test/

## Delivery API

This is a simple API made in Node.js + TypeScript + Prisma that has JWT authentication, and some routes to handle the deliveries.

## Install all dependencies

```bash
# YARN
yarn

# NPM
npm install
```

## Configure .env

Change database connection credentials

```bash
cp .env.example .env
```

## Run all migrations

Execute all migrations but first create your database, for not return error on execution

```bash
# YARN
yarn prisma migrate dev

# NPM
npx prisma migrate dev
```

## Run API

Run server

```bash
# YARN
yarn dev

# NPM
npm run dev
```

## Endpoints

### Authenticate client and deliveryman

Login client

> **POST -> /client/authenticate**

Return access token

```json
{
  "username": "User 1",
  "password": "123456"
}
```

---

Login deliveryman

> **POST -> /deliveryman/authenticate**

Return access token

```json
{
  "username": "Deliveryman 1",
  "password": "123456"
}
```

<br />

### Clients

Create a client

> **POST -> /client**

```json
{
  "username": "User 1",
  "password": "123456"
}
```

---

List deliveries from client

> **GET -> /client/deliveries**

Require `Bearer token` of client in `header`

```text
http://localhost:3333/client/deliveries
```

<br />

### Deliveryman

Create a deliveryman

> **POST -> /deliveryman**

```json
{
  "username": "Deliveryman 1",
  "password": "123456"
}
```

---

List deliveries from deliveryman

> **GET -> /deliveryman/deliveries**

Require `Bearer token` of deliveryman in `header`

```text
http://localhost:3333/deliveryman/deliveries
```

<br />

### Deliveries

Create a delivery

> **POST -> /delivery**

Require `Bearer token` of client in `header`

```json
{
  "item_name": "Item 1"
}
```

---

Update the deliveryman responsible for the delivery

> **PUT -> /delivery/updateDeliveryman/:id**

Require `id` of delivery in `url`

Require `Bearer token` of deliveryman in `header`

No body

---

Update delivery date

> **PUT -> /delivery/updateEndDate/:id**

Require `id` of delivery in `url`

Require `Bearer token` of deliveryman in `header`

No body

---

> **GET -> /delivery**

Require `Bearer token` of deliveryman in `header`

```text
http://localhost:3333/delivery
```

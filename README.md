<div align="center">

# <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" alt="spring" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg" alt="angular" width="40" height="40"/> Product Management App

[![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.0.3-brightgreen?style=for-the-badge&logo=spring-boot)](https://spring.io/projects/spring-boot)
[![Angular](https://img.shields.io/badge/Angular-19.2.0-red?style=for-the-badge&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

*Activité pratique 3-JEE&Middlewares-GLSID S4*

[![Demo](https://img.shields.io/badge/Demo-Live-green?style=for-the-badge)](#)
[![Documentation](https://img.shields.io/badge/Docs-Swagger-blue?style=for-the-badge)](#documentation-api)
[![License](https://img.shields.io/badge/License-Educational-yellow?style=for-the-badge)](#licence)

</div>



> **Backend** 
- API REST avec **Spring Boot 4.0.3**
- Base de données **H2** (en mémoire) / **MySQL**
- Documentation **Swagger/OpenAPI**


> **Frontend**
- SPA avec **Angular 19**
- Design responsive avec **Bootstrap 5**
- Services HTTP avec **RxJS**
- TypeScript pour le typage statique

---

 Fonctionnalités

<table>
<tr>
<td width="50%">

 CRUD Products
- Création de produits
- Lecture avec pagination
- Mise à jour en temps réel
- Suppression avec confirmation

</td>
<td width="50%">

UI/UX Moderne
- Interface responsive
- Animations fluides
- Thème Bootstrap 5
- Icônes Bootstrap Icons

</td>
</tr>
<tr>
<td>

API RESTful
- Endpoints bien structurés
- Cross-origin configuré
- Documentation interactive

</td>
<td>

 Développement
- Hot-reload automatique
- Console H2 intégrée
- Lombok pour le boilerplate

</td>
</tr>
</table>

---

 Structure du Projet

```
activite pratique 3/
|
|--- backend/                    # API Spring Boot
|   |--- src/main/java/
|   |   |--- com/charly/productmanagement/
|   |   |   |--- entity/         # Entités JPA
|   |   |   |--- repository/     # Repositories Spring Data
|   |   |   |--- web/           # Contrôleurs REST
|   |   |--- ProductManagementApplication.java
|   |--- src/main/resources/
|   |   |--- application.properties
|   |--- pom.xml
|
|--- products-app/               # Application Angular
|   |--- src/app/
|   |   |--- components/         # Composants Angular
|   |   |--- services/          # Services HTTP
|   |--- package.json
|   |--- angular.json
```

---

Prérequis

<div align="center">

| Outil | Version | Badge |
|-------|---------|-------|
| **Java** | 21+ | ![Java](https://img.shields.io/badge/Java-21+-orange?style=flat-square) |
| **Node.js** | 18+ | ![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square) |
| **Angular CLI** | 19 | ![Angular](https://img.shields.io/badge/Angular%20CLI-19-red?style=flat-square) |
| **Maven** | 3.8+ | ![Maven](https://img.shields.io/badge/Maven-3.8+-blue?style=flat-square) |

</div>

---

 Installation & Démarrage

### <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" alt="spring" width="20"/> Backend (Spring Boot)

```bash
# Clone le projet
git clone [repository-url]
cd "activite pratique 3/backend"

# Lance l'API
./mvnw spring-boot:run
```

> **Access URL** : `http://localhost:8085`  
> **Swagger UI** : `http://localhost:8085/swagger-ui/index.html`

### <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg" alt="angular" width="20"/> Frontend (Angular)

```bash
# Navigate vers le frontend
cd "activite pratique 3/products-app"

# Installe les dépendances
npm install

# Lance le serveur de dev
ng serve
```

> **Access URL** : `http://localhost:4200`

---

 API Endpoints

<div align="center">

| Méthode | Endpoint | Description | Status |
|---------|----------|-------------|--------|
| `GET` | `/products` | Récupérer tous les produits | ![Active](https://img.shields.io/badge/Active-green?style=flat-square) |
| `GET` | `/products/{id}` | Récupérer un produit par ID | ![Active](https://img.shields.io/badge/Active-green?style=flat-square) |
| `DELETE` | `/products/{id}` | Supprimer un produit | ![Active](https://img.shields.io/badge/Active-green?style=flat-square) |

</div>

---

Base de Données

 H2 Console

<div align="center">

```bash
# Accès à la console
URL: http://localhost:8085/h2-console
JDBC URL: jdbc:h2:mem:products-db
Username: Lyrach
Password: 1234
```

</div>

### <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="mysql" width="20"/> MySQL (Optionnel)

```properties
# application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/products_db
spring.datasource.username=votre_username
spring.datasource.password=votre_password
```

---

 Modèle de Données

 Product Entity

```json
{
  "id": "number",
  "name": "string (3-50 caractères)",
  "price": "number (>= 0)",
  "quantity": "number (>= 1)",
  "selected": "boolean"
}
```

Stack Technique

<div align="center">

### Backend Stack
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.0.3-brightgreen?style=for-the-badge&logo=spring-boot)
![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk)
![JPA](https://img.shields.io/badge/JPA-Hibernate-blue?style=for-the-badge)
![H2](https://img.shields.io/badge/H2-Database-lightgrey?style=for-the-badge)
![Lombok](https://img.shields.io/badge/Lombok-Project-red?style=for-the-badge)

### Frontend Stack
![Angular](https://img.shields.io/badge/Angular-19.2.0-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-purple?style=for-the-badge&logo=bootstrap)
![RxJS](https://img.shields.io/badge/RxJS-7.8-red?style=for-the-badge)

</div>

---

 Développement

 Commandes Utiles

```bash
# Backend - Mode développement
./mvnw spring-boot:run

# Backend - Tests
./mvnw test

# Frontend - Mode développement
ng serve

# Frontend - Tests
ng test

# Frontend - Build production
ng build
```

---

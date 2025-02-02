# Advanced Backstage Integration 🚀

This repository demonstrates a complex Backstage setup with multiple microservices, APIs, and system architecture.

### 📂 **Repository Structure**

```plaintext
advanced-backstage-integration/
├── catalog-info.yaml                # Main catalog file for the repository
├── README.md                        # Detailed documentation
├── .gitignore                       # Git ignore file
├── /services/                       # Microservices folder
│   ├── /auth-service/               # Authentication service
│   │   ├── catalog-info.yaml        # Catalog for the auth service
│   │   ├── Dockerfile               # Dockerfile for containerization
│   │   ├── /src/                    # Source code
│   │   │   └── app.js               # Express.js app
│   │   └── README.md                # Service-specific documentation
│   └── /payment-service/            # Payment service
│       ├── catalog-info.yaml        # Catalog for the payment service
│       ├── Dockerfile               # Dockerfile for containerization
│       ├── /src/                    # Source code
│       │   └── app.js               # Express.js app
│       └── README.md                # Service-specific documentation
├── /apis/                           # API definitions
│   └── payment-api.yaml             # OpenAPI spec for payment service
├── /systems/                        # System grouping for Backstage
│   └── system-info.yaml             # Defines the system architecture
└── /backstage/                      # Backstage provider configurations
    └── github-provider.yaml         # GitHub provider configuration
```


## 📂 Repository Structure
- `services/`: Microservices (`auth-service` & `payment-service`)
- `apis/`: API definitions (OpenAPI)
- `systems/`: System architecture for Backstage

## 🚀 Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/Liquizar/advanced-backstage-integration.git
   cd advanced-backstage-integration
   ```

2. Run the services:
   ```bash
   cd services/auth-service && node src/app.js
   cd ../payment-service && node src/app.js
   ```

3. Access the services:
   - Authentication: [http://localhost:3000/auth](http://localhost:3000/auth)
   - Payment: [http://localhost:4000/payment](http://localhost:4000/payment)

## 📊 Backstage Integration
Ensure Backstage is configured with the provided `github-provider.yaml`. Sync the repository, and you'll see the components and APIs in the Backstage catalog.

## 🧑‍💻 Author
- **Liquizar** - [GitHub](https://github.com/Liquizar)

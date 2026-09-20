export const BLOG_POSTS = [
  {
    slug: "estrategias-de-versionamiento-de-apis-express",
    title: {
      es: "3 Estrategias Prácticas para Versionar tus APIs REST en Express.js",
      en: "3 Practical Strategies for Versioning REST APIs in Express.js"
    },
    excerpt: {
      es: "Aprende cómo mantener retrocompatibilidad en tus APIs utilizando encabezados HTTP (Accept-Version), parámetros de ruta y query strings con ejemplos prácticos.",
      en: "Learn how to maintain backward compatibility in your APIs using HTTP headers (Accept-Version), route parameters, and query strings with practical examples."
    },
    date: "2026-09-18",
    readTime: {
      es: "6 min de lectura",
      en: "6 min read"
    },
    category: "Backend & APIs",
    tags: ["Express.js", "Node.js", "REST API", "Architecture"],
    featured: true,
    coverGradient: "from-indigo-600 to-purple-600",
    author: {
      name: "Oscar M Alvarez G",
      role: "Full-Stack Developer",
      avatar: "https://github.com/miusarname2.png"
    },
    content: {
      es: `
## Introducción al Versionamiento de APIs

Cuando desarrollamos APIs en entornos de producción, los cambios romperán eventualmente la compatibilidad con clientes que consumen versiones anteriores (aplicaciones móviles, integraciones de terceros o dashboards de clientes).

Para evitar fallos masivos, implementar un sistema de **versionamiento** desde las fases iniciales del proyecto es fundamental.

### 1. Versionamiento mediante Encabezados HTTP (Header Versioning)

El enfoque más limpio para mantener las URLs de tu API impecables es a través del encabezado \`Accept-Version\` o un encabezado personalizado como \`X-API-Version\`.

\`\`\`javascript
// Middleware para evaluar el encabezado Accept-Version
const apiVersionMiddleware = (req, res, next) => {
  const version = req.headers['accept-version'] || '1.0.0';
  req.apiVersion = version;
  next();
};

app.get('/api/users', apiVersionMiddleware, (req, res) => {
  if (req.apiVersion === '2.0.0') {
    return res.json({ status: 'v2', data: { fullName: 'Juan Pérez' } });
  }
  res.json({ status: 'v1', data: { name: 'Juan', lastName: 'Pérez' } });
});
\`\`\`

### 2. Versionamiento en la Ruta (URI Path Versioning)

Es la estrategia más común e intuitiva visualmente. Las rutas incluyen prefijos como \`/api/v1\` o \`/api/v2\`.

\`\`\`javascript
const routerV1 = express.Router();
const routerV2 = express.Router();

routerV1.get('/products', (req, res) => res.json({ version: 1, items: [] }));
routerV2.get('/products', (req, res) => res.json({ version: 2, products: [], pagination: {} }));

app.use('/api/v1', routerV1);
app.use('/api/v2', routerV2);
\`\`\`

### 3. Versionamiento mediante Parámetros de Consulta (Query String)

Útil para pruebas rápidas y entornos donde cambiar encabezados puede resultar complejo.

\`\`\`javascript
app.get('/api/orders', (req, res) => {
  const version = req.query.v || '1';
  if (version === '2') {
    return res.json({ v: 2, orders: [] });
  }
  res.json({ v: 1, list: [] });
});
\`\`\`

### Conclusión

Elegir la estrategia adecuada depende de la complejidad de tus consumidores. El uso de encabezados HTTP preserva la semántica RESTful, mientras que el versionamiento por ruta ofrece mayor claridad explícita en los registros de auditoría.
      `,
      en: `
## Introduction to API Versioning

When building APIs in production environments, breaking changes will eventually affect clients consuming older versions (mobile apps, third-party integrations, or client dashboards).

To prevent massive failures, implementing a **versioning** strategy from the early stages of a project is essential.

### 1. Versioning via HTTP Headers (Header Versioning)

The cleanest approach to keep API URLs neat is through the \`Accept-Version\` header or a custom header like \`X-API-Version\`.

\`\`\`javascript
// Middleware to evaluate Accept-Version header
const apiVersionMiddleware = (req, res, next) => {
  const version = req.headers['accept-version'] || '1.0.0';
  req.apiVersion = version;
  next();
};

app.get('/api/users', apiVersionMiddleware, (req, res) => {
  if (req.apiVersion === '2.0.0') {
    return res.json({ status: 'v2', data: { fullName: 'John Doe' } });
  }
  res.json({ status: 'v1', data: { name: 'John', lastName: 'Doe' } });
});
\`\`\`

### 2. URI Path Versioning

This is the most common and visually intuitive strategy. Routes include prefixes like \`/api/v1\` or \`/api/v2\`.

\`\`\`javascript
const routerV1 = express.Router();
const routerV2 = express.Router();

routerV1.get('/products', (req, res) => res.json({ version: 1, items: [] }));
routerV2.get('/products', (req, res) => res.json({ version: 2, products: [], pagination: {} }));

app.use('/api/v1', routerV1);
app.use('/api/v2', routerV2);
\`\`\`

### 3. Query Parameter Versioning

Useful for quick testing and environments where modifying headers is difficult.

\`\`\`javascript
app.get('/api/orders', (req, res) => {
  const version = req.query.v || '1';
  if (version === '2') {
    return res.json({ v: 2, orders: [] });
  }
  res.json({ v: 1, list: [] });
});
\`\`\`

### Conclusion

Selecting the right strategy depends on your consumer ecosystem. HTTP headers preserve RESTful semantics, while Path versioning provides explicit clarity in audit logs.
      `
    }
  },
  {
    slug: "introduccion-a-compose-multiplatform-kotlin",
    title: {
      es: "Creando tu Primera Aplicación de Escritorio con Compose Multiplatform y Kotlin",
      en: "Building Your First Desktop App with Compose Multiplatform and Kotlin"
    },
    excerpt: {
      es: "Explora cómo construir una interfaz de usuario declarativa para escritorio en macOS, Windows y Linux usando Kotlin y Compose.",
      en: "Explore how to build a declarative UI for desktop applications across macOS, Windows, and Linux using Kotlin and Compose."
    },
    date: "2026-09-12",
    readTime: {
      es: "5 min de lectura",
      en: "5 min read"
    },
    category: "Desktop & Mobile",
    tags: ["Kotlin", "Compose", "Desktop", "Multiplatform"],
    featured: false,
    coverGradient: "from-cyan-600 to-blue-600",
    author: {
      name: "Oscar M Alvarez G",
      role: "Full-Stack Developer",
      avatar: "https://github.com/miusarname2.png"
    },
    content: {
      es: `
## ¿Qué es Compose Multiplatform?

Jetbrains Compose Multiplatform permite compartir la interfaz de usuario entre Android, iOS, Desktop (Windows, macOS, Linux) y Web utilizando Kotlin.

### Configuración Básica en Gradle

\`\`\`kotlin
plugins {
    kotlin("multiplatform")
    id("org.jetbrains.compose")
}

kotlin {
    jvm("desktop") {
        compilations.all {
            kotlinOptions.jvmTarget = "17"
        }
    }
}
\`\`\`

### Creando tu primer Composable de Escritorio

\`\`\`kotlin
import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.material.Button
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application

fun main() = application {
    Window(onCloseRequest = ::exitApplication, title = "Mi Primera App") {
        App()
    }
}

@Composable
@Preview
fun App() {
    var count by remember { mutableStateOf(0) }
    MaterialTheme {
        Button(onClick = { count++ }) {
            Text("Clicks: $count")
        }
    }
}
\`\`\`

### Empaquetado para Instaladores Nativos (.dmg, .msi, .deb)

Gracias a la tarea \`packageDistribution\` de Gradle, puedes generar ejecutables instalables para tu sistema operativo de forma nativa sin depender de entornos complejos.
      `,
      en: `
## What is Compose Multiplatform?

JetBrains Compose Multiplatform allows sharing declarative user interfaces across Android, iOS, Desktop (Windows, macOS, Linux), and Web using Kotlin.

### Basic Gradle Setup

\`\`\`kotlin
plugins {
    kotlin("multiplatform")
    id("org.jetbrains.compose")
}

kotlin {
    jvm("desktop") {
        compilations.all {
            kotlinOptions.jvmTarget = "17"
        }
    }
}
\`\`\`

### Building Your First Desktop Composable

\`\`\`kotlin
import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.material.Button
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application

fun main() = application {
    Window(onCloseRequest = ::exitApplication, title = "My First App") {
        App()
    }
}

@Composable
@Preview
fun App() {
    var count by remember { mutableStateOf(0) }
    MaterialTheme {
        Button(onClick = { count++ }) {
            Text("Clicks: $count")
        }
    }
}
\`\`\`

### Packaging into Native Installers (.dmg, .msi, .deb)

Using Gradle's \`packageDistribution\` task, you can build native installer artifacts for your OS effortlessly.
      `
    }
  },
  {
    slug: "autenticacion-jwt-y-rate-limiting-express-mongodb",
    title: {
      es: "Autenticación Segura con JWT y Protección de Rate Limiting en Node.js & MongoDB",
      en: "Secure JWT Authentication and Rate Limiting in Node.js & MongoDB"
    },
    excerpt: {
      es: "Guía paso a paso para proteger endpoints de Express.js usando JSON Web Tokens y prevenir abusos con express-rate-limit.",
      en: "Step-by-step guide to secure Express.js endpoints using JSON Web Tokens and prevent abuse with express-rate-limit."
    },
    date: "2026-09-05",
    readTime: {
      es: "7 min de lectura",
      en: "7 min read"
    },
    category: "Security & Backend",
    tags: ["Node.js", "JWT", "MongoDB", "Express", "Security"],
    featured: false,
    coverGradient: "from-emerald-600 to-teal-600",
    author: {
      name: "Oscar M Alvarez G",
      role: "Full-Stack Developer",
      avatar: "https://github.com/miusarname2.png"
    },
    content: {
      es: `
## Seguridad en APIs de Producción

Garantizar que tu API sea resistente a ataques de fuerza bruta y accesos no autorizados requiere dos pilares indispensables: Autenticación por Tokens y Limitación de Peticiones (Rate Limiting).

### 1. Autenticación con JWT

\`\`\`javascript
const jwt = require('jsonwebtoken');

// Generación del token
const token = jwt.sign(
  { userId: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '2h' }
);

// Middleware de verificación
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Acceso denegado' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Token inválido o expirado' });
    req.user = decoded;
    next();
  });
};
\`\`\`

### 2. Implementación de Rate Limiting

Para mitigar ataques de denegación de servicio (DoS) o brute-force en rutas sensibles como \`/login\` o \`/token\`:

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Máximo 5 peticiones por IP
  message: { error: 'Demasiados intentos de inicio de sesión. Por favor intenta de nuevo en 15 minutos.' }
});

app.post('/api/login', loginLimiter, handleLogin);
\`\`\`

### Conclusión

La combinación de JWT con buenas prácticas de expiración y middlewares de Rate Limiting forma una barrera sólida de seguridad en aplicaciones Node.js.
      `,
      en: `
## Security in Production APIs

Ensuring your API is resistant to brute-force attacks and unauthorized access requires two fundamental pillars: Token Authentication and Rate Limiting.

### 1. JWT Authentication

\`\`\`javascript
const jwt = require('jsonwebtoken');

// Token Generation
const token = jwt.sign(
  { userId: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '2h' }
);

// Verification Middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access Denied' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid or expired token' });
    req.user = decoded;
    next();
  });
};
\`\`\`

### 2. Implementing Rate Limiting

To mitigate Denial of Service (DoS) or brute-force attacks on sensitive endpoints like \`/login\` or \`/token\`:

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Maximum 5 requests per IP
  message: { error: 'Too many login attempts. Please try again in 15 minutes.' }
});

app.post('/api/login', loginLimiter, handleLogin);
\`\`\`

### Conclusion

Combining JWT with proper expiration policies and Rate Limiting middlewares provides a robust security layer for Node.js applications.
      `
    }
  }
];

export function getAllPosts() {
  return BLOG_POSTS;
}

export function getPostBySlug(slug) {
  return BLOG_POSTS.find(post => post.slug === slug);
}

export function getAllCategories() {
  const categories = BLOG_POSTS.map(post => post.category);
  return Array.from(new Set(categories));
}

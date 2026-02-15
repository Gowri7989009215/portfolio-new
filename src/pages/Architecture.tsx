import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Layers, Shield, GitBranch, Database, Server, Workflow } from "lucide-react";

const architectureSections = [
  {
    icon: Layers,
    title: "MVC Architecture",
    description: "Structured separation of concerns with Model-View-Controller pattern for maintainable, testable codebases.",
    code: `// Clean Controller Pattern
class UserController {
  async getUser(req, res) {
    const user = await UserService.findById(req.params.id);
    return res.json(UserPresenter.format(user));
  }
}`,
  },
  {
    icon: Server,
    title: "RESTful API Design",
    description: "Resource-oriented endpoints with proper HTTP semantics, versioning, pagination, and HATEOAS principles.",
    code: `GET    /api/v1/users
POST   /api/v1/users
GET    /api/v1/users/:id
PATCH  /api/v1/users/:id
DELETE /api/v1/users/:id`,
  },
  {
    icon: Shield,
    title: "Authentication & Security",
    description: "JWT-based authentication with refresh token rotation, RBAC, rate limiting, and input sanitization.",
    code: `// JWT Middleware
const authenticate = (req, res, next) => {
  const token = extractToken(req.headers);
  const payload = verifyJWT(token);
  req.user = payload;
  next();
};`,
  },
  {
    icon: GitBranch,
    title: "Middleware Pipeline",
    description: "Composable middleware chain for cross-cutting concerns: logging, validation, error handling, caching.",
    code: `app.use(cors());
app.use(rateLimit({ max: 100 }));
app.use(helmet());
app.use(validateInput);
app.use(authenticate);
app.use(errorHandler);`,
  },
];

const dbConcepts = [
  { title: "Normalization", desc: "3NF+ schema design eliminating redundancy while balancing read performance." },
  { title: "Indexing Strategy", desc: "Composite and partial indexes optimized for query patterns and write throughput." },
  { title: "Schema Design", desc: "Domain-driven schema modeling with proper relationships and constraints." },
  { title: "Query Optimization", desc: "EXPLAIN analysis, query planning, and N+1 elimination strategies." },
];

const Architecture = () => {
  return (
    <div className="relative pt-24 pb-16">
      {/* Header */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="font-mono text-primary text-sm">// architecture</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6 text-foreground">
              System <span className="gradient-text">Architecture</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              How I design, structure, and build scalable backend systems with clean architecture principles.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Backend Architecture */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-12 text-foreground">
              Backend Architecture <span className="gradient-text">Patterns</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architectureSections.map((section, i) => (
              <AnimatedSection key={section.title} delay={i * 0.1}>
                <div className="glass border-glow rounded-xl p-6 h-full group hover:scale-[1.01] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{section.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
                  <pre className="text-xs font-mono bg-background/50 rounded-lg p-4 text-primary/80 overflow-x-auto">
                    {section.code}
                  </pre>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Database Design */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-12 text-foreground flex items-center gap-3">
              <Database className="w-6 h-6 text-primary" />
              Database Design <span className="gradient-text">Approach</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dbConcepts.map((concept, i) => (
              <AnimatedSection key={concept.title} delay={i * 0.1}>
                <div className="glass border-glow rounded-xl p-6 h-full hover:scale-[1.02] transition-all duration-300">
                  <h3 className="font-semibold text-foreground mb-2">{concept.title}</h3>
                  <p className="text-sm text-muted-foreground">{concept.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Architecture;

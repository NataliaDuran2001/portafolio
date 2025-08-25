import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const experiences = [
	{
		title: "Desarrollador de Software",
		company: "Banco Ganadero S.A.",
		period: "octubre 2023 – Actualidad",
		location: "Santa Cruz, Bolivia",
		description:
			"Contribuí al crecimiento del negocio a través de soluciones tecnológicas en equipos multidisciplinarios, con enfoque en la fidelización de clientes y operatividad bancaria.",
		achievements: [
			"75% de aumento en interacción con programas de lealtad",
			"Implementación de arquitectura de streaming con Apache Kafka",
			"Desarrollo de microservicios con NestJS y Kubernetes",
			"Optimización de bases de datos Oracle y MongoDB para millones de registros",
			"Implementación de pipelines CI/CD con Jenkins y Azure DevOps",
		],
		technologies: [
			"Spring Boot",
			"NestJS",
			"Kony",
			"Mobile Development",
			"React.js",
			"Apache Kafka",
			"Oracle",
			"MongoDB",
			"Kubernetes",
			"Docker",
			"Jenkins",
		],
	},
	{
		title: "Analista de Sistemas",
		company: "Santa Cruz Vida y Salud Seguros y Reaseguros Personales S.A.",
		period: "octubre 2022 – octubre 2023",
		location: "Santa Cruz, Bolivia",
		description:
			"Desarrollo y migración de sistemas de gestión, con enfoque en cumplimiento normativo y arquitecturas clean code.",
		achievements: [
			"99% de precisión en sistema Anti-Lavado de Dinero (AMLC)",
			"Migración exitosa de módulo de gestión de personas",
			"Implementación de productos de seguros con arquitectura hexagonal",
		],
		technologies: ["Spring Boot", "Angular", "Clean Architecture", "Hexagonal Architecture"],
	},
	{
		title: "Desarrollador Full Stack",
		company: "Sociedad Synergy Ltda.",
		period: "febrero 2022 – octubre 2022",
		location: "Santa Cruz, Bolivia",
		description:
			"Diseño e implementación de servicios de integración con SAP B1 para optimización de procesos de almacén.",
		achievements: [
			"60% de mejora en transparencia operacional",
			"40% de optimización en eficiencia de almacén",
			"Integración completa con SDK DI API de SAP B1",
		],
		technologies: ["React.js", "SAP B1", "SDK DI API", "Web Services", "Database Integration"],
	},
	{
		title: "Desarrollador Full Stack",
		company: "Grupo Editorial La Hoguera",
		period: "abril 2021 – noviembre 2021",
		location: "Santa Cruz, Bolivia",
		description:
			"Implementación de servicios de integración y desarrollo de aplicación móvil para digitalización de procesos.",
		achievements: [
			"60% de optimización en flujo de registro de ventas",
			"100% de digitalización del proceso de toma de pedidos",
			"80% de aumento en eficiencia de ingreso de datos al ERP",
		],
		technologies: ["ASP.NET", "Flutter", "SAP B1", "Mobile Development", "ERP Integration"],
	},
];

export default function ExperienceSection() {
	return (
		<section id="experience" className="py-20">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Experiencia Profesional</h2>
						<div className="w-20 h-1 bg-gradient-to-r from-blue-800 to-pink-800 mx-auto mb-6"></div>
						<p className="text-lg text-gray-300 max-w-3xl mx-auto">
							Más de 4 años construyendo soluciones robustas y escalables en diferentes sectores
						</p>
					</div>

					{/* Timeline */}
					<div className="relative">
						{/* Vertical line */}
						<div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-indigo-600 to-blue-950"></div>

						{experiences.map((exp, index) => (
							<div key={index} className="relative mb-12 md:mb-16">
								{/* Timeline dot */}
								<div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-800 to-pink-800 rounded-full border-2 border-gray-300 shadow-lg z-10"></div>

								{/* Content */}
								<div
									className={`ml-12 md:ml-0 md:w-1/2 ${
										index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
									}`}
								>
									<Card className="border-0 shadow-lg hover:shadow-xl shadow-blue-950 transition-all duration-300 gradient-bg-card">
										<CardHeader className="pb-4">
											<div className="space-y-2">
												<h3 className="text-xl font-bold text-gray-300">{exp.title}</h3>
												<h4 className="text-lg font-semibold text-blue-500">{exp.company}</h4>
												<div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-400">
													<div className="flex items-center gap-1">
														<Calendar className="w-4 h-4" />
														<span>{exp.period}</span>
													</div>
													<div className="flex items-center gap-1">
														<MapPin className="w-4 h-4" />
														<span>{exp.location}</span>
													</div>
												</div>
											</div>
										</CardHeader>
										<CardContent>
											<p className="text-gray-400 mb-4">{exp.description}</p>

											{/* Achievements */}
											<div className="mb-4">
												<h5 className="font-semibold text-gray-300 mb-2 flex items-center gap-2">
													<TrendingUp className="w-4 h-4 text-green-500" />
													Logros destacados:
												</h5>
												<ul className="space-y-1">
													{exp.achievements.map((achievement, idx) => (
														<li
															key={idx}
															className="text-sm text-gray-400 flex items-start gap-2"
														>
															<div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
															{achievement}
														</li>
													))}
												</ul>
											</div>

											{/* Technologies */}
											<div className="flex flex-wrap gap-2">
												{exp.technologies.map((tech) => (
													<Badge
														key={tech}
														variant="secondary"
														className="cursor-pointer text-xs bg-gradient-to-r from-blue-100 to-pink-100 text-gray-700"
													>
														{tech}
													</Badge>
												))}
											</div>
										</CardContent>
									</Card>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

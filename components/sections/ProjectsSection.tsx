"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Users, Zap, Shield } from "lucide-react";

const projects = [
	{
		title: "Sistema de Fidelización Bancaria",
		description:
			"Plataforma completa de microservicios para gestión de programas de lealtad con arquitectura orientada a eventos.",
		image: "images/fidelizacion/lista_comercios.png",
		achievements: [
			"75% aumento en interacción de clientes",
			"Arquitectura de streaming con Kafka",
			"Microservicios escalables con NestJS",
		],
		technologies: ["NestJS", "React.js", "Apache Kafka", "Kubernetes", "MongoDB"],
		category: "Fintech",
		icon: TrendingUp,
		gradient: "from-blue-500 to-cyan-500",
	},
	{
		title: "Portal de Descuentos Bancarios",
		description: "Plataforma web para la información y gestión de descuentos bancarios para clientes.",
		image: "images/descuentos/descuentos.png",
		achievements: [
			"40% aumento en interacción de clientes",
			"Optimización de rendimiento y SEO con Next.js",
			"Integración en portal bancario",
		],
		technologies: ["Next.js", "React.js"],
		category: "Fintech",
		icon: TrendingUp,
		gradient: "from-blue-500 to-cyan-500",
	},
	{
		title: "Portal de Fidelización Bancaria",
		description: "Plataforma web para la información de programas de lealtad bancarios.",
		image: "images/vamos/vamos.png",
		achievements: [
			"80% aumento en fidelización de clientes",
			"Optimización de rendimiento y SEO con Next.js",
			"Integración en portal bancario",
		],
		technologies: ["Next.js", "React.js"],
		category: "Fintech",
		icon: TrendingUp,
		gradient: "from-blue-500 to-cyan-500",
	},
	{
		title: "Sistema Anti-Lavado de Dinero (AMLC)",
		description:
			"Sistema crítico de cumplimiento normativo con precisión del 99% para detección y prevención de lavado de dinero.",
		image: "images/amlc/amlc.png",
		achievements: [
			"99% de precisión en detección",
			"Cumplimiento normativo total",
			"Procesamiento de alto volumen",
		],
		technologies: ["Spring Boot", "Oracle", "Clean Architecture", "Security"],
		category: "Compliance",
		icon: Shield,
		gradient: "from-red-500 to-pink-500",
	},
	{
		title: "Integración SAP B1 - Gestión de Almacenes",
		description:
			"Servicio de integración completo con SAP Business One para optimización de procesos de despacho y almacén.",
		image: "images/synergy/synergy.jpg",
		achievements: [
			"60% mejora en transparencia operacional",
			"40% optimización de eficiencia",
			"Integración SDK DI API completa",
		],
		technologies: ["SAP B1", "SDK DI API", "Web Services", "Database Integration"],
		category: "ERP",
		icon: Zap,
		gradient: "from-green-500 to-emerald-500",
	},
	{
		title: "App Móvil de Pedidos - Flutter",
		description:
			"Aplicación móvil que digitalizó completamente el proceso de toma de pedidos, integrándose con sistemas ERP.",
		image: "images/hoguera/hoguera.jpg",
		achievements: ["100% digitalización de procesos", "80% aumento en eficiencia", "Integración completa con ERP"],
		technologies: ["Flutter", "ASP.NET", "ERP Integration", "Mobile Development"],
		category: "Mobile",
		icon: Users,
		gradient: "from-purple-500 to-violet-500",
	},
	{
		title: "App bancaria - GanaMóvil",
		description: "Diseño e implementación de iniciativas de negocio para aplicación móvil bancaria.",
		image: "images/ganamovil/ganamovil.jpeg",
		achievements: [
			"Alta disponibilidad del servicio",
			"Escalabilidad horizontal",
			"Monitoreo con Grafana y Dynatrace",
		],
		technologies: ["Spring Boot", "Docker", "Kubernetes", "Jenkins", "Grafana"],
		category: "Architecture",
		icon: Users,
		gradient: "from-indigo-500 to-blue-500",
	},
	{
		title: "Portal de Seguros - Arquitectura Hexagonal",
		description:
			"Sistema de gestión de seguros implementado con arquitectura hexagonal y principios de clean code.",
		image: "images/seguros/seguros.png",
		achievements: ["Arquitectura hexagonal", "Clean code implementation", "Productos de seguros unipersonales"],
		technologies: ["Next.js", "React.js", "Clean Architecture", "Hexagonal Pattern", "PostgreSQL"],
		category: "Insurance",
		icon: Shield,
		gradient: "from-orange-500 to-red-500",
	},
];

export default function ProjectsSection() {
	return (
		<section id="projects" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
						<div className="w-20 h-1 bg-gradient-to-r from-blue-800 to-pink-800 mx-auto mb-6"></div>
						<p className="text-lg text-secondary max-w-3xl mx-auto">
							Soluciones tecnológicas que han generado impacto real en diferentes sectores
						</p>
					</div>

					{/* Projects Grid */}
					<div className="grid lg:grid-cols-2 gap-8">
						{projects.map((project, index) => (
							<Card
								key={index}
								className="crusor-default group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-gray-50/50"
							>
								{/* Project Image */}
								<div className="relative overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-88 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
									<div
										className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-950 rounded-full flex items-center justify-center shadow-lg`}
									>
										<project.icon className="w-6 h-6 text-white" />
									</div>
									<Badge className="absolute top-4 right-4 bg-white/90 text-gray-800 hover:bg-white">
										{project.category}
									</Badge>
								</div>

								<CardHeader className="pb-4 cursor-default">
									<h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors">
										{project.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">{project.description}</p>
								</CardHeader>

								<CardContent>
									{/* Achievements */}
									<div className="mb-6 cursor-default">
										<h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
											<TrendingUp className="w-4 h-4 text-green-500" />
											Resultados:
										</h4>
										<ul className="space-y-2">
											{project.achievements.map((achievement, idx) => (
												<li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
													<div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
													{achievement}
												</li>
											))}
										</ul>
									</div>

									{/* Technologies */}
									<div className="mb-6">
										<h4 className="font-semibold text-gray-900 mb-3">Tecnologías:</h4>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech) => (
												<Badge
													key={tech}
													variant="secondary"
													className="cursor-default text-xs bg-gradient-to-r from-blue-100 to-pink-100 text-gray-700"
												>
													{tech}
												</Badge>
											))}
										</div>
									</div>

									{/* Actions */}
									{/* <div className="flex gap-3">
										<Button
											variant="outline"
											size="sm"
											className="flex-1 text-gray-900 border-blue-200 hover:bg-indigo-600 hover:border-blue-950 transition-colors"
										>
											<ExternalLink className="w-4 h-4 mr-2" />
											Ver más
										</Button>
										<Button
											variant="outline"
											size="sm"
											className="flex-1 text-gray-900 border-pink-200 hover:bg-pink-50 hover:border-pink-300 transition-colors"
										>
											<Github className="w-4 h-4 mr-2" />
											Código
										</Button>
									</div> */}
								</CardContent>
							</Card>
						))}
					</div>

					{/* CTA */}
					{/* <div className="text-center mt-16">
						<p className="text-gray-600 mb-6">
							¿Interesado en ver más proyectos o colaborar en algo nuevo?
						</p>
						<Button
							size="lg"
							className="bg-gradient-to-r from-blue-800 to-pink-800 hover:from-blue-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all"
							onClick={() => {
								const element = document.querySelector("#contact");
								if (element) element.scrollIntoView({ behavior: "smooth" });
							}}
						>
							Hablemos sobre tu proyecto
						</Button>
					</div> */}
				</div>
			</div>
		</section>
	);
}

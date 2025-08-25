import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, Users, Globe, BookOpen, Trophy } from "lucide-react";

const education = [
	{
		title: "Postítulo en Dirección de Proyectos",
		subtitle: "Metodología PMI",
		institution: "Universidad Privada de Santa Cruz de la Sierra (UPSA)",
		year: "2025",
		type: "Postítulo",
		status: "En curso",
		icon: Trophy,
		gradient: "from-yellow-500 to-orange-500",
	},
	{
		title: "Diploma en Idioma Inglés",
		subtitle: "Nivel Intermedio B1",
		institution: "Focus Your Mind",
		year: "2023 - 2024",
		type: "Certificación",
		status: "Completado",
		icon: Globe,
		gradient: "from-blue-500 to-cyan-500",
	},
	{
		title: "Ingeniería de Sistemas",
		subtitle: 'Beca "CREando Valor"',
		institution: "Universidad Evangélica Boliviana",
		year: "2019 - 2022",
		type: "Pregrado",
		status: "Completado",
		icon: GraduationCap,
		gradient: "from-green-500 to-emerald-500",
	},
	{
		title: "Cisco Certified Network Associate (CCNA)",
		subtitle: "Networking Fundamentals",
		institution: "CIFT UAGRM",
		year: "Septiembre 2021",
		type: "Certificación",
		status: "Completado",
		icon: Award,
		gradient: "from-purple-500 to-violet-500",
	},
];

const leadership = [
	{
		title: "Lead Organizer",
		organization: "Google Developer Groups (GDG)",
		period: "2019 - Presente",
		description:
			"Liderazgo en la organización de eventos tecnológicos, workshops y conferencias para desarrolladores en Santa Cruz, Bolivia.",
		icon: Users,
		achievements: [
			"6+ años liderando la comunidad tech local",
			"Organización de 50+ eventos técnicos",
			"Alcance de 2000+ desarrolladores",
		],
	},
	{
		title: "Women Techmakers (WTM)",
		organization: "Google for Developers",
		period: "2019 - Presente",
		description: "Participación activa en iniciativas para promover la inclusión de mujeres en tecnología y STEM.",
		icon: Users,
		achievements: [
			"Mentorship a mujeres en tech",
			"Charlas sobre diversidad en tecnología",
			"Creación de redes de apoyo profesional",
		],
	},
];

const skills = {
	languages: [
		{ name: "Español", level: "Nativo", flag: "🇪🇸" },
		{ name: "Inglés", level: "Intermedio (B1)", flag: "🇺🇸" },
	],
	certifications: [
		"Project Management (PMI)",
		"CCNA Networking",
		"Google Developer Groups Leadership",
		"OWASP Security Practices",
		"Azure DevOps",
	],
};

export default function EducationSection() {
	return (
		<section id="education" className="py-20 bg-stone-100">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Educación & Liderazgo</h2>
						<div className="w-20 h-1 bg-gradient-to-r from-blue-800 to-pink-800 mx-auto mb-6"></div>
						<p className="text-lg text-secondary max-w-3xl mx-auto">
							Formación académica continua y compromiso con el crecimiento de la comunidad tecnológica
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						{/* Education */}
						<div>
							<h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
								<BookOpen className="w-6 h-6 text-blue-800" />
								Formación Académica
							</h3>

							<div className="space-y-6">
								{education.map((item, index) => (
									<Card
										key={index}
										className="cursor-default border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
									>
										<CardContent className="p-6">
											<div className="flex items-start gap-4">
												<div
													className={`w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-950 rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}
												>
													<item.icon className="w-6 h-6 text-white" />
												</div>
												<div className="flex-1">
													<div className="flex items-start justify-between mb-2">
														<h4 className="font-bold">{item.title}</h4>
														<Badge
															variant={
																item.status === "Completado" ? "default" : "secondary"
															}
															className="ml-2"
														>
															{item.status}
														</Badge>
													</div>
													<p className="text-gray-300 font-semibold mb-1">{item.subtitle}</p>
													<p className="text-gray-400 mb-2">{item.institution}</p>
													<div className="flex items-center gap-4 text-sm text-gray-400">
														<div className="flex items-center gap-1">
															<Calendar className="w-4 h-4" />
															<span>{item.year}</span>
														</div>
														<Badge variant="outline" className="text-xs">
															{item.type}
														</Badge>
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</div>

						{/* Leadership */}
						<div>
							<h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
								<Users className="w-6 h-6 text-pink-700" />
								Liderazgo & Comunidad
							</h3>

							<div className="space-y-6 mb-8">
								{leadership.map((item, index) => (
									<Card
										key={index}
										className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 gradient-bg-card"
									>
										<CardContent className="p-6">
											<div className="flex items-start gap-4">
												<div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-950 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
													<item.icon className="w-6 h-6 text-white" />
												</div>
												<div className="flex-1">
													<h4 className="font-bold mb-1">{item.title}</h4>
													<p className="text-gray-300 font-semibold mb-2">
														{item.organization}
													</p>
													<div className="flex items-center gap-1 text-sm text-gray-400 mb-3">
														<Calendar className="w-4 h-4" />
														<span>{item.period}</span>
													</div>
													<p className="text-gray-400 mb-4 text-sm">{item.description}</p>
													<ul className="space-y-1">
														{item.achievements.map((achievement, idx) => (
															<li
																key={idx}
																className="text-sm text-gray-200 flex items-start gap-2"
															>
																<div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
																{achievement}
															</li>
														))}
													</ul>
												</div>
											</div>
										</CardContent>
									</Card>
								))}
							</div>

							{/* Languages & Additional Skills */}
							<div className="space-y-6">
								<Card className="border-0 shadow-lg">
									<CardHeader className="pb-4">
										<h4 className="font-bold flex items-center gap-2">
											<Globe className="w-5 h-5 text-blue-600" />
											Idiomas
										</h4>
									</CardHeader>
									<CardContent>
										<div className="space-y-3">
											{skills.languages.map((lang, index) => (
												<div key={index} className="flex items-center justify-between">
													<div className="flex items-center gap-3">
														<span className="text-2xl">{lang.flag}</span>
														<span className="font-medium text-gray-300">{lang.name}</span>
													</div>
													<Badge variant="secondary" className="text-sm">
														{lang.level}
													</Badge>
												</div>
											))}
										</div>
									</CardContent>
								</Card>

								{/*<Card className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-500" />
                      Certificaciones
                    </h4>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.certifications.map((cert, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700 hover:from-purple-200 hover:to-pink-200 transition-colors"
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

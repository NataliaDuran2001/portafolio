"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Download, Mail, MapPin } from "lucide-react";

const tecnologias = [
	"Spring Boot",
	"React.js",
	"TypeScript",
	"Apache Kafka",
	"Microservicios",
	"Docker",
	"Kubernetes",
	"MongoDB",
];

export default function HeroSection() {
	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="hero" className="min-h-screen flex items-center justify-center pt-16">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center">
					{/* Avatar */}
					<div className="mb-8 animate-fade-in">
						<Avatar className="w-100 h-100 mx-auto border-4 border-white shadow-xl">
							<AvatarImage
								src="images/natalia_duran.jpg"
								alt="Natalia Duran"
								style={{ objectFit: "cover" }}
							/>
							<AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-indigo-600 to-blue-950 text-white">
								ND
							</AvatarFallback>
						</Avatar>
					</div>

					{/* Main Content */}
					<div className="space-y-6 animate-slide-up">
						<div className="space-y-2">
							<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
								Natalia Bolivia Durán Oliva
							</h1>
							<h2 className="text-xl md:text-2xl font-medium text-primary">
								Software Engineer | Full Stack Developer
							</h2>
						</div>

						<div className="flex items-center justify-center space-x-2 text-primary">
							<MapPin className="w-4 h-4" />
							<span>Santa Cruz de la Sierra, Bolivia</span>
						</div>

						{/* Skills badges */}
						<div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
							{tecnologias.map((skill) => (
								<Badge
									key={skill}
									variant="secondary"
									className="cursor-pointer text-lg bg-gradient-to-r from-blue-100 to-pink-100 text-gray-700 hover:text-white hover:from-gray-900 hover:to-gray-900 transition-colors"
								>
									{skill}
								</Badge>
							))}
						</div>

						{/* Description */}
						<p className="text-lg text-primary max-w-2xl mx-auto leading-relaxed">
							Ingeniera de Sistemas con más de{" "}
							<span className="font-semibold">4 años de experiencia</span> dando soluciones tecnológicas
							con <span className="font-semibold">aplicaciones web y móviles</span> priorizando la{" "}
							<span className="font-semibold">experiencia del cliente</span> y la construcción de software
							escalable.
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
							<Button
								size="lg"
								className="cursor-pointer bg-gradient-to-r from-indigo-600 to-blue-900 hover:from-blue-600 hover:to-blue-900 text-white shadow-lg hover:shadow-xl transition-all"
								onClick={() => scrollToSection("#contact")}
							>
								<Mail className="w-4 h-4 mr-2" />
								Contáctame
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-pink-200 hover:bg-pink-50 hover:border-pink-300 transition-colors"
								asChild
							>
								<a href="/cv-natalia-duran.pdf" download>
									<Download className="w-4 h-4 mr-2" />
									Descargar CV
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Background decoration */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
			</div>
		</section>
	);
}

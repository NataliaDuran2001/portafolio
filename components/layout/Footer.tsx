"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Github, Heart, ArrowUp, Code, Coffee } from "lucide-react";

const quickLinks = [
	{ name: "Sobre mí", href: "#about" },
	{ name: "Experiencia", href: "#experience" },
	{ name: "Proyectos", href: "#projects" },
	{ name: "Habilidades", href: "#skills" },
	{ name: "Educación", href: "#education" },
	{ name: "Contacto", href: "#contact" },
];

const socialLinks = [
	{
		name: "LinkedIn",
		icon: Linkedin,
		href: "https://www.linkedin.com/in/natalia-duran-oliva/",
		color: "hover:text-blue-600",
	},
	{
		name: "GitHub",
		icon: Github,
		href: "https://github.com",
		color: "hover:text-gray-900",
	},
	{
		name: "Email",
		icon: Mail,
		href: "mailto:nataliaduran.dev@gmail.com",
		color: "hover:text-red-500",
	},
	{
		name: "Teléfono",
		icon: Phone,
		href: "tel:+59178482245",
		color: "hover:text-green-500",
	},
];

const services = [
	"Desarrollo Full Stack",
	"Arquitectura de Microservicios",
	"Consultoría Técnica",
	"Desarrollo de APIs",
	"Integración de Sistemas",
	"Mentoring Técnico",
];

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white">
			<div className="container mx-auto px-4">
				{/* Main Footer Content */}
				<div className="py-16">
					<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
						{/* Brand & Description */}
						<div className="lg:col-span-1">
							<div className="flex items-center space-x-2 mb-6">
								<div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-950 rounded-lg flex items-center justify-center">
									<span className="text-white font-bold">ND</span>
								</div>
								<span className="text-xl font-bold bg-gradient-to-r from-blue-800 to-pink-800 bg-clip-text text-transparent">
									Natalia Duran
								</span>
							</div>
							<p className="text-gray-300 mb-6 leading-relaxed">
								Full Stack Developer especializada en crear soluciones tecnológicas robustas y
								escalables que impulsan el crecimiento empresarial.
							</p>
							<div className="flex items-center gap-2 text-gray-400">
								<MapPin className="w-4 h-4" />
								<span className="text-sm">Santa Cruz de la Sierra, Bolivia</span>
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className="text-lg font-semibold mb-6 text-white">Navegación</h3>
							<ul className="space-y-3">
								{quickLinks.map((link) => (
									<li key={link.name}>
										<button
											onClick={() => scrollToSection(link.href)}
											className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
										>
											{link.name}
										</button>
									</li>
								))}
							</ul>
						</div>

						{/* Services */}
						<div>
							<h3 className="text-lg font-semibold mb-6 text-white">Servicios</h3>
							<ul className="space-y-3">
								{services.map((service) => (
									<li key={service} className="text-gray-300 text-sm flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
										{service}
									</li>
								))}
							</ul>
						</div>

						{/* Contact & Social */}
						<div>
							<h3 className="text-lg font-semibold mb-6 text-white">Conecta Conmigo</h3>

							{/* Contact Info */}
							<div className="space-y-3 mb-6">
								<a
									href="mailto:nataliaduran.dev@gmail.com"
									className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors text-sm"
								>
									<Mail className="w-4 h-4" />
									nataliaduran.dev@gmail.com
								</a>
								<a
									href="tel:+59178482245"
									className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors text-sm"
								>
									<Phone className="w-4 h-4" />
									(+591) 78482245
								</a>
							</div>

							{/* Social Links */}
							<div className="flex gap-3 mb-6">
								{socialLinks.map((social) => (
									<a
										key={social.name}
										href={social.href}
										target={
											social.name !== "Email" && social.name !== "Teléfono" ? "_blank" : undefined
										}
										rel={
											social.name !== "Email" && social.name !== "Teléfono"
												? "noopener noreferrer"
												: undefined
										}
										className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all hover:transform hover:scale-110`}
										title={social.name}
									>
										<social.icon className="w-4 h-4" />
									</a>
								))}
							</div>

							{/* CTA Button */}
							{/* <Button
								className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all"
								asChild
							>
								<a href="mailto:nataliaduran.dev@gmail.com">
									<Mail className="w-4 h-4 mr-2" />
									Hablemos
								</a>
							</Button> */}
						</div>
					</div>
				</div>

				<Separator className="bg-gray-700" />

				{/* Bottom Footer */}
				<div className="py-8">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<div className="flex items-center gap-6 text-sm text-gray-400">
							<span>© {currentYear} Natalia Duran. Todos los derechos reservados.</span>
							<div className="hidden md:flex items-center gap-2">
								<span>Hecho con</span>
								<Heart className="w-4 h-4 text-red-500 fill-current" />
								<span>y</span>
								<Coffee className="w-4 h-4 text-yellow-600" />
								<span>en Santa Cruz, Bolivia</span>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="flex items-center gap-2 text-sm text-gray-400">
								<Code className="w-4 h-4" />
								<span>Next.js • TypeScript • shadcn/ui</span>
							</div>
							<Button
								variant="ghost"
								size="sm"
								onClick={scrollToTop}
								className="text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
							>
								<ArrowUp className="w-4 h-4" />
							</Button>
						</div>
					</div>

					{/* Mobile Heart Message */}
					<div className="md:hidden flex items-center justify-center gap-2 text-sm text-gray-400 mt-4">
						<span>Hecho con</span>
						<Heart className="w-4 h-4 text-red-500 fill-current" />
						<span>y</span>
						<Coffee className="w-4 h-4 text-yellow-600" />
						<span>en Santa Cruz, Bolivia</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

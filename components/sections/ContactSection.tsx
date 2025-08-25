"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare, Clock, Globe } from "lucide-react";

const contactInfo = [
	{
		icon: Mail,
		title: "Email",
		value: "nataliaduran.dev@gmail.com",
		link: "mailto:nataliaduran.dev@gmail.com",
		gradient: "from-blue-500 to-blue-600",
	},
	{
		icon: Phone,
		title: "Teléfono",
		value: "(+591) 78482245",
		link: "tel:+59178482245",
		gradient: "from-green-500 to-green-600",
	},
	{
		icon: MapPin,
		title: "Ubicación",
		value: "Santa Cruz de la Sierra, Bolivia",
		link: "https://maps.google.com/?q=Santa+Cruz+de+la+Sierra",
		gradient: "from-red-500 to-red-600",
	},
	{
		icon: Linkedin,
		title: "LinkedIn",
		value: "/in/natalia-duran-oliva",
		link: "https://www.linkedin.com/in/natalia-duran-oliva/",
		gradient: "from-blue-600 to-blue-700",
	},
];

const availability = [
	{ type: "Proyectos Freelance", status: "Disponible", color: "bg-green-700" },
	{ type: "Consultoría Técnica", status: "Disponible", color: "bg-green-700" },
	{ type: "Mentoring", status: "Limitado", color: "bg-orange-600" },
	{ type: "Colaboraciones", status: "Abiertas", color: "bg-indigo-500" },
];

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Aquí podrías integrar con un servicio de email
		console.log("Form submitted:", formData);
		alert("¡Gracias por tu mensaje! Te contactaré pronto.");
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	return (
		<section id="contact" className="py-20">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">¡Hablemos!</h2>
						<div className="w-20 h-1 bg-gradient-to-r from-blue-800 to-pink-800 mx-auto mb-6"></div>
						<p className="text-lg text-gray-200 max-w-3xl mx-auto">
							¿Tienes un proyecto interesante? ¿Necesitas consultoría técnica? ¡Me encantaría escuchar
							sobre tu idea y cómo puedo ayudarte!
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						{/* Contact Info & Availability */}
						<div className="lg:col-span-1 space-y-6">
							{/* Contact Methods */}
							<Card className="border-0 shadow-lg">
								<CardHeader className="pb-4">
									<h3 className="text-xl font-bold flex items-center gap-2">
										<MessageSquare className="w-5 h-5 text-blue-600" />
										Información de Contacto
									</h3>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										{contactInfo.map((item, index) => (
											<a
												key={index}
												href={item.link}
												target={
													item.title === "LinkedIn" || item.title === "Ubicación"
														? "_blank"
														: undefined
												}
												rel={
													item.title === "LinkedIn" || item.title === "Ubicación"
														? "noopener noreferrer"
														: undefined
												}
												className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
											>
												<div
													className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
												>
													<item.icon className="w-5 h-5 text-white" />
												</div>
												<div>
													<p className="font-medium text-gray-400">{item.title}</p>
													<p className="text-sm">{item.value}</p>
												</div>
											</a>
										))}
									</div>
								</CardContent>
							</Card>

							{/* Availability Status */}
							<Card className="cursor-default border-0 shadow-lg">
								<CardHeader className="pb-4">
									<h3 className="text-xl font-bold flex items-center gap-2">
										<Clock className="w-5 h-5 text-pink-600" />
										Disponibilidad
									</h3>
								</CardHeader>
								<CardContent>
									<div className="space-y-3">
										{availability.map((item, index) => (
											<div key={index} className="flex items-center justify-between">
												<span className="text-gray-300">{item.type}</span>
												<Badge className={`${item.color} text-white hover:opacity-90`}>
													{item.status}
												</Badge>
											</div>
										))}
									</div>
									<div className="mt-4 p-3 bg-stone-100 rounded-lg">
										<p className=" font-semibold text-xs text-blue-800 text-center">
											<Globe className="w-4 h-4 inline mr-1" />
											Trabajo remotamente con equipos globales
										</p>
									</div>
								</CardContent>
							</Card>

							{/* Quick Actions */}
							<div className="space-y-3">
								<Button
									className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white shadow-lg hover:shadow-xl transition-all"
									asChild
								>
									<a href="mailto:nataliaduran.dev@gmail.com">
										<Mail className="w-4 h-4 mr-2" />
										Enviar Email Directo
									</a>
								</Button>
								<Button
									variant="outline"
									className="w-full border-2 border-pink-200 hover:bg-pink-50 hover:border-pink-300 transition-colors"
									asChild
								>
									<a href="/cv-natalia-duran.pdf" download>
										Descargar CV
									</a>
								</Button>
							</div>
						</div>

						{/* Contact Form */}
						<div className="lg:col-span-2">
							<Card className="border-0 shadow-xl">
								<CardHeader>
									<h3 className="text-xl font-bold">Envíame un mensaje</h3>
									<p className="text-gray-300">
										Completa el formulario y te responderé en menos de 24 horas
									</p>
								</CardHeader>
								<CardContent>
									<form onSubmit={handleSubmit} className="space-y-6">
										<div className="grid md:grid-cols-2 gap-4">
											<div>
												<label
													htmlFor="name"
													className="block text-sm font-medium text-gray-300 mb-2"
												>
													Nombre completo *
												</label>
												<input
													type="text"
													id="name"
													name="name"
													value={formData.name}
													onChange={handleInputChange}
													required
													className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-colors"
													placeholder="Tu nombre"
												/>
											</div>
											<div>
												<label
													htmlFor="email"
													className="block text-sm font-medium text-gray-300 mb-2"
												>
													Email *
												</label>
												<input
													type="email"
													id="email"
													name="email"
													value={formData.email}
													onChange={handleInputChange}
													required
													className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-colors"
													placeholder="tu@email.com"
												/>
											</div>
										</div>

										<div>
											<label
												htmlFor="subject"
												className="block text-sm font-medium text-gray-300 mb-2"
											>
												Asunto *
											</label>
											<input
												type="text"
												id="subject"
												name="subject"
												value={formData.subject}
												onChange={handleInputChange}
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-colors"
												placeholder="¿En qué puedo ayudarte?"
											/>
										</div>

										<div>
											<label
												htmlFor="message"
												className="block text-sm font-medium text-gray-300 mb-2"
											>
												Mensaje *
											</label>
											<textarea
												id="message"
												name="message"
												value={formData.message}
												onChange={handleInputChange}
												required
												rows={6}
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-colors resize-none"
												placeholder="Cuéntame sobre tu proyecto, necesidades, o cualquier pregunta que tengas..."
											></textarea>
										</div>

										<Button
											type="submit"
											size="lg"
											className="w-full bg-gradient-to-r from-indigo-600 to-blue-950 hover:from-indigo-500 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all"
										>
											<Send className="w-4 h-4 mr-2" />
											Enviar Mensaje
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>

					{/* CTA Section */}
					{/* <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl text-white">
						<h3 className="text-2xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h3>
						<p className="text-lg mb-6 opacity-90">
							Transformemos tus ideas en soluciones tecnológicas robustas y escalables
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								variant="secondary"
								className="bg-white text-gray-900 hover:bg-gray-100"
								asChild
							>
								<a href="mailto:nataliaduran.dev@gmail.com">Comenzar Conversación</a>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
								asChild
							>
								<a
									href="https://www.linkedin.com/in/natalia-duran-oliva/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Conectar en LinkedIn
								</a>
							</Button>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
}

"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { Service } from "@/lib/types";
import { useLanguage } from "@/lib/i18n/language-context";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { t, l } = useLanguage();

  return (
    <Card className="border-border bg-card hover:border-foreground/20 transition-all duration-300">
      <CardHeader>
        <h3 className="text-xl font-bold text-foreground">{l(service.title)}</h3>
        <p className="text-muted-foreground">{l(service.description)}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">{t("services.includes")}</h4>
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-foreground/50 mt-0.5 flex-shrink-0" />
                {l(feature)}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">{t("services.idealFor")}</h4>
          <p className="text-sm text-muted-foreground">{l(service.idealFor)}</p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">{t("services.delivery")}</p>
            <p className="text-sm font-medium text-foreground">{l(service.timeline)}</p>
          </div>
          <Badge variant="secondary" className="text-xs">
            {service.deliverables.length} {t("services.deliverables")}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

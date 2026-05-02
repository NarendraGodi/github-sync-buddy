import awsBadge from "@/assets/badges/aws-saa.png";
import ckaBadge from "@/assets/badges/cka.png";
import gcpBadge from "@/assets/badges/gcp-devops.png";

export interface Certification {
  name: string;
  shortName: string;
  issuer: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    name: "Professional Cloud DevOps Engineer",
    shortName: "GCP DevOps Engineer",
    issuer: "Google Cloud",
    image: gcpBadge,
  },
  {
    name: "Certified Kubernetes Administrator",
    shortName: "CKA",
    issuer: "Cloud Native Computing Foundation",
    image: ckaBadge,
  },
  {
    name: "AWS Certified Solutions Architect — Associate",
    shortName: "AWS SAA",
    issuer: "Amazon Web Services",
    image: awsBadge,
  },
];

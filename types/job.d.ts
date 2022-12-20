type Job = {
  hashId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  commitment: "full_time" | "part_time" | "internship";
  salaryValue: number;
  salaryUnit: "year" | "month" | "day" | "hour";
  description: string;
  skills: Skill[];
  company: Company
};

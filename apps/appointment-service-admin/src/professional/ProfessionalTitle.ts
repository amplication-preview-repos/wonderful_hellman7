import { Professional as TProfessional } from "../api/professional/Professional";

export const PROFESSIONAL_TITLE_FIELD = "id";

export const ProfessionalTitle = (record: TProfessional): string => {
  return record.id?.toString() || String(record.id);
};

import { useTranslation } from "react-i18next";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { handleDelete, formatDate } from "../lib/utils";

const PatientsTable = ({ patients, setPatient, deletePatient }) => {
  const { t } = useTranslation();

  return (
    <div className="px-4">
      <h2 className="font-black text-3xl text-center mb-10">
        {t("patientsTable.title")}
      </h2>

      {patients && patients.length ? (
        <Table className="mt-10">
          <TableCaption>
            {t("patientsTable.subtitle")}
            <span className="text-indigo-600 font-bold">
              {t("patientsTable.subtitleSpan")}
            </span>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold mb-3 text-gray-700 uppercase">
                {t("patient.petName")}
              </TableHead>
              <TableHead className="font-bold mb-3 text-gray-700 uppercase">
                {t("patient.owner")}
              </TableHead>
              <TableHead className="font-bold mb-3 text-gray-700 uppercase">
                {t("patient.email")}
              </TableHead>
              <TableHead className="font-bold mb-3 text-gray-700 uppercase">
                {t("patient.admissionDate")}
              </TableHead>
              <TableHead className="font-bold mb-3 text-gray-700 uppercase">
                {t("patient.dischargeDate")}
              </TableHead>
              <TableHead className="font-bold mb-3 text-gray-700 uppercase">
                {t("patient.symptoms")}
              </TableHead>
              <TableHead className="font-bold mb-3 text-gray-700 uppercase text-right">
                {t("patient.actions")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.owner}</TableCell>
                <TableCell>{patient.email}</TableCell>
                <TableCell>{formatDate(patient.dateAdmission)}</TableCell>
                <TableCell>{formatDate(patient.dateDischarge)}</TableCell>
                <TableCell>{patient.symptoms}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setPatient(patient)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {t("patient.edit")}
                    </button>
                    <button
                      onClick={() => handleDelete(t, deletePatient, patient.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      {t("patient.delete")}
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center">
          <h2 className="font-black text-3xl text-center">
            {t("patientsList.noPatients")}
          </h2>
          <p className="text-xl mt-5 text-center mb-10">
            {t("patientsList.addPatient")}
            <span className="text-indigo-600 font-bold">
              {t("patientsList.addPatientSpan")}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PatientsTable;

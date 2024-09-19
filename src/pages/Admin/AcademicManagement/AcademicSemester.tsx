import { useGetAllSemestersQuery } from "../../../redux/fetures/academicSemister/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);

  return <div></div>;
};

export default AcademicSemester;

import { AxiosError } from "axios";

interface IErrorResponse {
  error: string;
}

// If axios get the 404 response,
// then it will return 404 page with 'notFound' option in getServerSideProps.
const isNotFoundCode = (error: unknown) => {
  return (
    (error as AxiosError<IErrorResponse>).response &&
    (error as AxiosError<IErrorResponse>).response!.status === 404
  );
};

export default isNotFoundCode;

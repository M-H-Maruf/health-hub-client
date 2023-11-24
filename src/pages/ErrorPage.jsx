import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>Health Hub | Error</title>
      </Helmet>
      This is Error Page.
    </div>
  );
};

export default ErrorPage;

import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Oooopss...</h1>
      <h2>Page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/" className="links">
          Homepage
        </Link>
      </p>
    </div>
  );
};

export default NotFound;

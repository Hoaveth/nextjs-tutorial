import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className="not-found">
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

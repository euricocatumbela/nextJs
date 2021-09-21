import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <h1>ooops... page cannot be found</h1>
    </div>
  );
};

export default NotFound;

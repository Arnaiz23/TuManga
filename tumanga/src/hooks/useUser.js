import { useContext, useEffect, useState } from "react";

import { getUser } from "@/services/Users";
import OrderContext from "@/context/OrderContext";

export default function useUser() {
  const [loading, setLoading] = useState(false);
  // const [userData, setUserData] = useState({})
  const { setUserData } = useContext(OrderContext);

  useEffect(() => {
    setLoading(true);

    getUser().then((data) => {
      if (data.message) {
        // setLocation("/login")
      } else {
        setUserData(data.userInfo);
        setLoading(false);
      }
    });
  }, [setUserData]);

  return { loading, setUserData };
}

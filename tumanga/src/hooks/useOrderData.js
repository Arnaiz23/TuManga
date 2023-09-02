import { useContext, useEffect } from "react";

import OrderContext from "@/context/OrderContext";
import { getOrderProccess } from "@/services/Orders";

export default function useOrderData() {
  const {
    order,
    setOrder,
    count,
    setCount,
    setUser,
    setOrderProcess,
    orderProcess,
  } = useContext(OrderContext);
  // const [orderProcess, setOrderProcess] = useState(false)

  useEffect(() => {
    getOrderProccess().then((data) => {
      if (
        data.message === "Did not work" ||
        data.message === "This user doesn't exists"
      ) {
        setUser(false);
        return;
      }
      if (data.message === "This user doesn't have orders in proccess") {
        setCount(0);
        setOrder([]);
        return;
      }
      if (data.orders) {
        setOrderProcess(true);
        setOrder(data.orders);
      }
      setCount(data.orders.products.length);
    });
  }, [setOrder]);

  return {
    order,
    setOrder,
    count,
    setCount,
    orderProcess,
    setOrderProcess,
    setUser,
  };
}

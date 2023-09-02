import { faBox, faMoneyBill, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { getStatistics } from "@/services/Admin";
import AdminContext from "@/context/AdminContext";
import Statistics from "@components/platform/Statistics/Statictics";

export default function PlatformMain() {
  const { userData } = useContext(AdminContext);

  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    getStatistics().then((data) => {
      setTotalEarnings(data.totalEarnings);
      setTotalUsers(data.totalUsers);
      setTotalOrders(data.totalOrders);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="adminMain">
      <div className="containerStatistics">
        <h2>Estadísticas</h2>
        <div className="containerOptions">
          {loading ? (
            <h3>Cargando...</h3>
          ) : (
            <>
              <div className="rowOptionAdmin">
                <span>
                  <i>
                    <FontAwesomeIcon icon={faBox} />
                  </i>
                </span>
                <div>
                  <h4>Total pedidos</h4>
                  <p className="adminOrdersSpan">{totalOrders}</p>
                </div>
              </div>
              <div className="rowOptionAdmin">
                <span>
                  <i>
                    <FontAwesomeIcon icon={faUser} />
                  </i>
                </span>
                <div>
                  <h4>Total usuarios</h4>
                  <p className="adminUsersSpan">{totalUsers}</p>
                </div>
              </div>
              {(userData.roleName === "admin" ||
                userData.roleName === "owner") && (
                <div className="rowOptionAdmin">
                  <span className="spanGreen">
                    <i>
                      <FontAwesomeIcon icon={faMoneyBill} />
                    </i>
                  </span>
                  <div>
                    <h4>Ganancias</h4>
                    <p className="earnings">{totalEarnings}€</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="containerStatisticsProducts">
        <h2>Productos</h2>
        <section>
          <Statistics />
        </section>
      </div>
    </main>
  );
}

import React, { useEffect, useState } from "react";

import PlatformHeader from "@/components/platform/PlatformHeader.jsx";
import PlatformNav from "@/components/platform/PlatformNav.jsx";
import PlatformNavResponsive from "@/components/platform/PlatformNavResponsive.jsx";
import PlatformTableComments from "@/components/platform/PlatformTableComments.jsx";
import PlatformTableResponsiveComments from "@/components/platform/PlatformTableResponsiveComments.jsx";
import BtnUp from "@/components/publicFolder/BTN-UP/BTN-UP.jsx";
import Spinner from "@/components/publicFolder/Spinner/Spinner.jsx";
import { getAllComments } from "@/services/Admin.js";

const TITLES_TABLE = [
  "id",
  "Fecha",
  "Titulo",
  "Mensaje",
  "Producto",
  "usuario",
  "Puntuacion",
  "Eliminar",
];
const TITLES_TABLE_RESPONSIVE = ["id", "Producto", "Ver", "Eliminar"];

export default function PlatformComments() {
  const [comments, setComments] = useState([]);
  const [commentsEmpty, setCommentsEmpty] = useState(false);
  const [arrayEmails, setArrayEmails] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchComments = () => {
    setLoading(true);
    getAllComments().then((data) => {
      if (data.message) {
        setCommentsEmpty(true);
        setLoading(false);
      }

      setComments(data.comments);
      setArrayEmails(data.newArray);
      setCommentsEmpty(false);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="gridAdmin">
      <PlatformHeader />
      <PlatformNav />
      <PlatformNavResponsive />
      <main className="adminMain">
        <div className="containerDataAdmin">
          <div className="rowAdminTitle">
            <h2>Comentarios</h2>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <PlatformTableComments
                titles={TITLES_TABLE}
                data={comments}
                dataEmpty={commentsEmpty}
                setData={setComments}
                setDataEmpty={setCommentsEmpty}
                arrayEmails={arrayEmails}
              />
              <PlatformTableResponsiveComments
                titles={TITLES_TABLE_RESPONSIVE}
                data={comments}
                dataEmpty={commentsEmpty}
                setData={setComments}
                setDataEmpty={setCommentsEmpty}
                arrayEmails={arrayEmails}
              />
            </>
          )}
        </div>
      </main>
      <BtnUp />
    </div>
  );
}

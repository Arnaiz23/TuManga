import React, { useEffect, useState } from "react"

import useUser from "@/hooks/useUser"
import { getUserComments } from "@/services/Comments"
import CommentAccountRow from "@components/publicFolder/CommentAccountRow/CommentAccountRow"
import Spinner from "@components/publicFolder/Spinner/Spinner"

export default function ListOfCommentsAccount() {
  const [comments, setComments] = useState([])
  const [commentsEmpty, setCommentsEmpty] = useState(false)
  const { loading } = useUser()
  const error = useState("No tienes comentarios")[0]

  useEffect(() => {
    getUserComments().then((data) => {
      if (data.message) {
        setCommentsEmpty(true)
        return
      }

      setComments(data.comments)
    })
  }, [])

  return (
    <div className="containerCommentsFlex">
      {loading ? (
        <Spinner />
      ) : commentsEmpty ? (
        <h3 className="userDataEmpty">{error}</h3>
      ) : (
        comments.map((comment) => (
          <CommentAccountRow
            key={comment._id}
            data={comment}
            change={setComments}
            empty={setCommentsEmpty}
          />
        ))
      )}
    </div>
  )
}

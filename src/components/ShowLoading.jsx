const ShowLoading = ({message}) => {
  return (
    <div className="body__showloading">
        <ion-icon name="sync-outline"></ion-icon>
        <span>{message}</span>
    </div>
  )
}

export default ShowLoading
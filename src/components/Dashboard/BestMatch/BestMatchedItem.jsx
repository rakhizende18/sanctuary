function BestMatchedItem({pet,adopterId, handleAccept}){
    const {id: petId, name, type, score} = pet

    return(
        <div className="petSection">
                <div className="item">{name}</div>
                <div className="item">{type}</div>
                <div className="item">{score}</div>
                <div className="item">
                  <button onClick={() => handleAccept(adopterId, petId)}>
                    Accept
                  </button>
                </div>
              </div>
    )
}

export default BestMatchedItem
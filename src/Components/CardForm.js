import React, {useState} from "react";

function CardForm({ handleSubmit, handleChange, handleCancel, handleDone, title, card}) {

  return (
    <div>
        <form onSubmit={handleSubmit}>
                <h2>{ title }</h2>
                
                <div className="form-group">
                    <label>Front</label>
                    <textarea
                        id="front"
                        name="front"
                        className="form-control"
                        onChange={handleChange}
                        value={card?.front}
                    />
                </div>
                <div className="form-group">
                    <label>Back</label>
                    <textarea
                        id="back"
                        name="back"
                        className="form-control"
                        onChange={handleChange}
                        value={card.back}
                        type="text"
                    />
                </div>
                <button
                    className="btn btn-secondary mx-1"
                    onClick={() => handleCancel()}
                >
                    Cancel
                </button>
                <button className="btn btn-primary mx-1" type="submit">
                    Save
                </button>
        </form>
    </div>
  )
}

export default CardForm;
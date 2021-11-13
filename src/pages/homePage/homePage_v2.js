import React, { useEffect, useState } from "react"

// lib
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import actions from "./actions"

const HomePage = () => {
  const [value, setValue] = useState("")
  const isloading = useSelector(state => state.home.isloading)
  const omdb = useSelector(state => state.home.omdb)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!omdb.length){
      dispatch(actions.fetchOMDB())
    }
  }, [])

  const handleInput = (event) => {
    setValue(event.target.value)
  }

  const handleClick = () => {
    if(!isloading){
      if(!value.length){
        alert("Please enter a value to search..")
      }else{
        dispatch(actions.fetchOMDB(value))
      }
    }
  }

  const renderOMDB = () => {
    if(isloading){
      return <p style={styles.loading}>Loading..</p>
    } else if(!omdb.length){
      return <p style={styles.noResult}>No result..</p>
    } else {
      return omdb.map((item) => (
        <div 
          style={styles.card}
          key={item.imdbID}>
          <img 
            style={styles.cardPoster}
            src={item.Poster}
          />
          <div style={{padding: 12}}>
            <p style={
              styles.cardHeader
            }>{item.Title}</p>
            <div style={styles.bottomContainer}>
              <div style={styles.bottomWrapper}>
                <p style={styles.cardDesc1}>Type: {item.Type}</p>
                <p style={styles.cardDesc2}>Year: {item.Year}</p>
              </div>
              <div style={styles.viewContainer}>
                <Link to={`/omdb/${item.imdbID}`}>
                  <p 
                    style={styles.view}
                  >View</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))
    }
  }

  return (
    <div style={styles.mainContainer}>
      <div style={styles.mainWrapper}>
        <div>
          <input 
            type="text"
            value={value}
            onChange={(e) => handleInput(e)}
          />
          <button 
            type="button"
            onClick={() => handleClick()}
          >search</button>
        </div>
        <div>{renderOMDB()}</div>
      </div>
    </div>
  );
}

const styles = {
  loading: {
    marginTop: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  noResult: {
    marginTop: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 30,
  },
  mainWrapper: {

  },
  card: {
    marginTop: 12,
    width: 300,
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.29)',
    overflow: 'hidden'
  },
  cardPoster: {
    width: 300,
    height: 240,
  },
  cardHeader: {
    marginBottom: 6,
    fontSize: 15,
    fontWeight: 'bold',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  bottomWrapper: {
    flex: 1,
  },
  cardDesc1: {
    fontSize: 12,
    marginBottom: 6,
  },
  cardDesc2: {
    fontSize: 12,
  },
  viewContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  view: {
    fontSize: 12,
    textDecoration: 'underline',
    cursor: 'pointer',
  }
}

export default HomePage

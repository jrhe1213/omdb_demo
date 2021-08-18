import React, { useEffect } from "react"

// lib
import { Link, useParams } from "react-router-dom"
import { connect } from "react-redux"
import actions from "./actions"

const DetailPage = ({
  isloading,
  omdb,
  omdbDetailRequest,
}) => {
  const { id } = useParams()
  useEffect(() => {
    if(id){
      omdbDetailRequest(id)
    }
  }, [])

  const renderOMDB = () => {
    if(isloading){
      return <p style={styles.loading}>Loading..</p>
    } else if (!omdb.imdbID){
      return <p style={styles.noResult}>No result..</p>
    } else {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          <div style={{
            flex: 1
          }}>
            <img 
              style={styles.poster}
              src={omdb.Poster}
            />
          </div>
          <div style={{
            flex: 2,
            paddingLeft: 12
          }}>
            <p 
              style={styles.title}
            >{omdb.Title}</p>
            <p 
              style={styles.desc}
            ><b>Year: </b>{omdb.Year}</p>
            <p 
              style={styles.desc}
            ><b>Type: </b>{omdb.Type || 'N/A'}</p>
            <p 
              style={styles.desc}
            ><b>Released: </b>{omdb.Released || 'N/A'}</p>
            <p 
              style={styles.desc}
            ><b>Genre: </b>{omdb.Genre || 'N/A'}</p>
            <p 
              style={styles.desc}
            ><b>Ratings:</b></p>
            {!omdb.Ratings.length && <p style={styles.desc}>N/A</p>}
            {omdb.Ratings.length && omdb.Ratings.map((item, key) => (
              <div key={key}>
                <p style={styles.desc}>{item.Value} - {item.Source}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      {!id && <p>invalid</p>}
      <Link to="/">
        <p 
          style={styles.back}
        >Back</p>
      </Link>
      <div style={styles.mainContainer}>{renderOMDB()}</div>
    </div>
  );
}

const styles = {
  back: {
    fontSize: 15,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
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
  poster: {
    width: 300
  },
  title: {
    marginBottom: 6,
    fontSize: 18,
    fontWeight: 'bold',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  desc: {
    fontSize: 12,
    marginBottom: 6,
  }
}
  
const mapStateToProps = (state) => ({
  isloading: state.detail.isloading,
  omdb: state.detail.omdb,
})

const mapDispathToProps = (dispatch) => ({
  omdbDetailRequest: (input) => { dispatch(actions.fetchOMDBDetail(input)) }
})

export default connect(mapStateToProps, mapDispathToProps)(DetailPage)